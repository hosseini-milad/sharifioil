import {useState} from 'react';
import {useQuery} from "@apollo/client";

function FetchGraph(query){
    const [item, setItem] = useState('')
    const {data, refetch} = useQuery(query, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            const updatedCart = data;
            // Update  cart data in React Context.
            setItem(updatedCart);
        },
        onError:()=>{
            console.log('Error')
        }
    });
    return(item&&item);
}
export default FetchGraph;