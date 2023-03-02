import React,{useState} from 'react'
import IntroComp from './IntroComp'
import Counter from './CountClass'


export default function Changenav() {
  const [flag, setflag] = useState(false);
  return (
    <div>
      <h3>{flag===true?<IntroComp/>:<Counter/>}</h3>
      <button flag = 'true' onClick={()=>setflag(flag => !flag)}>Tap to view another task</button>
    </div>
  )
}
