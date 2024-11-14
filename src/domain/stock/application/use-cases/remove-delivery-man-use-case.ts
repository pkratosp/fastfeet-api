import { Either, right } from "@/core/either";
import { DeliveryManRepository } from "../repositories/delivery-man-repository";
import { DeliveryMan } from "../../enterprise/entities/delivery-man";

type RemoveDeliveryManUseCaseRequest = DeliveryMan

type RemoveDeliveryManUseCaseResponse = Either<null, string>

export class RemoveDeliveryManUseCase {
    constructor(private readonly deliveryManRepository: DeliveryManRepository) {}

    async execute(data: RemoveDeliveryManUseCaseRequest): Promise<RemoveDeliveryManUseCaseResponse> {

        const findDeliveryMan = await this.deliveryManRepository.findByCPF(data.cpf)

        if(!findDeliveryMan) {
            throw new Error('Não encontrado')
        }

        await this.deliveryManRepository.delete(data)

        return right('ok')
    }
}