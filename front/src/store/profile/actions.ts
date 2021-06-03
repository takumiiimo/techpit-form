import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";
import { Career } from "../../domain/entity/career"
import { College } from "../../domain/entity/college";

const actionCreator = actionCreatorFactory();

const profileActions = {
    // Profileの項目のうち必要なものだけを渡す
    setProfile: actionCreator<Partial<Profile>>("SET_PROFILE"),
    setAddress: actionCreator<Partial<Address>>("SET_ADDRESS"),
    // doneアクションしか必要ないので2つ目だけを定義
    searchAddress: actionCreator.async<{}, Partial<Address>, {}>("SEARCH_ADDRESS"),

    // 編集のaction  payloadでは、更新したい項目をcareerで何番目の職歴かを渡す
    setCareer: actionCreator<{ career: Partial<Career>; index: number }>("SET_CAREER"),
    deleteCareer: actionCreator<number>("DELETE_CAREER"),
    addCareer: actionCreator<{}>("ADD_CAREER"),

    setCollege: actionCreator<Partial<College>>("SET_COLLEGE")
};

export default profileActions;