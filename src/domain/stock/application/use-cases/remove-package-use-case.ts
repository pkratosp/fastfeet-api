import { Either, left, right } from "@/core/either";
import { PackageRepository } from "../repositories/package-repository";

type RemovePackageUseCaseRequest = {
    trackingNumber: string
}

type RemovePackageUseCaseResponse = Either<Error, string>

export class RemovePackageUseCase {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute({ trackingNumber }: RemovePackageUseCaseRequest): Promise<RemovePackageUseCaseResponse> {
        
        const findPackage = await this.packageRepository.findByTrackingNumber(trackingNumber)

        if(!findPackage) {
            return left(new Error('Encomenda nao econtrada'))
        }

        await this.packageRepository.delete(findPackage)

        return right('ok')
    }
}