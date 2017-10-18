import React from 'react';
import TextField from 'material-ui/TextField';

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
        <TextField
          hintText=""
          errorText=""
          floatingLabelText=""
        /><br />
      </div>
    );
  }
}
