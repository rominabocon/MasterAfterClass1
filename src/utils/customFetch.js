import listtodos from "./todos";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(listtodos);
        } , 500);
    })
}

export const getToDoById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(listtodos.find(prod => prod.id === id))
        }, 500)
    })
}


