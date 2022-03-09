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
        ReactDOM.render(
            <React.StrictMode>
                <BookComponent book={book}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    render() {
        let books = this.props.books;
        if(books.length <= 10){
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
        } else {
            let shortBookList = [];
            for(let i = 0; i < 10; i++){
                let elem = Math.floor(Math.random()*(books.length - 0) + 0);
                if(shortBookList.indexOf(books[elem]) >= 0) {
                    i--;
                } else {
                    shortBookList[i] = books[elem];
                }
            }
            return (
                <div className={'bookList'}>
                    {shortBookList.map((book, i) =>
                        <div key={book.id} style={{ 'border': 'solid black 2px', 'margin': '10px', 'cursor': 'pointer'}} onClick={()=> this.onClickBook(book)}>

                            <h4>{book.name}</h4>
                            <img style={{'width': '200px', 'height': 'auto'}} src={process.env.PUBLIC_URL + '/images/' + book.imagePath}  />
                        </div>
                    )}
                </div>
            );
        }

    }

}
export default BookList;