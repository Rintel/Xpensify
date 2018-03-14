/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import ExpensesController from "../../src/Controller/ExpensesController/ExpensesController"

describe(`<${ExpensesController.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<ExpensesController />)
        })

        it("should render a <div />", () => {
            expect(html.contains(<div />)).toBe(true)
        })
    })
})
