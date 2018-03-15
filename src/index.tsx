import * as React from "react"
import * as ReactDOM from "react-dom"

import Router from "./Router"

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#a2d6ce",
			main: "#00aa8d",
			dark: "#008975",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#4e7fed"
		}
	}
})

ReactDOM.render(<MuiThemeProvider theme={theme}>
	<Router />
</MuiThemeProvider>, document.getElementById("root"))