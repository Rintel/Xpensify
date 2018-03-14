import * as React from "react"
import ProfileScene from "../../Scenes/ProfileScene/ProfileScene"

export interface Props {
}

export interface State {
}

export default class ProfileController extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <ProfileScene />
        )
    }
}
