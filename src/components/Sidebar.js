import SidebarItem from "./SidebarItem";

function Sidebar(){
  class SidebarObj{
    label;
    route;

    constructor(label, route) {
      this.label = label;
      this.route = route;
    }
  }

  const items = [
      new SidebarObj("Route1", "/route1"),
      new SidebarObj("Route2", "/route2"),
      new SidebarObj("Route3", "/route3"),
      new SidebarObj("Route4", "/route4"),
      new SidebarObj("Route5", "/route5")
  ]

  return <div className="flex flex-col bg-blue-500">{items.map((item)=>{
    return <SidebarItem item={item}/>
  })}</div>
}

export default Sidebar;