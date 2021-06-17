import { combineReducers } from 'redux'

import users, {IUsersReducer} from './usersReducers'
import photos, {IPhotosReducer} from './photosReducers'
import posts, { IPostsReducer } from './postsReducers'
import comments, { ICommentsReducer } from './commentsReducers'

export default combineReducers({
    users,
    photos,
    posts,
    comments,
})

export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer,
    posts: IPostsReducer,
    comments: ICommentsReducer
}