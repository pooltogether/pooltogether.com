const fs = require('fs')

console.log('copying Contract list JSON schema to public/')

fs.copyFile(
  './node_modules/@pooltogether/contract-list-schema/src/contract-list.schema.json',
  'public/contract-list.schema.json',
  (err) => {
    if (err) throw err
    console.log('Contract list JSON schema was copied to public/')
  }
)
