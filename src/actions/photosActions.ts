import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/photoTypes';
import {ISinglePhoto} from '../entities/photos';

export const getPhotos = (): Promise<ISinglePhoto> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photosList: ISinglePhoto[]) => {
          dispatch({
            type: actionTypes.GET_PHOTOS,
            photosList
        })
    })
}) as any;

