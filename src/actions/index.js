import JsonPlaceHolder from "../api/JsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const res = await JsonPlaceHolder.get("/posts");
  console.log(res);

  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};



/**
 * Memoization Function
 */
const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await JsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
});
