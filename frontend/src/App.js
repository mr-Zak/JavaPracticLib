import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react";
import BookComponent from "./BookComponent";

class App extends Component {

  state = {
    books: []
  };

  async componentDidMount() {
    let response = await fetch('/books');
    const body = await response.json();
    this.setState({books: body});
  }

  render() {
    const books = this.state.books;

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="App-intro">
              <h2>Книги</h2>
              {books.map((book) =>
                  <div key={book.id}>{
                    new BookComponent(book).bookInfo()
                  }
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;

