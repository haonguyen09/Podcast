function getObjectFromLocalStorage(key) {
    let jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : {};
}


function saveObjectToLocalStorage(key, obj) {
    let jsonString = JSON.stringify(obj);
    localStorage.setItem(key, jsonString);
}

export {
    getObjectFromLocalStorage,
    saveObjectToLocalStorage
}