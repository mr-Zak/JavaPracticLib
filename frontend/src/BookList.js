import {BrowserRouter, Route} from "react-router-dom";
import BookComponent from "./BookComponent";
import React, {Component} from "react";
import  "./BookListStyle.css"
import App from "./App";
import ReactDOM from "react-dom";

class BookList extends Component{
    constructor(props) {
        super(props);
    }

    onClickBook = (book) => {
        fetch(`/book/${book.id}`);
        ReactDOM.render(
            <React.StrictMode>
                <BookComponent book={book}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    render() {
        let books = this.props.books;
        return (
            <div className={'bookList'}>
                {books.map((book, i) =>
                    <div key={book.id} style={{ 'border': 'solid black 2px', 'margin': '10px', 'cursor': 'pointer'}} onClick={()=> this.onClickBook(book)}>
                        <h4>{book.name}</h4>
                        <img style={{'width': '200px', 'height': 'auto'}} src={process.env.PUBLIC_URL + '/images/' + book.imagePath}  />
                    </div>
                )}
            </div>
        );
    }

}
export default BookList;