

module.exports = {
    calculator: (req, res) => {
        res.render('calcutor', { pageTitle: 'Calculator', isloggedIn:true}); // Fixed typo in view name
    },

    currency: (req, res) => {
        res.render('currency', { pageTitle: 'currency', isloggedIn:true }); // Fixed typo in view name
    },

    todo: (req, res) => {
        res.render('todo', { pageTitle: 'todo', isloggedIn:true }); // Fixed typo in view name
    },
    map:async (req, res,next) => {
        res.render('map', { pageTitle: 'Map', isloggedIn:true }); // Fixed typo in view name
        next()// Fixed pageTitle
    },

   
    
};