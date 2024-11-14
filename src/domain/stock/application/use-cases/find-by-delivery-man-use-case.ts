import { Either, right } from "@/core/either";
import { DeliveryManRepository } from "../repositories/delivery-man-repository";
import { DeliveryMan } from "../../enterprise/entities/delivery-man";

type FindByDeliveryManUseCaseRequest = {
    cpf: number
}

type FindByDeliveryManUseCaseResponse = Either<null, {
    deliveryMan: DeliveryMan
}>

export class FindByDeliveryManUseCase {
    constructor(private readonly deliveryManRepository: DeliveryManRepository) {}

    async execute({ cpf }: FindByDeliveryManUseCaseRequest): Promise<FindByDeliveryManUseCaseResponse> {

        const findByDeliveryman = await this.deliveryManRepository.findByCPF(cpf)

        if(!findByDeliveryman) {
            throw new Error('Entregador não encontrado')
        }

        return right({
            deliveryMan: findByDeliveryman
        })
    }
}