import { Either, left, right } from '@/core/either';
import { RecipientRepository } from '../repositories/recipient-repository';
import { Recipient } from '../../enterprise/entities/recipient';

type EditRecipientUseCaseRequest = {
  nameRecipient: string;
  cpfRecipient: number;
  phoneRecipient: number;
  cepRecipient: number;
  stateRecipient: string;
  cityRecipient: string;
  neighborhoodRecipient: string;
  streetRecipient: string;
  numberAddressRecipient: number;
};

type EditRecipientUseCaseResponse = Either<
  Error,
  {
    recipient: Recipient;
  }
>;

export class EditRecipientUseCase {
  constructor(private readonly recipientRepository: RecipientRepository) {}

  async execute(
    data: EditRecipientUseCaseRequest,
  ): Promise<EditRecipientUseCaseResponse> {
    const findRecipient = await this.recipientRepository.findByRecipient(
      data.cpfRecipient,
    );

    if (!findRecipient) {
      return left(new Error('Destinatario nao encontrado'));
    }

    findRecipient.phoneRecipient = data.phoneRecipient;
    findRecipient.cepRecipient = data.cepRecipient;
    findRecipient.stateRecipient = data.stateRecipient;
    findRecipient.cityRecipient = data.cityRecipient;
    findRecipient.neighborhoodRecipient = data.neighborhoodRecipient;
    findRecipient.streetRecipient = data.streetRecipient;
    findRecipient.numberAddressRecipient = data.numberAddressRecipient;

    await this.recipientRepository.save(findRecipient);

    return right({
      recipient: findRecipient,
    });
  }
}
