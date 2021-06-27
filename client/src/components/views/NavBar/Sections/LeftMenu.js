import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  if (user.userData && !user.userData.isAuth) {
    return <></>;
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="">
          <a href="/home">Home</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;