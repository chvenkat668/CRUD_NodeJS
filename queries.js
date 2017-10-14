
use ngBookStore
db.books.find()

db.users.find()
db.users.find({username:'venkat',password:"123"})
db.users.insert({"uid":1,"username":"venkat","password":"123","email":"ch.venkat@gmail.com"})
db.users.insert({"uid":2,"username":"pravallika","password":"abc","email":"ch.venkat@gmail.com"})
db.books.insert({
    "id": "b002",
    "title": "typicode",
	"author": "raju",
	"publisher": "apple",
	"price": 20,
	"description": "book is very popular",
	"category": "technical",
	"cover": "pic2.jpg"
})