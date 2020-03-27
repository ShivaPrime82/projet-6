CREATE TABLE node_articles
(
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
    title VARCHAR
    (255) NOT NULL,
    content VARCHAR
    (255) NOT NULL,
    author INT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY
    (author) REFERENCES node_users
    (id)
);

    CREATE TABLE node_comments
    (
        id INT PRIMARY KEY NOT NULL
        AUTO_INCREMENT,
    article_id INT NOT NULL,
    content VARCHAR
        (255),
    author INT NOT NULL,
    created_at DATETIME,
    FOREIGN KEY
        (article_id) REFERENCES node_articles
        (id),
    FOREIGN KEY
        (author) REFERENCES node_users
        (id)
);




