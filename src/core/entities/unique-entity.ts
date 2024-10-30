import { randomUUID } from 'node:crypto'

export class UniqueEntity {
    private value: string

    toString() {
        return this.value
    }

    toValue() {
        return this.value
    }

    constructor(id?: string) {
        this.value = id ?? randomUUID()
    }

    public equals(id: UniqueEntity) {
        return id.toValue() === this.value
    }
}