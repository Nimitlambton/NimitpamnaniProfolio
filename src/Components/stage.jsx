import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/projects/projects";
import Designs from "./pages/Designs/Designs";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/contact";
import Upload from "./pages/UploadProject/upload";
class Stage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    switch (this.props.stage) {
      case "home":
        return <Home> </Home>;

      case "projects":
        return <Projects></Projects>;

      case "Designs":
        return <Designs></Designs>;

      case "blog":
        return <Blogs> </Blogs>;

      case "contact":
        return <Contact> </Contact>;

      case "Upload":
        return <Upload> </Upload>;

      default:
        return <> Error 404 </>;
      // code block
    }
  }
}

export default Stage;
