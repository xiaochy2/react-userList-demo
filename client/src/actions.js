import axios from 'axios';

export const getInfo = () => dispatch => {
    // console.log("get");
    axios.get('api/users')
        .then(res => dispatch({
            type: 'GET',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const add = singalData => dispatch => {
    // console.log("add " + singalData.firstname);
    axios.post('api/users', { info: singalData })
        .then(res => dispatch({
            type: 'ADD',
            
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const editing = singleData => ({
    type: 'EDITING',
    data: singleData
})

export const update = singalData => dispatch => {
    // console.log("update");
    axios.put('api/users/' + singalData.id, { info: singalData })
        .then(res => dispatch({
            type: 'UPDATE',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const search = text => dispatch => {
    // console.log("search "+text+" 1");

    axios.get('api/users/' + text)
        .then(res => dispatch({
            type: 'SEARCH',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })


}

export const del = id => dispatch => {
    // console.log("delete " + id);
    axios.delete('api/users/' + id)
        .then(res => dispatch({
            type: 'DELETE',
            data: res.data
        })
        )
        .catch(err => {
            console.log(err);
        })
}

export const sort = tag => ({
    type: 'SORT',
    sortBy: tag
})

export const next = () => ({
    type: 'NEXT',
})

export const prev = () => ({
    type: 'PREV',
})


