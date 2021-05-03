const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { AppHeader } from "./cmps/Header.jsx";
import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { Home } from "./pages/Home.jsx";

// Simple React Component
export function App() {
  return (
    <Router>
      <main>
        <AppHeader></AppHeader>
        <Switch>
          <Route component={BookDetails} path="/book/:bookId"/>
          <Route component={BookApp} path="/book"/>
          <Route component={Home} path="/" />
        </Switch>
      </main>
    </Router>
  );
}
