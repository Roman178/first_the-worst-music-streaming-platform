import React from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = {};

function Footer(props) {
  return <footer className={props.className} />;
}

export default withStyles(styles)(Footer);
