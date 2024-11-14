import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { CreateDeliveryManUseCase } from "./create-delivery-man-use-case"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let createDeliveryManUseCase: CreateDeliveryManUseCase

describe("Create delivery man", () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        createDeliveryManUseCase = new CreateDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be create delivery man", async () => {
        const deliveryMan = await createDeliveryManUseCase.execute({
            city: 'city teste',
            cpf: 333,
            dateOfBirth: '13/11/2000',
            email: 'jhondoe@gmail.com',
            fullName: 'jhon doe',
            neighborhood: 'neighborhood test',
            numberAddress: 555,
            phone: 9999,
            state: 'state test',
            street: 'street test'
        })

        expect(deliveryMan.isRight()).toEqual(true)
        expect(deliveryMan.value?.deliveryMan.fullName).toEqual(expect.any(String))
    })

})