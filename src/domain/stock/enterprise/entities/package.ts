import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity';
import { Optional } from '../../../../core/types/optional';

export interface PackageProps {
  trackingNumber: string;
  description: string;
  weightAndDimension: string;
  status: number; // 0 enviando, 1 enviado, 2 disponivel para retirada
  retrieveDelivery: boolean;
  returnedOrder: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

// encomenda
export class Package extends Entity<PackageProps> {
  get trackingNumber() {
    return this.props.trackingNumber;
  }

  set trackingNumber(trackingNumber: string) {
    this.props.trackingNumber = trackingNumber;
    this.touch();
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
    this.touch();
  }

  get weightAndDimension() {
    return this.props.weightAndDimension;
  }

  set weightAndDimension(weightAndDimension: string) {
    this.props.weightAndDimension = weightAndDimension;
    this.touch();
  }

  get status() {
    return this.props.status;
  }

  set status(status: number) {
    this.props.status = status;
    this.touch();
  }

  get retrieveDelivery() {
    return this.props.retrieveDelivery;
  }

  set retrieveDelivery(retrieveDelivery: boolean) {
    this.props.retrieveDelivery = retrieveDelivery;
    this.touch();
  }

  get returnedOrder() {
    return this.props.returnedOrder;
  }

  set returnedOrder(returnedOrder: boolean) {
    this.props.returnedOrder = returnedOrder;
    this.touch();
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<PackageProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const _package = new Package(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return _package;
  }
}
