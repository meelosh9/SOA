'use strict'
const SHA256  = require("crypto-js/sha256");
module.exports = async (event, context) => {

  let input = event.body.input
  const result = {
        'hash':SHA256(JSON.stringify(input)).toString(),
        'in':input
  }

  return context
    .status(200)
    .succeed(result)
}
