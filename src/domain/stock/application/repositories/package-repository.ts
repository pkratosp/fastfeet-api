import { Package } from '../../enterprise/entities/package';

export abstract class PackageRepository {
  abstract create(data: Package): Promise<void>;
  abstract findByTrackingNumber(
    trackingNumber: string,
  ): Promise<Package | null>;
  abstract save(data: Package): Promise<void>;
  abstract delete(data: Package): Promise<void>;
}
