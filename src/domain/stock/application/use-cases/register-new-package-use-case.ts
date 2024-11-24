import { Either, right } from '@/core/either';
import { PackageRepository } from '../repositories/package-repository';
import { Package } from '../../enterprise/entities/package';

type RegisterNewPackageUseCaseRequest = {
  trackingNumber: string;
  description: string;
  weightAndDimension: string;
  status: number; // 0 enviando, 1 enviado, 2 disponivel para retirada
  retrieveDelivery: boolean;
  returnedOrder: boolean;
};

type RegisterNewPackageUseCaseResponse = Either<
  null,
  {
    package: Package;
  }
>;

export class RegisterNewPackageUseCase {
  constructor(private readonly packageRepository: PackageRepository) {}

  async execute(
    data: RegisterNewPackageUseCaseRequest,
  ): Promise<RegisterNewPackageUseCaseResponse> {
    const newPackage = Package.create(data);

    await this.packageRepository.create(newPackage);

    return right({
      package: newPackage,
    });
  }
}
