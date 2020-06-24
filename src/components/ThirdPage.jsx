import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexBasis: "100%",
    backgroundImage: `url(https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Music-Wallpaper-Abstract-Skilal-Headphones-PIC-WPD008395.jpg)`,
    backgroundSize: "100% 100%"
  }
};

class ThirdPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}

export default withStyles(styles)(ThirdPage);
