import {ISingleUser} from '../entities/users'
import * as actionTypes from '../actions/actionTypes/userTypes'
export interface IUsersReducer {
    usersList: ISingleUser[];
    someData: string;
}

const defaultState =(): IUsersReducer => ({
    usersList: [],
    someData: 'Ala ma kota'
});

export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_USERS: {
            const paylod: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: paylod.usersList
            }
        }

        case actionTypes.PUSH_DATA: {
            const paylod: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return {
                ...state,
                someData: paylod.someData
            }
        }
        default: {
            return state;
        }
    }
}