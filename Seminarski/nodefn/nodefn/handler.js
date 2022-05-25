'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {
  const result = {
        'body': JSON.stringify(event.body) + SHA256(JSON.stringify(event.body)),
    
  }

  return context
    .status(200)
    .succeed(result)
}
