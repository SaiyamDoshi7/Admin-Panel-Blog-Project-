const express = require('express');
const route = express.Router();
const auth = require("../middleware/auth");

const amdinCtl = require('../controller/adminController');
const Admin = require('../models/adminModel');

const upload = Admin.uploadImage;

const checkAuth = (req, res, next) => {
    try {
        if (!req.cookies.userData) {
            return res.redirect('/login');
        }

        next();
    } catch (err) {
        console.log(err);
        return res.redirect('/login');
    }
};

route.get('/signup', amdinCtl.signupPage);
route.post('/register', amdinCtl.registerPage);

route.get('/login', amdinCtl.loginPage);
route.post('/loginUser', amdinCtl.loginUser);

route.get('/', auth, amdinCtl.dashboardPage);

route.get('/add-admin', auth, amdinCtl.addAdminPage);
route.post('/add-admin', auth, upload, amdinCtl.insertAdmin);

route.get('/view-admin', auth, amdinCtl.viewAdminPage);

route.get('/edit-admin/:id', auth, amdinCtl.editAdminPage);
route.post('/update-admin/:id', auth, upload, amdinCtl.updateAdmin);

route.get('/delete-admin/:id', auth, amdinCtl.deleteAdmin);

route.get('/logout', auth, amdinCtl.logout);

module.exports = route;