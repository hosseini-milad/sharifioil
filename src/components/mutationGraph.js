import { useState } from 'react';
import { useMutation} from "@apollo/client";
import { v4 } from "uuid";
import {ADD_USER_MUTATION} from './Query'

function MutationGraph(props) {
    console.log('Mutation Start')
    
    const productId = props.pId;
    const userQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        username: "091122", 
        password: "Reyham@2372"
    };
    const [addUser] = useMutation(props.api, {
        variables: {
        },
        onCompleted: () => {
            console.log("done")
        },
        onError: (error) => {
            console.log("Error!",error)
            
        }
    });
    const handleAddUserClick = async () => {
        await addUser();
        
    };
    return( 
        handleAddUserClick
        //<a onClick={handleAddToCartClick}><img src="https://img.icons8.com/material-sharp/24/ffffff/fast-cart.png"/></a>
    )
    
}

export default MutationGraph;