import { InMemoryDeliveryManRepository } from "test/in-memory-delivery-man-repository"
import { RemoveDeliveryManUseCase } from "./remove-delivery-man-use-case"
import { makeDeliveryMan } from "test/factories/make-delivery-man"

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository
let removeDeliveryManUseCase: RemoveDeliveryManUseCase

describe("Remove delivery man", () => {

    beforeEach(() => {
        inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository()
        removeDeliveryManUseCase = new RemoveDeliveryManUseCase(inMemoryDeliveryManRepository)
    })

    it("should be delete delivery man", async () => {

        const deliveryManFactory = makeDeliveryMan()

        inMemoryDeliveryManRepository.create(deliveryManFactory)

        const removeDeliveryMan = await removeDeliveryManUseCase.execute(deliveryManFactory)

        expect(removeDeliveryMan.value).toEqual('ok')
        expect(inMemoryDeliveryManRepository.items).toHaveLength(0)
    })

})