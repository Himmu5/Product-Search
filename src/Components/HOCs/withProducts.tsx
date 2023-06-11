import { ComponentType, FC, useContext } from "react";
import { productContext } from "../../Context/Products";

function withProducts(IncomingComponent:ComponentType<any>){
    function OutgoingComponent(props : any){
        const data  = useContext(productContext);
        return <IncomingComponent {...props} {...data} />   
    }
    return OutgoingComponent;
}

export default withProducts;