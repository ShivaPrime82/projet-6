CREATE TABLE node_articles (
    article_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR
(255) NOT NULL,
	content VARCHAR
(255) NOT NULL,
	author INT NOT NULL,
    create_at DATETIME NOT NULL
);

CREATE TABLE node_comments(
    comments_id INT PRIMARY KEY AUTO_INCREMENT,
    article_id INT NOT NULL,
    content VARCHAR
(255) NOT NULL,
    author INT NOT NULL,
    create_at DATETIME NOT NULL
);



