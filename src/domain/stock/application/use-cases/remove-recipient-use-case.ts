import { Either, left, right } from "@/core/either";
import { RecipientRepository } from "../repositories/recipient-repository";

type RemoveRecipientUseCaseRequest = {
    cpfRecipient: number
}

type RemoveRecipientUseCaseResponse = Either<Error, {
    isRemoveRecipient: boolean
}>

export class RemoveRecipientUseCase {
    constructor(private readonly recipientRepository: RecipientRepository) {}

    async execute({ cpfRecipient }: RemoveRecipientUseCaseRequest): Promise<RemoveRecipientUseCaseResponse> {

        const recipient = await this.recipientRepository.findByRecipient(cpfRecipient)

        if(!recipient) {
            return left(new Error('Destinatario não encontrado'))
        }

        await this.recipientRepository.delete(recipient)

        return right({
            isRemoveRecipient: true
        })
    }
}