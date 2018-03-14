/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import BaseScene from "../../src/Scenes/BaseScene/BaseScene"

describe(`<${BaseScene.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<BaseScene />)
        })

        it("should render a <div />", () => {
            expect(html.contains(<div />)).toBe(true)
        })
    })
})
