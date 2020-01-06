
function checkRole(role) {
    return function (req, res, next) {
        if (req.token && role === req.token.department) {
            next()
        } else {
            res.status(403)
                .json({ message: 'Not authorized, you must be an instructor'})
        }
    };
};

module.exports = checkRole;