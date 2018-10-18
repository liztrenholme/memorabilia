/**
*Module dependencies
*/
var
  express = require('express'),
  passport = require('../config/passport'),
  utilities = require('../models/utilities');
//==============================================================================
/**
*Create router instance
*/
var router = express.Router();
//==============================================================================
/**
*Module Variables
*/
//needed to protect the '/admin' route
// function isLoggedIn(req, res, next) {
//   if(req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect('/login');
// }

// var
//   errHandler = utilities.errHandler,
//   validationErr = utilities.validationErr,
//   cr8NewUser = utilities.cr8NewUser,
//   findUser = utilities.findUser,
//   viewAllUsers = utilities.viewAllUsers,
//   updateUser = utilities.updateUser,
//   deleteUser = utilities.deleteUser;
// //==============================================================================
// /**
// *Middleware
// */
// router.use(passport.initialize());
// router.use(passport.session());
// //==============================================================================
// /**
// *Routes
// */
// //---------------------------Test route-----------------------------------------
// router.get('/test', function (req, res) {
//   return res.send('<marquee><h1>Welcome to the test page</h1></marquee>');
// });
// //---------------------------App routes-----------------------------------------
// router.get('/', function (req, res) {
//   return res.json('pages/index');
// });

// router.route('/login')
//   .get(function (req, res) {
//     return res.json('/login');
//   })
//   .post(function(req, res, next) {
//     passport.authenticate('local-login', function(err, user, info) {
//       if (err) {
//         return next(err); // will generate a 500 error
//       }
//       if (!user) {
//         return res.status(409).json('/login', {errMsg: info.errMsg});
//       }
//       req.login(user, function(err){
//         if(err){
//           console.error(err);
//           return next(err);
//         }
//         return res.redirect('/admin');
//       });
//     })(req, res, next);
//   });

// router.route('/register')
//   .get(function (req, res) {
//     return res.render('/register');
//   })
//   .post(function(req, res, next) {
//     passport.authenticate('local-signup', function(err, user, info) {
//       if (err) {
//         return next(err); // will generate a 500 error
//       }
//       if (!user) {
//         return res.status(409).render('/register', {errMsg: info.errMsg});
//       }
//       req.login(user, function(err){
//         if(err){
//           console.error(err);
//           return next(err);
//         }
//         return res.redirect('/admin');
//       });
//     })(req, res, next);
//   });

// router.get('/admin', isLoggedIn, function (req, res) {
//   return res.render('/admin', {
//     username: req.user.username,
//     email: req.user.email
//     });
// });

// router.get('/logout', function (req, res) {
//   req.logout();
//   req.session.destroy();
//   return res.redirect('/');
// });
// //---------------------------API routes-----------------------------------------
// router.get('/api/users', function (req, res) {
//   return viewAllUsers(req, res);
// });

// router.route('/api/users/:email')
//   .get(function (req, res) {
//     return findUser(req, res);
//   })
//   .put(function (req, res) {
//     return update(req, res);
//   })
//   .delete(function (req, res) {
//     return deleteUser(req, res);
//   });
// //==============================================================================
// /**
// *Export Module
// */
// module.exports = router;
//==============================================================================


// experiment

router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

module.exports = router;