import styles from './Stopwatch.module.css';

const Digital = ({ time }) => {
    return (
        <div className={styles.digital}>
            <div>
                Mins
                <span>
                    {Math.floor(time / 60000).toLocaleString('en', { minimumIntegerDigits: 2, minimumFractionDigits: 0, useGrouping: false })}
                </span>
            </div>
            <div>
                Seconds
                <span>
                    {(Math.floor(time / 1000) % 60).toLocaleString('en', { minimumIntegerDigits: 2, minimumFractionDigits: 0, useGrouping: false })}
                </span>
            </div>
            <div>
                Milliseconds
                <span>
                    {(time % 1000).toLocaleString('en', { minimumIntegerDigits: 3, minimumFractionDigits: 0, useGrouping: false })}
                </span>
            </div>
        </div>
    )
}

export default Digital