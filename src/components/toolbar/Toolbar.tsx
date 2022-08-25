import React, {useState} from "react"
import {Link} from "react-router-dom"
import {firebaseAuth} from "../../index";

const Toolbar: React.FC = () => {
  const [calViewSelected, setCalViewSelected] = useState(false)

  const linkText = calViewSelected ? 'Show List View' : 'Show Calendar View'
  const route = calViewSelected ? '/' : '/calendar'

  const switchView = () => {
    setCalViewSelected(oldValue => !oldValue)
  }

  const signOut = async () => {
    await firebaseAuth.signOut()
  }

  return <div className="m-2 p-2 mb-0 pb-0 flex flex-row">
    <Link to={route}
          onClick={switchView}
          className="m-2 p-2 mb-0 shadow rounded bg-blue-200">
      {linkText}
    </Link>
    <button onClick={signOut}>Sign Out</button>
  </div>
}

export default Toolbar