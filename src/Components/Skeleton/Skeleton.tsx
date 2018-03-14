import * as React from "react"
import Icon from "material-ui/Icon"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Divider from "material-ui/Divider"
import Typography from "material-ui/Typography"
import { Theme, withStyles, StyledComponentProps, WithStyles } from "material-ui/styles"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Drawer from "../Drawer/Drawer"
import IconButton from "../IconButton/IconButton"
import { Link } from "react-router-dom"

export interface Props extends StyledComponentProps {
    children?: React.ReactNode
}

export interface State {
    leftDrawerOpen: boolean
    // rightDrawerOpen: boolean
}

const drawerWidth = 240;
const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        overflow: "hidden",
        minHeight: "100%"
    },
    appBar: {
        position: 'absolute',
        // width: 0,
        backgroundColor: theme.palette.primary.dark,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShiftLeft: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    // appBarShiftRight: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginRight: drawerWidth,
    //     transition: theme.transitions.create(['margin', 'width'], {
    //         easing: theme.transitions.easing.easeOut,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    toolbar: theme.mixins.toolbar,
    content: {
        // width: `calc(100% - ${drawerWidth}px)`,
        flexGrow: 1,
        overflow: "hidden",
        marginLeft: -drawerWidth,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShiftLeft: {
        // content dont flow?
        // width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    // contentShiftRight: {
    //     // content dont flow?
    //     // marginRight: 0,
    //     transition: theme.transitions.create('margin', {
    //         easing: theme.transitions.easing.easeOut,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    flex: {
        flex: 1
    },
    link: {
        color: theme.palette.primary.contrastText,
        textDecoration: "none"
    }
})

class Skeleton extends React.Component<Props & WithStyles, State> {

    constructor(props: Props) {
        super(props as any)

        this.state = {
            leftDrawerOpen: true
            // rightDrawerOpen: false
        }
    }

    toggleLeftSidemenu() {
        this.setState({
            leftDrawerOpen: !this.state.leftDrawerOpen,
            // rightDrawerOpen: false 
        })
    }

    // toggleRightSidemenu() {
    //     this.setState({ rightDrawerOpen: !this.state.rightDrawerOpen, leftDrawerOpen: false })
    // }

    render() {
        const { classes } = this.props
        return (
            <div className={this.props.classes.root}>
                <AppBar className={this.appbarClassNames}>
                    <Toolbar>
                        <IconButton icon="dehaze" onClick={this.toggleLeftSidemenu.bind(this)} />
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Xpensifiy
                        </Typography>
                        {/* <IconButton icon="mail" badge={21} onClick={this.toggleRightSidemenu.bind(this)} /> */}
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={this.state.leftDrawerOpen} variant="persistent">
                    <List component="nav">
                        {[{ link: "/locations", title: "Location" }, { link: "/expenses", title: "Expenses" }, { link: "/profile", title: "Profile" }].map((value, index) => {
                            return (
                                <Link key={index} to={value.link} className={classes.link}>
                                    <ListItem button>
                                        <Typography variant="title" color="inherit">
                                            {value.title}
                                        </Typography>
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                </Drawer>
                <div className={this.contentClassNames}>
                    <div className={classes.drawerHeader} />
                    {this.props.children}
                </div>
                {/* <Drawer anchor="right" open={this.state.rightDrawerOpen}>
                    <Divider />
                    Ello
                </Drawer> */}
            </div>
        )
    }

    private get appbarClassNames(): string {
        const classNames: Array<string> = [this.props.classes.appBar]

        if (this.state.leftDrawerOpen) {
            classNames.push(this.props.classes.appBarShiftLeft)
        }

        // if (this.state.rightDrawerOpen) {
        //     classNames.push(this.props.classes.appBarShiftRight)
        // }

        return classNames.filter(e => e).join(" ")
    }

    private get contentClassNames(): string {
        const classNames: Array<string> = [this.props.classes.content]

        if (this.state.leftDrawerOpen) {
            classNames.push(this.props.classes.contentShiftLeft)
        }

        // if (this.state.rightDrawerOpen) {
        //     classNames.push(this.props.classes.contentShiftRight)
        // }

        return classNames.filter(e => e).join(" ")
    }
}

export default withStyles(styles as any)<Props>(Skeleton)