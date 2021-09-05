import "./home.css"
import Feed from  "./feed/feed.jsx"

function Home(){
  return(
    <div className = "container">
      <div className = "sidebar">
        <div className="link">My Teams</div>
        <div className="link">My Players</div>
      </div>


      <Feed/>

    </div>
  )


}

export default Home
