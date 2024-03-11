import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import ItemAPI from "./api/ItemAPI";

const ItemContext = createContext();

export function ItemProvider({ children }) {

    const [items, setItems] = useState([]);

    //Get all Prediction Values
    useEffect(() => {
        ItemAPI.getAll().then((response) => {
            setItems(response.data.predictions);
        });
    }, []);



    return (

        <ItemContext.Provider
            value={{
                items,
                setItems,

            }}
        >

            {children}

        </ItemContext.Provider>

    )

}

export default ItemContext;