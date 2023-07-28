import PostList from '../../components/PostList'
import Tabs from '../../components/Tabs'
import styles from './styles.module.scss'
import './styles.module.scss'

const HomePage = () => {
    return (
        <>
            <div className={`${styles.BlogName}`}>Blog</div>
            <Tabs />
            <PostList />
            <div className={`${styles.Paging}`}>
                <div>Prev</div>
                <div>1 2 3 ... 6</div>
                <div>Next</div>
            </div>
        </>
    )
}

export default HomePage