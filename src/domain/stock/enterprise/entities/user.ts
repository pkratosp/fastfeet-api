import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity";

export interface UserProps {
    fullName: string
    email: string
    phone: number
    cpf: number
    password: string
    typeUser: 'admin' | 'deliveryMan'
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

    get password() {
        return this.props.password
    }

    get typeUser() {
        return this.props.typeUser
    }

    static create(
        props: UserProps,
        id?: UniqueEntityID
    ) {
        const user = new User(props, id)
        return user
    }
}