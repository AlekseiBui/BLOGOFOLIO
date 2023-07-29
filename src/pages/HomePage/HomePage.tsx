import { useState } from 'react'
import PostList from '../../components/PostList'
import Tabs from '../../components/Tabs'
import styles from './styles.module.scss'
import './styles.module.scss'

const HomePage = () => {
    const [tabState, setTabState] = useState<'All' | 'My favorites' | 'My Posts'>('All')

    const tabStatePostList = (e: React.FormEvent<HTMLDivElement>) => {
        const eTargetText = e.currentTarget.innerText
        if (eTargetText === 'All') {
            return setTabState('All')
        } else if (eTargetText === 'My favorites') {
            return setTabState('My favorites')
        } else {
            return setTabState('My Posts')
        }
    }

    return (
        <>
            <div className={`${styles.BlogName}`}>Blog</div>
            <Tabs onClick={tabStatePostList} />
            <PostList tab={tabState} />
            <div className={`${styles.Paging}`}>
                <div>1 2 3 ... 6</div>
            </div>
        </>
    )
}

export default HomePage