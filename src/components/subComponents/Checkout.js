import React from 'react';
import axios from 'axios';
//This will implement the checkout
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../logo.png';

//Callback converting the amount to usd.
const usdToCent = amount => amount * 100;

//NOTE TRY THIS CALLBACK FIRST
const successPayment = data => {
    alert('Payment Successful!!');
}

//Callback if unsuccessful
const errorPayment = data => {
    console.log('Stripe Error-------------', data);
    alert('Payment Error');
}

const onToken = (amount, description, register) => token => {
    //Post to the url you set in you server file.
    axios.post('/api/payment', {
        description,
        source: token.id,
        currency: 'USD',
        amount: usdToCent(amount)
        //Once you get the hang of it add a register callback via parameter in function.
    }).then(() => {
        // // console.log('register---------------', register);
        register();
    }).catch(err => {
        console.log('Payment Error------------', err);
        errorPayment
    });
    console.log('Fucking token-----', token);
}

//The register method is a prop. 
//It is destructured in the component..
const Checkout = ({name, email, description, amount, register, username, address}) => {
    //token is a required, becuase it is used to checkout or authorize the checkout on stripe's end.
    return  (
        <StripeCheckout
            alipay={true}
            image={logo}
            name={name}
            email={email}
            description={description}
            amount={usdToCent(amount)}
            token={onToken(amount, description, register)}
            currency='USD'
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
            panelLabel='Join the Club!'
        />
    )
}

export default Checkout;  