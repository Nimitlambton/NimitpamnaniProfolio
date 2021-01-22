import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className="fixed-bottom bg-dark text-center text-lg-start">
        <div className="text-center p-3">
          © 2020 Copyright: Nimit pamnani || Made with &hearts; in Toronto
          <span role="img" aria-label="flagCanada">
            🇨🇦
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
