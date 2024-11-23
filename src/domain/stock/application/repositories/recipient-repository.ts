import { Recipient } from "../../enterprise/entities/recipient";

export abstract class RecipientRepository {
    abstract create(data: Recipient): Promise<void>
    abstract save(data: Recipient): Promise<void>
    abstract delete(data: Recipient): Promise<void>
}