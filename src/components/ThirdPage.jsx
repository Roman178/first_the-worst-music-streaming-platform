import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import BackgroundImage from "../img/third.png";

const styles = {
  root: {
    flexBasis: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "100% 100%",
    "@media (max-width: 1030px)": {
      flexBasis: "25%"
    }
  }
};

class ThirdPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <span></span>
      </div>
    );
  }
}

export default withStyles(styles)(ThirdPage);
