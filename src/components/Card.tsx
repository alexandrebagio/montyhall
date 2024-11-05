import styles from '../styles/Card.module.css';

interface CardProps {
    bgcolor?: string
    children?: any|null
}

export default function Card(props: CardProps) {
    return (
        <div className={styles.card}
            style={{
                background: props.bgcolor ?? "#fff"
            }}> {props.children} </div>
    )
}