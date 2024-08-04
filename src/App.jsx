import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import { Movies } from './components/Movies';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { useState } from 'react';
import { Todos } from './components/Todos';

function App() {
  let arrData =[
    {
      bgColor : "bg-primary",
      TrackName :'Angular',
      instName:'Mahmoud Adel '
  
    },
    {
      bgColor : "bg-success",
      TrackName :'React',
      instName:'Ahmed Ali '
  
    },
    {
      bgColor : "bg-warning",
      TrackName :'node js',
      instName:'Sohila Elsafty '
  
    }
  ]
  let movies =[
    {
      id :1,
      name:"The Moon",
      rate:3.5,
      discreption :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!',
      imgSrc :'https://images.pexels.com/photos/13111754/pexels-photo-13111754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id :2,
      name:"Big foot",
      rate:4.7,
      discreption :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!',
      imgSrc :'https://images.pexels.com/photos/7255045/pexels-photo-7255045.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id :3,
      name:"palestine",
      rate:3.4,
      discreption :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!',
      imgSrc :'https://images.pexels.com/photos/8194913/pexels-photo-8194913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id :4,
      name:"The Sun",
      rate:3.9,
      discreption :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veniam!',
      imgSrc :'https://images.pexels.com/photos/4547587/pexels-photo-4547587.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]
  const [show,setShow]=useState(false)
   let logn =()=>{
    setShow(true)
   }
   let logOut =() =>{
    setShow(false)
}
const [showToDo, setshowToDo]=useState(false)
let opentoDo =()=>{
  setshowToDo(true)
}



  return (
    <>

<div className="container-fluid text-center p-5" style={{backgroundColor: "#eee" }}>
{!showToDo&&<button onClick={opentoDo}  className='btn btn-danger  m-5 '>Show To Do</button> }

</div>
    
 
 {showToDo&&<Todos  setshowToDo={setshowToDo}></Todos>}
   
   

        
        
        
        
    
    
   
   
    
    
    </>
  );
}

export default App;
