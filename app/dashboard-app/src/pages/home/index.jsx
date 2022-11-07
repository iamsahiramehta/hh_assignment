import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  List,
} from "@material-ui/core";
import { HomeRounded, ExitToApp } from "@material-ui/icons";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      return navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    return navigate("/login");
  };

  return (
    <div>
      <Drawer open anchor={"left"} variant="permanent">
        <List style={{ width: "200px" }}>
          <ListItem button>
            <ListItemIcon>
              <HomeRounded />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <img src="https://files.hubhopper.com/assets/icons/demand-round/demand-round-72x72.ico" />
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;
