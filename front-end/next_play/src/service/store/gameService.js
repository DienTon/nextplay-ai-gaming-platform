import apiClient from "../../utils/apiClient";

export const getAllGames = async (page = 0, size = 5) => {
  try {
    const res = await apiClient.get(`http://localhost:8080/api/page/games/`, {
        params: {
          page,
          size,
        },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addNewGame = async (game) => {
  try {
      const res = await apiClient.post('http://localhost:8080/api/admin/games', {
        title: game.title,
        description: game.description,
        title: game.title,
        genre: game.genre,
        price: game.price,
        image: game.imageUrl
      });
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
  }
};