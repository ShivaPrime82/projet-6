CREATE TABLE node_articles (
    article_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR
(50),
	content VARCHAR
(100),
	author INT,
    create_at DATETIME
);

