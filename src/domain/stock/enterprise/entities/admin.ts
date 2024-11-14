import { Entity } from "../../../../core/entities/entity";
import { UniqueEntityID } from "../../../../core/entities/unique-entity";

export interface AdminProps {
    fullName: string
    cpf: number
    phone: number
    email: string
    password: string
}

export class Admin extends Entity<AdminProps> {

    get fullName() {
        return this.props.fullName
    }

    get cpf() {
        return this.props.cpf
    }

    get phone() {
        return this.props.phone
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }

    static create(
        props: AdminProps,
        id?: UniqueEntityID
    ) {
        const admin = new Admin(props, id)

        return admin
    }
}