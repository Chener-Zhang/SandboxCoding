import React from "react";

const Upgrade = (OriginalFunction) => {
  class UpgradeComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>Something above here</h2>
          <OriginalFunction newItem="newFeature" />
        </div>
      );
    }
  }
  return UpgradeComponent;
};

export default Upgrade;
