import { InMemoryRecipientRepository } from "test/in-memory-recipient-repository"
import { EditRecipientUseCase } from "./edit-recipient-use-case"
import { makeRecipient } from "test/factories/make-recipient"

let inMemoryRecipientRepository: InMemoryRecipientRepository
let sut: EditRecipientUseCase

describe("EditRecipientUseCase", () => {

    beforeEach(() => {
        inMemoryRecipientRepository = new InMemoryRecipientRepository()
        sut = new EditRecipientUseCase(inMemoryRecipientRepository)
    })

    it("should be edit recipient", async () => {

        const fakeRecipient = makeRecipient({ cpfRecipient: 3333 })

        inMemoryRecipientRepository.create(fakeRecipient)

        const result = await sut.execute({
            cityRecipient: fakeRecipient.cityRecipient,
            cpfRecipient: fakeRecipient.cpfRecipient,
            nameRecipient: fakeRecipient.nameRecipient,
            neighborhoodRecipient: fakeRecipient.neighborhoodRecipient,
            numberAddressRecipient: fakeRecipient.numberAddressRecipient,
            phoneRecipient: fakeRecipient.phoneRecipient,
            stateRecipient: fakeRecipient.stateRecipient,
            streetRecipient: fakeRecipient.streetRecipient,
            cepRecipient: 4444
        })

        expect(result.isRight()).toEqual(true)
        expect(inMemoryRecipientRepository.items[0]).toEqual(
            expect.objectContaining({
                cepRecipient: 4444
            })
        )
    })
    
})