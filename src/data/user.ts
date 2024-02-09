import { IProfile, IPost } from "../interface/users"

export const userData: IProfile[]  = [
    {
        userID: "maria_silva",
        name: "Maria Silva",
        cover: "https://i.pinimg.com/564x/ed/fb/9f/edfb9f53f30a80514651c4310255b7b7.jpg",
        img: "https://i.pinimg.com/564x/c4/58/ca/c458cabb5f28c4f6ba0dbbe3bf81713a.jpg",
       
    },
    {
        userID: "joao_carlos",
        name: "João Carlos",
        cover: "https://i.pinimg.com/564x/9a/60/06/9a6006f94af970195129b37898f9331c.jpg",
        img: "https://i.pinimg.com/736x/c2/81/fd/c281fdbeeff1de5076707463c48304d3.jpg",
    },
    {
        userID: "larissa_luiza",
        name: "Larissa Luiza",
        cover: "https://i.pinimg.com/564x/16/c0/55/16c055d9dc975a4269a18ee0535f552e.jpg",
        img: "https://i.pinimg.com/564x/4c/03/71/4c0371654e8014a193bb682dbaf568ec.jpg",
    },
]

export const userPostData: IPost[] = [
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://i.pinimg.com/564x/c4/58/ca/c458cabb5f28c4f6ba0dbbe3bf81713a.jpg",
        postID: "001",
        time: "14 de Março de 2023",
        numberComment: 3,
        numberLikes: 6,
        ownerComment: "Apresento a vocês essa foto",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0001",
                img: "https://i.pinimg.com/564x/dc/b0/28/dcb028b77b06871b30ed9a868b82270f.jpg"
            },
            {
                imgID: "img-0004",
                img: "https://i.pinimg.com/564x/b9/03/78/b90378c9320cdba078e7dde57765bba9.jpg"
            }
        ]
    },
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://i.pinimg.com/564x/c4/58/ca/c458cabb5f28c4f6ba0dbbe3bf81713a.jpg",
        postID: "002",
        time: "13 de Março de 2023",
        numberComment: 3,
        numberLikes: 6,
        ownerComment: "Gostei muito de fazer esse desenho",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0002",
                img: "https://i.pinimg.com/564x/b9/03/78/b90378c9320cdba078e7dde57765bba9.jpg"
            }
        ]
    },
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://i.pinimg.com/564x/c4/58/ca/c458cabb5f28c4f6ba0dbbe3bf81713a.jpg",
        postID: "003",
        time: "12 de Março de 2023",
        numberComment: 7,
        numberLikes: 9,
        ownerComment: "Bom dia",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0003",
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/088f64132901745.61b2165462e4b.jpg"
            },
            {
                imgID: "img-0005",
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/72f91d132901745.61b5f7ff6ca90.jpg"
            },
            {
                imgID: "img-0006",
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/39caa8132901745.61b5f7ff6d459.gif"
            },
            {
                imgID: "img-0007",
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/80911e132901745.61b2165462135.jpg"
            },
        ]
    },
    {
        ownerID: "joao_carlos",
        ownerName: "João Carlos",
        ownerImg: "https://i.pinimg.com/736x/c2/81/fd/c281fdbeeff1de5076707463c48304d3.jpg",
        postID: "004",
        time: "12 de Março de 2023",
        numberComment: 7,
        numberLikes: 9,
        ownerComment: "Esse foi o melhor desenho feito por mim até hoje",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0008",
                img: "https://i.pinimg.com/564x/bd/18/bf/bd18bf79af8f5fbc425c33f0c0328760.jpg"
            },
        ]
    },
]




// postList: [
//     {
//         postID: "001",
//         time: "14 de Março de 2023",
//         numberComment: 3,
//         numberLikes: 6,
//         ownerComment: "Apresento a vocês essa foto",
//         listOfComments: [],
//         img: [
//             {
//                 imgID: "img-0001",
//                 img: "https://i.pinimg.com/564x/dc/b0/28/dcb028b77b06871b30ed9a868b82270f.jpg"
//             }
//         ]
//     },
//     {
//         postID: "002",
//         time: "13 de Março de 2023",
//         numberComment: 3,
//         numberLikes: 6,
//         ownerComment: "Gostei muito de fazer esse desenho",
//         listOfComments: [],
//         img: [
//             {
//                 imgID: "img-0002",
//                 img: "https://i.pinimg.com/564x/b9/03/78/b90378c9320cdba078e7dde57765bba9.jpg"
//             }
//         ]
//     },
//     {
//         postID: "003",
//         time: "12 de Março de 2023",
//         numberComment: 7,
//         numberLikes: 9,
//         ownerComment: "Bom dia",
//         listOfComments: [],
//         img: [
//             {
//                 imgID: "img-0003",
//                 img: "https://i.pinimg.com/564x/36/5e/b6/365eb636919035af2849442d0c7fffd5.jpg"
//             }
//         ]
//     },
// ]


// {
//     commentID: "comment-0001",
//     text: "Gostei muito, parabens",
//     ownerID: "joao_carlos",
//     ownerName: "João Carlos",
//     ownerImg: "https://i.pinimg.com/736x/c2/81/fd/c281fdbeeff1de5076707463c48304d3.jpg",
//     numberLikes: 3,
//     numberComment: 0,
// },
