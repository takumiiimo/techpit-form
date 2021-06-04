import { Profile } from "../entity/profile";
import { Validation } from "../entity/validation";
import { PROFILE } from "./profile";
import { College } from "../entity/college";
import { Career } from "../entity/career";
import { isEmptyBindingElement } from "typescript";

export const calculateValidation = (profile: Profile) => {
    const message: Validation = {
        name: emptyValidation(profile.name, PROFILE.NAME),
        description: lengthValidation(profile.description, 1000),
        birthday: emptyValidation(profile.birthday, PROFILE.BIRTHDAY),
        gender: emptyValidation(profile.gender, PROFILE.GENDER),
        address: {
            postalcode: emptyValidation(profile.address.postalcode, PROFILE.ADDRESS.POSTALCODE),
            prefecture: emptyValidation(profile.address.prefecture, PROFILE.ADDRESS.PREFECTURE),
            city: emptyValidation(profile.address.city, PROFILE.ADDRESS.CITY),
            restAddress: emptyValidation(profile.address.restAddress, PROFILE.ADDRESS.RESTADDRESS)
        },
        college: {
            faculty: ""
        },
        careers: []
    };
    return message;

};
export const isValid = (message: Validation) => {
    const falttenValues = Object.values(message)
        .map(extractValues)
        .flat() as string[];
    return falttenValues.every(fv => !fv);
};
const extractValues = (obj: any): any[] | string => {
    if (typeof obj === "string") return obj;
    return Object.values(obj).map(extractValues);
}


const emptyValidation = (target: string, col: string) => isEmpty(target) ? `${col}を入力してください。` : "";

const lengthValidation = (target: string, maxLen: number) => isToolLong(target, maxLen) ? `${maxLen}文字以下で入力してください。` : "";

const isEmpty = (str: string) => !str.trim();

const isToolLong = (str: string, maxLen: number) => str.trim().length >= maxLen;
