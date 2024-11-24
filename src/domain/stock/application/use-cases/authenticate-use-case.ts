import { Either, left, right } from '@/core/either';
import { UserRepository } from '../repositories/user-repository';
import { Admin } from '../../enterprise/entities/admin';
import { DeliveryMan } from '../../enterprise/entities/delivery-man';
import { DeliveryManRepository } from '../repositories/delivery-man-repository';

type AuthenticateUseCaseRequest = {
  cpf: number;
  password: string;
};

type AuthenticateUseCaseReponse = Either<
  Error,
  {
    user: Admin | DeliveryMan;
  }
>;

export class AuthenticateUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly deliveryManRepository: DeliveryManRepository,
  ) {}

  async execute(
    data: AuthenticateUseCaseRequest,
  ): Promise<AuthenticateUseCaseReponse> {
    const findUser = await this.userRepository.findByCPF(data.cpf);

    if (!findUser) {
      return left(new Error('Usuário invalido'));
    }

    // TODO: tratar com senha incripitada
    if (findUser.password !== data.password) {
      return left(new Error('Usuário invalido'));
    }

    if (findUser.typeUser === 'admin') {
      const admin = Admin.create(findUser);

      return right({
        user: admin,
      });
    } else {
      const findDelivery = await this.deliveryManRepository.findByCPF(data.cpf);

      if (!findDelivery) {
        return left(new Error('Usuário invalido3'));
      }

      return right({
        user: findDelivery,
      });
    }
  }
}
