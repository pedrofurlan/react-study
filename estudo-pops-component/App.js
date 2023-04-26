// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from 'react'
import Header from './Header/Header.js';
import Home from './Home.js';
import Menu from './Menu/Menu.js';
import Produtos from './Produtos.js';

const App = () => {
    const { pathname } = window.location;
    let Component;
    if(pathname === "/produtos"){
        Component = Produtos;
    }
    else{
        Component = Home;
    }
    return (
      <section>
        <Header/>
        <Component/>
      </section>
    )
}

export default App;