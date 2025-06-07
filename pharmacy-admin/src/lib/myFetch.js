import axios from  "axios"

async function myFetch(props){
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const { method, endpoint, body, id} = props

    // Get single item
    if(method === 'get' && id.length > 2){
        const { data } = await axios.get(baseUrl + endpoint + `/${id}`)
        return data
    }

    // Get all items
    else if (method === 'get' && id.length < 2){
        const { data } = await axios.get(baseUrl + endpoint )
        return data
    }

    // update item
    else if (method === 'put' && body ){
        const { data } = await axios.put(baseUrl + endpoint, body )
        return data
    }

    // delete item
    else if (method === 'delete' ){
        const { data } = await axios.delete(baseUrl + endpoint + `/${id}` )
        return data
    }

    // Add item
    else if (method === 'post' ){
        const { data } = await axios.post(baseUrl + endpoint, body )
        return data
    }
}



export default myFetch