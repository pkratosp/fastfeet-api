import { UniqueEntityID } from "@/core/entities/unique-entity";
import { Package, PackageProps } from "@/domain/stock/enterprise/entities/package";
import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";

export function makePackage(
    override: Partial<PackageProps> = {},
    id?: UniqueEntityID
) {
    const _package = Package.create({
        description: faker.lorem.text(),
        trackingNumber: randomUUID(),
        weightAndDimension: faker.lorem.text(),
        retrieveDelivery: false,
        returnedOrder: false,
        status: 0,
        ...override
    }, id)


    return _package
}