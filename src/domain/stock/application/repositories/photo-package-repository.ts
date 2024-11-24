import { PhotoPackage } from "../../enterprise/entities/photo-package";

export abstract class PhotoPackageRepository {
    abstract create(data: PhotoPackage): Promise<void>
}