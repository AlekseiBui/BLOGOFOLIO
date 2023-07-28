export type PostType = {
    id: number
    image: string
    text: string
    date: string
    title: string
}

type PostResponseType = {
    count: number
    results: PostType[]
}

export const GetPosts = (): Promise<PostType[]> => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
        .then(response => response.json())
        .then((result: PostResponseType) => result.results)
}

export const GetPost = (id: string): Promise<PostType> => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}