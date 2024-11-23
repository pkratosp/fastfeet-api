import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity";
import { Optional } from "../../../../core/types/optional";

export interface RecipientProps {
    nameRecipient: string
    cpfRecipient: number
    phoneRecipient: number
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

    get nameRecipient() {
        return this.props.nameRecipient
    }

    set nameRecipient(nameRecipient: string) {
        this.props.nameRecipient = nameRecipient
        this.touch()
    }

    get cpfRecipient() {
        return this.props.cpfRecipient
    }

    set cpfRecipient(cpfRecipient: number) {
        this.props.cpfRecipient = cpfRecipient
        this.touch()
    }

    get phoneRecipient() {
        return this.props.phoneRecipient
    }

    set phoneRecipient(phoneRecipient: number) {
        this.props.phoneRecipient = phoneRecipient
        this.touch()
    }

    get cepRecipient() {
        return this.props.cepRecipient
    }

    set cepRecipient(cepRecipient: number) {
        this.props.cepRecipient = cepRecipient
        this.touch()
    }

    get stateRecipient() {
        return this.props.stateRecipient
    }

    set stateRecipient(stateRecipient: string) {
        this.props.stateRecipient = stateRecipient
        this.touch()
    }

    get cityRecipient() {
        return this.props.cityRecipient
    }

    set cityRecipient(cityRecipient: string) {
        this.props.cityRecipient = cityRecipient
        this.touch()
    }

    get neighborhoodRecipient() {
        return this.props.neighborhoodRecipient
    }

    set neighborhoodRecipient(neighborhoodRecipient: string) {
        this.props.neighborhoodRecipient = neighborhoodRecipient
        this.touch()
    }

    get streetRecipient() {
        return this.props.streetRecipient
    }

    set streetRecipient(streetRecipient: string) {
        this.props.streetRecipient = streetRecipient
        this.touch()
    }

    get numberAddressRecipient() {
        return this.props.numberAddressRecipient
    }

    set numberAddressRecipient(numberAddressRecipient: number) {
        this.props.numberAddressRecipient = numberAddressRecipient
        this.touch()
    }

    private touch() {
        this.props.updatedAt = new Date()
    }

    static create(
        props: Optional<RecipientProps, 'createdAt'>,
        id?: UniqueEntityID
    ) {
        const recipient = new Recipient({
            ...props,
            createdAt: props.createdAt ?? new Date()
        }, id)

        return recipient
    }

}