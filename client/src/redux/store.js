import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  useReducer from "./user/userSlice";
import userManagementReducer from "./user/userManagmentSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: useReducer, userManagement: userManagementReducer});

const persistConfig = {
    key : 'root',
    version : 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
})

export const persistor = persistStore(store)