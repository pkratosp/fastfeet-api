import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { EditDeliveryManUseCase } from "./edit-delivery-man-use-case"
import { makeDeliveryMan } from "test/factories/make-delivery-man"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let editDeliverymanUseCase: EditDeliveryManUseCase

describe("Edit delivery man", () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        editDeliverymanUseCase = new EditDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be edit delivery man", async () => {

        const deliveryManFactory = makeDeliveryMan()

        inMemoryDeliveryManRepository.create(deliveryManFactory)

        const edit = await editDeliverymanUseCase.execute({
            cpf: deliveryManFactory.cpf,
            email: deliveryManFactory.email,
            phone: deliveryManFactory.phone,
            state: deliveryManFactory.state,
            city: 'new city',
            neighborhood: deliveryManFactory.neighborhood,
            street: deliveryManFactory.street,
            numberAddress: deliveryManFactory.numberAddress,
        })

        expect(edit.isRight()).toEqual(true)
        expect(edit.value?.deliveryMan.city).toEqual('new city')
    })

})