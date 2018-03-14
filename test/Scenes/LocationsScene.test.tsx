/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import LocationsScene from "../../src/Scenes/LocationsScene/LocationsScene"

describe(`<${LocationsScene.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<LocationsScene />)
        })

        it("should render a <div />", () => {
            expect(html.contains(<div />)).toBe(true)
        })
    })
})
