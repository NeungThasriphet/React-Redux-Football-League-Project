import React, { Component } from "react";
import "./App.css";
import { Row, Col, Menu } from "antd";
import "antd/dist/antd.css";
import {
  SketchOutlined,
  GithubOutlined,
  SlackOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
class App extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <div className="MeunBar">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<SketchOutlined />}>
              SIAM FOOTBALL LEAGUE
            </Menu.Item>
            <SubMenu icon={<SlackOutlined />} title="Leagues and Tournaments">
              <Menu.ItemGroup title="Leagues">
                <Menu.Item key="setting:1">RUBY T1 League</Menu.Item>
                <Menu.Item key="setting:2">NEELAM T2 League</Menu.Item>
                <Menu.Item key="setting:3">PANNA T3 League</Menu.Item>
                <Menu.Item key="setting:4">RUBELLITE T4 League</Menu.Item>
                <Menu.Item key="setting:5">AMETHYST TA League</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Tournaments">
                <Menu.Item key="setting:1">FA CUP</Menu.Item>
                <Menu.Item key="setting:2">SIAM SUPER CUP</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="app" icon={<GithubOutlined />}>
              About Us
            </Menu.Item>
          </Menu>
        </div>
        <div className="App">
          <Row>
            <Col span={2}>L</Col>
            <Col span={20}>content</Col>
            <Col span={2}>R</Col>
          </Row>
        </div>
      </>
    );
  }
}

export default App;
