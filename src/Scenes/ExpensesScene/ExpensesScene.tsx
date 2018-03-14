import * as React from "react"
import BaseScene from "../BaseScene/BaseScene"
import Grid from "material-ui/Grid"
import Table, { TableHead, TableCell, TableRow, TableSortLabel, TableBody, TableFooter, TablePagination } from "material-ui/Table"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Checkbox from "material-ui/Checkbox"
import Tooltip from "material-ui/Tooltip"

export interface Props {
}

export interface State {
}

export default class ExpensesScene extends BaseScene<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    // Override from BaseScene
    renderContent() {
        return (
            <Grid container>
                {/* <Grid item xs={12}>
                    Expenses
                </Grid> */}
                <Toolbar>
                    <Typography variant="title">All transactions</Typography>
                </Toolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox />
                                {/* // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={numSelected === rowCount}
                                // onChange={onSelectAllClick} */}
                            </TableCell>
                            <TableCell padding="none"
                            // key={column.id}
                            // numeric={column.numeric}
                            // padding={column.disablePadding ? 'none' : 'default'}
                            // sortDirection={orderBy === column.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                // placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                // enterDelay={300}
                                >
                                    <TableSortLabel
                                    // active={orderBy === column.id}
                                    // direction={order}
                                    // onClick={this.createSortHandler(column.id)}
                                    >
                                        {"column.label"}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell numeric><Tooltip title="Sort"><TableSortLabel>Another Label</TableSortLabel></Tooltip></TableCell>
                            <TableCell numeric><Tooltip title="Sort"><TableSortLabel>Another Label</TableSortLabel></Tooltip></TableCell>
                            <TableCell numeric><Tooltip title="Sort"><TableSortLabel>Another Label</TableSortLabel></Tooltip></TableCell>
                            <TableCell numeric><Tooltip title="Sort"><TableSortLabel>Another Label</TableSortLabel></Tooltip></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {/* {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                        const isSelected = this.isSelected(n.id);
                        return ( */}
                        <TableRow
                        // hover
                        // onClick={event => this.handleClick(event, n.id)}
                        // role="checkbox"
                        // aria-checked={isSelected}
                        // tabIndex={-1}
                        // key={n.id}
                        // selected={isSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell padding="none">{"n.name"}</TableCell>
                            <TableCell numeric>{"n.calories"}</TableCell>
                            <TableCell numeric>{"n.fat"}</TableCell>
                            <TableCell numeric>{"n.carbs"}</TableCell>
                            <TableCell numeric>{"n.protein"}</TableCell>
                        </TableRow>
                        {/* {emptyRows > 0 && (
                            <TableRow style={{ height: 49 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )} */}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={30}
                                rowsPerPage={5}
                                page={2}
                                // colSpan={6}
                                // backIconButtonProps={{
                                //     'aria-label': 'Previous Page',
                                // }}
                                // nextIconButtonProps={{
                                //     'aria-label': 'Next Page',
                                // }}
                                onChangePage={() => { }}
                            // onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>

                </Table>
            </Grid>
        )
    }
}
