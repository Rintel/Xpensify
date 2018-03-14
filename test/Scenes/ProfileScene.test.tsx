/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import ProfileScene from "../../src/Scenes/ProfileScene/ProfileScene"

describe(`<${ProfileScene.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<ProfileScene />)
        })

        it("should render a <div />", () => {
            expect(html.containsMatchingElement(<div>Profile</div>)).toBe(true)
        })
    })
})
