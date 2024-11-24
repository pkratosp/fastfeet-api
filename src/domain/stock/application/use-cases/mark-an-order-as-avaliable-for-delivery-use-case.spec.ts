import { InMemoryPackageRepository } from "test/in-memory-package-repository"
import { MarkAnOrderAvaliableForDeliveryUseCase } from "./mark-an-order-as-avaliable-for-delivery-use-case"
import { makePackage } from "test/factories/make-package"

let inMemoryPackageRepository: InMemoryPackageRepository
let sut: MarkAnOrderAvaliableForDeliveryUseCase

describe("MarkAnOrderAvaliableForDeliveryUseCase", () => {
    beforeEach(() => {
        inMemoryPackageRepository = new InMemoryPackageRepository()
        sut = new MarkAnOrderAvaliableForDeliveryUseCase(inMemoryPackageRepository)
    })

    it("should be mark an order avaliable for delivery", async () => {

        const fakePackage = makePackage({ trackingNumber: "3333" })

        inMemoryPackageRepository.create(fakePackage)

        const result = await sut.execute({
            trackingNumber: "3333"
        })


        expect(result.isRight()).toEqual(true)
        expect(inMemoryPackageRepository.items[0]).toEqual(
            expect.objectContaining({
                status: 2
            })
        )
    })
})