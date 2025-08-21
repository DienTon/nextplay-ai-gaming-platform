import axios from "axios";
// import ReactPaginate from 'react-paginate';


export const getAllGames = async (page = 0, size = 5) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`http://localhost:8080/api/page/games/`, {
        params: {
          page,
          size,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addNewBlog = async (blog) => {
  try {
    await axios.post("http://localhost:3001/api/blog/addNewBlog/ ", blog);
    return true;
  } catch (error) {
    return false;
  }
};