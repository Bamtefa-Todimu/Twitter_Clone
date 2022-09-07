interface replyType{
    displayimage:string
    username:string,
    displayname:string,
    content:string,
    likes:number
}

interface tweetType {
    id:number,
    displayimage:string,
    username:string,
    displayname:string,
    content:string,
    image?:string,
    video?:string,
    uploadTime:string,
    replies:replyType[],
    retweets:number,
    likes:number
}

type tweetsType = tweetType[]


const tweets:tweetsType = [
    {
        id:1,
        displayimage:"https://pbs.twimg.com/profile_images/1545989516493656064/5GzZhRtP_400x400.jpg",
        username:"Chelsea FC",
        displayname:"Chelsea FC",
        content:"AubameyangisChelsea",
        image:"https://pbs.twimg.com/media/Fbm3IoCXEAIKy7D?format=jpg&name=small",
        // video:string | null | undefined,
        uploadTime:"1662106166149",
        replies:[{
            displayimage:"https://pbs.twimg.com/profile_images/1501116772950368256/-Z-mcs2c_400x400.jpg",
            username:"Premier League",
            displayname:"premierleague",
            content:"Good Stuff",
            likes:942300
        }],
        retweets:24000,
        likes:104000
    },

    {
        id:2,
        displayimage:"https://pbs.twimg.com/profile_images/1505899030236172292/3hXjV8X3_400x400.jpg",
        username:"Michigan State Men's Basketball",
        displayname:"MSU_Basketball",
        content:"Official account of the #SpartanDawgs 🏀",
        video:"https://v16-webapp.tiktok.com/c26966f75605dfd508ff4c0511db44e8/63123851/video/tos/alisg/tos-alisg-pve-0037c001/f17d61d369364c9f9dbd8146b60a1e52/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3504&bt=1752&cs=0&ds=3&ft=eXd.6HF2Myq8ZFa..he2N1_Aol7Gb&mime_type=video_mp4&qs=0&rc=ZWRmaTU5Njk5M2Y8M2Q0ZkBpajlncjY6ZmxtZDMzODczNEBiMzIzYGJjX18xLWNfMC4zYSNxaGVscjQwcWpgLS1kMS1zcw%3D%3D&l=202209021107170101890780161003E971&btag=80000",
        uploadTime:"1662106130738",
        replies:[{
            displayimage:"https://pbs.twimg.com/profile_images/1501116772950368256/-Z-mcs2c_400x400.jpg",
            username:"Premier League",
            displayname:"premierleague",
            content:"Good Stuff",
            likes:942300
        }],
        retweets:1656,
        likes:5890
    }
]


export default tweets