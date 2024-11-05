export default class DoorModel {
    #number: number;
    #haveGift: boolean;
    #actived: boolean;
    #opened: boolean;

    constructor(number: number, haveGift = false, actived = false, opened = false) {
        this.#number = number;
        this.#haveGift = haveGift;
        this.#actived = actived;
        this.#opened = opened;
    }

    get number() {
        return this.#number
    }

    get haveGift() {
        return this.#haveGift
    }

    get actived() {
        return this.#actived
    }

    get opened() {
        return this.#opened
    }

    get closed() {
        return !this.#opened
    }

    select() {
        return new DoorModel(this.number, this.haveGift, !this.actived, this.opened);
    }

    unselect() {
        return new DoorModel(this.number, this.haveGift, false, this.opened);
    }

    open() {
        return new DoorModel(this.number, this.haveGift, this.actived, true);
    }
}