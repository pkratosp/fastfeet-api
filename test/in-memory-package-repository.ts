import { PackageRepository } from "@/domain/stock/application/repositories/package-repository";
import { Package } from "@/domain/stock/enterprise/entities/package";

export class InMemoryPackageRepository implements PackageRepository {
    public items: Package[] = []

    async create(data: Package): Promise<void> {
        this.items.push(data)
    }
    
    async findByTrackingNumber(trackingNumber: string): Promise<Package | null> {
        const findPackage = this.items.find((_package) => _package.trackingNumber === trackingNumber)
        
        if(!findPackage) {
            return null
        }

        return findPackage
    }
    
    async save(data: Package): Promise<void> {
        const findIndex = this.items.findIndex((_package) => _package.id === data.id)

        this.items[findIndex] = data
    }
    
    async delete(data: Package): Promise<void> {
        const remove = this.items.filter((_package) => _package.id !== data.id)

        this.items = remove
    }
}