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
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:8080/api/admin/games', {
        name,
        description,
        genre
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Thêm game thành công!");
      setName("");
      setDescription("");
      setGenre("");
    } catch (error) {
      setMessage("Lỗi khi thêm game!");
    }
};