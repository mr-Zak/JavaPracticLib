import {Component, useState} from "react";
import ReactDOM from "react-dom";

class BookComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            book: this.props
        }
    }

    async componentDidMount(id) {
        let response = await fetch(`/books/${id}`);
        const body = await response.json();
        this.setState({book: body});
    }

    onClick = () => {
        this.componentDidMount(this.state.book.id)
        ReactDOM.render(this.render(), document.getElementById("root"));
    }

    bookInfo() {
        let {book} = this.state;
        return (
            <div key={book.id} onClick={this.onClick} style={{ 'border': 'solid black 2px', 'margin': '10px', 'cursor': 'pointer'}}>
                <h4>{book.name}</h4>
                <img style={{'width': '300px', 'height': 'auto'}} src={process.env.PUBLIC_URL + '/images/' + book.imagePath}  />
            </div>
        );
    }

    render() {
        let {book} = this.state;
        return (
            <div key={book.id} onClick={this.onClick}>
                <h4>{book.name}</h4>
                <img style={{'width': '600px', 'height': 'auto'}} src={process.env.PUBLIC_URL + '/images/' + book.imagePath}  />
                <p><a href={`#`} download>Скачать</a></p>
            </div>
        );
    }
}
export default BookComponent;
