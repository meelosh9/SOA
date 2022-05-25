'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {
  let body =   JSON.stringify(event.body)
  let hash = await SHA256(body) 
  const result = {
        'Before hashing': body,
        'After hashing': hash
  }

  return context
    .status(200)
    .succeed(result)
}
