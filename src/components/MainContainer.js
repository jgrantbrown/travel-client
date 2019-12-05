import React from 'react'
import {connect} from 'react-redux'



const MainContainer = ({currentUser}) => {
  return (
    <div className="MainContainer">
          {currentUser ? <p> This is the Main Contianer for {currentUser.username}</p> : <p> This is the Main Contianer for everyone</p>  }
    </div>
  )
}


const mapStateToProps = ({currentUser})=> {
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(MainContainer)
