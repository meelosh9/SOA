'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {

  let input = JSON.stringify(event.body.input)
  const result = {
        'hash':SHA256(input).toString(),
        'in':input
  }

  return context
    .status(200)
    .succeed(result)
}
