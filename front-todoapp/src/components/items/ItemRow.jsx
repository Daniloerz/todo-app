import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ItemContext } from "../../context/ItemContext"

export const ItemRow = ({id, title, description, category, status}) => {
    const { handlerItemSelectedForm, handlerRemoveItem, handlerUpdateStatusItem } = useContext(ItemContext);
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{status}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerItemSelectedForm({
                        id,
                        title,
                        description,
                        category,
                        status
                    })}
                >
                    Update
                </button>
            </td>
            <td>
            <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUpdateStatusItem({ //se borra
                        id,
                        status
                    })}
                >
                    Update status
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveItem(id)}
                >
                    Remove
                </button>
            </td>
        </tr>
    )
}