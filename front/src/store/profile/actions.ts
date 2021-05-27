import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile"

const actionCreator = actionCreatorFactory();

const profileActions = {
    // Profileの項目のうち必要なものだけを渡す
    setProfile: actionCreator<Partial<Profile>>("SET_PROFILE")
};

export default profileActions;