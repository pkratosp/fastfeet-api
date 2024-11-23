import { UniqueEntityID } from "@/core/entities/unique-entity";
import { Recipient, RecipientProps } from "@/domain/stock/enterprise/entities/recipient";
import { faker } from "@faker-js/faker";

export function makeRecipient(
    override: Partial<RecipientProps> = {},
    id?: UniqueEntityID
) {
    const recipient = Recipient.create({
        cityRecipient: faker.location.city(),
        cpfRecipient: faker.helpers.rangeToNumber(6),
        neighborhoodRecipient: faker.location.direction(),
        numberAddressRecipient: faker.helpers.rangeToNumber(4),
        phoneRecipient: Number(faker.phone.number().replace(/-/g, '')),
        stateRecipient: faker.location.state(),
        streetRecipient: faker.location.street(),
        cepRecipient: faker.helpers.rangeToNumber(6),
        nameRecipient: faker.person.fullName(),
        ...override
    }, id)

    return recipient
}