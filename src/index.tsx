import * as React from "react"
import * as ReactDOM from "react-dom"

import Router from "./Router"

import { createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import { MuiThemeProvider } from "material-ui"

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#a2d6ce",
			main: "#00aa8d",
			dark: "#008975",
			contrastText: "#ffffff"
		}
	}
})

ReactDOM.render(<MuiThemeProvider theme={theme}>
	<Router />
</MuiThemeProvider>, document.getElementById("root"))