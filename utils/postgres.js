const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.CONNECTION_STRING ??
    "postgres://ibunxnbv:0UvqfMPZvnFWNanRRLOGgUzJsFEmtNru@tiny.db.elephantsql.com/ibunxnbv",
});

class PG {
  #pool = pool;

  async fetchData(SQL, ...params) {
    const client = await this.#pool.connect();

    try {
      const { rows } = await client.query(SQL, params.length ? params : null);
      return rows;
    } catch (err) {
      throw new Error(err);
    } finally {
      client.release();
    }
  }

  async fetchOnly(SQL, ...params) {
    const client = await this.#pool.connect();

    try {
      const {
        rows: [row],
      } = await client.query(SQL, params.length ? params : null);
      return row;
    } catch (err) {
      throw new Error(err);
    } finally {
      client.release();
    }
  }
}

module.exports = PG;
