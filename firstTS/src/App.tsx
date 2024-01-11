import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a:string='';//type inference(by default guess) and type annotation(u will only give)
  /* number,string,boolean,undefined,null,void,never,any*/
  /* arrays,objects,tuples,interfaces,type alias*/
  let arr: (string | number)[] = [ "raj", "prasad", 2 ]
  let arr2: [ string, number, string ] = [ "raj", 8, "jdgjs" ]
  interface something{
    name: string,
    age?: number,
    isGood:boolean
  }
  type myDataType = number|string;
  let k: myDataType;
  k="vnbvn"
  interface nothing extends something{
     gender?:string
  }
  let obj:nothing = {
    name: "xcbv",
    isGood:true
  }
   enum x  {
     sunday=12,
     monday,
     tuesday,
     wednesday,
     thursday,
     friday,saturday
   }
  return (
    <>
      <p>{ count }</p>
      {x.wednesday}
      <p>{ a }</p>
      <input type="text" onChange={ (e) => console.log((e.target as HTMLInputElement).value) } />
      
    </>
  )
}
class MyClass
{
  constructor(a:number) {
  
  }
   a!:number
}
class MyClass2 extends MyClass{

}
export default App
