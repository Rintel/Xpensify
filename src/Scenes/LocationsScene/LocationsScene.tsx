import * as React from "react"
import BaseScene from "../BaseScene/BaseScene"
import LocationSceneModel from "../../Models/LocationSceneModel/LocationSceneModel"

export interface Props {
    model: LocationSceneModel
}

export interface State {
}

export default class LocationsScene extends BaseScene<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    // Override from BaseScene
    renderContent() {
        return (
            <div>
                Locations
            </div>
        )
    }
}
