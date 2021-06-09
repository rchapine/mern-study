import http from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`restaurants?page=${page}`);
  }

  get(id) {
    return http.get(`/restaurant?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`restaurants?${query}&page={page}`);
  }

  createReview(data) {
    return http.post("/resview-new", data);
  }

  updateReview(data) {
    return http.post("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review=delete?id=${id}`, {
      data: { user_id: userId },
    });
  }

  getCuisenes(id) {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
