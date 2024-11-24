import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity';

export interface PhotoPackageProps {
  url: string;
}

export class PhotoPackage extends Entity<PhotoPackageProps> {
  get url() {
    return this.props.url;
  }

  set url(url: string) {
    this.props.url = url;
  }

  static create(props: PhotoPackageProps, id?: UniqueEntityID) {
    const photoPackage = new PhotoPackage(props, id);

    return photoPackage;
  }
}
