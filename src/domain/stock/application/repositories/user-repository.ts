import { User } from "../../enterprise/entities/user";

export abstract class UserRepository {
    abstract create(data: User): Promise<void>
    abstract findByCPF(cpf: number): Promise<User | null>
}