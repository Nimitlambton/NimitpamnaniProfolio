import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
class Blog extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, thumbnail, desc, link } = this.props.blogData;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text> {desc}</Card.Text>
          </Card.Body>
          <Card.Body>
            <hr></hr>
            <Card.Link href={link} target="_blank">
              <FontAwesomeIcon icon="external-link-alt" size="lg" />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Blog;
