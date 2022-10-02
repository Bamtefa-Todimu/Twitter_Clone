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
        video:"https://rr1---sn-avn7ln7e.googlevideo.com/videoplayback?expire=1664599673&ei=GXI3Y-LOJbS-mLAP78epmA0&ip=105.112.225.61&id=o-AJ3iyzuebIxIcAgPMutfsXGURE2Qql9zY8vj1sftmJOb&itag=18&source=youtube&requiressl=yes&gcr=ng&spc=yR2vp1Yw1hkZIHX3mbOcYfR4J15P6lo&vprv=1&mime=video%2Fmp4&ns=FLbcETh1P6Ba2ur8QvDdYKQI&gir=yes&clen=5779995&ratebypass=yes&dur=125.178&lmt=1664178145467267&fexp=9420243,24001373,24007246&c=WEB&txp=5538434&n=kbMO0gssAM4wkQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgbTlL14-cGvej2pFuvBgysRxSJ__eP49DqbNqyKD0cfACIQD1pEUtR4oQQUcBbYjnfiqVIWWKJ5xPb5ZVYLAHt6hA4Q%3D%3D&rm=sn-5pguxaob-5c8e7l,sn-avns7e&req_id=90401c832088a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=XH&mip=154.68.228.22&mm=29&mn=sn-avn7ln7e&ms=rdu&mt=1664577949&mv=m&mvi=1&pl=19&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALU5ufyQw6bzK-xPMNQsOGQ65eWbHwJjGzAYfiTXnL0iAiEA1Iv8wDhr0QSiMVfcD5HJdwqxSuo4FwHyPqNW5rlxuts%3D",
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