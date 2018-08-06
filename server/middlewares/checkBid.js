module.exports = function(req,res, next) {
    //Destruct the bid, price, and currentBid from the request body.
    const { bid, price, currentBids } = req.body;
    //Then filter out the falsey values from the bid by just retturning a truthy value. 
    const filteredFalseyBids = currentBids.filter(bid => bid);
    //
    // console.log(filteredFalseyBids);
    // console.log('bid-----------', bid);
    //If the currentBids is an array, and the first element of the array bid is greater than first bid or price.
    if(currentBids.length && filteredFalseyBids[0].bid > +bid || +bid < +price) {
        //if it is send a message nad end response
        res.json({message: 'Bid is to low!'}).end();   
    } 
    // else go to next function. 
    next();
}