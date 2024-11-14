import { UniqueEntityID } from "@/core/entities/unique-entity"
import { DeliveryMan, DeliveryManProps } from "@/domain/stock/enterprise/entities/delivery-man"
import { faker } from "@faker-js/faker"

export function makeDeliveryMan(
    override: Partial<DeliveryManProps> = {},
    id?: UniqueEntityID,
) {
    const deliveryman = DeliveryMan.create({
        city: faker.location.city(),
        cpf: faker.helpers.rangeToNumber(6),
        dateOfBirth: faker.person.fullName(),
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        neighborhood: faker.location.direction(),
        numberAddress: faker.helpers.rangeToNumber(4),
        phone: Number(faker.phone.number().replace(/-/g, '')),
        state: faker.location.state(),
        street: faker.location.street(),
        ...override,
    }, id)

    return deliveryman
}