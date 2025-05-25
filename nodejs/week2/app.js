import express from "express";
import fs from "fs/promises";

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// 1. GET /search

const filePath = "./documents.json";

// Search for a specific query
app.get("/search", async (req, res) => {
  // Implementing the query parameter (q)
  const q = req.query.q;

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const parsedContent = JSON.parse(fileContent);
    const responseData = filterData(parsedContent, q);

    if (!responseData.length) {
      return res.status(404).send("No documents matched your query.");
    }

    res.send(responseData);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// 2. GET /documents/:id

app.get("/documents/:id", async (req, res) => {
  // Extract the ID from the route parameters and convert it to a number
  const documentId = Number(req.params.id);
  // This ensures it matches the type of the 'id' field in the documents,
  // which is likely stored as a number

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const documents = JSON.parse(fileContent);

    const document = documents.find((doc) => doc.id === documentId);
    console.log(documents);

    if (!document) {
      return res.status(404).send("Document not found");
    }

    res.send(document);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// 3. POST /search

app.post("/search", async (req, res) => {
  // Use destructuring with the query parameter and fields
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    return res.status(400).send("You cannot provide both 'q' and 'fields' at the same time.");
  }

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const documents = JSON.parse(fileContent);

    let results = documents;

    if (q) {
      results = filterData(documents, q);
      if (!results.length) {
        return res.status(404).send("No documents matched your query.");
      }
      return res.send(results);
    } else if (fields) {
      results = documents.filter((doc) =>
        Object.entries(fields).every(
          ([key, val]) => String(doc[key]).toLowerCase() === String(val).toLowerCase()
        )
      );
      if (!results.length) {
        return res.status(404).send("No documents matched your fields.");
      }
      return res.send(results);
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Function to filter the query results
function filterData(array, filter) {
  if (!filter) {
    return array;
  }

  return array.filter((document) => {
    const searchableText = Object.values(document).join(" ").toLowerCase();
    const result = searchableText.includes(filter.toLowerCase());
    return result;
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
