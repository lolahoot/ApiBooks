import React, {Component} from "react";

const styles = {
  fontSize: "2em",
  textAlign: "center"
}

export default class Book extends Component {

  componentWillMount() {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1434652917459-36f6692da944?auto=format&fit=crop&w=1443&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")'
  }
  render(){
  return (<div className="container2">
    <h1 style={styles}>Favorite Books</h1>
    <ul>
      <li>War and Peace, by Leo Tolstoy, ISBN 0375760644</li>
      <br></br>
      <li>The Taming of the Shrew, by William Shakespeare, ISBN 074347757X</li>
      <br></br>
      <li>The Richest Man in Babylon, by George S. Clason, ISBN 1530427711</li>
      <br></br>
      <li>Anna Karenina, by Leo Tolstoy, ISBN 067978330X</li>
      <br></br>
      <li>The Complete Sherlock Holmes(2 Volumes), by Sir Arthur Conan Doyle, ISBN 0553328255</li>
    </ul>
  </div>
    )
  }
}





//
  // this.componentDidMount = this.componentDidMount.bind(this);

// componentDidMount(){
//   axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:" + this.state.bookSearch + "&jscmd=details&format=json").then
//   (response => {this.setState(response.data);
//   })
// }
