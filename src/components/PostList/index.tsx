import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import BigPost from '../BigPost'
import MidPost from '../MidPost'
import SmallPost from '../SmallPost'
import { GetPosts } from '../../Services/PostService'
import { PostType } from '../../Types/Types'
import { useSelector } from 'react-redux'
import { selectFavPost } from '../../Store/FavPosts/Selector'

type Props = {
    tab: 'All' | 'My favorites' | 'Popular'
}

const PostList = (props: Props) => {
    const favPosts = useSelector(selectFavPost)

    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        GetPosts().then(res => setPosts(res))
    }, [])

    const firstBigPost = posts.slice(0, 1)
    const midPosts = posts.slice(1, 5)
    const smallPosts = posts.slice(5, 11)

    const firstFavBigPost = favPosts.list.slice(0, 1)
    const midFavPosts = favPosts.list.slice(1, 5)
    const smallFavPosts = favPosts.list.slice(5, 11)

    if (props.tab === 'All') {
        return (
            <div className={`${styles.PostList}`}>
                {firstBigPost.map((post, index) => (
                    <BigPost key={index + post.id} post={post} />
                ))}

                {midPosts.map((post, index) => (
                    <MidPost key={index + post.id} post={post} />
                ))}

                {smallPosts.map((post, index) => (
                    <SmallPost key={index + post.id} post={post} />
                ))}
            </div>
        )
    } else {
        return (
            <div className={`${styles.PostList}`}>
                {firstFavBigPost.map((post, index) => (
                    <BigPost key={index + post.id} post={post} />
                ))}

                {midFavPosts.map((post, index) => (
                    <MidPost key={index + post.id} post={post} />
                ))}

                {smallFavPosts.map((post, index) => (
                    <SmallPost key={index + post.id} post={post} />
                ))}
            </div>
        )
    }
}

export default PostList