import React, { Component } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  SketchOutlined,
  GithubOutlined,
  SlackOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
class MenrBar extends Component {
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
              SIAM LEAGUE
            </Menu.Item>
            <SubMenu icon={<SlackOutlined />} title="Leagues and Tournaments">
              <Menu.ItemGroup title="Leagues">
                <Menu.Item key="setting:1">RUBY S1 League</Menu.Item>
                <Menu.Item key="setting:2">NEELAM S2 League</Menu.Item>
                <Menu.Item key="setting:3">PANNA S3 League</Menu.Item>
                <Menu.Item key="setting:4">RUBELLITE S4 League</Menu.Item>
                <Menu.Item key="setting:5">AMETHYST SA League</Menu.Item>
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
      </>
    );
  }
}

export default MenrBar;
