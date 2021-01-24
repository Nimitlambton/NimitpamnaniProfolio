import { Component } from "react";
import Blog from "./Blog";
import { CardDeck, Jumbotron } from "react-bootstrap";
class Blogs extends Component {
  state = {
    BlogsData: [
      {
        title: "This is my first blog",
        thumbnail: "",
        id: 0,
        desc: "hey this is my first blog and preety much not last",
        status: "",
        link: "",
      },

      {
        title: "This is my first blog",
        thumbnail: "",
        id: 0,
        desc: "hey this is my first blog and preety much not last",
        status: "",
        link: "",
      },
    ],
  };
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div height="50 " width="50">
          <Jumbotron>
            <h1>......to be continued</h1>
            <p>i write sometimes </p>
          </Jumbotron>
        </div>
        <CardDeck className="justify-content-md-center">
          {this.state.BlogsData.map((blogs) => {
            return <Blog blogData={blogs}> </Blog>;
          })}
        </CardDeck>
      </>
    );
  }
}

export default Blogs;
