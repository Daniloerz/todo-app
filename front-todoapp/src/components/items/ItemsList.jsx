import { useContext } from "react"
import { ItemContext } from "../../context/ItemContext"
import { ItemRow } from "./ItemRow"

export const ItemsList = () => {

    const { items } = useContext(ItemContext);

    return (

        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Update status</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(({id, title, description, category, status }) => (
                        <ItemRow
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            status={status} />
                    ))
                }
            </tbody>
        </table>
    )
}