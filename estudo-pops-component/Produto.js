import React from 'react'

const Produto = ({nome,propriedades}) => {
    console.log(propriedades);
  return (
    <section>
        <h2>{nome}</h2>
        <ul>
            {propriedades.map((desc) =>(
                <li key={desc}>{desc}</li>
            ))}
        </ul>
    </section>
  )
}

export default Produto