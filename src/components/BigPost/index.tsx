import React from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import Like from './../../assets/Like.png'
import Dislike from './../../assets/Dislike.png'
import Bookmark from './../../assets/Bookmark.png'
import Dots from './../../assets/Dots.png'
import { Link } from 'react-router-dom'

type Props = {
    id: number;
    image?: string;
    text: string;
    date: string;
    title: string;
}

const BigPost = (props: Props) => {

    return (
        <div className={`${styles.BigPost}`}>
            <div className={`${styles.BigPost_UpperPart}`}>
                <div className={`${styles.BigPost_LeftPart}`}>
                    <div>{props.date}</div>
                    <div><Link to={'/SelectedPost/' + props.id}>{props.title}</Link></div>
                    <div>{props.text}</div>
                </div>

                <div className={`${styles.BigPost_RightPart}`}>
                    <img src={`${props.image}`} />
                </div>
            </div>
            <div className={`${styles.BigPost_BottomPart}`}>
                <div className={`${styles.LikeDislike}`}>
                    <img src={`${Like}`} />
                    <div>10</div>
                    <img src={`${Dislike}`} />
                    <div>10</div>
                </div>
                <div className={`${styles.FavOptions}`}>
                    <img src={`${Bookmark}`} />
                    <img src={`${Dots}`} />
                </div>
            </div>

        </div >
    )
}

export default BigPost