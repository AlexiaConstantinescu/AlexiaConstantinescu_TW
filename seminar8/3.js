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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const bookRouter = express.Router()
app.use('/api', bookRouter)

app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

bookRouter.route("/books")
    .get((req, res) => {
        let filteredBooks = []
        if (req.query.genre) {
            filteredBooks = books.filter(book => book.genre == req.query.genre)
        } else {
            filteredBooks = books
        }
        res.json(filteredBooks)
    })
    .post("/books", (req, res) => {

        const { id, name, genre, author } = req.body;

        if (!id || !name || !genre || !author) {
            return res.status(400).json({
                error: "All fields are required: id, name, genre, author"
            })
        }

        if (isNaN(id)) {
            return res.status(400).json({
                error: "ID must be a number"
            })
        }

        if (name.length < 2) {
            return res.status(400).json({
                error: "Book name must have at least 2 characters"
            })
        }

        if (books.find(b => b.id == id)) {
            return res.status(400).json({
                error: `A book with id=${id} already exists`
            })
        }

        const newBook = new Book(
            Number(id),
            name,
            genre,
            author
        )

        books.push(newBook)

        return res.status(201).json({
            message: "Book added successfully",
            book: newBook
        })
    })

app.get("/books/sorted", (req, res) => {
    const sortedBooks = [...books].sort((a, b) =>
        a.name.localeCompare(b.name)
    )
    res.json(sortedBooks)
})

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Isaac Asimov")
]

app.listen(port, () => {
    console.log("Running on port " + port)
})

bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(x => x.id == req.params.bookId)
        bookModif.name = req.body.name
        bookModif.genre = req.body.genre
        bookModif.author = bookModif.author
        return res.json(bookModif)
    })
