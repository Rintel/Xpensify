import * as React from "react"
import BaseScene from "../BaseScene/BaseScene"

export interface Props {
}

export interface State {
}

export default class ProfileScene extends BaseScene<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    // Override from BaseScene
    renderContent() {
        return (
            <div>
                Profile
            </div>
        )
    }
}
