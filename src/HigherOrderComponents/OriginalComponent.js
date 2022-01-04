import React from "react";
import Upgrade from "./Upgrade";

class OriginalComponents extends React.Component {
  render() {
    return <h1>Hello world {this.props.newItem}</h1>;
  }
}

export default Upgrade(OriginalComponents);
