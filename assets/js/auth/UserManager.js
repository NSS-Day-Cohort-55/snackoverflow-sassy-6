// let loggedInUser = {
//     id: 1,
//     name: "Bryan",
//     email: "bryan@bn.com",
//     isAdmin: true
//   }
let loggedInUser = {};

export const getLoggedInUser = () => {
  return loggedInUser;
}

export const logoutUser = () => {
  sessionStorage.removeItem("SOuser")
  loggedInUser = {}
}


export const loginUser = (userObj) => {
  return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      if (parsedUser.length > 0) {
        setLoggedInUserSessionStorage(parsedUser[0]);
        return getLoggedInUser();
      } else {
        //no user
        return false;
      }
    })
}

export const setLoggedInUserSessionStorage = (userObj) => {
  sessionStorage.setItem("SOuser", JSON.stringify(userObj))
  loggedInUser = userObj;
}

export const setLoggedInUserAppState = (userObj) => {
  loggedInUser = userObj;
}


export const registerNewUser = (userObj) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "name": userObj.name,
    "email": userObj.email,
    "isAdmin": false
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:8088/users", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setLoggedInUserSessionStorage(result);
      return result;
    })
    .catch(error => console.log('error', error));
}