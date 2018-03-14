/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import LocationsController from "../../src/Controller/LocationsController/LocationsController"

describe(`<${LocationsController.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<LocationsController />)
        })

        it("should render a <div />", () => {
            expect(html.contains(<div />)).toBe(true)
        })
    })
})
