import { Either, left, right } from '@/core/either';
import { DeliveryManRepository } from '../repositories/delivery-man-repository';
import { DeliveryMan } from '../../enterprise/entities/delivery-man';

type EditDeliveryManUseCaseRequest = {
  cpf: number;
  email: string;
  phone: number;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  numberAddress: number;
};

type EditDeliveryManUseCaseResponse = Either<
  Error,
  {
    deliveryMan: DeliveryMan;
  }
>;

export class EditDeliveryManUseCase {
  constructor(private readonly deliveryManRepository: DeliveryManRepository) {}

  async execute(
    data: EditDeliveryManUseCaseRequest,
  ): Promise<EditDeliveryManUseCaseResponse> {
    let findDeliveryMan = await this.deliveryManRepository.findByCPF(data.cpf);

    if (!findDeliveryMan) {
      return left(new Error('Não encontrado'));
    }

    findDeliveryMan.email = data.email;
    findDeliveryMan.phone = data.phone;
    findDeliveryMan.state = data.state;
    findDeliveryMan.city = data.city;
    findDeliveryMan.neighborhood = data.neighborhood;
    findDeliveryMan.street = data.street;
    findDeliveryMan.numberAddress = data.numberAddress;

    await this.deliveryManRepository.save(findDeliveryMan);

    return right({
      deliveryMan: findDeliveryMan,
    });
  }
}
