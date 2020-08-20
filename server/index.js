const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller/getMysteries.js');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');

require('dotenv').config();


const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    }).catch(function(err) {
        console.log('error: ', err);
    });;
//authentication bb
// app.use(passport.initialize() );
// app.use(passport.session() );

// passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTHCLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK_URL,
//     scope: 'openid profile'
// }, function(accessToken, refreshToken, extraParams, profile, done) {
//     let { user_id } = profile;
    
//     app.get()
// }))

// passport.serializeUser((id, done) => {
//     return done(null, id);
// })
// passport.deserializeUser((id, done) =>{
//     app.get()
// })


// app.get('/auth', passport.authenticate('auth0'));







app.get('/api/mysteries', controller.mysteries)


const port = process.env.SERVER_PORT || 7331
 
app.listen( port, () => {
    console.log(`listening on port ${port}`);
})