import { InMemoryUserRepository } from 'test/in-memory-user-repository';
import { AuthenticateUseCase } from './authenticate-use-case';
import { InMemoryDeliveryManRepository } from 'test/in-memory-delivery-man-repository';
import { makeUser } from 'test/factories/make-user';
import { makeDeliveryMan } from 'test/factories/make-delivery-man';

let inMemoryUserRepository: InMemoryUserRepository;
let inMemoryDeliveryManRepository: InMemoryDeliveryManRepository;
let sut: AuthenticateUseCase;

describe('AuthenticateUseCase', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    inMemoryDeliveryManRepository = new InMemoryDeliveryManRepository();
    sut = new AuthenticateUseCase(
      inMemoryUserRepository,
      inMemoryDeliveryManRepository,
    );
  });

  it('should be authenticate user admin', async () => {
    const fakeUser = makeUser({ typeUser: 'admin' });

    inMemoryUserRepository.create(fakeUser);

    const result = await sut.execute({
      cpf: fakeUser.cpf,
      password: fakeUser.password,
    });

    expect(result.isRight()).toEqual(true);
    expect(result.value).toMatchObject({
      user: expect.objectContaining({
        fullName: expect.any(String),
      }),
    });
  });

  it('should be authenticate delivery man', async () => {
    const fakeUser = makeUser({ typeUser: 'deliveryMan', cpf: 3333 });
    const fakeDeliveryMan = makeDeliveryMan({ cpf: 3333 });

    inMemoryUserRepository.create(fakeUser);
    inMemoryDeliveryManRepository.create(fakeDeliveryMan);

    const result = await sut.execute({
      cpf: fakeUser.cpf,
      password: fakeUser.password,
    });

    expect(result.isRight()).toEqual(true);
    expect(result.value).toMatchObject({
      user: expect.objectContaining({
        fullName: expect.any(String),
      }),
    });
  });
});
