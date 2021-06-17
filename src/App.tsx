import React, {FC, useEffect} from 'react';
import styled from 'styled-components'
import './App.css';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './index.css';
import LeftMenu from './components/LeftMenu/LeftMenu'
import NavbarMenu from './components/Navbar/NavbarMenu'
import MainRight from './components/MainRight/MainRight'
import EntitiesPage from './components/Entities/Entities'
import Profile from './components/Profile/Profile'
import WorkPage from './components/WorkPage/WorkPage'
import {useDispatch, useSelector} from 'react-redux';
import {getSomeData, getUsers} from './actions/usersActions';
import {getPhotos} from './actions/photosActions';
import { getPosts } from './actions/postsActions';
import { getComments } from './actions/commentsActions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IState } from './reducers';
import { IPhotosReducer } from './reducers/photosReducers';
import { IPostsReducer } from './reducers/postsReducers';
import { IUsersReducer } from './reducers/usersReducers';
import { ICommentsReducer } from './reducers/commentsReducers';
import Empty from './components/Empty/Empty';



type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>
type GetComments = ReturnType<typeof getComments>
type GetSomeData = ReturnType<typeof getSomeData>


const Web = styled.div`
width: 100%;
height:100%;
`;

const Content = styled.div`
width: 100%;
`;

const EmptyRight = styled.div`

  width: 70%;
  height: 100%;
  float: right;
  margin-right:6% ;
  margin-top: 1%;
  `





 export const App: FC = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
    dispatch<GetSomeData>(getSomeData("Home"));
  },[]);



  return (
  <Router>
  <Web>
    <Navbar className="color" style={{position:'relative'}}  variant="light">

      <NavbarMenu>
        
      </NavbarMenu>  
    </Navbar>
    <Content>
    <LeftMenu/>
    <EmptyRight>
      <Switch>
      <Route path="/empty">
          <Empty/>
        </Route>
      <Route path="/workpage">
          <WorkPage/>
        </Route>
        <Route path="/publications">
          <MainRight/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/entities">
          <EntitiesPage/>
        </Route>
        <Route path="/">
          <MainRight/>
        </Route>
        
      </Switch>
    </EmptyRight>
    </Content>
  </Web>
  </Router>        
  )
};

export default App;
