// @ts-nocheck
import React, {useEffect, useRef} from "react";
import {useState} from "react";
type Props = {
  children: React.ReactNode
  dropdownHeight: number
  dropdownNode: React.ReactNode
}

const Dropdown: React.FC<Props> = (props) => {
  const [active, setActive] = useState(false)
  const [lockActive, setLockActive] = useState(false)
  const dropdownDiv = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(active){
      if (dropdownDiv.current !== null) {
        dropdownDiv.current.focus()
      }
    }
  })

  // const setActiveFalse = () => {
  //   setLockActive(true)
  //   setActive(false)
  // }
  //
  // const setActiveTrue = () => {
  //   if(lockActive){
  //     setLockActive(false)
  //   }
  //   else{
  //     setActive(true)
  //   }
  // }

  return <div className="flex flex-col">
    <div onClick={()=>setActive(prev=>!prev)}>{props.children}</div>
    <div ref={dropdownDiv}
         onBlur={()=>setActive(false)}
         className={"absolute"}
         style={{top: (props.dropdownHeight/4)+"rem"}}>
      {active && props.dropdownNode}
    </div>
  </div>
}

export default Dropdown