import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

export default class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div>
        <TextField
          hintText=""
          errorText=""
        /><br />
        <TextField
          hintText=""
          errorText=""
        /><br />
        <TextField
          hintText=""
          errorText=""
          floatingLabelText=""
        /><br />
        <Slider step={0.10} value={0.5} /><br />
        <TextField
          hintText=""
          errorText=""
          floatingLabelText=""
        /><br />
      </div>
    );
  }
}
