import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity";
import { Optional } from "../../../../core/types/optional";


interface PackageProps {
    trackingNumber: string
    description: string
    weightAndDimension: string
    createdAt: Date
    updatedAt?: Date | null
}

// encomenda
export class Package extends Entity<PackageProps> {

    get trackingNumber() {
        return this.props.trackingNumber
    }

    get description() {
        return this.props.description
    }

    get weightAndDimension() {
        return this.props.weightAndDimension
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    static create(
        props: Optional<PackageProps, 'createdAt'>,
        id?: UniqueEntityID
    ) {
        const _package = new Package({
            ...props,
            createdAt: props.createdAt ?? new Date()
        }, id)

        return _package
    }

}