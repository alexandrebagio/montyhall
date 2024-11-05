import styles from "../../../styles/Game.module.css";
import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/door";
import DoorModel from "@/model/DoorModel";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Game() {
    const router = useRouter();
    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState<DoorModel[]>([]);
    
    useEffect(() => {
      const validQuantity= (+(router.query.doors ?? 0)  >= 3 && +(router.query.doors ?? 0) <=100);
      const validGift = (+(router.query.gift ?? 0) >= 1 && +(router.query.gift ?? 0) <= +(router.query.doors ?? 0));

      setValid(validQuantity && validGift);
    }, [doors, router.query.doors, router.query.gift]);

    useEffect(() => {
      const quantity= +(router.query.doors ?? 0);
      const gift =+(router.query.gift ?? 0);

      setDoors(createDoors(quantity, gift));
    }, [router?.query]);
    
    function renderDoors() {
      return doors.map(door => {
        return <Door key={door.number} 
          value={door} 
          onChange={door => setDoors(updateDoors(doors, door))}></Door>
      })
    }

    return (
      <div className={styles.game}>
        <div className={styles.doors}>
            { valid ? 
                renderDoors() :
                <h2>Valores inválidos</h2>
            }
        </div>
        <div className={styles.actions}>
            <Link href="/">
                <button> Reiniciar jogo </button>
            </Link>
        </div>
      </div>
    );
}