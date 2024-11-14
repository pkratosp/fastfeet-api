import { DeliveryManRepository } from "@/domain/stock/application/repositories/delivery-man-repository";
import { DeliveryMan } from "@/domain/stock/enterprise/entities/delivery-man";

export class InMemoryDeliveryManRepository implements DeliveryManRepository {

    public items: DeliveryMan[] = []

    async create(data: DeliveryMan): Promise<void> {
        this.items.push(data)
    }
    
    async findByCPF(cpf: number): Promise<DeliveryMan | null> {
        const findByCPF = this.items.find((deliveryMan) => deliveryMan.cpf === cpf)

        return findByCPF ?? null
    }
    
    async save(data: DeliveryMan): Promise<void> {
        const findIndex = this.items.findIndex((deliveryMan) => deliveryMan.id === data.id)

        this.items[findIndex] = data
    }
    
    async delete(data: DeliveryMan): Promise<void> {
        const remove = this.items.filter((deliveryMan) => deliveryMan.id !== data.id)

        this.items = remove
    }

}