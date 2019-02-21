const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev--5ye-d69.auth0.com/.well-known/jwks.json'
  }),
  audience: 'dFk5Amzw51Avu7VX3i0IZIXXJ9xCDhCd',
  issuer: 'https://dev--5ye-d69.auth0.com/',
  algorithms: ['RS256']
})




exports.checkRole = role => (req, res, next) => {
  const user = req.user;
  //next();

  if (user && user[NAMESPACE + '/role'] && (user[NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data!'})
  }
}



