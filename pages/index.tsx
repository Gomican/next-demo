import { useState } from 'react'
import Button from "../components/atoms/Button"

const Index = () => {
  let [selfintroduction, setSelfintroduction] = useState("")

  const clickHandler = () => {
    console.log("hi!")
    selfintroduction = "my name is mican!"
    setSelfintroduction(selfintroduction)
  }

  return(
    <div>
      <p>Hello! Next.ts</p>
      <Button text="Push Me!" onClick={clickHandler}/>
      <p>{selfintroduction}</p>
    </div>
  )
}

export default Index