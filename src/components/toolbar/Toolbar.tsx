import React, {useState} from "react"
import {Link} from "react-router-dom"
import {firebaseAuth} from "../../index";
import Dropdown from "../ui/Dropdown";

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

  const dropdownJsx = <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={signOut}><a>Sign Out</a></li>
    <li><a>Item 2</a></li>
  </ul>

  return <div className="p-2 mb-0  flex flex-row justify-end items-center space-x-2 shadow bg-clr-base">
    <Link to={route}
          onClick={switchView}
          className="p-2 shadow-lg rounded bg-clr-accent text-neutral-dark">
      {linkText}
    </Link>

    <Dropdown dropdownHeight={16} dropdownNode={dropdownJsx}>
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img referrerPolicy="no-referrer" src={user?.photoURL || ""}/>
        </div>
      </div>
    </Dropdown>
  </div>
}

export default Toolbar