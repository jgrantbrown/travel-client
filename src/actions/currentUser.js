import { resetLoginForm} from "./loginForm.js"
// sycnhnrous action creator
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
   return {
     type: "LOGOUT_CURRENT_USER"
   }
}

// Make a request from the backend
// Asynchrous action creators
export const login = credentials => {
    return dispatch => {
      console.log("credentials", credentials)
      return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      .then(r => r.json())
      .then( user =>{
        if (user.error) {
            console.log(user.error)
        }
        else{
          dispatch(setCurrentUser(user.data))
          dispatch(resetLoginForm())
        }
      }
      )
      .catch(console.log)
    }
}

export const getCurrentUser = () => {
    console.log("Get Current USer:")
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(r => r.json())
      .then( response =>{
        if (response.error) {
            console.log(response.error)
        }
        else{
          dispatch(setCurrentUser(response.data))
        }
      }

      )
      .catch(console.log)
    }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
    credentials: "include",
    method: "DELETE",
    })
    }
  }
