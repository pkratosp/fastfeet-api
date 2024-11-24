import { InMemoryPackageRepository } from 'test/in-memory-package-repository';
import { FindByTrackingNumberPackage } from './find-by-tracking-number-package';
import { makePackage } from 'test/factories/make-package';

let inMemoryPackageRepository: InMemoryPackageRepository;
let sut: FindByTrackingNumberPackage;

describe('FindByTrackingNumberPackage', () => {
  beforeEach(() => {
    inMemoryPackageRepository = new InMemoryPackageRepository();
    sut = new FindByTrackingNumberPackage(inMemoryPackageRepository);
  });

  it('should be able find package by trackingNumber', async () => {
    const fakePackage = makePackage({ description: 'description package' });

    inMemoryPackageRepository.create(fakePackage);

    const result = await sut.execute({
      trackingNumber: fakePackage.trackingNumber,
    });

    expect(result.isRight()).toEqual(true);
    expect(result.value).toMatchObject({
      package: expect.objectContaining({
        description: 'description package',
      }),
    });
  });
});
