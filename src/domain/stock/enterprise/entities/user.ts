import { Entity } from "../../../../core/entities/entity";
import { UniqueEntity } from "../../../../core/entities/unique-entity";

export interface UserProps {
    fullName: string
    email: string
    phone: number
    cpf: number
}

export class User extends Entity<UserProps> {

    get fullName() {
        return this.props.fullName
    }

    get email() {
        return this.props.email
    }

    get phone() {
        return this.props.phone
    }

    get cpf() {
        return this.props.cpf
    }

    static create(
        props: UserProps,
        id?: UniqueEntity
    ) {
        const user = new User(props, id)
        return user
    }
}