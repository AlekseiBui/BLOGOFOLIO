export type Options = {
    like: string
    dislike: string
    bookmark: string
    dots: string
}

export type PostType = {
    id: number
    image: string
    text: string
    date: string
    title: string
}

export type PostResponseType = {
    count: number
    results: PostType[]
}