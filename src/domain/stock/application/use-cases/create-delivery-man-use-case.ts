import { Either, right } from "../../../../core/either";
import { DeliveryMan } from "../../enterprise/entities/delivery-man";
import { DeliveryManRepository } from "../repositories/delivery-man-repository";

type CreateDeliveryManUseCaseRequest = {
    fullName: string
    cpf: number
    dateOfBirth: string
    phone: number
    email: string
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
    constructor(private readonly deliveryManRepository: DeliveryManRepository) {}

    async execute(data: CreateDeliveryManUseCaseRequest): Promise<CreateDeliveryManUseCaseResponse> {

        const deliveryMan = DeliveryMan.create(data)

        await this.deliveryManRepository.create(deliveryMan)

        return right({
            deliveryMan: deliveryMan
        })
    }
}