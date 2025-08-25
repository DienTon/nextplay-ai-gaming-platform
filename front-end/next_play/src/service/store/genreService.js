import axios from "axios";

export const getAllGenre = async() => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:8080/api/page/genres', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
