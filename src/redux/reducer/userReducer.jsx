<<<<<<< HEAD
import axios from "axios";
import { history } from '../../index';
import { createSlice } from "@reduxjs/toolkit";
import {getStore,getToken,http,saveStoreJson, USER_LOGIN} from '../../util/config';
const initialState = {
  userRegister: null,
  newUser:{},
  productFavorite:[],
  profile:null,
=======
import { history } from "../../index";
import { createSlice } from "@reduxjs/toolkit";
import { getStore, http, saveStoreJson, USER_LOGIN } from "../../util/config";
const initialState = {
  userLogin: null,
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
<<<<<<< HEAD
    setNewUser: (state, action) => {
      state.newUser = action.payload;
  },
  getProfileAction: (state, action) => {
      state.profile = action.payload;
  },
  postUpdateProfileApi: (state, action) => {
      state.profile = action.payload;
  },
  getProductFavoriteAction: (state, action) => {
      state.productFavorite = action.payload;
  },  
  }
  ,
});

export const {setNewUser, getProfileAction, postUpdateProfileApi, getProductFavoriteAction} = userReducer.actions;

export default userReducer.reducer;


/**=========== async action ================= */
//lay thong tin nguoi dang ky
export const registerApi = (infoUse) => {  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
  return async dispatch => {
    try{

        let result = await http.post('/api/Users/signup', infoUse);
        console.log('result', result.data);
        const action = setNewUser(result.data.content);
        dispatch(action);
        alert('đăng kí thành công');
        history.push('/login');
    }catch(error){
        alert('trung email');
    }
  }
}
//gui thong tin len api de dang nhap
export const loginApi = (userLogin) => {
  return async () => {
      let result = await http.post(`/api/Users/signin`, userLogin);
      saveStoreJson(USER_LOGIN, result.data.content);
      alert('đăng nhập thành công');

      history.push('/profile');
      window.location.reload();
      //Luu cookie hoac localstorage cho token
      //luu thong tin dang nhap thanh cong {email,accessToken} vao localstorage
      //luu access token vao cookie
      // setCookie(TOKEN_CYBER,result.data.content.accessToken);
  }
}

//lay thong tin user profile
export const getProfileApi = async (dispatch) => {
  if (!getToken()) return;
  // console.log(getStore());
  let result = await http.post('/api/Users/getProfile');
=======
    getUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setNewUser: (state, action) => {
      state.newUser = action.payload;
    },
    getProfileAction: (state, action) => {
      state.profile = action.payload;
    },
    postUpdateProfileApi: (state, action) => {
      state.profile = action.payload;
    },
    getProductFavoriteAction: (state, action) => {
      state.productFavorite = action.payload;
    },
  },
});

export const {
  getUserLogin,
  setNewUser,
  getProfileAction,
  postUpdateProfileApi,
  getProductFavoriteAction,
} = userReducer.actions;

export default userReducer.reducer;

/**=========== async action ================= */
//lay thong tin nguoi dang ky
export const registerApi = (infoUse) => {
  // { "email": "", "password": "",  "name": "",  "gender": true, "phone": "" }
  return async (dispatch) => {
    try {
      let result = await http.post("/api/Users/signup", infoUse);
      console.log("result", result.data);
      const action = setNewUser(result.data.content);
      dispatch(action);
      alert("đăng kí thành công");
      history.push("/login");
    } catch (error) {
      alert("trung email");
    }
  };
};
//gui thong tin len api de dang nhap
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    let result = await http.post(`/api/Users/signin`, userLogin);
    dispatch(getUserLogin(userLogin));

    saveStoreJson(USER_LOGIN, result.data.content);
    // alert('đăng nhập thành công')
    // window.location.reload();

    history.push("/profile");
    //Luu cookie hoac localstorage cho token
    //luu thong tin dang nhap thanh cong {email,accessToken} vao localstorage
    //luu access token vao cookie
    // setCookie(TOKEN_CYBER,result.data.content.accessToken);
  };
};

//lay thong tin user profile
export const getProfileApi = async (dispatch) => {
  if (!getStore()) return;
  // console.log(getStore());
  let result = await http.post("/api/Users/getProfile");
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474
  //sau khi call api profile dua len reducer
  const action = getProfileAction(result.data.content);
  dispatch(action);
  // console.log(result.data.content);
<<<<<<< HEAD
}
=======
};
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474

//cap nhat thong tin user
export const updateProfileApi = (profileUpdate) => {
  return async (dispatch) => {
<<<<<<< HEAD
      try {
          await http.post('/api/Users/updateProfile', profileUpdate);
          alert("update thành công")
      } catch (error) {
          console.log(error);
      } finally {
          dispatch(getProfileApi);
      }
  }

}
=======
    try {
      await http.post("/api/Users/updateProfile", profileUpdate);
      alert("update thành công");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getProfileApi);
    }
  };
};
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474
///
//dang nhap bang facebook
export const loginFacebookApi = (fbToken) => {
  try {
<<<<<<< HEAD
      return async () => {
          const result = await http.post("/api/Users/facebooklogin", fbToken);
          console.log(result.data.content);
          // alert('đăng nhập thành công')
          history.push('/profile');
          window.location.reload();
          saveStoreJson(USER_LOGIN, result.data.content);
      }
  } catch (error) {
      console.log({ error });
  }
}
//xoa san pham order
export const deteleOrderApi = (id) => {
  try {
      return async () => {
          const result = await http.post("/api/Users/deleteOrder", id);
          console.log(result);
          window.location.reload();
      }
  } catch (error) {
      console.log(error);
  }
}
=======
    return async () => {
      const result = await http.post("/api/Users/facebooklogin", fbToken);
      console.log(result.data.content);
      // alert('đăng nhập thành công')
      window.location.reload();
      history.push("/profile");
      saveStoreJson(USER_LOGIN, result.data.content);
    };
  } catch (error) {
    console.log({ error });
  }
};
//xoa san pham order
export const deteleOrderApi = (id) => {
  try {
    return async () => {
      const result = await http.post("/api/Users/deleteOrder", id);
      console.log(result);
      window.location.reload();
    };
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474

//like product
export const likeApi = (id) => {
  try {
<<<<<<< HEAD
      return async () => {
          const result = await http.get(`/api/Users/like?productId=${id}`);
          console.log('like', result.data.content);
      }
  } catch (error) {
      console.log(error);
  }
}
//unlike
export const unlikeApi = (id) => {
  try {
      return async () => {
          const result = await http.get(`/api/Users/unlike?productId=${id}`);
          console.log('unlike', result.data.content);
      }
  } catch (error) {
      console.log(error);
  }
}
//product favorite
export const getProductFavoriteApi = () => {
  try {
      return async (dispatch) => {
          const result = await http.get("/api/Users/getproductfavorite");
          console.log(result.data.content);
          const action = getProductFavoriteAction(result.data.content);
          dispatch(action);
      }
  } catch (error) {
      console.log(error);
  }
}
=======
    return async () => {
      const result = await http.get(`/api/Users/like?productId=${id}`);
      console.log("like", result.data.content);
    };
  } catch (error) {
    console.log(error);
  }
};
//unlike
export const unlikeApi = (id) => {
  try {
    return async () => {
      const result = await http.get(`/api/Users/unlike?productId=${id}`);
      console.log("unlike", result.data.content);
    };
  } catch (error) {
    console.log(error);
  }
};
//product favorite
export const getProductFavoriteApi = () => {
  try {
    return async (dispatch) => {
      const result = await http.get("/api/Users/getproductfavorite");
      console.log(result.data.content);
      const action = getProductFavoriteAction(result.data.content);
      dispatch(action);
    };
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> c1064d67b6b97d1dac2392097ced8cf08009f474
