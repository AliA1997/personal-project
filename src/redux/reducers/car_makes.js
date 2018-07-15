const NHTSA = require('nhtsa');

export default NHTSA.getAllMakes().then(res => {
    return res.data.Results;
});

