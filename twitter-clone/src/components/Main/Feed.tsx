import React,{useRef,useState}from 'react'

import user from '../../testUser'
import users from '../../testUsers'
import tweets from '../../testTweets'
import './feed.css'

const Feed:React.FC = () => {

  

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const diffRef = useRef<string>("")

  const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement> | any) => {
    console.log(e)
    console.log(e.target.scrollHeight)

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight.toString() + "px"

    var count = e.target.value.split("").length
    console.log("count "+count)
    console.log(e.target.value.split(""))

    handleProgressChange(count)
  }

  const handleProgressChange = (al:number) => {

    if(canvasRef.current)
    {

    var ctx = canvasRef.current.getContext('2d');
    // var al = 70.5;
    var start = 4.72;

    if(ctx)
    {

    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;  
    // var diff;
    

    diffRef.current = ((((al/270) * 100) / 100) * Math.PI*2*10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    
      ctx.lineWidth = 2;
      ctx.fillStyle = 'white';
      ctx.strokeStyle = "rgb(29, 155, 240)";
      ctx.textAlign = 'center';
      
      if(al >= 255 && al < 270)
      {
        ctx.lineWidth = 2.5;
        ctx.fillStyle = 'rgb(113, 118, 123)';
        ctx.strokeStyle = "rgb(255,212,0)";
        ctx.textAlign = 'center';
        
        ctx.fillText((270 - Math.round(al)).toString(), cw*.5, ch*.5+2, cw);
      }
      else if(al >= 270)
      {
        ctx.lineWidth = 2.5;
        ctx.fillStyle = 'rgb(113, 118, 123)';
        ctx.strokeStyle = "rgb(244,33,46)";
        ctx.textAlign = 'center';
        
        ctx.fillText((270 - Math.round(al)).toString(), cw*.5, ch*.5+2, cw);
      }
      ctx.beginPath();
      ctx.arc(12.5, 12.5, 9, start, parseInt(diffRef.current)/10+start, false);
      ctx.stroke();
    }
    

    }

    
  }

  return (
        <div className="feed-container">
          <div className="feed-left-wrapper">
            <div className="feed-left-header">
              <span>Home</span>
              <div className="flh-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill='rgb(239, 243, 244)' width="20px" height="20px"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g></svg>
              </div>
            </div>

            <div className="feed-body">
              <div className="feed-create-section">
                <div className="fc-top">
                  <div className="fc-top-img">
                    <img src={user.imagelink} alt="" />
                  </div>

                  <div className="fc-top-input">
                    <textarea placeholder="Whats happening ?" rows={1} id="fcti"  onChange={(e) => handleTextAreaChange(e)}/>
                  </div>
                </div>

                <div className="fc-middle">
                  <svg viewBox="0 0 24 24" aria-hidden="true"  width ="16px" height="16px" fill ="rgb(29, 155, 240)" style={{color: "rgb(29, 155, 240)"}}><g><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z"></path></g></svg>
                  <span style={{color: "rgb(29, 155, 240)"}}>Everyone can reply</span>
                </div>

                <div className="fc-bottom">
                  <div className="fcb-left">
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path></g></svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path><circle cx="14.738" cy="9.458" r="1.478"></circle><circle cx="9.262" cy="9.458" r="1.478"></circle></g></svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path><path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path><path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path></g></svg>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(29, 155, 240)"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g></svg>
                  </div>

                  <div className="fcb-right">
                    <div className="canvas-container">
                      <canvas id="my_canvas" ref={canvasRef} width="25" height="25" style={{borderRadius:"50%"}}></canvas>
                      <canvas id="my_canvas_fake" width="15" height="15" style={{border:"2.5px solid rgb(47,51,54)",borderRadius:"50%"}}></canvas>
                    </div>
                    <div className="fc-tweet">Tweet</div>
                  </div>
                </div>
              </div>
              

              <div className="feed-tweets-section">

                {
                  tweets.map((tweet) => {
                    return ( 
                      <div className="feed-tweet" key={tweet.id}>

                        <div className="fts-header">
                          <div className="ftsh-left">
                            <div className="fts-img">
                              <img src={tweet.displayimage} alt="" />
                            </div>
                          </div>
                          <div className="ftsh-right">
                            <div className="ftshr-top">{tweet.username} <span>{"@"+tweet.displayname} &#x2022;</span>  <span>{((Date.now() - parseInt(tweet.uploadTime))/(1000 * 60 * 60)).toFixed(0)+'h'}</span></div>
                            <div className="ftshr-content">{tweet.content}</div>
                          </div>
                        </div>
                        <div className="fts-body-container">
                          <div className="fts-body-wrapper">

                          {
                            (tweet.image)
                            ?
                              <div className="media-wrapper tweet-image-wrapper"><img src={tweet.image} alt="" /></div>
                            :
                            null
                  }
                  {
                            (tweet.video)?
                            <div className="media-wrapper tweet-video-wrapper"><video src={tweet.video}  controls ></video></div>
                            :
                            null
                          }
                          </div>
                        </div>
                        <div className="fts-actions">
                          <div className="fts-action reply-wrapper">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="18.75" height="18.75" fill="currentColor"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            {tweet.replies.length}
                          </div>
                          <div className="fts-action retweet-wrapper">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="18.75" height="18.75" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                            {tweet.retweets}
                          </div>
                          <div className="fts-action like-wrapper">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="18.75" height="18.75" fill="currentColor"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                            {tweet.likes}
                          </div>
                          <div className="fts-action more-actions-wrapper">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="18.75" height="18.75" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                          </div>
                        </div>
                      </div>
                    )
                  })
                
                }

              </div>
            </div>
          </div>

          <div className="feed-right-wrapper">
            <div className="feed-right-header">
                <div className="fr-search">
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="22px" height="22px" fill='currentColor'><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                  <div className="fr-search-input">
                    <input type="text" name="frsi" id="frsi" placeholder='Search Twitter' />
                  </div>

                  <div className="clear-search">
                    <svg viewBox="0 0 15 15" aria-hidden="true" width="10px" height="10px" fill="rgb(113,118,123)"><g><path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path></g></svg>
                  </div>
                </div>
            </div>

            <div className="feed-right-body">
              <div className="trends-section">
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
                </div>
              </div>
              <div className="wtf-section">
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
                ?? 2022 Twitter, Inc.
              </div>
            </div>
          </div>

          {/* <Messages/> */}
        </div>
  )
}


const Messages:React.FC = () => {

  const [messageToggled,setMessageToggled] = useState<boolean>(false)
  return(
    <div className={(!messageToggled)?"messages-container message-toggled":"messages-container"}>
      <div className="messages-wrapper">
        <div className="messages-header">
          <span>Messages</span>
          <div>
            <div className="mh-icon new-message">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(239, 243, 244)"><g><path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path></g></svg>
            </div>
            <div className={(!messageToggled)?"mh-icon toggle-mc":"mh-icon"} onClick={(e) => setMessageToggled(!messageToggled)}>
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="rgb(239, 243, 244)"><g><path d="M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z"></path><path d="M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z"></path></g></svg>
            </div>
          </div>
        </div>
        <div className="messages-body"></div>
      </div>
    </div>
  )
}
export default Feed