import React from "react";

class Stage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    switch (this.props.stage) {
      case "home":
        return <> This is home </>;

      case "projects":
        return <> This is projects </>;

      case "Designs":
        return <> This is Designs </>;

      case "blog":
        return <> This is Blogs </>;

      case "contact":
        return <> This is contact </>;

      default:
        return <> Error 404 </>;
      // code block
    }
  }
}

export default Stage;
