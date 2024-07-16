import React, { Component } from "react";

// Show refs without class, using other function
class FRRefWithoutClass extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  makefocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default FRRefWithoutClass;
