const express = require("express");
const mysql = require("mysql");
const settings = require("./settings.json");

const sqlConfig = settings.sqlConfig;

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED");
});

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.get("/api/articles", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT article_id, title, content, author, create_at FROM node_articles WHERE id = * LIMIT 5",
        (error, result) => {
            if (error) {
                console.log("ERROR", error.code);
            } else {
                console.log("RESULT", result);
                res.send(result[0]);
            }
            sqlConnection.end();
        }
    );
});

app.get("/api/comments", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT comments_id, article_id, content, author, create_at FROM node_comments WHERE id = * LIMIT 5",
        (error, result) => {
            if (error) {
                console.log("ERROR", error.code);
            } else {
                console.log("RESULT", result);
                res.send(result[0]);
            }
            sqlConnection.end();
        }
    );
});
