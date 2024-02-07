import styles from './Stopwatch.module.css';

const Laps = ({ laps }) => {
    return (
        <div className={styles.laps}>
            <h4>Lap Timings</h4>
            {laps.map((lap, i) => (
                <span key={i}>
                    Lap {i + 1}: {(lap / 1000).toFixed(3)} Seconds
                </span>
            ))}
        </div>
    )
}

export default Laps