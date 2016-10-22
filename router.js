const charts = require('./lib');
const log = require('debug')('shartify:router:');
const fs = require('fs');
const path = require('path');
const img = path.join(__dirname, '..', 'assets', 'img');

function router(req, res) {
  const { body = {}, params = {}, hostname = null } = req;
  const { type = null } = params;
  const { name = `unknown-${type}` } = body;
  const stream = fs.createWriteStream(`${img}/${name}.png`);
  const opts = Object.assign(body, { stream, name, hostname });
  if (!charts.hasOwnProperty(type)) return res.status(400).json({ message: 'Type is not supported' });
  try {
    return charts[type](opts, (err, resp) => {
      if (err) log('error:', err);
      if (err) return res.status(400).json({ message: 'There was an error with your request' });
      return res.json(resp);
    });
  } catch (e) {
    log('exception:', e);
    return res.status(500).json({ message: 'An error occured while generating your chart' });
  }
}

module.exports = { router };
