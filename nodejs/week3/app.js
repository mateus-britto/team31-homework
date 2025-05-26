import knex from 'knex'
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  // Define the list of allowed column names for sorting
  const allowedSortFields = ["first_name", "last_name", "email", "phone"];

  // Define the allowed sort directions (ascending or descending)
  const allowedDirections = ["ASC", "DESC"];

  let query = knexInstance.select("*").from("contacts");

  // Check if the "sort" query parameter is provided
  if ("sort" in req.query) {
    // Convert the value to string and split it by space (e.g., "first_name ASC" → ["first_name", "ASC"])
    const parts = req.query.sort.toString().split(" ");

    // Ensure exactly two parts: [column, direction]
    if (parts.length === 2) {
      // Destructure the parts into variables
      const [column, direction] = parts;

      // Check if the column name is in the list of allowed fields
      const sanitizedColumn = allowedSortFields.includes(column) ? column : null;

      // Check if the direction is either ASC or DESC (case-insensitive)
      const sanitizedDirection = allowedDirections.includes(direction.toUpperCase())
        ? direction.toUpperCase()
        : null;

      // Only apply sorting if both column and direction are valid
      if (sanitizedColumn && sanitizedDirection) {
        query = query.orderBy(sanitizedColumn, sanitizedDirection);
      }
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// /api/contacts?sort=first_name ASC; DROP TABLE contacts
