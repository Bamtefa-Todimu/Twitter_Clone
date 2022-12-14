import React , {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import user from '../../testUser'
import './sidebar.css'

const Sidebar:React.FC = () => {

    // const routeName = window.location.pathname
    // console.log(routeName.slice(3))

    const [activeTab,setActiveTab] = useState<string>(window.location.pathname.slice(3))

    useEffect(() => {
        console.log(activeTab)
    },[activeTab])

  return (
    <div className="sidebar-container">
        <div className="sidebar-wrapper">
            <ul className="sidebar-items">
                <li onClick={() => setActiveTab(window.location.pathname.slice(3))}><Link to="/t/home" className='side-link'><svg style={{marginLeft:"-0.6rem"}} viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="47px" height="28px"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg></Link></li>
                <li onClick={() => setActiveTab(window.location.pathname.slice(3))}>
                    <Link to="/t/home"className='side-link'>
                        {
                            (activeTab === "home")?
                            <>

                            <div className="home-icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg>
                                <div className="hi-new"></div>
                            </div>
                            <span> <b> Home </b></span>
                            </>:
                            <>
                            <div className="home-icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g></svg>
                                <div className="hi-new"></div>
                            </div>
                            
                            <span>Home</span>
                            </>

                        }
                    </Link>
                </li>
                <li onClick={() => setActiveTab(window.location.pathname.slice(3))}><Link to="/t/explore"className='side-link'>

                    {
                        (activeTab === "explore")?
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M20.585 9.468c.66 0 1.2-.538 1.2-1.2 0-.662-.54-1.2-1.2-1.2h-3.22l.31-3.547c.027-.318-.07-.63-.277-.875-.206-.245-.495-.396-.822-.425-.65-.035-1.235.432-1.293 1.093l-.326 3.754H9.9l.308-3.545c.06-.658-.43-1.242-1.097-1.302-.665-.05-1.235.43-1.293 1.092l-.325 3.754h-3.33c-.663 0-1.2.538-1.2 1.2 0 .662.538 1.2 1.2 1.2h3.122l-.44 5.064H3.416c-.662 0-1.2.54-1.2 1.2s.538 1.202 1.2 1.202h3.22l-.31 3.548c-.057.657.432 1.24 1.09 1.3l.106.005c.626 0 1.14-.472 1.195-1.098l.327-3.753H14.1l-.308 3.544c-.06.658.43 1.242 1.09 1.302l.106.005c.617 0 1.142-.482 1.195-1.098l.325-3.753h3.33c.66 0 1.2-.54 1.2-1.2s-.54-1.202-1.2-1.202h-3.122l.44-5.064h3.43zm-5.838 0l-.44 5.063H9.253l.44-5.062h5.055z"></path></g></svg>
                            <span> <b> Explore </b></span>
                            </>:
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
                            <span>Explore</span>
                            </>
                    }
                    </Link></li>
                <li className='inactive-menu'><Link to="/"className='side-link'><svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px" ><g><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg>
                    <span>Notifications</span>
                </Link></li>
                <li onClick={() => setActiveTab(window.location.pathname.slice(3))}><Link to="/t/messages"className='side-link'>

                    {
                        (activeTab === "messages")?
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z"></path><path d="M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z"></path></g></svg>
                            <span> <b> Messages </b></span>
                            </>:
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path></g></svg>
                            <span>Messages</span>
                            </>
                    }
                    
                </Link></li>
                <li className='inactive-menu'><Link to="/"className='side-link'><svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path></g></svg>
                    <span>Bookmarks</span>
                </Link></li>
                <li className='inactive-menu'><Link to="/"className='side-link'><svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path><path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path></g></svg>
                    <span>Lists</span>
                </Link></li>
                <li onClick={() => setActiveTab(window.location.pathname.slice(3))}><Link to="/t/profile"className='side-link'>
                    
                    {
                        (activeTab === "profile")?
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg>
                            <span> <b> Profile </b></span>
                            </>:
                            <>
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
                            <span>Profile</span>
                            </>
                    }

                </Link></li>
                <li className='inactive-menu'><Link to="/"className='side-link'><svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(214, 217, 219)' width="24.5px" height="24.5px"><g><circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>
                    <span>More</span>
                </Link></li>
                <li>
                    <Link to="/"className='side-link'>
                        <div className="tweet-btn">
                            Tweet
                        </div>
                    </Link>
                </li>
            </ul>


            <div className="sidebar-profile">

                <div className="sidebar-image">
                    <div className="sidebar-img">
                        <img src={user.imagelink} alt={user.displayname + " pic"} />
                    </div>
                    <div className="sidebar-img-name">
                        {user.fullname} <br /> <span style={{color:"#71767B",fontSize:"0.85rem",marginTop:"-1rem"}}> {"@"+user.displayname} </span>
                    </div>
                </div>
                <div className="sidebar-profile-dots"><svg viewBox="0 0 24 24" aria-hidden="true" fill='white' width="20px" height="20px"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div>
            </div>
        </div>
    </div>
  )
}


// const SidebarProfileModal:React.FC = () => {
//     return(
//         <div className="spm-container">
//             <div className="spm-wrapper">
//                 <div className="spm-top">
//                     <div className="sidebar-image">
//                         <div className="sidebar-img">
//                             <img src={user.imagelink} alt={user.displayname + " pic"} />
//                         </div>
//                         <div className="sidebar-img-name">
//                             {user.fullname} <br /> <span style={{color:"#71767B",fontSize:"0.85rem",marginTop:"-1rem"}}> {"@"+user.displayname} </span>
//                         </div>
//                     </div>
//                     <div className="sidebar-profile-check"><svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(29, 155, 240)" width="17.5px" height="17.5px"><g><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path></g></svg></div>
//                 </div>
//                 <div className="spm-bottom">
//                     <p>Add an existing account</p>
//                     <p>Log out {"@"+user.displayname}</p>
//                 </div>
//                 <div className="spm-arrow"></div>
//             </div>
//         </div>
//     )
// }

export default Sidebar