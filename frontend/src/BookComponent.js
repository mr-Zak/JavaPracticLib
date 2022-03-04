import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import App from "./App";
import "./BookComponentStyle.css"

class BookComponent extends Component{

      constructor(props) {
              super(props);
      }

      onClickGoHome = () => {
          ReactDOM.render(
              <React.StrictMode>
                  <App />
              </React.StrictMode>,
              document.getElementById('root')
          );
      }

     render() {
             return (
                 <div key={this.props.book.id} className={'bookInfo'}>
                         <h4>{this.props.book.name}</h4>
                         <img style={{'width': '200px', 'height': 'auto'}}
                              src={process.env.PUBLIC_URL + '/images/' + this.props.book.imagePath}/>
                         <p><a href={`#`} download>Скачать</a></p>
                     <button onClick={this.onClickGoHome}>Go Back</button>
                 </div>
             );
     }
}
export default BookComponent;
