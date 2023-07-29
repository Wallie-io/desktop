import { random } from 'lodash'
import gun, { namespace } from '@api/gun'

type RedditPost = {
    author: string //maps to user
    distinguished: string
    thumbnail: string
    title: string //maps to node.directionText
    url: string
    selftext: string //maps to node.message
    created_utc: Number
}

type RedditPostResponse = {
    data: {
        children: [{ data: RedditPost }]
    }
}

export const fillWithFun = async () => {
    const channel = [
        'CrazyIdeas',
        'MorbidReality',
        'TalesFromRetail',
        'AskReddit',
    ][random(0, 2)]
    const res = await fetch(`https://www.reddit.com/r/${channel}/new.json`)
    const {
        data: { children: redditPosts },
    } = (await res.json()) as RedditPostResponse
    const {
        author: user,
        thumbnail,
        title: directionText,
        selftext: message,
        url,
        created_utc: date,
    }: RedditPost = redditPosts[random(0, redditPosts?.length - 1)]?.data
    const post: any = {
        user,
        thumbnail,
        url,
        date: Date.now(),
        directionText,
        message,
        redditDate: date,
    }
    gun.get(namespace + `/node`)
        .get(user)
        .put(post, (awk) => console.log(awk))
}
