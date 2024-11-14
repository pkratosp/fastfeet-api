import { Either, left, right } from "@/core/either";
import { PackageRepository } from "../repositories/package-repository";
import { Package } from "../../enterprise/entities/package";

type FindByTrackingNumberPackageRequest = {
    trackingNumber: string
}

type FindByTrackingNumberPackageResponse = Either<Error, {
    package: Package
}>

export class FindByTrackingNumberPackage {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute({ trackingNumber }: FindByTrackingNumberPackageRequest): Promise<FindByTrackingNumberPackageResponse> {

        const findPackage = await this.packageRepository.findByTrackingNumber(trackingNumber)

        if(!findPackage) {
            return left(new Error('Ecomenda não encontrada'))
        }

        return right({
            package: findPackage
        })
    }
}