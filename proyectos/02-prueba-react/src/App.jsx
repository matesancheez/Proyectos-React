import React, { useEffect, useState } from 'react'
import '../style.css'

const FACT_API = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFacto] = useState('')
  const [img, setImg] = useState()

  useEffect(() => {
    fetch(FACT_API)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFacto(fact)

        const palabra = fact.split(' ').slice(0, 3).join(' ')

        fetch(`https://cataas.com/cat/says/${palabra}`)
          .then(res => res)
          .then(Response => {
            const { url } = Response
            setImg(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>Random cat</h1>
      <p>{fact}</p>
      <img src={`${img}`} alt='Imagen reenderizada desde la API cataas.com' />
    </main>
  )
}
