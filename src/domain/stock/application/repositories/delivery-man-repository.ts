import { DeliveryMan } from "../../enterprise/entities/delivery-man";

export abstract class DeliveryManRepository {
    abstract create(data: DeliveryMan): Promise<void>
    abstract findByCPF(cpf: string): Promise<DeliveryMan | null>
    abstract save(data: DeliveryMan): Promise<void>
    abstract delete(data: DeliveryMan): Promise<void>
}