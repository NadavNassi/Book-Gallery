import {books} from '../books.js'
import {utilService} from './util.service.js'
import {storageService} from './localStorage.service.js'

const STORAGE_KEY = 'booksDB'

let gBooks;


export const booksService = {
    query,
    getBookById,
    saveReview,
    removeReview
}
_loadBooks()

function _loadBooks(){
    gBooks = storageService.loadFromStorage(STORAGE_KEY)
    if(!gBooks){
        gBooks = books
        _saveBooks()
    }
}

function _saveBooks(){
    storageService.saveToStorage(STORAGE_KEY, gBooks)
}

function query(filterBy) {
    if (filterBy) {
        var { title, maxPrice, minPricce } = filterBy
        title = title.toUpperCase()
        maxPrice = maxPrice ? maxPrice : Infinity
        minPricce = minPricce ? minPricce : 0
        const filteredBooks = gBooks.filter(book => {
            return book.title.toUpperCase().includes(title) && book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice
        })
        return Promise.resolve(filteredBooks)
    }
    return Promise.resolve(gBooks)
}

function getBookById(bookId){
    const book = gBooks.find((book) => bookId === book.id)
    return Promise.resolve(book)
}

function saveReview(bookId, review){
    const bookIdx = gBooks.findIndex((book) => bookId === book.id)
    if(!gBooks[bookIdx].reviews) gBooks[bookIdx].reviews = []
    review.id = utilService.makeId()
    gBooks[bookIdx].reviews.push(review)
    _saveBooks()
    return Promise.resolve(gBooks[bookIdx])
}

function removeReview(book, reviewId) {
    const reviewIdx = book.reviews.findIndex(review => review.id === reviewId)
    book.reviews.splice(reviewIdx, 1)
    _saveBooks()
    return Promise.resolve()
}


window.gBooks = gBooks
