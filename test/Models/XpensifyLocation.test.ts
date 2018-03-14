/** Import Tested Component */
import XpensifyLocation from '../../src/Models/XpensifyLocation/XpensifyLocation'

describe(`${XpensifyLocation.name}`, () => {

    describe(`constructor(): XpensifyLocation`, () => {
        let model: XpensifyLocation

        beforeAll(() => {
            model = new XpensifyLocation()
        })

        it("should return a model", () => {
            expect(model).toBeDefined()
        })

    })
})
