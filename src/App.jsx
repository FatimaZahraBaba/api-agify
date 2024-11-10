import { useEffect, useState } from 'react'
import axios from 'axios';
import './app.scss'

function App() {

  // let changeName = (e) => {
  //     setName(e.target.value);
  //     console.log(name);
  //     console.log('OK');
  // }

  // let [name, setName] = useState();

  // let changeName = async () => {
  //   const url = `https://api.agify.io?name=`;
  //   const resp = await axios.get(url);
  //   setName(resp.data.name);
  //   console.log('Api called');
  //   // console.log(name);
  //   // console.log(resp.data.name);
  // };

  let [value, setValue] = useState('');
  // let [name, setName] = useState();

  let changeNameValue = (e) => {
    setValue(e.target.value);
  }
  let reccupererNom = async () => {
    const url = `https://api.agify.io?name=${value}`;
    const resp = await axios.get(url);
    console.log(resp);
    console.log(resp.data.age);
    // console.log(resp.data.name);
    // setName(resp.data.name);
    // console.log(name);
  }
  useEffect( () => {
    reccupererNom();
  }, [])

  return (
    <>
      <h1> TEST </h1>
      <h2>{value}</h2>
      <form action="">
        <input type="text" value={value} onChange={changeNameValue}/>
      </form>
      {/* <h2> { name ? name : "ERREUR"} </h2> */}

      {/* <button onClick={changeName}>CHECK</button> */}
    </>
  )
}
export default App
