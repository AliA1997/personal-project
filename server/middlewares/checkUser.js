module.exports = function(req, res, next) {
    if(!req.session.user) res.json({message: 'Must be logged in!'}).end();
    next();
}