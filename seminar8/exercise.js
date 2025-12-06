class Book {
    constructor(id, name, genre, author) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.author = author;
    }
}

const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

app.get("/books", (req, res) => {
    let filteredBooks = []
    if (req.query.genre) { //books?genre=SF
        filteredBooks = books.filter(book => book.genre == req.query.genre)
    } else {
        filteredBooks = books
    }
    res.json(filteredBooks)
})

app.get("/books/sorted", (req, res) => {
    const sortedBooks = [...books].sort((a, b) =>
        a.name.localeCompare(b.name)
    )
    res.json(sortedBooks)
})

let books = [
    new Book(1, "Dune", "sf", "Frank Warbert"),
    new Book(1, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(1, "Foundation", "sf", "Asimov")
]

app.listen(port, () => {
    console.log("Running on port " + port)
})
