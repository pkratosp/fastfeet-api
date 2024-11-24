import { InMemoryPackageRepository } from 'test/in-memory-package-repository';
import { EditPackageUseCase } from './edit-package-use-case';
import { makePackage } from 'test/factories/make-package';

let inMemoryPackageRepository: InMemoryPackageRepository;
let sut: EditPackageUseCase;

describe('EditPackageUseCase', () => {
  beforeEach(() => {
    inMemoryPackageRepository = new InMemoryPackageRepository();
    sut = new EditPackageUseCase(inMemoryPackageRepository);
  });

  it('should be able edit package', async () => {
    const fakePackage = makePackage();

    inMemoryPackageRepository.create(fakePackage);

    const result = await sut.execute({
      description: 'new edit',
      trackingNumber: fakePackage.trackingNumber,
      weightAndDimension: fakePackage.weightAndDimension,
    });

    expect(result.isRight()).toEqual(true);
    expect(inMemoryPackageRepository.items[0]).toEqual(
      expect.objectContaining({
        description: 'new edit',
      }),
    );
  });
});
