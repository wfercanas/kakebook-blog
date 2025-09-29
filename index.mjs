import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/content/:article_id", (req, res) => {
  const article_id = req.params.article_id;
  const options = {
    root: path.join(__dirname, "content"),
    dotfiles: "deny",
    headers: {
      "Content-Type": "text/html",
    },
  };

  res.sendFile(`${article_id}`, options);
});

app.get("/styles/global.css", (req, res) => {
  const options = {
    root: path.join(__dirname, "styles"),
    dotfiles: "deny",
    headers: {
      // Accept: "text/css",
      // "Content-Type": "text/css",
    },
  };

  res.sendFile("global.css", options);
});

app.listen(PORT, () => `Server up and running on port ${PORT}`);
