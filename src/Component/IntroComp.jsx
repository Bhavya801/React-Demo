import React,{useState} from 'react'
import IntroEnglish from './IntroEnglish'
import IntroFrench from './IntroFrench'

export default function IntroComp() {
  const [trans, settrans] = useState(false);


  return (
    <div>
        <h3>{trans?<IntroEnglish name = "Bhavya" city = "Delhi" hobby ="Cooking"/>:<IntroFrench name = "Bhavya" city = "Delhi" hobby ="Cuisiner"/>}</h3>
        <button onClick={()=>settrans(trans => !trans)}>Translate </button>
      </div>

  )
}

