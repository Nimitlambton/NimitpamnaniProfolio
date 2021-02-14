import React, { Component } from "react";
//import { ReactComponent as YourSvg } from "./freelance.svg";
import Background from "./freelance.svg";
import Project from "./project";
import { CardDeck } from "react-bootstrap";
import protfolioImg from "./protfolio.svg";
import Weather from "./weather.svg";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "MemeNator",
        projectId: 1,
        desc:
          "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
        repolink: "https://github.com/Nimitlambton/MN",
        DeployedLink: "https://meme-nator.netlify.app",
        thumbnail: Background,
        status: "completed",
      },
      {
        title: "Personal portfolio",
        status: "completed",
        projectId: 2,
        desc:
          "This is react based responsive Web App , used to showcase all the projects that are created till now ",
        repolink: "https://github.com/Nimitlambton/NimitpamnaniProfolio",
        DeployedLink: "https://nimitpamnani.rocks/#home",
        thumbnail: protfolioImg,
      },
      {
        title: "The Weather App",
        projectId: 3,
        desc:
          "This is weatherApp based on React.js , it can be used to fetch weather of any City in the world 🌏 ",
        repolink: "https://github.com/Nimitlambton/weatherApp",
        thumbnail: Weather,
        DeployedLink: "https://nimit-theweatherapp.netlify.app/",
        status: "completed",
      },
      {
        title: "MemeNator",
        projectId: 4,
        desc: "This is my first project, that is build on React.js",
        thumbnail: "",
        repolink: "",
        status: "",
      },
    ],
  };

  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            width: "100%",
            height: "400px",
            backgroundRepeat: "no-repeat",
            background: "transparent",
            margin: " 2px",
          }}>
          <CardDeck className="justify-content-md-center">
            {this.state.projects.map((project) => (
              <Project projectData={project} key={project.projectId}></Project>
            ))}
          </CardDeck>
        </div>
      </>
    );
  }
}

export default Projects;
