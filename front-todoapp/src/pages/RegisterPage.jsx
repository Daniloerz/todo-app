import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemForm } from "../components/items/ItemForm"
import { ItemContext } from "../context/ItemContext";

export const RegisterPage = () => {

    const { items = [], initialItemForm } = useContext(ItemContext);

    const [itemSelected, setItemSelected] = useState(initialItemForm);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (id) {
            const item = items.find(i => i.id == id) || initialItemForm;
            setItemSelected(item);
        }
    }, [id])

    return (
        <div className="container my-4">
            <h4>{ itemSelected.id > 0 ? 'Edit' : 'Create'} Item</h4>
            <div className="row">
                <div className="col">
                    <ItemForm itemSelected={itemSelected} />
                </div>
            </div>
        </div>
    )
}