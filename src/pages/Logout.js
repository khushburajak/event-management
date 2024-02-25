const Logout = (e) => {
  localStorage.clear();
  window.location.href = "/login";
};
export default Logout;
