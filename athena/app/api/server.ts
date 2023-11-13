export const server = "http://localhost:3500/api/v2"; 
//export const backend_url = "http://localhost:8000/" ;
/*import request from "superagent"
import { server } from "../../../athena/server/server"
import { Dispatch } from "redux";

// create product

export const createBook = (formData: FormData) => async (dispatch: Dispatch) => {
    try {
    dispatch({
        type: "productCreateRequest",
    });

    const { body } = await request
        .post(`${server}/publish`)
        .send(formData)
        .end((err, res) => {
            if (err) {
                dispatch({
                    type: "productCreateFail",
                    payload: err.response.data.message,
                });
            } else {
                dispatch({
                    type: "productCreateSuccess",
                    payload: res.body.product,
                });
            }
        });
    } catch (error) {
      dispatch({
        type: "productCreateFail",
        payload: error.response.data.message,
      });
    }
  };
*/
