import { InMemoryPackageRepository } from "test/in-memory-package-repository"
import { RetrieveDeliveryUseCase } from "./retrieve-delivery-use-case"
import { makePackage } from "test/factories/make-package"

let inMemoryPackageRepository: InMemoryPackageRepository
let sut: RetrieveDeliveryUseCase

describe("RetrieveDeliveryUseCase", () => {

    beforeEach(() => {
        inMemoryPackageRepository = new InMemoryPackageRepository()
        sut = new RetrieveDeliveryUseCase(inMemoryPackageRepository)
    })

    it("should be retrieve delivery", async () => {

        const fakePackage = makePackage({ trackingNumber: "3333" })

        inMemoryPackageRepository.create(fakePackage)

        const result = await sut.execute({ trackingNumber: "3333" })

        expect(result.isRight()).toEqual(true)
        expect(inMemoryPackageRepository.items[0]).toEqual(
            expect.objectContaining({
                status: 1,
                retrieveDelivery: true
            })
        )

    })

})