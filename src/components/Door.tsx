import DoorModel from '@/model/DoorModel';
import styles from '../styles/Door.module.css'
import Gift from './Gift';

export interface PropsParams {
    value: DoorModel
    onChange: (door: DoorModel) => void
}

export default function Door(props: PropsParams) {
    const door = props.value;
    const actived = door.actived && !door.opened ? styles.active : null;

    const open = (event: any) => {
        event.stopPropagation();
        return props.onChange(door.open())
    };

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}> { door.number }</div>
                <div title="Open Door" 
                    style={{ cursor: "pointer" }} 
                    className={styles.knob}
                    onClick={open}
                ></div>
            </div>
        )
    }

    return (
        <div className={styles.zone} onClick={() => props.onChange(door.select())}>
            <div className={`${styles.frame} ${actived}`}>
                { 
                    door.closed 
                        ? renderDoor()
                        : (door.haveGift ? <Gift /> : null)
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}