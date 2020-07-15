import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import MenrBar from "./components/menus/MenuBar";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <>
        <MenrBar />
        <div className="App">
          <Row>
            <Col span={2}>L</Col>
            <Col span={20}>content</Col>
            <Col span={2}>R</Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
