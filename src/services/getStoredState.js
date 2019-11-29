function getStoredState() {
  return JSON.parse(localStorage.getItem("content-state"));
}
export default getStoredState;
