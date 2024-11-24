import { Either, left, right } from '@/core/either';
import { PhotoPackageRepository } from '../repositories/photo-package-repository';
import { Uploader } from '../storage/uploader';
import { PhotoPackage } from '../../enterprise/entities/photo-package';

type UploadPhotoUseCaseRequest = {
  fileName: string;
  fileType: string;
  body: Buffer;
};

type UploadPhotoUseCaseResponse = Either<
  Error,
  {
    url: string;
  }
>;

export class UploadPhotoUseCase {
  constructor(
    private readonly uploader: Uploader,
    private readonly photoPackageRepository: PhotoPackageRepository,
  ) {}

  async execute({
    body,
    fileName,
    fileType,
  }: UploadPhotoUseCaseRequest): Promise<UploadPhotoUseCaseResponse> {
    if (!/^(image\/(jpeg|png|gif|bmp))$/.test(fileType)) {
      return left(new Error(`O arquivo ${fileType} não é permitido`));
    }

    const upload = await this.uploader.save({ body, fileName, fileType });

    const photoPackage = PhotoPackage.create({ url: upload.url });

    await this.photoPackageRepository.create(photoPackage);

    return right({
      url: upload.url,
    });
  }
}
