import './App.css';
import Modal from './components/Modal/Modal';
import Screenresize from './components/Screenresize/Screenresize';
import { useState } from 'react';


function App() {

  const [openModal,setOpenModal] = useState(false);
  const [openScreenResize, setopenScreenResize] = useState(false)
  return (
    openScreenResize ? <Screenresize/> :
    <div id='App' className='App'>
      {openModal && <Modal close={setOpenModal}/>}
      <button onClick={() => setOpenModal(!openModal)} className='openmodal'>Open Modal</button>
      <button onClick={() => setopenScreenResize(!openScreenResize)} className='screenresizebutton'>Screen resize </button>
    </div>
  )
}

export default App;
