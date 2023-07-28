import styles from './styles.module.scss'
import './styles.module.scss'

const Tabs = () => {
    return (
        <div className={`${styles.tabs}`}>
            <div className={`${styles.tabs_all}`}>All</div>
            <div className={`${styles.tabs_favorites}`}>My favorites</div>
            <div className={`${styles.tabs_popular}`}>Popular</div>
        </div>
    )
}

export default Tabs