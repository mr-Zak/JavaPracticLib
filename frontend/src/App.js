import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Component} from "react";
import ReactDOM from "react-dom";
import BookList from "./BookList";
import NavBar from "./NavBar";
import AllBooks from "./AllBooks";

class App extends Component {

  state = {
    books: []
  };

  async componentDidMount() {
    let response = await fetch('/books/');
    const body = await response.json();
    this.setState({books: body});
  }

  render() {
    const books = this.state.books;

    return (
        <BrowserRouter>
          <div className="App">
              <h2 style={{'margin-top': '0'}}>Книги</h2>
              <div id={'contentContainer'} >
                <NavBar/>
                <BookList books={books}/>
              </div>
              <div>
                <Routes>
                  <Route path="/all" element={<AllBooks books={books}/>}/>
                </Routes>
              </div>

          </div>
        </BrowserRouter>
    );
  }
}
export default App;

