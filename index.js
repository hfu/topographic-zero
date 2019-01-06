const config = require('config')
const spritezero = require('@mapbox/spritezero')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const svgs = glob.sync(config.get('src'))
  .map(p => {
    return {
      svg: fs.readFileSync(p),
      id: path.basename(p).replace('.svg', '')
    }
  })

const postfix = m => {
  switch (m) {
    case 1:
      return ''
    default:
      return `@${m}x`
 }
}

for (const m of [1, 2, 3]) {
  spritezero.generateLayout(
    {
      imgs: svgs,
      pixelRatio: config.get('ratio') * m,
      format: true
    },
    (err, dataLayout) => {
      if (err) throw err
      fs.writeFileSync(
        `sprite${postfix(m)}.json`, 
        JSON.stringify(dataLayout)
      )
    }
  )

  spritezero.generateLayout(
    {
      imgs: svgs,
      pixelRatio: config.get('ratio') * m,
      format: false
    },
    (err, imageLayout) => {
      if (err) throw err
      spritezero.generateImage(imageLayout, (err, image) => {
        if (err) throw err
        fs.writeFileSync(`sprite${postfix(m)}.png`, image)
      })
    }
  )
}

