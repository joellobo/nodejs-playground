var knex = require("knex")({
  client: "postgres",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "postgres"
  },
  pool: {
    min: 0,
    max: 7
  }
});
