import * as React from "react"
import Zoom from "material-ui/transitions/Zoom"
import Button from "material-ui/Button"
import { Theme, WithStyles, withStyles } from "material-ui/styles"
import Icon from "material-ui/Icon"
import red from "material-ui/colors/red"

export interface Props {
    icon: string
}

export interface State {
}

const styles = (theme: Theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
})

class FloatingActionButton extends React.Component<Props & WithStyles, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
        }
    }

    render() {
        const { classes, theme, icon } = this.props

        const fab = {
            backgroundColor: red[700],
            color: "primary",
            className: classes.fab,
            icon: <Icon>{icon}</Icon>,
        }

        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };

        return (
            <Zoom in={true} timeout={transitionDuration} unmountOnExit>
                <Button variant="fab" className={fab.className} style={{ backgroundColor: fab.backgroundColor, color: "white" }} color="inherit" >
                    {fab.icon}
                </Button>
            </Zoom>
        )
    }
}

export default withStyles(styles as any, { withTheme: true })(FloatingActionButton)