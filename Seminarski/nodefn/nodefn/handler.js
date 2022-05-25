'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {
  let body = event.body.input
  const result = {
        'body': body,
        'hash':SHA256(JSON.stringify(body)).toString()
  }

  return context
    .status(200)
    .succeed(result)
}
