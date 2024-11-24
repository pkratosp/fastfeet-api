import { InMemoryPackageRepository } from 'test/in-memory-package-repository';
import { RemovePackageUseCase } from './remove-package-use-case';
import { makePackage } from 'test/factories/make-package';

let inMemoryPackageRepository: InMemoryPackageRepository;
let sut: RemovePackageUseCase;

describe('RemovePackageUseCase', () => {
  beforeEach(() => {
    inMemoryPackageRepository = new InMemoryPackageRepository();
    sut = new RemovePackageUseCase(inMemoryPackageRepository);
  });

  it('should be able remove package', async () => {
    const fakePackage = makePackage();

    inMemoryPackageRepository.create(fakePackage);

    const result = await sut.execute({
      trackingNumber: fakePackage.trackingNumber,
    });

    expect(result.isRight()).toEqual(true);
    expect(inMemoryPackageRepository.items).toHaveLength(0);
  });
});
