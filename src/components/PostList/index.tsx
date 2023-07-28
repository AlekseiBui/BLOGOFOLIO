import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import BigPost from '../BigPost'
import MidPost from '../MidPost'
import SmallPost from '../SmallPost'
import { GetPosts, PostType } from '../../Services/PostService'

const PostList = () => {

    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        GetPosts().then(res => setPosts(res))
    }, [])

    const firstBigPost = posts.slice(0, 1)

    const midPosts = posts.slice(1, 5)

    const smallPosts = posts.slice(5, 11)

    return (
        <div className={`${styles.PostList}`}>
            {firstBigPost.map((post, index) => (
                <BigPost key={index} id={post.id} date={post.date} title={post.title} text={post.text}
                    image={post.image} />
            ))}

            {midPosts.map((post, index) => (
                <MidPost key={index} id={post.id} date={post.date} title={post.title}
                    image={post.image} />
            ))}

            {smallPosts.map((post, index) => (
                <SmallPost key={index} id={post.id} date={post.date} title={post.title}
                    image={post.image} />
            ))}

        </div>
    )
}

export default PostList