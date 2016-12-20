const configuration = {
  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'Eugene',
      database: 'library',
      password: null
    }
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: './book.sqlite'
    }
  }
};

module.exports = configuration;