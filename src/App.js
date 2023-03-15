import {React, useState, createRef} from 'react';
import Header from './components/Layouts/Header';
import Modal from './components/UI/Modal';


function App() {
  const modalRef = createRef();


  return (
    <>
      <Header modalContainer={modalRef} />
     <main>
       <div id={"modal"} ref={modalRef}>
       </div>
     
     </main>
    </>
  );
}

export default App;
