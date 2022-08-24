import React, {useState} from "react"
import {Link} from "react-router-dom"

const Toolbar: React.FC = () => {
  const [calViewSelected, setCalViewSelected] = useState(false)

  const linkText = calViewSelected ? 'Show List View' : 'Show Calendar View'
  const route = calViewSelected ? '/' : '/calendar'

  const switchView = () => {
    setCalViewSelected(oldValue => !oldValue)
  }

  return <div className="m-2 p-2 mb-0 pb-0">
    <Link to={route}
          onClick={switchView}
          className="m-2 p-2 mb-0 shadow rounded bg-blue-200">
      {linkText}
    </Link>
  </div>
}

export default Toolbar