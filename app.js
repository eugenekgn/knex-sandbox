'use strict';

const configuration = require('./knex-config').pg;

console.log(configuration);
const knex = require('knex')(configuration);

knex.select('title', 'rating').from('book').asCallback((err, rows) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

knex.destroy();

