/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import LocationsScene from "../../src/Scenes/LocationsScene/LocationsScene"
import LocationSceneModel from "../../src/Models/LocationSceneModel"

describe(`<${LocationsScene.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper
        let model: LocationSceneModel

        beforeAll(() => {
            model = new LocationSceneModel()
            html = shallow(<LocationsScene model={model} />)
        })

        it("should render a <div />", () => {
            expect(html.containsMatchingElement(<div>Locations</div>)).toBe(true)
        })
    })
})
