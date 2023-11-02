import { useItems } from "../hooks/useItems";
import { ItemContext } from "./ItemContext"

export const ItemProvider = ({children}) => {

    const {
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
    } = useItems();

    return (
        <ItemContext.Provider value={
            {
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
        }>
            {children}
        </ItemContext.Provider>
    )
}