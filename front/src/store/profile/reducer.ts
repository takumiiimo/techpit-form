import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";

const init: Profile = {
    name: "",
    description: "",
    birthday: "",
    gender: "",
};

// typesctipt-fsa-reducersの関数
const profileReducer = reducerWithInitialState(init).case(
    profileActions.setProfile,
    (state, payload) => ({
        ...state,
        ...payload
    })
);

export default profileReducer;