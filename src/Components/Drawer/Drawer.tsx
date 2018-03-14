import * as React from "react"
import { withStyles, WithStyles, Drawer as MaterialDrawer, Theme, StyledComponentProps } from "material-ui"

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
    open: boolean
    anchor: "left" | "right"
    variant?: "persistent" | "permanent" | "temporary"
}

export interface State {
}

const drawerWidth = 240;
const styles = (theme: Theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        height: "100%"
    },
})

class Drawer extends React.Component<Props & WithStyles<"drawerHeader" | "drawerPaper">, State> {
    render(): JSX.Element {
        const { classes } = this.props
        return (
            <MaterialDrawer anchor={this.props.anchor} variant={this.variant} open={this.props.open} classes={{ paper: classes.drawerPaper }}>
                <div className={classes.drawerHeader} />
                {this.props.children}
            </MaterialDrawer>
        )
    }

    private get variant() {
        return this.props.variant || "persistent"
    }
}

export default withStyles(styles as any)<Props>(Drawer)