import { AggregateRoot } from '../../../../core/entities/aggregate-root';
import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity';
import { Optional } from '../../../../core/types/optional';

export interface DeliveryManProps {
  fullName: string;
  cpf: number;
  dateOfBirth: string;
  phone: number;
  email: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  numberAddress: number;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class DeliveryMan extends AggregateRoot<DeliveryManProps> {
  get fullName() {
    return this.props.fullName;
  }

  get cpf() {
    return this.props.cpf;
  }

  get dateOfBirth() {
    return this.props.dateOfBirth;
  }

  get phone() {
    return this.props.phone;
  }

  set phone(phone: number) {
    this.props.phone = phone;
    this.touch();
  }

  get email() {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
    this.touch();
  }

  get state() {
    return this.props.state;
  }

  set state(state: string) {
    this.props.state = state;
    this.touch();
  }

  get city() {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
    this.touch();
  }

  get neighborhood() {
    return this.props.neighborhood;
  }

  set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
    this.touch();
  }

  get street() {
    return this.props.street;
  }

  set street(street: string) {
    this.props.street = street;
    this.touch();
  }

  get numberAddress() {
    return this.props.numberAddress;
  }

  set numberAddress(numberAddress: number) {
    this.props.numberAddress = numberAddress;
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
    props: Optional<DeliveryManProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const deliveryMan = new DeliveryMan(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return deliveryMan;
  }
}
