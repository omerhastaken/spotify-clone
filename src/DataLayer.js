import React, { createContext, useContext, useReducer } from "react";
import styled from "styled-components";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const DataLayerValue = () => useContext(DataLayerContext);
