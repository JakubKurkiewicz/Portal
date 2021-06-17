import {ISinglePhoto} from '../entities/photos'
import * as actionTypes from '../actions/actionTypes/photoTypes'
export interface IPhotosReducer {
    photosList: ISinglePhoto[];
}

const defaultState =(): IPhotosReducer => ({
    photosList: []
});

export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_PHOTOS: {
            const paylod: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: paylod.photosList
            }
        }
        default: {
            return state;
        }
    }
}