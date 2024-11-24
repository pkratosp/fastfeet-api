import { Uploader, UploaderParams } from "@/domain/stock/application/storage/uploader"
import { randomUUID } from "node:crypto"

interface Upload {
    fileName: string
    url: string
}

export class FakeUploader implements Uploader {
    public uploadItems: Upload[] = []

    async save({ fileName }: UploaderParams): Promise<{ url: string }> {
        const url = randomUUID()

        this.uploadItems.push({
            fileName,
            url
        })

        return {
            url
        }
    }
}