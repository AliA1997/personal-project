module.exports = function(req, res, next) {
    if(!req.session.user) {
        res.status(404).json({message: 'Must be logged in order to create a car!'});
    }
    next();
}