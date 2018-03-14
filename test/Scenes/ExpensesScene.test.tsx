/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import ExpensesScene from "../../src/Scenes/ExpensesScene/ExpensesScene"

describe(`<${ExpensesScene.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<ExpensesScene />)
        })

        // until model is created
        it("should have empty state", () => {
            expect(html.state()).toEqual({})
        })
    })
})
