import { UniqueEntity } from "./unique-entity";

export class Entity<Props> {
    private _id: UniqueEntity
    protected props: Props

    get id () {
        return this._id
    }

    constructor(props: Props, id?: UniqueEntity) {
        this.props = props
        this._id = id ?? new UniqueEntity(id)
    }

    toEquals(entity: Entity<any>) {
        if(entity === this) {
            return true
        }

        if(entity.id === this._id) {
            return true
        }

        return false
    }
}