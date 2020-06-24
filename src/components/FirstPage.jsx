import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Components
// import NormalFirstPage from './componentsForFirstPage/NormalFirstPage';
// import OpacityFirstPage from './componentsForFirstPage/OpacityFirstPage';

import Header from "./componentsForFirstPage/Header";
import Menu from "./componentsForFirstPage/Menu";
import AntiButton from "./componentsForFirstPage/AntiButton";
import BackgroundImage from "../img/first.png";

const styles = {
  root: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "100% 100%",
    flexBasis: "100%"
  },

  buttonArrowContainer: {
    height: "91.8%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    transition: "background-color .2s ease-in-out"
  },

  buttonArrowContainerRGBA: {
    backgroundColor: "rgba( 255,255,255, 0.7)",
    transition: "background-color .2s ease-in-out"
  }
};

class FirstPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityFirstPage: false,
      visibleMenu: false
    };

    this.handleManageMenu = this.handleManageMenu.bind(this);
  }

  handleManageMenu() {
    this.state.opacityFirstPage
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
    this.setState({
      opacityFirstPage: !this.state.opacityFirstPage,
      visibleMenu: !this.state.visibleMenu
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header onOpenMenu={this.handleManageMenu} />

        {this.state.visibleMenu && (
          <AntiButton onCloseMenu={this.handleManageMenu}>
            <Menu />
          </AntiButton>
        )}

        <div
          className={
            this.state.opacityFirstPage
              ? classes.buttonArrowContainerRGBA +
                " " +
                classes.buttonArrowContainer
              : classes.buttonArrowContainer
          }
        >
          <Button variant="extendedFab">let's get into the music</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FirstPage);
