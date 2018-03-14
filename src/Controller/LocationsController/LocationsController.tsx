import * as React from "react"
import LocationsScene from "../../Scenes/LocationsScene/LocationsScene"

export interface Props {
    children?: React.ReactNode
}

export interface State {
}

export default class LocationsController extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <LocationsScene />
        )
    }
}
