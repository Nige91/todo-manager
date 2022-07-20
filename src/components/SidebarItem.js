import {Link} from "react-router-dom";

function SidebarItem(props){
  const item = props.item;


  return <Link to={item.route} className="m-2 p-2 mb-0 shadow rounded bg-blue-200">
    {item.label}
  </Link>
}

export default SidebarItem;