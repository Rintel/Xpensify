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

        it("should render a <div />", () => {
            expect(html.contains(<div />)).toBe(true)
        })
    })
})
