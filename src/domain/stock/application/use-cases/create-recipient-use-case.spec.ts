import { InMemoryRecipientRepository } from 'test/in-memory-recipient-repository';
import { CreateRecipientUseCase } from './create-recipient-use-case';

let inMemoryRecipientRepository: InMemoryRecipientRepository;
let sut: CreateRecipientUseCase;

describe('CreateRecipientUseCase', () => {
  beforeEach(() => {
    inMemoryRecipientRepository = new InMemoryRecipientRepository();
    sut = new CreateRecipientUseCase(inMemoryRecipientRepository);
  });

  it('should be create recipient', async () => {
    const result = await sut.execute({
      cepRecipient: 3333,
      cityRecipient: 'sao paulo',
      nameRecipient: 'jhon doe',
      neighborhoodRecipient: 'bairro',
      numberAddressRecipient: 444,
      phoneRecipient: 9999,
      stateRecipient: 'sp',
      streetRecipient: 'rua',
      cpfRecipient: 66666,
    });

    expect(result.isRight()).toEqual(true);
    expect(result.value?.recipient).toEqual(
      expect.objectContaining({
        cepRecipient: 3333,
        cityRecipient: 'sao paulo',
        nameRecipient: 'jhon doe',
      }),
    );
  });
});
