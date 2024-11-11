import { useEffect, useState } from 'react'
import axios from 'axios';
import './app.scss'

function App() {

  let [name, setname] = useState('');
  let [age, setAge] = useState();

  const changeNamename = (e) => {
    setname(e.target.name);
  }
  const getAge = async () => {
    const url = `https://api.agify.io?name=${name}`;
    const resp = await axios.get(url);
    // console.log(resp);
    console.log(resp.data.age);
    setAge(resp.data.age);
  }

  return (
    <>
   
      <form action="">
        <input type="text" value={name} onChange={changeNamename}/>
      </form>
      <button onClick={getAge}>CHECK</button>
      { age ? <h3>{name} a {age} ans</h3> : ''}

    </>
  )
}

export default App
