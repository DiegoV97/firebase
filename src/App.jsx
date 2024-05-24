import { useEffect } from "react"
import { createItem, getItems } from "./app/peolple"
import { useState } from "react"
import Tr from "./components/Tr"


const App = () => {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const crear = () => {
    createItem({ title, price })
    pintar()

  }



  const pintar = () => { getItems().then(setBooks) };
  useEffect(() => {

    pintar()

  }, [])

  return (
    <div>
      <table className="table-fixed text-center">
        <tr>
          <td ><th>Id</th></td>
          <td><th >Title</th></td>
          <td><th>Price</th></td>
          <td><th>Option</th></td>
        </tr>

        {
          books.map(book => <Tr key={book.id} book={book} pintar={pintar} />)
        }

        <tr>
          <td></td>
          <td><input type="text" className="border-4" onChange={(e) => { setTitle(e.target.value) }} /></td>
          <td><input type="text" className="border-4" onChange={(e) => { setPrice(e.target.value) }} /></td>
          <td><button className="border-4" onClick={crear}>add</button></td>
        </tr>
      </table>

    </div >
  )
}


export default App