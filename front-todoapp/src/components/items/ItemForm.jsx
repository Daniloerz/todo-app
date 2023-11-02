import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { ItemContext } from "../../context/ItemContext";

export const ItemForm = ({ itemSelected, handlerCloseForm }) => {

    const { initialItemForm, handlerAddItem } = useContext(ItemContext);

    const [itemForm, setItemForm] = useState(initialItemForm);

    const { id, title, description, category, status } = itemForm;

    useEffect(() => {
        setItemForm({
            ...itemSelected
        });
    }, [itemSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setItemForm({
            ...itemForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(status);
        if (!title || !description || !category) {
            Swal.fire(
                'Validation error',
                'Complete all fields form',
                'error'
            );

            return;
        }

        handlerAddItem(itemForm);
        setItemForm(initialItemForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setItemForm(initialItemForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Title"
                name="title"
                value={title}
                onChange={onInputChange} />
            <input
                className="form-control my-3 w-75"
                placeholder="Description"
                name="description"
                value={description}
                onChange={onInputChange} />
            <select
                className="form-control my-3 w-75"
                name="category"
                value={category}
                onChange={onInputChange}
            >
                <option value="" disabled>Select category</option>
                <option value="Education">Education</option>
                <option value="Home">Home</option>
                <option value="Job">Job</option>
            </select>
            {itemSelected.id > 0 || <select
                className="form-control my-3 w-75"
                name="status"
                value={status}
                onChange={onInputChange}
            >
                <option value="" disabled>Select status</option>
                <option value="To-Do">To-Do</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
            </select>}
            <input type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Update' : 'New Item'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}

        </form>
    )
}