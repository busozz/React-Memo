import './App.css';

import { useState,useMemo,useCallback} from 'react';

import Header from './Component/Header';




// const data = {name:"Busöz",id :47}    // bu objecti fonksiyon dışına alırsak tekrar renderlamaz.




function App() {


  const [number,setNumber] = useState(0)

  

  const data = useMemo( () => {

    return {name:"Busöz",id :47}
  },[])




  const data2 = useCallback(()=>{
    setNumber((setPrev)=>{
      setPrev + 1
    })
  },[])





  return (
    <div className="App">
      
    <Header  data={data} data2={data2}  />
    
    <h1>{number}</h1>
    <button onClick={()=>setNumber(number+1)}>Click</button>

    </div>
  );
}

export default App;
