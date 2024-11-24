import { PhotoPackageRepository } from "@/domain/stock/application/repositories/photo-package-repository";
import { PhotoPackage } from "@/domain/stock/enterprise/entities/photo-package";

export class InMemoryPhotoPackageRepository implements PhotoPackageRepository {
    
    public items: PhotoPackage[] = []

    async create(data: PhotoPackage): Promise<void> {
        this.items.push(data)
    }
}