import { Either, left, right } from "@/core/either";
import { PackageRepository } from "../repositories/package-repository";
import { Package } from "../../enterprise/entities/package";

type EditPackageUseCaseRequest = {
    trackingNumber: string
    description: string
    weightAndDimension: string
}

type EditPackageUseCaseResponse = Either<Error, {
    package: Package
}>

export class EditPackageUseCase {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute(data: EditPackageUseCaseRequest): Promise<EditPackageUseCaseResponse> {

        const findPackage = await this.packageRepository.findByTrackingNumber(data.trackingNumber)

        if(!findPackage) {
            return left(new Error('Encomenda nao econtrada'))
        }

        findPackage.description = data.description
        findPackage.weightAndDimension = data.weightAndDimension

        await this.packageRepository.save(findPackage)

        return right({
            package: findPackage
        })
    }
}