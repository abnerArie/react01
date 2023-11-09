import { useState } from "react"

const libros = []

const BooksApp = () => {
  //use state
  const [books, setBooks] = useState()
  const [saludo, setSaludo] = useState('Hola, ya puse react en mi cv!')

  return (
    <>
      <h1>Books App</h1>
      <h2>{saludo}</h2>
    </>
  )
}

export default BooksApp
