'use strict'
import {storageService} from './localStorage.service.js'

export const addBookService ={
    // getResults
    query
}

const RESULTS_KEY = 'resultsDB'

// function getResults(searchTxt) {
//     const urlStr = searchTxt.split(" ").join('%20')
//     const pmr = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${urlStr}`)
//         .then(res => storageService.saveToStorage(RESULTS_KEY, res.data))
// }

function query (searchTxt) {
    const results = storageService.loadFromStorage(RESULTS_KEY)
    return Promise.resolve(results)
}