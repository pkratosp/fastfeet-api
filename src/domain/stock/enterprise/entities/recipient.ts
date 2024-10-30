import { Entity } from "../../../../core/entities/entity";
import { UniqueEntity } from "../../../../core/entities/unique-entity";
import { Optional } from "../../../../core/types/optional";

interface RecipientProps {
    nameRecipient: string
    phoneRecipient: number
    email: string
    cepRecipient: number
    stateRecipient: string
    cityRecipient: string
    neighborhoodRecipient: string
    streetRecipient: string
    numberAddressRecipient: number
    createdAt: Date
    updatedAt?: Date | null
}

// destinatario
export class Recipient extends Entity<RecipientProps> {

    static create(
        props: Optional<RecipientProps, 'createdAt'>,
        id?: UniqueEntity
    ) {
        const recipient = new Recipient({
            ...props,
            createdAt: props.createdAt ?? new Date()
        }, id)

        return recipient
    }

}