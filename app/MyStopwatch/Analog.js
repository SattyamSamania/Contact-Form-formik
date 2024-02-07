import styles from './Stopwatch.module.css';

const Analog = ({ secs, laps }) => {

    const lapTime = (laps.length) ? (secs - laps.reduce((a, b) => a + b, 0)) : secs;

    return (
        <div className={`${styles.analog} ${styles.markingsDiv}`}>
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
            <span>35</span>
            <span>40</span>
            <span>45</span>
            <span>50</span>
            <span>55</span>
            <hr style={{ transform: `rotateZ(${((secs / 1000) % 60) * 6}deg)` }} />
            <div>
                <p>Lap {laps.length}</p>
                <div className={styles.markingsDiv}>
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35</span>
                    <span>40</span>
                    <span>45</span>
                    <span>50</span>
                    <span>55</span>
                    <hr style={{ backgroundColor: 'rgb(0,255,0)', transform: `rotateZ(${((lapTime / 1000) % 60) * 6}deg)` }} />
                </div>
            </div>
        </div>
    )
}

export default Analog