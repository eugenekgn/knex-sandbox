'use strict';

const configuration = {
  client: 'sqlite3',
  connection: {
    filename: './book.sqlite'
  },
  useNullAsDefault: true
};

const knex = require('knex')(configuration);

knex.select('title', 'rating').from('book').asCallback((err, rows) => {
    if (err) {
      console.log(`Error ${err}`);
    }
    console.log(rows);
  });

knex.destroy();

