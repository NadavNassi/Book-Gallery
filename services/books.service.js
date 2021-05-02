import {books} from '../books.js'




export const booksService = {
    query
}

function query(filterBy) {
    if (filterBy) {
        var { title, maxPrice, minPricce } = filterBy
        title = title.toUpperCase()
        maxPrice = maxPrice ? maxPrice : Infinity
        minPricce = minPricce ? minPricce : 0
        const filteredBooks = books.filter(book => {
            return book.title.toUpperCase().includes(title) && book.listPrice.amount > minPricce && book.listPrice.amount < maxPrice
        })
        return Promise.resolve(filteredBooks)
    }
    return Promise.resolve(books)
}



