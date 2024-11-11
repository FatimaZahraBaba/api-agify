import { useEffect, useState } from 'react'
import axios from 'axios';
import './app.scss'
import search from './search.svg';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const changeName = (e) => {
    setName(e.target.value);
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

    <div className="card">
      <div className='title'>Estimate the Age of a Name</div>
      <div className='search'>
        <form action="">
          <input type="text" value={name} onChange={changeName}/>
        </form>
        <button onClick={getAge}></button>
      </div>
      <p>
        { age ? <span><span className="name">{name}</span> is <span className="age">{age}</span> years old</span> : ''}
      </p>
    </div>

    </>
  )
}

export default App
