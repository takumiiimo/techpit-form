import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActions from "./actions";
import { Career } from "../../domain/entity/career";


const init: Profile = {
    name: "",
    description: "",
    birthday: "",
    gender: "",
    address: {
        postalcode: "",
        prefecture: "",
        city: "",
        restAddress: "",
    },
    careers: [],
    college: {
        name: "",
        faculty: "",
        department: ""
    }
};
const initCareer: Career = {
    company: "",
    position: "",
    startAt: "",
    endAt: ""
};

// typesctipt-fsa-reducersの関数
const profileReducer = reducerWithInitialState(init).case(
    profileActions.setProfile,
    (state, payload) => ({
        ...state,
        ...payload
    })
)
    .case(profileActions.setAddress, (state, payload) => ({
        ...state,
        address: { ...state.address, ...payload }
    }))

    .case(profileActions.searchAddress.done, (state, payload) => ({
        ...state,
        address: { ...state.address, ...payload.result }
    }))
    // 職歴の編集
    .case(profileActions.setCareer, (state, payload) => ({
        ...state,
        careers: state.careers.map((c, i) => i === payload.index ? { ...c, ...payload.career } : c
        )
    }))
    // 職歴の削除
    .case(profileActions.deleteCareer, (state, payload) => ({
        ...state,
        careers: state.careers.filter((_, i) => i !== payload)
    }))
    // 職歴の追加
    .case(profileActions.addCareer, state => ({
        ...state,
        careers: [...state.careers, initCareer]
    }))
    .case(profileActions.setCollege, (state, payload) => ({
        ...state,
        college: { ...state.college, ...payload }
    }));


export default profileReducer;