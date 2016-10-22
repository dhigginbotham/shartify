const Canvas = require('canvas');
const Chart = require('nchart');
const _ = require('lodash');
const log = require('debug')('shartify:lib:');

function callback(start, fn, hostname, name, err) {
  if (err) return fn(err, null);
  const time = (Date.now() - start);
  log('image:generated:in:%dms', time);
  return fn(null, {
    src: `${hostname ? `https://${hostname}` : ''}/img/${name}.png`,
    time: `${time}ms`
  });
}

function processor({ key, func, opts }) {
  const out = {};
  out[key] = function({ stream = null, data = null, name = null, settings = {}, size = [300, 300], hostname = '' }, fn) {
    if (!data) return fn(new Error('please provide data'), null);
    if (!stream) return fn(new Error('you must provide a writable stream'), null);
    const canvas = new Canvas(size[0], size[1]);
    const ctx = canvas.getContext('2d');
    const cb = callback.bind(null, Date.now(), fn, hostname, name);
    new Chart(ctx)[func](data, _.extend({}, opts, settings));
    const png = canvas.pngStream();
    png.on('error', (err) => cb(new Error(err), null));
    png.on('end', () => cb(null, true));
    return png.pipe(stream);
  };
  return out;
}

const charts = [
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/05-Pie-Doughnut-Chart.md
    key: 'donut',
    func: 'Doughnut',
    opts: { scaleShowValues: true, scaleFontSize: 24 },
  },
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/02-Bar-Chart.md
    key: 'bar',
    func: 'Bar',
    opts: { barShowStroke: false },
  },
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/01-Line-Chart.md
    key: 'line',
    func: 'Line',
    opts: { bezierCurve: false },
  },
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/03-Radar-Chart.md
    key: 'radar',
    func: 'Radar',
    opts: { pointDot: false },
  },
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/04-Polar-Area-Chart.md
    key: 'polar',
    func: 'PolarArea',
    opts: { segmentStrokeColor: '#000000' },
  },
  {
    // https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/05-Pie-Doughnut-Chart.md
    key: 'pie',
    func: 'Pie',
    opts: { scaleShowValues: true, scaleFontSize: 24 },
  },
]
.map(processor)
.reduce((a, b) => {
  if (typeof a === 'undefined') a = {};
  Object.keys(b).forEach(key => { a[key] = b[key]; });
  return a;
}, {});

module.exports = charts;
