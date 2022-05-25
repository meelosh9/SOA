'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {

  let input = event.body.input
  const result = {
        'hash':SHA256(input).toString(),
        
  }

  return context
    .status(200)
    .succeed(result)
}
