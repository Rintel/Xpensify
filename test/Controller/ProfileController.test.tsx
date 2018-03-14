/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import ProfileController from "../../src/Controller/ProfileController/ProfileController"

describe(`<${ProfileController.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<ProfileController />)
        })

        // until model
        it("should have empty props", () => {
            expect(html.props()).toEqual({})
        })
    })
})
