import React, {Component} from "react";
import {connect} from "react-redux";

import {addBook} from "../redux/reducers/listReducer";

class MyList extends Component {
  constructor(){
    super();
    this.state = {
      list: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")'
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBook(this.state.list)
    this.setState({list: ""})
  }

  render(){

    const books = this.props.list.map(
      (book, i)=> {
        const isbn = Object.keys(book)[0];
      return <li key={isbn}> {book} </li>})
    return (
      <div>

        <form className="container" onSubmit={this.handleSubmit}>
          <label> books to read</label>
            <input
              type="text"
              className="search"
              value={this.state.list}
              name="list"
              placeholder="book title"
              onChange={this.handleChange}
            />
            <button>submit</button>
        </form>
        <ul>
          {books}
        </ul>
      </div>
    )
  }
}

export default connect(state => state, {addBook})(MyList)
