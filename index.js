// Init import 
const express = require("express");
const mysql = require("mysql");
const settings = require("./settings.json");

// Settings for db
const sqlConfig = settings.sqlConfig;

// Init Server
const app = express();
app.listen(3000, () => {
    console.log("SERVER STARTED");
});

// Init static and urlencoded for later (post/get)
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// Init road for articles 
app.get("/api/articles", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT article_id, title, content, author, create_at FROM node_articles WHERE create_at > 5",
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

// Init road for comments 
app.get("/api/comments", (req, res) => {
    const sqlConnection = mysql.createConnection(sqlConfig);

    sqlConnection.query(
        "SELECT comments_id, article_id, content, author, create_at FROM node_comments WHERE create_at > 5",
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

// INIT Create for articles
app.route("/api/articles/create")
    .get((req, res) => res.status(503).send({ status: "ERROR" }))
    .post((req, res) => {

        console.log(req.body);

        const articles_title = req.body.articles_title;
        const articles_content = req.body.articles_content;
        const articles_author_id = req.body.articles_author_id;
        const articles_create_at = req.body.articles_create_at;

        const sqlConnection = mysql.createConnection(sqlConfig);

        sqlConnection.query(
            "INSERT INTO node_articles VALUES (NULL, ?, ?, ?, ?)",
            [articles_title, articles_content, articles_author_id, articles_create_at],
            (error, result) => {
                if (error) {
                    console.log("ERROR", error.code);
                    res.status(503).send({ status: "ERROR" });
                } else {
                    res.send({ status: "OK" });
                    console.log(result);
                }
                sqlConnection.end();
            }
        );
    });

// INIT Delete for articles
app.route("/api/articles/delete")
    .get((req, res) => res.status(503).send({ status: "ERROR" }))
    .post((req, res) => {

        const articles_id = req.body.articles_id;

        const sqlConnection = mysql.createConnection(sqlConfig);

        sqlConnection.query(
            "DELETE FROM node_articles WHERE id = ?",
            [articles_id],
            (error, result) => {
                if (error) {
                    console.log("ERROR", error.code);
                    res.status(503).send({ status: "ERROR" });
                } else {
                    res.send({ status: "OK" });
                    console.log(result);
                }
                sqlConnection.end();
            }
        );
    });

// INIT Create for comments
app.route("/api/comments/create")
    .get((req, res) => res.status(503).send({ status: "ERROR" }))
    .post((req, res) => {

        console.log(req.body);

        const comments_article_id = req.body.comments_article_id;
        const comments_content = req.body.comments_content;
        const comments_author_id = req.body.comments_author_id;
        const comments_create_at = req.body.comments_create_at;

        const sqlConnection = mysql.createConnection(sqlConfig);

        sqlConnection.query(
            "INSERT INTO node_comments VALUES (NULL, ?, ?, ?, ?)",
            [comments_article_id, comments_content, comments_author_id, comments_create_at],
            (error, result) => {
                if (error) {
                    console.log("ERROR", error.code);
                    res.status(503).send({ status: "ERROR" });
                } else {
                    res.send({ status: "OK" });
                    console.log(result);
                }
                sqlConnection.end();
            }
        );
    });

// INIT Delete for comments
app.route("/api/comments/delete")
    .get((req, res) => res.status(503).send({ status: "ERROR" }))
    .post((req, res) => {

        const comments_id = req.body.comments_id;

        const sqlConnection = mysql.createConnection(sqlConfig);

        sqlConnection.query(
            "DELETE FROM node_comments WHERE id = ?",
            [comments_id],
            (error, result) => {
                if (error) {
                    console.log("ERROR", error.code);
                    res.status(503).send({ status: "ERROR" });
                } else {
                    res.send({ status: "OK" });
                    console.log(result);
                }
                sqlConnection.end();
            }
        );
    });