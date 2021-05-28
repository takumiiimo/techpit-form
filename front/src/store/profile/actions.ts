import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";
import { Address } from "../../domain/entity/address";

const actionCreator = actionCreatorFactory();

const profileActions = {
    // Profileの項目のうち必要なものだけを渡す
    setProfile: actionCreator<Partial<Profile>>("SET_PROFILE"),
    setAddress: actionCreator<Partial<Address>>("SET_ADDRESS"),
    // doneアクションしか必要ないので2つ目だけを定義
    searchAddress: actionCreator.async<{}, Partial<Address>, {}>("SEARCH_ADDRESS")
};

export default profileActions;