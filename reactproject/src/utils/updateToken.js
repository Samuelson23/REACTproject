export const updateToken = () => {
  const user = localStorage.getItem("user");

  if (user) {
    const parseUser = JSON.parse(urse);
    return parseUser.token;
  }
};
