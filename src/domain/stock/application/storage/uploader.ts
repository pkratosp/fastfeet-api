export interface UploaderParams {
    fileName: string
    fileType: string
    body: Buffer
}

export abstract class Uploader {
    abstract save(data: UploaderParams): Promise<{ url: string }>
}