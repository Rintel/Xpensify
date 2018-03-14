import * as React from "react"
import { withStyles, WithStyles, Theme, StyledComponentProps } from "material-ui/styles"
import Typography from "material-ui/Typography/Typography"
import MaterialDrawer from "material-ui/Drawer/Drawer"

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
        justifyContent: 'flex-start',
        padding: '41px 0 0 24px',
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
})

class Drawer extends React.Component<Props & WithStyles<"drawerHeader" | "drawerPaper">, State> {
    render(): JSX.Element {
        const { classes } = this.props
        return (
            <MaterialDrawer anchor={this.props.anchor} variant={this.variant} open={this.props.open} classes={{ paper: classes.drawerPaper }}>
                <div className={classes.drawerHeader}>
                    <Typography variant="headline" color="inherit" className={classes.flex}>
                        Xpensify
                    </Typography>
                </div>
                {this.props.children}
            </MaterialDrawer>
        )
    }

    private get variant() {
        return this.props.variant || "persistent"
    }
}

export default withStyles(styles as any)<Props>(Drawer)