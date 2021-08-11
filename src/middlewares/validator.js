'use strict';

module.exports = (req, res, next)=> {
    let name=req.query.name;
    if (typeof name == 'string') {
        next();
    } else {
        next(`this name ${name} is not a string`);
    }
}