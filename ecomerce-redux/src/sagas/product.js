import axios from "axios";
import { all, takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions";
import history from "../history";

const API_URL = "http://localhost:3000/";
const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

// console.log(request, 'ini axios')

const read = async (path) =>
// console.log(path, "ini dataaa")
await request
    .get(path)
    .then((response) => response.data)
    .catch((err) => err);

const add = async (path, params) =>
await request.post(path.params)
.then(response => response.data)
.catch(err => err)

const PATH = "product";

function* loadProduct() {
  try {
    const data = yield call(read, PATH);
    // console.log(data, "..........")
    yield put(actions.loadProductSuccess(data));
  
  } catch (error) {
    yield put(actions.loadProductFailure());
  }
}
function* postProduct(payload) {
  const { title, rate, description, brand, price, detailproduct } = payload;
  let id = Date.now();
  yield put(actions.postProductRedux(id, title, rate, description, price, brand, detailproduct))
  try {
    // console.log(data, "ini ppoosssttt")
      const data = yield call(add, PATH, { id, title, rate, description, price, brand, detailproduct });
      yield put(actions.postProductSuccess(data));
      history.push('/product')
  } catch (error) {
      console.log(error);
      yield put(actions.postProductFailure(title));
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery("LOAD_PRODUCT", loadProduct),
    takeEvery("ADD_PRODUCT", postProduct),
  ])
}