import {createContext} from "react";
import PropTypes from "prop-types";

export const HomeContext = createContext({});

export const HomeContextProvider = ({children}) => {
    return (
        <HomeContext.Provider value={{

        }}>
            {children}
        </HomeContext.Provider>
    );
};

HomeContextProvider.propTypes = {
    children: PropTypes.any,
};

