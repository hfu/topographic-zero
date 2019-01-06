const config = require('config')
const spritezero = require('@mapbox/spritezero')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const svgs = glob.sync(config.get('src'))
  .map(p => {
console.log(p)
    return {
      svg: fs.readFileSync(p),
      id: path.basename(p).replace('.svg', '')
    }
  })

spritezero.generateLayout(
  {
    imgs: svgs,
    pixelRatio: config.get('ratio'),
    format: true
  },
  (err, dataLayout) => {
    if (err) throw err
    fs.writeFileSync('sprite.json', JSON.stringify(dataLayout))
  }
)

spritezero.generateLayout(
  {
    imgs: svgs,
    pixelRatio: config.get('ratio'),
    format: false
  },
  (err, imageLayout) => {
    if (err) throw err
    spritezero.generateImage(imageLayout, (err, image) => {
      if (err) throw err
      fs.writeFileSync('sprite.png', image)
    })
  }
)
