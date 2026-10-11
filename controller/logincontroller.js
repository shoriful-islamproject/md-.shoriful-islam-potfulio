// Corrected the path
const express = require('express');
const path = require('path');
const user=require('../model/usemodel')
const mongoose = require('mongoose');
const { error } = require('console');

// MongoDB connection setup


module.exports = {
  pageget: (req, res) => {
    res.render('app', { pageTitle: 'userpage' });
  },

  loginget: (req, res, next) => {
    res.render('login', { pageTitle: 'login' });

  
  
  },

  loginpost: (req, res,next) => {
    res.render('home', { pageTitle: 'login' });

  },

  registerget: (req, res) => {
    res.render('register', { pageTitle: 'register' });
  },

  registerpost: async (req, res,next) => {
      const { username, email, password, confirmPassword, phoneNumber } = req.body;
    
      // Save user to database
      const newUser=new user({
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber
      });
      await newUser.save();
        res.render('home', { pageTitle: 'registerapi' }); 
  }
 
}     
      

    
   
    
 







