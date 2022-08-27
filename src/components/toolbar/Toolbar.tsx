import React, {useState} from "react"
import {Link} from "react-router-dom"
import {firebaseAuth} from "../../index";

const Toolbar: React.FC = () => {
  const [calViewSelected, setCalViewSelected] = useState(false)
  const [user, setUser] = useState(firebaseAuth.currentUser)

  const linkText = calViewSelected ? 'Show List View' : 'Show Calendar View'
  const route = calViewSelected ? '/' : '/calendar'

  const switchView = () => {
    setCalViewSelected(oldValue => !oldValue)
  }

  const signOut = async () => {
    await firebaseAuth.signOut()
  }

  firebaseAuth.onIdTokenChanged(newUser => {
    if(newUser !== null && (user === null || user.uid !== newUser.uid)){
      setUser(newUser)
    }
  })

  return <div className="m-2 p-2 mb-0 pb-0 flex flex-row">
    <Link to={route}
          onClick={switchView}
          className="m-2 p-2 mb-0 shadow rounded bg-blue-200">
      {linkText}
    </Link>
    <button onClick={signOut}>Sign Out</button>
    <img referrerPolicy="no-referrer" src={user?.photoURL || ""}/>
  </div>
}

export default Toolbar