import Card from "@/components/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [quantityDoors, setQuantityDoors] = useState(3);
  const [giftDoor, setGiftDoor] = useState(3);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde portas?" 
            value={quantityDoors}
            onChange={newQuantity => setQuantityDoors(newQuantity)}></NumberInput>
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Porta com presente?" 
            value={giftDoor}
            onChange={newGift => setGiftDoor(newGift)}></NumberInput>
        </Card>
        <Link href={`/game/${quantityDoors}/${giftDoor}`}>
          <Card bgcolor="#28a085">
            <h2 className={styles.link}>Iniciar</h2>
          </Card>
        </Link>
      </div>
    </div>
  );
}
