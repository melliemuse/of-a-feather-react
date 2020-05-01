import Settings from './Settings'
export default {
    getSingle(endpoint, id) {
        return fetch(`${Settings.remote_URL}/${endpoint}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
            },
        }).then(response => response.json())
    },
    getAll(endpoint) {
        return fetch(`${Settings.remote_URL}/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
            },
        }).then(response => response.json())
    },
    createNew(endpoint, newItem) {
        return fetch(`${Settings.remote_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
            },
            body: JSON.stringify(newItem)
        }).then(response => response.json)
    },
    update(endpoint, itemToUpdate) {
        console.log(itemToUpdate, itemToUpdate.id)
        return fetch(`${Settings.remote_URL}/${endpoint}/${itemToUpdate.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
            },
            body: JSON.stringify(itemToUpdate)
        }).then(response => response.json)
    },
    patch(endpoint, updateObj) {
        return fetch(`${Settings.remote_URL}/${endpoint}/${updateObj.id}`, {
            method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
                },
                body: JSON.stringify(updateObj)
            }).then(response => response.json)
        },
    patch2(endpoint, updateObj, id) {
        return fetch(`${Settings.remote_URL}/${endpoint}/${id}`, {
            method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Token ${sessionStorage.getItem(Settings.token_name)}`,
                },
                body: JSON.stringify(updateObj)
            }).then(response => response.json)
        },
    delete(endpoint, id) {
        return fetch(`${Settings.remote_URL}/${endpoint}/${id}`, {
            method: "DELETE"
        }
        ).then(response => response.json)
    }

}