import { Either, left, right } from "@/core/either";
import { PackageRepository } from "../repositories/package-repository";

type RetrieveDeliveryUseCaseRequest = {
    trackingNumber: string
}

type RetrieveDeliveryUseCaseResponse = Either<Error, {
    isRetrieveDelivery: boolean
}>

export class RetrieveDeliveryUseCase {
    constructor(private readonly packageRepository: PackageRepository) {}

    async execute({ trackingNumber }: RetrieveDeliveryUseCaseRequest): Promise<RetrieveDeliveryUseCaseResponse> {

        const findPackage = await this.packageRepository.findByTrackingNumber(trackingNumber)

        if(!findPackage) {
            return left(new Error("Encomenda nao encontrada"))
        }

        findPackage.retrieveDelivery = true
        findPackage.status = 1 // entregue

        await this.packageRepository.save(findPackage)

        return right({
            isRetrieveDelivery: true
        })
    }
}