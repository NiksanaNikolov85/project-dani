import {React, useState} from 'react';
import Header from './components/Layouts/Header';
import Modal from './components/UI/Modal';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = () => {
    setCartIsShown(false);
  }


  return (
    <>
      <Header onShowCard={showCart}/>
     <main>
      {cartIsShown ? <Modal onCloseCard={hideCart}/> : null}
     </main>
    </>
  );
}

export default App;
