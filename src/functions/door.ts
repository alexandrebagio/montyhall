import DoorModel from "@/model/DoorModel";

export function createDoors(quantity: number, selected: number): DoorModel[] {
    return Array.from({length: quantity}, (v, k) => {

        return new DoorModel(k + 1, (k + 1) === selected);
    })
}

export function updateDoors(doors: DoorModel[], doorChanged: DoorModel): DoorModel[] {
    return doors.map(door => {
        if (door.number === doorChanged.number) {
            return doorChanged;
        } else {
            if (doorChanged.opened) {
                return door;
            } else {
                return door.unselect();
            }
        }
    })
}