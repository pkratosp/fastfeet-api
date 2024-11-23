import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { CreateDeliveryManUseCase } from "./create-delivery-man-use-case"
import { InMemoryUserRepository } from "test/in-memory-user-repository"

let inMemoryUserRepository: InMemoryUserRepository
let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let sut: CreateDeliveryManUseCase

describe("CreateDeliveryManUseCase", () => {

    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository()
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        sut = new CreateDeliveryManUseCase(inMemoryUserRepository,inMemoryDeliveryManRepository)
    })

    it("should be able create delivery man", async () => {
        const result = await sut.execute({
            city: 'city teste',
            cpf: 333,
            dateOfBirth: '13/11/2000',
            email: 'jhondoe@gmail.com',
            fullName: 'jhon doe',
            neighborhood: 'neighborhood test',
            numberAddress: 555,
            phone: 9999,
            state: 'state test',
            street: 'street test',
            password: '123456'
        })

        expect(result.isRight()).toEqual(true)
        expect(result.value?.deliveryMan.fullName).toEqual(expect.any(String))
        expect(inMemoryUserRepository.itemsUser).toHaveLength(1)
    })

})