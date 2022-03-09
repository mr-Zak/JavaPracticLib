import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookComponent from "./BookComponent";
import {NavLink} from "react-router-dom";


class AllBooks extends Component{

    constructor(props) {
        super(props);
    }

    BookInfo = (book) => {
        ReactDOM.render(
            <React.StrictMode>
                <BookComponent book={book}/>
                </React.StrictMode>, document.getElementById('root')
        );
    }


    render() {
        const books = this.props.books
        return (
            <div className={'allBooks'}>
                {books.map((book, i )=> (
                    <div key={`${i}`} style={{ 'border': 'solid black 2px', 'margin': '10px'}}>
                        <h4>{book.name}</h4>
                        <img style={{'width': '300px', 'height': 'auto'}}
                             src={process.env.PUBLIC_URL + '/images/' + book.imagePath}/>
                        <p><button onClick={()=>{this.BookInfo(book)}}>Подробнее</button></p>
                    </div>
                ))}
            </div>
        );
    }


}
export default AllBooks;
