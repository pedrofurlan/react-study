import React from 'react'
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
    const [modal,setModal] = React.useState(false);

    return (
      <section>
        <Modal modal={modal} setModal = {setModal}/>
        <ButtonModal setModal={setModal}/>
      </section>
    )
}

export default App;