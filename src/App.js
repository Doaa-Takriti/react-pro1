import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SearchBook from "./Pages/SearchBook";
import Navbar1 from './components/Navbar1'







function App() {

  return (
    <div className="App">



      <BrowserRouter>
        < Navbar1 />

        <Switch >
          <Route exact path="/" element={<Home />}>
            <Home />
          </Route>
          <Route exact path="/search" element={<SearchBook />}>
            <SearchBook />
          </Route>
          <Route exact path="/login" element={<Login />}>
            <Login />
          </Route>

        </Switch>



      </BrowserRouter>

    </div>
  );
}

export default App;
