import { Either, right } from "@/core/either";
import { RecipientRepository } from "../repositories/recipient-repository";
import { Recipient } from "../../enterprise/entities/recipient";

type CreateRecipientUseCaseRequest = {
    nameRecipient: string
    phoneRecipient: number
    cepRecipient: number
    stateRecipient: string
    cityRecipient: string
    neighborhoodRecipient: string
    streetRecipient: string
    numberAddressRecipient: number
}

type CreateRecipientUseCaseResponse = Either<null,{
    recipient: Recipient
}>

export class CreateRecipientUseCase {
    constructor(private readonly recipientRepository: RecipientRepository) {}

    async execute(data: CreateRecipientUseCaseRequest): Promise<CreateRecipientUseCaseResponse> {

        const recipient = Recipient.create(data)

        await this.recipientRepository.create(recipient)
        
        return right({
            recipient: recipient
        })
    }
}