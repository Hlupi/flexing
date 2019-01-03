import React, { Component } from "react";
import Dropdown from "./dropdown";

class DropdownContainer extends Component {
  state = {
    location: [
      {
        id: 0,
        title: "New York",
        selected: false,
        key: "location"
      },
      {
        id: 1,
        title: "Dublin",
        selected: false,
        key: "location"
      },
      {
        id: 2,
        title: "California",
        selected: false,
        key: "location"
      },
      {
        id: 3,
        title: "Istanbul",
        selected: false,
        key: "location"
      },
      {
        id: 4,
        title: "Izmir",
        selected: false,
        key: "location"
      },
      {
        id: 5,
        title: "Oslo",
        selected: false,
        key: "location"
      }
    ]
  };

  toggleSelected = (id, key) => {
    const temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
  };

  render() {
    return (
      <>
        <Dropdown
          titleHelper="Location"
          title="Select location"
          list={this.state.location}
          toggleItem={this.toggleSelected}
        />
      </>
    );
  }
}
export default DropdownContainer;
