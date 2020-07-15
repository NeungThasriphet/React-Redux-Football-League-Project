import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <div className="phantom" />
          <div className="footer-style">
            Copyright 2020 ⓒ SIAM LEAGUE. All right reserved.
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
