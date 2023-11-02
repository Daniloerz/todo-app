import axios from "axios"

const BASE_URL = 'http://localhost:8090/items';

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL, config());
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
    return null;
}

export const save = async ({ title, description, category, status }) => {
    try {
        return await axios.post(BASE_URL, {
            title, 
            description, 
            category, 
            status,
        }, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const update = async({ id, title, description, category }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            title, 
            description, 
            category
        }, config());
    } catch (error) {
        console.error(error);
        throw error;

    }
}

export const updateStatus = async ({ id, status }) => {
    try {
        let newStatus = "To-Do"; 

        if (status === "To-Do") {
            newStatus = "In progress";
        } else if (status === "In progress") {
            newStatus = "Done";
        }

        return await axios.patch(`${BASE_URL}/${id}?status=${newStatus}`, {}, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
}