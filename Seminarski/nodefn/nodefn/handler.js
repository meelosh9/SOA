'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {
  let body =   JSON.stringify(event.body)
  const result = {
        'body': body.substring(2,body.length -2),    
  }

  return context
    .status(200)
    .succeed(result)
}
