interface userType {
    id:string,
    fullname:string,
    displayname:string,
    imagelink:string

}

type usersType = userType[]

const users:usersType = [
    {
        id:"1",
        fullname:"UEFA Champions League",
        displayname:"ChampionsLeague",
        imagelink:"https://pbs.twimg.com/profile_images/1417052605776375813/Jc9RL5o7_400x400.jpg"
    },
    {
        id:"2",
        fullname:"FIFA World Cup",
        displayname:"FIFAWorldCup",
        imagelink:"https://pbs.twimg.com/profile_images/1511271691657392129/Vv8Wa4st_400x400.jpg"
    },
    {
        id:"3",
        fullname:"NBA",
        displayname:"NBA",
        imagelink:"https://pbs.twimg.com/profile_images/1539261160926625792/NjDSrQBl_400x400.jpg"
    }
]

export default users