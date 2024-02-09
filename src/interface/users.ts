export interface IProfile {
    userID: string
    name: string
    img: string
    cover: string
}


export interface IPost {
    ownerID: string
    ownerName: string
    ownerImg: string
    postID: string
    postImgs: IPostImage[]
    ownerComment: string
    time: string
    numberLikes: number
    numberComment: number
    listOfComments: IComments[]
}

interface IPostImage {
    imgID: string
    img: string
}

interface IComments {
    commentID: string
    text: string
    ownerID: string
    ownerName: string
    ownerImg: string
    numberLikes: number
    numberComment: number
}