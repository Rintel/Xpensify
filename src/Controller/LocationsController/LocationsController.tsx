import * as React from "react"
import LocationsScene from "../../Scenes/LocationsScene/LocationsScene"
import LocationSceneModel from "../../Models/LocationSceneModel/LocationSceneModel"

export interface Props {
}

export interface State {
    model: LocationSceneModel
}

export default class LocationsController extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            model: new LocationSceneModel()
        }
    }

    componentWillMount() {
        // load model
    }

    render() {
        return (
            <LocationsScene model={this.state.model} />
        )
    }
}
