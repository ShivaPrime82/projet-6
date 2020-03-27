1 - [X] Initialiser un projet Node
2 - [X] Initialiser un projet Git
3 - [] Publication sur Github
4 - [] Installation eslint et configuration
5 - [X] Installation express et Mysql
6 - [] Création d'une table Mysql -> mettre les commandes de créations dans le projet (fichier sql)
	- [] Articles
		- [] ID INT AUTO_INCREMENT NON NULL
		- [] Title VARCHAR(50)
		- [] Content VARCHAR(100)
		- [] Author INT
		- [] Created_at (DATETIME)
	- [] Comments
		- [] ID INT AUTO_INCREMENT NON NULL
		- [] Article_ID (INT)
		- [] Author INT
		- [] Content VARCHAR(100)
		- [] Created_at (DATETIME)
- [] Création d'un CRD (pas d'update, on la pas vu) node :
	- [] Route '/api/articles/create' => permet de créer un article id
	- [] Route '/api/articles/delete' => permet de supprimer un article par son id
	- [] Route '/api/articles' => permet de récupérer les 5 dernièrs articles dans un tableau
	- [] Route '/api/comments/create' => permet de créer un commentaire
	- [] Route '/api/comments/delete' => permet de supprimer un commentaire par son id
	- [] Route '/api/comments' => permet de récupérer les 5 dernièrs commentaires
- [] Création de formulaires HTML pour tout tester
	- [] Articles
		- [] create.html
		- [] delete.html
	- [] Comments
		- [] create.html
		- [] delete.html


