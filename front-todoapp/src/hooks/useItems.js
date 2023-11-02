import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { itemsReducer } from "../reducers/itemsReducer";
import { findAll, remove, save, update, updateStatus } from "../services/itemService";

const initialItems = [];

const initialItemForm = {
    id: 0,
    title: '',
    description: '',
    category: '',
    status: '',
}

export const useItems = () => {
    const [items, dispatch] = useReducer(itemsReducer, initialItems);
    const [itemSelected, setItemSelected] = useState(initialItemForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const getItems = async () => {
        const result = await findAll();
        console.log(result);
        dispatch({
            type: 'loadingItems',
            payload: result.data,
        });
    }

    const handlerAddItem = async(item) => {

        let response;

        if (item.id === 0) {
            response = await save(item);
        } else {
            response = await update(item);
        }

        dispatch({
            type: (item.id === 0) ? 'addItem' : 'updateItem',
            payload: response.data,
        });

        Swal.fire(
            (item.id === 0) ?
                'Item created' :
                'Item updated',
            (item.id === 0) ?
                'Item created successfully' :
                'Item updated successfully',
            'success'
        );
        handlerCloseForm();
        navigate('/items');
    }
    
    const handlerUpdateStatusItem = async(item) => {

        let response = await updateStatus(item);
        dispatch({
            type: 'updateItem',
            payload: response.data,
        });

        Swal.fire(
                'Item Status updated',
                'Item status updated successfully',
            'success'
        );
        navigate('/items');
    }

    const handlerRemoveItem = (id) => {

        Swal.fire({
            title: '¿Are you sure?',
            text: "Warning: Item will be delete",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeItem',
                    payload: id,
                });
                Swal.fire(
                    'Item deleted',
                    'Item deleted successfully',
                    'success'
                )
            }
        })

    }

    const handlerItemSelectedForm = (item) => {
        setVisibleForm(true);
        setItemSelected({ ...item });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setItemSelected(initialItemForm);
    }
    return {
        items,
        itemSelected,
        initialItemForm,
        visibleForm,
        handlerAddItem,
        handlerRemoveItem,
        handlerUpdateStatusItem, //se borra
        handlerItemSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getItems,
    }
}