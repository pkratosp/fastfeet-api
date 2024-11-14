import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { FindByDeliveryManUseCase } from "./find-by-delivery-man-use-case"
import { makeDeliveryMan } from "test/factories/make-delivery-man"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let sut: FindByDeliveryManUseCase

describe("FindByDeliveryManUseCase", async () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        sut = new FindByDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be able find delivery man by cpf", async () => {

        const fakeDeliveryMan = makeDeliveryMan({ cpf: 3333 })

        inMemoryDeliveryManRepository.create(fakeDeliveryMan)

        const result = await sut.execute({ cpf: 3333 })

        expect(result.isRight()).toEqual(true)
        expect(inMemoryDeliveryManRepository.items[0]).toEqual(
            expect.objectContaining({
                cpf: 3333
            })
        )
    })

})