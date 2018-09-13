const initialState = [];

const dataList = (state = initialState, action) => {
    switch (action.type) {
        
        case 'SEARCH':
        case 'ADD':
        case 'DELETE':
        case 'UPDATE':
        case 'GET':
            return action.data;
            // console.log(action.data);
        case 'SORT':
            switch (action.sortBy) {
                case "firstname": return state.sort((a, b) => a.firstname.localeCompare(b.firstname));
                case "lastname": return state.sort((a, b) => a.lastname.localeCompare(b.lastname));
                case "sex": return state.sort((a, b) => a.sex.localeCompare(b.sex));
                case "age": return state.sort((a, b) => a.age - b.age);
                default:
                    break;
            }
            break;

        default:
            return state;
    }
}
export default dataList;