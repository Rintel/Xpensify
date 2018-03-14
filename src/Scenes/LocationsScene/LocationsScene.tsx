import * as React from "react"
import BaseScene from "../BaseScene/BaseScene"

export interface Props {
    children?: React.ReactNode
}

export interface State {
}

export default class LocationsScene extends BaseScene<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    renderContent() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
