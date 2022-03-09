import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import App from "./App";
import "./BookComponentStyle.css"
import AllBooks from "./AllBooks";


class BookComponent extends Component{

      constructor(props) {
              super(props);
          this.state={
              book: {}
          }
      }


    async componentDidMount() {
        let response = await fetch(`/books/book/${this.props.book.id}`);
        const body = await response.json();
        this.setState({book: body});
    }

      onClickGoHome = () => {
          ReactDOM.render(
                  <App />,
              document.getElementById('root')
          );
      }

     render() {
          const book = this.state.book;
         return (
                 <div key={book.id} className={'bookInfo'}>
                         <h4>{book.name}</h4>
                         <img style={{'width': '400px', 'height': 'auto'}}
                              src={process.env.PUBLIC_URL + '/images/' + book.imagePath}/>
                         <p><a href={`#`} download>Скачать</a></p>
                     <button onClick={this.onClickGoHome}>Go Back</button>
                 </div>
             );
     }
}
export default BookComponent;
