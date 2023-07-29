export type WallieNode = {
    key?: string
    id: string
    head: string
    message: string
    url?: string // comes from reddit posts
    date: number | string
    user: string
    directions: {
        GunId: string
    }
    directionText: string
    start: string
    end: string
    upVotes: number
    downVotes: number
    content: string // comes from the original node.blog.post type
    title?: string // comes from the node.dashboard type
}
