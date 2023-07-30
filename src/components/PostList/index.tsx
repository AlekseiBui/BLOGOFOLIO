import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import BigPost from '../BigPost'
import MidPost from '../MidPost'
import SmallPost from '../SmallPost'
import { PostType } from '../../Types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavPost } from '../../Store/FavPosts/Selector'
import { selectAllPosts } from '../../Store/Posts/Selector'
import { AppDispatch } from '../../Store'
import { loadPosts } from '../../Store/Posts/Actions'

type Props = {
    tab: 'All' | 'My favorites' | 'My Posts'
    page: number
}

const PostList = (props: Props) => {
    const posts1 = useSelector(selectAllPosts)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadPosts(props.page))
    }, [props.page])

    const favPosts = useSelector(selectFavPost)

    const firstBigPost: PostType[] = posts1.posts.slice(0, 1)
    const midPosts: PostType[] = posts1.posts.slice(1, 5)
    const smallPosts: PostType[] = posts1.posts.slice(5, 11)

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