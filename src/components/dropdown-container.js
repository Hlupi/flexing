import React, { Component } from "react";
import Dropdown from "./dropdown";

class DropdownContainer extends Component {
  state = {
    location: [
      {
        id: 0,
        title: "Amsterdam",
        selected: false,
        key: "location"
      },
      {
        id: 1,
        title: "Berlin",
        selected: false,
        key: "location"
      },
      {
        id: 2,
        title: "Brussels",
        selected: false,
        key: "location"
      },
      {
        id: 3,
        title: "Dublin",
        selected: false,
        key: "location"
      },
      {
        id: 4,
        title: "London",
        selected: false,
        key: "location"
      },
      {
        id: 5,
        title: "Paris",
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
