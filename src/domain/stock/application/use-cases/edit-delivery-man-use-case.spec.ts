import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { EditDeliveryManUseCase } from "./edit-delivery-man-use-case"
import { makeDeliveryMan } from "test/factories/make-delivery-man"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let sut: EditDeliveryManUseCase

describe("EditDeliveryManUseCase", () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        sut = new EditDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be edit delivery man", async () => {

        const fakeDeliveryMan = makeDeliveryMan()

        inMemoryDeliveryManRepository.create(fakeDeliveryMan)

        const result = await sut.execute({
            cpf: fakeDeliveryMan.cpf,
            email: fakeDeliveryMan.email,
            phone: fakeDeliveryMan.phone,
            state: fakeDeliveryMan.state,
            city: 'new city',
            neighborhood: fakeDeliveryMan.neighborhood,
            street: fakeDeliveryMan.street,
            numberAddress: fakeDeliveryMan.numberAddress,
        })

        expect(result.isRight()).toEqual(true)
        expect(inMemoryDeliveryManRepository.items[0]).toEqual(
            expect.objectContaining({
                city: 'new city'
            })
        )
    })

})