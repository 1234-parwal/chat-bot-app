const jwt = require('jsonwebtoken')

const jwtToken = (req, res, next) => {
  const payload = {
    name: 'Sejal',
  }
  const secret = 'LJ4TffbdkHghf17PKCl5rWae72x2jSp8'
  const options = {
    expiresIn: '10h',
  }
  const token = jwt.sign(payload, secret, options)
  req.token = token
  next()
}
module.exports = {
  jwtToken,
}
