import { Either, right } from "../../../../core/either";
import { DeliveryMan } from "../../enterprise/entities/delivery-man";
import { User } from "../../enterprise/entities/user";
import { DeliveryManRepository } from "../repositories/delivery-man-repository";
import { UserRepository } from "../repositories/user-repository";

type CreateDeliveryManUseCaseRequest = {
    fullName: string
    cpf: number
    dateOfBirth: string
    phone: number
    email: string
    password: string
    state: string
    city: string
    neighborhood: string
    street: string
    numberAddress: number
}

type CreateDeliveryManUseCaseResponse = Either<
    null,
    {
        deliveryMan: DeliveryMan
    }
>

export class CreateDeliveryManUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly deliveryManRepository: DeliveryManRepository,
    ) {}

    async execute(data: CreateDeliveryManUseCaseRequest): Promise<CreateDeliveryManUseCaseResponse> {

        const user = User.create({
            ...data,
            typeUser: 'deliveryMan'
        })

        await this.userRepository.create(user)

        const deliveryMan = DeliveryMan.create(data)

        await this.deliveryManRepository.create(deliveryMan)

        return right({
            deliveryMan: deliveryMan
        })
    }
}