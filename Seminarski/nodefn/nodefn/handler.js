'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {
  let body =   JSON.stringify(event.body)
  const result = {
        'Before hashing': body,
        'After hashing': SHA256(body)   
  }

  return context
    .status(200)
    .succeed(result)
}
