import { UniqueEntityID } from '@/core/entities/unique-entity';
import { User, UserProps } from '@/domain/stock/enterprise/entities/user';
import { faker } from '@faker-js/faker';

export function makeUser(
  override: Partial<UserProps> = {},
  id?: UniqueEntityID,
) {
  const user = User.create(
    {
      cpf: faker.helpers.rangeToNumber(10),
      email: faker.internet.email(),
      fullName: faker.person.fullName(),
      password: faker.internet.password(),
      phone: Number(faker.phone.number().replace(/-/g, '')),
      typeUser: 'admin',
      ...override,
    },
    id,
  );

  return user;
}
