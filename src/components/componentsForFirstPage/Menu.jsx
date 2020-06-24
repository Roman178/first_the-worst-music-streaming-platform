import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = {
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "0",
    paddingBottom: "0",
  },

  sMenuItems: {
    justifyContent: "center",
    padding: "0",
    width: "100%",
    height: "33.3333%",
  },
};

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <MenuList className={classes.root}>
        <MenuItem className={classes.sMenuItems}>Profile</MenuItem>
        <MenuItem className={classes.sMenuItems}>My account</MenuItem>
        <MenuItem className={classes.sMenuItems}>Logout</MenuItem>
      </MenuList>
    );
  }
}

export default withStyles(styles)(Menu);
