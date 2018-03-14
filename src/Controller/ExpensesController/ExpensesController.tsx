import * as React from "react"
import ExpensesScene from "../../Scenes/ExpensesScene/ExpensesScene"

export interface Props {
}

export interface State {
}

export default class ExpensesController extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <ExpensesScene />
        )
    }
}
