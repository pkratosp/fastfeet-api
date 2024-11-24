import { InMemoryPackageRepository } from "test/in-memory-package-repository"
import { RegisterNewPackageUseCase } from "./register-new-package-use-case"
import { randomUUID } from "node:crypto"

let inMemoryPackageRepository: InMemoryPackageRepository
let sut: RegisterNewPackageUseCase

describe("RegisterNewPackageUseCase", () => {

    beforeEach(() => {
        inMemoryPackageRepository = new InMemoryPackageRepository()
        sut = new RegisterNewPackageUseCase(inMemoryPackageRepository)
    })

    it("should register new package", async () => {
        const result = await sut.execute({
            description: 'description package',
            trackingNumber: randomUUID(),
            weightAndDimension: '80 x 80 x 80',
            retrieveDelivery: false,
            returnedOrder: false,
            status: 0
        })

        expect(result.isRight()).toEqual(true)
        expect(result.value?.package.id.toValue()).toEqual(expect.any(String))
    })

})