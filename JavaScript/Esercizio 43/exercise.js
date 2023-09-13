const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(data) {
  try {
    const userJSON = JSON.stringify(data);
    localStorage.setItem("user", userJSON);
    console.log("User salvato nel localStorage.");
  } catch (error) {
    console.error(error);
  }
}

saveUser(user);