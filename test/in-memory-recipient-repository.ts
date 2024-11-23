import { RecipientRepository } from "@/domain/stock/application/repositories/recipient-repository";
import { Recipient } from "@/domain/stock/enterprise/entities/recipient";

export class InMemoryRecipientRepository implements RecipientRepository {
    
    public items: Recipient[] = []

    async create(data: Recipient): Promise<void> {
        this.items.push(data)
    }

    async save(data: Recipient): Promise<void> {
        const findIndex = this.items.findIndex((recipient) => recipient.id === data.id)

        this.items[findIndex] = data
    }

    async delete(data: Recipient): Promise<void> {
        const remove = this.items.filter((recipient) => recipient.id !== data.id)

        this.items = remove
    }

}