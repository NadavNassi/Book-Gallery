import {BookApp} from './pages/BookApp.jsx'

// Simple React Component
export function App() {
    return <section className="app">
       <BookApp/>
    </section>
}



// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }

