const initialState = {};

const singleData = (state = initialState, action) => {
    switch (action.type) {
        case 'EDITING':
            // console.log("editing: "+action.data);
            return action.data;
        default:
            return {
                id: "",
                firstname: "",
                lastname: "",
                sex: "",
                age: "",
                password: "",
                password_re: ""
            };
    }
}
export default singleData;