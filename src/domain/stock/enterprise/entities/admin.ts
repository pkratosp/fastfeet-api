import { Entity } from "../../../../core/entities/entity";
import { UniqueEntity } from "../../../../core/entities/unique-entity";

export interface AdminProps {
    fullName: string
    cpf: number
    phone: number
    email: string
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

    static create(
        props: AdminProps,
        id?: UniqueEntity
    ) {
        const admin = new Admin(props, id)

        return admin
    }
}