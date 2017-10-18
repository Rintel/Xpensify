import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import NewItem from './NewItem/NewItem';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    amount: 24.50
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
    amount: 21.50
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    amount: 2.50
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
    amount: 2.50
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
    amount: 70.60
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
    amount: 2.50
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
    amount: 2.50
  },
];

const style = {
  marginRight: 20,
};

export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    stripedRows: false,
    showRowHover: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '500px',
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    alert('Your item got created!')
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div>
        <div>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <NewItem />
        </Dialog>
        </div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="4" tooltip="Expenses" style={{textAlign: 'left'}}>
                Expenses
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Amount">Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{`${row.amount} €`}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
          <div className='Button__Add'>
            <FloatingActionButton onClick={this.handleOpen} secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            </div>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
