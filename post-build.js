const fs = require('fs')

console.log('copying _redirects to new publish directory')

fs.copyFile('_redirects', './.next/_redirects', err => {
  if (err) throw err
  console.log('_redirects was copied to ./next/_redirects')
})
