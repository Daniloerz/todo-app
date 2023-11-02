import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import { ItemForm } from "./ItemForm";

export const ItemModalForm = () => {
    
    const { itemSelected, handlerCloseForm } = useContext(ItemContext);

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal " style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {itemSelected.id > 0 ? 'Update ' : 'New '} Item
                            </h5>
                        </div>
                        <div className="modal-body">
                            <ItemForm 
                                itemSelected={itemSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}