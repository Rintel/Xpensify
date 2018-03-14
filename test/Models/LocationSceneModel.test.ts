/** Import Tested Component */
import LocationSceneModel from '../../src/Models/LocationSceneModel/LocationSceneModel'

describe(`${LocationSceneModel.name}`, () => {

    describe(`constructor(): LocationSceneModel`, () => {
        let model: LocationSceneModel

        beforeAll(() => {
            model = new LocationSceneModel()
        })

        it("should return a model", () => {
            expect(model).toBeDefined()
        })

    })
})
