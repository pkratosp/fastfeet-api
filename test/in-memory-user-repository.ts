import { UserRepository } from '@/domain/stock/application/repositories/user-repository';
import { User } from '@/domain/stock/enterprise/entities/user';

export class InMemoryUserRepository implements UserRepository {
  public itemsUser: User[] = [];

  async create(data: User): Promise<void> {
    this.itemsUser.push(data);
  }

  async findByCPF(cpf: number): Promise<User | null> {
    const find = this.itemsUser.find((user) => user.cpf === cpf);

    return find ?? null;
  }
}
