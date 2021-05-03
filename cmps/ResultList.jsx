import { ResultPreview } from "./ResultPreview.jsx"


export function ResultList({searchResults, onAddBook}) {
    return searchResults.map(result => {
        return <ResultPreview key={result.id} result={result} onAddBook={onAddBook} />
    })
}