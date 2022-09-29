// use local storage to manage cart data
const addToDb = time => {
    let exerciseList = {};

    const storedList = localStorage.getItem('break-time');
    if (storedList) {
        exerciseList = JSON.parse(storedList);
    }
}
export {
    addToDb
}