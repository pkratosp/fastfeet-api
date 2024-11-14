import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { FindByDeliveryManUseCase } from "./find-by-delivery-man-use-case"
import { makeDeliveryMan } from "test/factories/make-delivery-man"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let findByDeliveryManUseCase: FindByDeliveryManUseCase

describe("Find by cpf delivry man", async () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        findByDeliveryManUseCase = new FindByDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be find delivery man by cpf", async () => {

        const deliveryManFactory = makeDeliveryMan({ cpf: 3333 })

        inMemoryDeliveryManRepository.create(deliveryManFactory)

        const findDeliveryMan = await findByDeliveryManUseCase.execute({ cpf: 3333 })

        expect(findDeliveryMan.isRight()).toEqual(true)
        expect(findDeliveryMan.value?.deliveryMan.cpf).toEqual(3333)
    })

})