/** Import React */
import * as React from "react"

/** Import Test Enviroment */
import { shallow, ShallowWrapper } from "enzyme"

/** Import Tested Component */
import LocationsController from "../../src/Controller/LocationsController/LocationsController"
import LocationSceneModel from "../../src/Models/LocationSceneModel/LocationSceneModel"

describe(`<${LocationsController.name} />`, () => {

    describe("default", () => {
        let html: ShallowWrapper

        beforeAll(() => {
            html = shallow(<LocationsController />)
        })

        it("should create a new model as state", () => {
            // actually not as any, have to import locations controller state interface, #lazymodeany
            expect((html.state() as any).model).toBeInstanceOf(LocationSceneModel)
        })
    })
})
