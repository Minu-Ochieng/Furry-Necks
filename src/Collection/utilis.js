// const  baseurl = process.env.REACT_APP_BASE_URL;

// console.log({baseurl});

export  const getProducts = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json();
    }
    catch(error){
        throw new Error(error.message)
    }
}