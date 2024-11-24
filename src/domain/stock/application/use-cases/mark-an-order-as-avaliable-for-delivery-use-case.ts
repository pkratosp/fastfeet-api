import { Either, left, right } from "@/core/either"
import { PackageRepository } from "../repositories/package-repository"

type MarkAnOrderAvaliableForDeliveryUseCaseRequest = {
    trackingNumber: string
}

type MarkAnOrderAvaliableForDeliveryUseCaseResponse = Either<Error, {
    isMarkAnOrder: boolean
}>

export class MarkAnOrderAvaliableForDeliveryUseCase {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute(data: MarkAnOrderAvaliableForDeliveryUseCaseRequest): Promise<MarkAnOrderAvaliableForDeliveryUseCaseResponse> {

        const findPackage = await this.packageRepository.findByTrackingNumber(data.trackingNumber)

        if(!findPackage) {
            return left(new Error("Encomenda nao encontrada"))
        }

        findPackage.status = 2

        await this.packageRepository.save(findPackage)

        return right({
            isMarkAnOrder: true
        })
    }
}