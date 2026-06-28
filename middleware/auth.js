const Admin = require("../models/adminModel");

const auth = async (req, res, next) => {

    if (!req.cookies.userData) {
        return res.redirect("/login");
    }

    const admin = await Admin.findById(req.cookies.userData);

    if (!admin) {
        res.clearCookie("userData");
        return res.redirect("/login");
    }

    req.admin = admin;

    next();
}

module.exports = auth;