import { InMemoryRecipientRepository } from 'test/in-memory-recipient-repository';
import { RemoveRecipientUseCase } from './remove-recipient-use-case';
import { makeRecipient } from 'test/factories/make-recipient';

let inMemoryRecipientRepository: InMemoryRecipientRepository;
let sut: RemoveRecipientUseCase;

describe('RemoveRecipientUseCase', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository();
    sut = new RemoveRecipientUseCase(inMemoryRecipientRepository);
  });

  it('should be remove recipient', async () => {
    const fakeRecipient = makeRecipient({ cpfRecipient: 3333 });

    inMemoryRecipientRepository.create(fakeRecipient);

    const result = await sut.execute({ cpfRecipient: 3333 });

    expect(result.isRight()).toEqual(true);
    expect(inMemoryRecipientRepository.items).toHaveLength(0);
  });
});
