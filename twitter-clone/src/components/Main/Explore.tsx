import React from 'react'
import users from '../../testUsers'

import './explore.css'

const Explore:React.FC = () => {
  return (
    <div className="explore-container ">
      <div className="explore-wrapper">
        <div className="explore-header">
          <div className="fr-search explore-search">
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill='currentColor'><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                  <div className="fr-search-input explore-search-input">
                    <input type="text" name="frsi" id="frsi" placeholder='Search Twitter' />
                  </div>

                  <div className="clear-search">
                    <svg viewBox="0 0 15 15" aria-hidden="true" width="10px" height="10px" fill="rgb(113,118,123)"><g><path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path></g></svg>
                  </div>
          </div>

          <div className="explore-settings">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill='rgb(239, 243, 244)'><g><path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path><path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path></g></svg>
          </div>
        </div>

        <div className="explore-body">
          <div className="explore-banner">
            <div className="explore-banner-img">
              <img src="https://pbs.twimg.com/semantic_core_img/1549912875333931009/SPNXmxSX?format=jpg&name=small" alt="" />
            </div>

            <div className="explore-banner-gradient"></div>

            <div className="explore-banner-info">
              <p>Entertainment &#x2022; LIVE</p>
              <p>Happy birthday, Julie Andrews 🎂</p>
            </div>
          </div>

          <div className="trends-section explore-trends-section">
                <div className="ts-title">
                  Trends for you
                </div>

                <div className="ts-main">
                  <div className="trend-card">
                    <div className="tc-cat"><span>Sports &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Ronaldo</div>
                    <div className="tc-tweetno">600,436 Tweets</div>
                  </div>
                  <div className="trend-card">
                    <div className="tc-cat"><span>Entertainment &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Bandana</div>
                    <div className="tc-tweetno">16,937 Tweets</div>
                  </div>
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Eggs</div>
                    <div className="tc-tweetno">62,036 Tweets</div>
                  </div>
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Yams</div>
                    <div className="tc-tweetno">1,369 Tweets</div>
                  </div>
                  
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Burger King</div>
                    <div className="tc-tweetno">102,036 Tweets</div>
                  </div>
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Eggs</div>
                    <div className="tc-tweetno">62,036 Tweets</div>
                  </div>
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Yams</div>
                    <div className="tc-tweetno">1,369 Tweets</div>
                  </div>
                  
                  <div className="trend-card">
                    <div className="tc-cat"><span>Food &#x2022; Trending</span> <span className='tc-morespan'><svg viewBox="0 0 24 24" aria-hidden="true" width="18.75px" height="18.75px" fill="currentColor"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span></div>
                    <div className="tc-name">Burger King</div>
                    <div className="tc-tweetno">102,036 Tweets</div>
                  </div>
                </div>
              </div>
        </div>
      </div>

      <div className="explore-right-section feed-right-wrapper">
        <div className="feed-right-body">
              
              <div className="wtf-section explore-wtf-section">
                <div className="ts-title">
                  Who to follow
                </div>
                <div className="ts-main">

                  {
                    users.map((user) => {
                      return(
                        <div className="wtf-card" key={user.id}>
                          <div className="wtf-img"><img src={user.imagelink} alt={user.displayname + " image"} /></div>
                          <div className="wtf-name">
                            {user.fullname.length > 17 ? user.fullname.slice(0,16)+"..." : user.fullname} <br /> <span style={{color:"#71767B",fontSize:"0.85rem",marginTop:"-1.3rem"}}> {"@"+user.displayname} </span>
                          </div>
                          <div className="wtf-follow">Follow</div>
                        </div>
                      )
                    })
                  }
                  
                  
                </div>
              </div>
              <div className="tos-section">
                Terms of Service &nbsp;
                Privacy Policy &nbsp;
                Cookie Policy &nbsp;
                Accessibility &nbsp;
                Ads info &nbsp;
                More... &nbsp; <br />
                © 2022 Twitter, Inc.
              </div>
            </div>
      </div>
    </div>
  )
}

export default Explore