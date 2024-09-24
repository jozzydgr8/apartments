
import { Context } from "./ContextAuth";
import { useContext } from "react";


export const UseContextAuth = ()=>{
    const context = useContext(Context);
    if(!context){
        throw Error('Auth requires a consimer')
    }
    return context
}