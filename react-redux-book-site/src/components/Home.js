import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";
import {connect} from "react-redux";

import BookDetail from "./BookDetail";
import {getBook} from "../redux/reducers/bookReducer";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bookSearch: "",
      bookNotFound: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1414124488080-0188dcbb8834?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")'
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      bookNotFound: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${this.state.bookSearch}&jscmd=details&format=json`
    axios.get(url).then(response => {
      if (Object.keys(response.data).length === 0) {
        return this.setState({bookNotFound: true})
      }
      this.props.getBook(response.data);
    })
    this.setState({bookSearch: ""})
  }

  render() {
    const styles = {
      color: "#ff9d00",
      fontSize: "1.2em",
      fontFamily: "monospace",
      width: "100%",
      textDecoration: "none",
      display: "inline-block",
      marginBottom: "7px"
    }
    return (<div className="container">
      <form onSubmit={this.handleSubmit}>
        <label>book search</label>
        <input type="text" className="search" value={this.state.bookSearch} name="bookSearch" placeholder="ISBN number" onChange={this.handleChange}/>
        <br></br>
        <button>submit</button>
      </form>
      {this.state.bookNotFound && <h3>That book was not found in the database</h3>}
      <div className="books">
        {
          this.props.books.map(book => {
            const isbn = Object.keys(book)[0]; // ISBN is included in the key name for some reason
            return <Link style={styles} to={`/book-detail/${book[isbn].details.title}`} key={isbn}>{book[isbn].details.title}</Link>
          })
        }
        <br></br>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  // console.dir(state);
  return state;
}

export default connect(mapStateToProps, {getBook})(Home)
