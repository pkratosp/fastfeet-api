import { FakeUploader } from "test/uploader/fake-uploader"
import { UploadPhotoUseCase } from "./upload-photo-use-case"
import { InMemoryPhotoPackageRepository } from "test/in-memory-photo-package-repository"

let inMemoryPhotoPackageRepository: InMemoryPhotoPackageRepository
let fakeUploader: FakeUploader
let sut: UploadPhotoUseCase

describe("UploadPhotoUseCase", () => {

    beforeEach(() => {
        inMemoryPhotoPackageRepository = new InMemoryPhotoPackageRepository()
        fakeUploader = new FakeUploader()
        sut = new UploadPhotoUseCase(fakeUploader, inMemoryPhotoPackageRepository)
    })

    it("should be able upload file and create register", async () => {
        const result = await sut.execute({
            body: Buffer.from(''),
            fileName: 'photo-test.png',
            fileType: 'image/png'
        })

        expect(result.isRight()).toEqual(true)
        expect(result.value).toEqual({
            url: inMemoryPhotoPackageRepository.items[0].url
        })
        expect(fakeUploader.uploadItems).toHaveLength(1)
    })

    // should not be able to upload a photo with invalid file type
    it("should not be able to upload a photo with invalid file type", async () => {
        const result = await sut.execute({
            body: Buffer.from(''),
            fileName: 'photo-test.pdf',
            fileType: 'application/pdf'
        })

        expect(result.isLeft()).toEqual(true)
        expect(fakeUploader.uploadItems).toHaveLength(0)
        expect(result.value).toBeInstanceOf(Error)
    })
})