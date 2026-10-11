
// const contact = require('../models/contact'); // Assuming you have a contact model defined in models/contact.js


module.exports = {

    home: (req, res) => {
        res.render('home', { pageTitle: 'home' });

    },

    profile: (req, res) => {
  const user = {
    name: "Shoriful Islam",
    age: 28,
    location: "Bangkal, Satkhira, Khulna, Bangladesh",
    jobTitle: "Full-Stack Developer",
    education: [ // ✅ This array must exist
      { level: "Degree", institute: "Day Night College", result: "A+" },
      { level: "HSC", institute: "Satkhira Govt. College", result: "3.69" },
      { level: "SSC", institute: "Bangkal High School", result: "3.00" }
    ],
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"]
  };
  res.render('profile', { user });

    },

    about: (req, res) => {
        res.render('about', { pageTitle: 'about', isloggedIn: true });
    },

    contact: (req, res) => {
            res.render('contact', { pageTitle: 'contact',isloggedIn: true });
    
    },
    contactapi:async(req, res) => {
        try {
            const { username, email, message } = req.body;
            // Check if the user already exists
         // If user doesn't exist, create a new user
            const contactdata = new contact.createmodel({
                username: username.res.body,
                email: email.req.body,
                message: message.req.body
            });
    
            await contactdata.save();
            console.log('Data saved successfully');
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).send('Error saving data');
        }
       
    
    },

    project: (req, res) => {
        res.render('project', { pageTitle: 'project', isloggedIn: true });

    }



   
    
};