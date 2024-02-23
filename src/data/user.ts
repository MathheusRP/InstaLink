import { IProfile, IPost } from "../interface/users"

export const userData: IProfile[]  = [
    {
        userID: "maria_silva",
        name: "Maria Silva",
        cover: "https://i.pinimg.com/564x/ed/fb/9f/edfb9f53f30a80514651c4310255b7b7.jpg",
        img: "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
       
    },
    {
        userID: "joao_carlos",
        name: "João Carlos",
        cover: "https://i.pinimg.com/564x/b0/fa/cc/b0facced7bbb3422678ff4c2a01ffe5e.jpg",
        img: "https://i.pinimg.com/564x/b7/24/45/b724454822463c7f7a1f78b3d9f56242.jpg",
    },
    {
        userID: "larissa_luiza",
        name: "Larissa Luiza",
        cover: "https://i.pinimg.com/564x/16/c0/55/16c055d9dc975a4269a18ee0535f552e.jpg",
        img: "https://i.pinimg.com/564x/4c/03/71/4c0371654e8014a193bb682dbaf568ec.jpg",
    },
    {
        userID: "carlos111",
        name: "Carlos Eduardo",
        cover: "https://i.pinimg.com/564x/c6/8a/76/c68a76b53574a65a366b6556cdd8edf0.jpg",
        img: "https://i.pinimg.com/564x/6e/53/3d/6e533da6cdacc748f2f7280ec0017cb4.jpg",
    },
    {
        userID: "ana_julia",
        name: "Ana Julia",
        cover: "https://i.pinimg.com/564x/9f/b8/d7/9fb8d753a10de0b580b11b0226d96986.jpg",
        img: "https://i.pinimg.com/564x/52/b4/e7/52b4e7692ae99ccd5fc76d0fe1948de3.jpg",
    },
]

export const userPostData: IPost[] = [
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
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
        ownerID: "carlos111",
        ownerName: "Carlos Eduardo",
        ownerImg: "https://i.pinimg.com/564x/6e/53/3d/6e533da6cdacc748f2f7280ec0017cb4.jpg",
        postID: "005",
        time: "14 de Março de 2023",
        numberComment: 3,
        numberLikes: 6,
        ownerComment: "Apresento a vocês essa foto",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0001",
                img: "https://i.pinimg.com/564x/58/11/9c/58119c999dfca761f2fc9c0a4e029e52.jpg"
            },
        ]
    },
    {
        ownerID: "ana_julia",
        ownerName: "Ana Julia",
        ownerImg: "https://i.pinimg.com/564x/52/b4/e7/52b4e7692ae99ccd5fc76d0fe1948de3.jpg",
        postID: "006",
        time: "14 de Março de 2023",
        numberComment: 6,
        numberLikes: 29,
        ownerComment: "Uma arte muito legal",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0011",
                img: "https://i.pinimg.com/564x/53/7d/7c/537d7c64e02b0e157a72ec57c9bcdaf1.jpg"
            },
        ]
    },
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
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
        ownerID: "joao_carlos",
        ownerName: "João Carlos",
        ownerImg: "https://i.pinimg.com/564x/b7/24/45/b724454822463c7f7a1f78b3d9f56242.jpg",
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
    {
        ownerID: "maria_silva",
        ownerName: "Maria Silva",
        ownerImg: "https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg",
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
        ownerID: "ana_julia",
        ownerName: "Ana Julia",
        ownerImg: "https://i.pinimg.com/564x/52/b4/e7/52b4e7692ae99ccd5fc76d0fe1948de3.jpg",
        postID: "007",
        time: "11 de Março de 2023",
        numberComment: 7,
        numberLikes: 25,
        ownerComment: "",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0012",
                img: "https://i.pinimg.com/564x/27/b4/35/27b43593633dc505f2e0f6357b09a967.jpg"
            },
        ]
    },
    {
        ownerID: "ana_julia",
        ownerName: "Ana Julia",
        ownerImg: "https://i.pinimg.com/564x/52/b4/e7/52b4e7692ae99ccd5fc76d0fe1948de3.jpg",
        postID: "007",
        time: "11 de Março de 2023",
        numberComment: 8,
        numberLikes: 15,
        ownerComment: "",
        listOfComments: [],
        postImgs: [
            {
                imgID: "img-0012",
                img: "https://i.pinimg.com/564x/54/16/8d/54168dcf2e45228866b6609fe63252b2.jpg"
            },
        ]
    },
    
]
