import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookComponent from "./BookComponent";


const AllBooks = (props) => {

    let BookInfo = (book) => {
        ReactDOM.render(
            <React.StrictMode>
                <BookComponent book={book}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }


    return (
        <div>
            {props.books.map(book => (
                <div style={{ 'border': 'solid black 2px', 'margin': '10px', 'cursor': 'pointer'}} onClick={() => {BookInfo(book)}}>
                    <h4>{book.name}</h4>
                    <img style={{'width': '300px', 'height': 'auto'}}
                         src={process.env.PUBLIC_URL + '/images/' + book.imagePath}/>
                </div>
            ))}
        </div>
    );
}
export default AllBooks;
