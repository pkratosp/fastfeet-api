import { InMemoryDeliveryManRepository } from 'test/in-memory-delivery-man-repository';
import { RemoveDeliveryManUseCase } from './remove-delivery-man-use-case';
import { makeDeliveryMan } from 'test/factories/make-delivery-man';

let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository;
let sut: RemoveDeliveryManUseCase;

describe('RemoveDeliveryManUseCase', () => {
  beforeEach(() => {
    inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository();
    sut = new RemoveDeliveryManUseCase(inMemoryDeliveryManRepository);
  });

  it('should be able delete delivery man', async () => {
    const fakeDeliveryMan = makeDeliveryMan();

    inMemoryDeliveryManRepository.create(fakeDeliveryMan);

    const result = await sut.execute(fakeDeliveryMan);

    expect(result.value).toEqual('ok');
    expect(inMemoryDeliveryManRepository.items).toHaveLength(0);
  });
});
