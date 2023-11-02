import { useContext, useEffect } from "react";
import { ItemModalForm } from "../components/items/ItemModalForm";
import { ItemsList } from "../components/items/ItemsList";
import { ItemContext } from "../context/ItemContext";

export const ItemsPage = () => {

    const {
        items,
        visibleForm,
        handlerOpenForm,
        getItems,
    } = useContext(ItemContext);

    useEffect(() => {
        getItems();
    }, []);
    
    return (
        <>

            {!visibleForm ||
                <ItemModalForm />}
            <div className="container my-4">
                <h2>TO-DO App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            New Item
                        </button>}

                        {
                            items.length === 0
                                ? <div className="alert alert-warning">¡There are not items yet!</div>
                                : <ItemsList />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}