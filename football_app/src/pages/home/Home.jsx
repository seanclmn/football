import "./Home.css"
import Feed from  "../../components/feed/Feed"



function Home(){
  return(
    <div className = "container">
      
      <div className="feed_container">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
      

    </div>
  )


}

export default Home
