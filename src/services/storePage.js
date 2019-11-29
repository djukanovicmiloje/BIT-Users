//Dobija state contenta

function storeContentState(contentState) {
  /*     const layout = contentState.layout;
    const  */
  const contentStateJSON = JSON.stringify(contentState);
  localStorage.setItem("content-state", contentStateJSON);
}
export default storeContentState;
