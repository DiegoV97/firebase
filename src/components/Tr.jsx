import { useState } from "react"
import { deleteItem, updateItem } from "../app/peolple"



const Tr = ({ book, pintar }) => {
    const [newTitle, setNewTitle] = useState(book.title)
    const [newPrice, setNewPrice] = useState(book.price)
    return (
        <tr>
            <td className="text-xs">{book.id}</td>
            <td><input type="text" value={book.title} onChange={(e) => setNewTitle(e.target.value)} /></td>
            <td><input type="text" value={book.price} onChange={(e) => setNewPrice(e.target.value)} /></td>
            <td>
                <button className="border-4" onClick={() => {
                    deleteItem(book.id)
                    pintar()
                }}>Delete</button>-
                <button className="border-4" onClick={() => {
                    updateItem(book.id, { newTitle, newPrice })
                    pintar()
                }}>Update</button>
            </td >
        </tr >
    )
}

export default Tr