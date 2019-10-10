const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");

// settings
app.set('port', process.env.PORT || 4000);
app.use(cors());

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// routes
app.use(require('./routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});







// const jwt = require('jsonwebtoken');

// app.get('/', (req, res) => {
//     res.json({
//         text: 'API works!'
//     });
// });

// app.post('/api/login', (req,res) => {
//     const user = {id: 3}
//     const token = jwt.sign({user}, 'key')
//     res.json({token})
// });

// app.get('/api/protected', ensureToken,(req,res) => {
//     jwt.verify(req.token, 'key', (err, data) => {
//         if(err) {
//             res.sendStatus(403)
//         }else {
//             res.json({
//                 text: 'protected',
//                 data
//             })
//         }
//     })
// })

// //midleware
// function ensureToken(req, res, next){
//     const bearerHeader = req.headers['authorization']
//     console.log(bearerHeader)
//     if( typeof bearerHeader !== 'undefined' ){
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     }else{
//         res.sendStatus(403);
//     }
// }

// app.listen(3001, () => {
//     console.log('Server on port 3001');
// });