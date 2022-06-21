import { Children, createContext, useState } from "react";

export const favContext = createContext({
    favMealsIds: [],
    addToFavs: (id) => {},
    removeFromFavs: (id) => {}
});

const favCtxProvider = ({children}) => {
    const [favMealsIds, setFavMealsIds] = useState([]);

    const addToFavs = (id) => {
        setFavMealsIds([...favMealsIds, id]);
    }


    const removeFromFavs = (id) => {
        setFavMealsIds(prevMealsIds => prevMealsIds.filter((mealId) => mealId !== id));
    }


    return <favContext.Provider value={{favMealsIds, addToFavs, removeFromFavs}}>
        {children}
    </favContext.Provider>
}

export default favCtxProvider;