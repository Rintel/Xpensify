import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LocationsController from "./Controller/LocationsController/LocationsController"
import ExpensesScene from "./Scenes/ExpensesScene/ExpensesScene"
import ProfileScene from "./Scenes/ProfileScene/ProfileScene"

export default class Router extends React.Component<{}, {}> {
	private routes = [
		{ path: "/", component: LocationsController },
		{ path: "/locations", component: LocationsController },
		{ path: "/expenses", component: ExpensesScene },
		{ path: "/profile", component: ProfileScene }
	]

	private routesElements = this.routes.map((route, index) => {
		return <Route exact key={index} path={route.path} component={route.component} />
	})

	render() {
		return (
			<BrowserRouter>
				<Switch>
					{this.routesElements}
				</Switch>
			</BrowserRouter>
		)
	}
}