import { PostResponseType, PostType } from "../Types/Types"

export const GetPosts = (): Promise<PostType[]> => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=44')
        .then(response => response.json())
        .then((result: PostResponseType) => result.results)
}

export const GetPost = (id: string): Promise<PostType> => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}