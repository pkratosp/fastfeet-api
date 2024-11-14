import { Either, right } from "@/core/either";
import { PackageRepository } from "../repositories/package-repository";
import { Package } from "../../enterprise/entities/package";

type RegisterNewPackageUseCaseRequest = {
    trackingNumber: string
    description: string
    weightAndDimension: string
}

type RegisterNewPackageUseCaseResponse = Either<null, {
    package: Package
}>

export class RegisterNewPackageUseCase {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute(data: RegisterNewPackageUseCaseRequest): Promise<RegisterNewPackageUseCaseResponse> {
        const newPackage = Package.create(data)

        await this.packageRepository.create(newPackage)

        return right({
            package: newPackage
        })
    }
}