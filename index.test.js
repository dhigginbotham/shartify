const fs        = require('fs')
const os        = require('os')
const log       = require('debug')('shartify:test:')
const test      = require('tape')
const Shartify  = require('./lib')
const chartData = {
  'name': 'example-donut-chart',
  'data': [
    { 'value': 300, 'color':'#F7464A', 'highlight': '#FF5A5E', 'label': 'Red' },
    { 'value': 50, 'color': '#46BFBD', 'highlight': '#5AD3D1', 'label': 'Green' },
    { 'value': 100, 'color': '#FDB45C', 'highlight': '#FFC870', 'label': 'Yellow' },
    { 'value': 40, 'color': '#949FB1', 'highlight': '#A8B3C5', 'label': 'Grey' },
    { 'value': 120, 'color': '#4D5360', 'highlight': '#616774', 'label': 'Dark Grey' },
  ],
  'settings': { 'scaleShowValues': true, 'scaleFontSize': 24 }
}

const getTempPath = () => `${os.tmpdir()}/${parseInt(Math.random() * 1000000)}`
test('charts can haz donut?', 3, t => {
  const pngPath = `${getTempPath()}.png`
  const stream = fs.createWriteStream(pngPath)
  const opts = Object.assign({stream}, chartData)
  const results = Shartify.donut(opts)
  const completed = () => {
    const {size, ctime} = fs.statSync(pngPath)
    t.ok(results, 'has return obj')
    t.ok(size > 200, 'has realistic size')
    t.ok(ctime, 'has a creation timestamp')
    t.end()
  }
  console.warn('\n\n####\nresults', results, '\n\n##### ^^^ ****')
  stream.on('end', completed)
  stream.on('done', completed)
  // t.ok()
  // t.end()
})
