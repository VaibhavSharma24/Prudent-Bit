import React from "react"
import music from "../images/music.svg"
import podcast from "../images/podcast.svg"
import playlist from "../images/playlist.svg"
import genres from "../images/genres.svg"
import artists from "../images/artists.svg"
import album from "../images/album.svg"
import favourites from "../images/favourites.svg"
import song from "../images/song.png"

function Dashboard() {
    return(
       <div className="dashboard-back">
       <div className="dashboard-left">
       <div className="logo-design-dash">
            <img className="logo" src={music} width={50} height={50} alt="logo"/>
       <span className="logo-content">Music</span>
       <span className="logo-content2">Stream</span>
       </div>
       <div className="dash-home">
        <span className="icons"><img src={podcast} width={30} height={30} alt="logo"/>Home</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={playlist} width={30} height={30} alt="logo"/>Playlists</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={genres} width={30} height={30} alt="logo"/>Genres</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={artists} width={30} height={30} alt="logo"/>Artists</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={album} width={30} height={30} alt="logo"/>Album</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={favourites} width={30} height={30} alt="logo"/>Favourites</span>
       </div>
       <div className="dash-home">
       <span className="icons"><img src={podcast} width={30} height={30} alt="logo"/>Podcasts</span>
       </div>
       </div>
       <div className="dashboard-right">
       <p className="dash-text">Home</p>
       <div className="player">
       <img className="logo" style={{marginRight:"60px"}} src={song} width={170} height={170} alt="logo"/>
       <h4 style={{color: "white"}}>Bad liar</h4>
       </div>
       </div>
    
        
       </div>

    )
}

export default Dashboard;