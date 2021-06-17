import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IPhotosReducer } from '../../reducers/photosReducers';








const Profile = styled.div`
padding: 7%;
background-color: white;
border: 2px solid red;
border-radius: 25px;
position:absolute;
left:3%;
`;

const Hello = styled.div`
text-align:center;
`;

const Network = styled.div`
display:flex;
margin-left:-1vh;
margin-bottom: 1vh;
`;



const YourPublications = styled.div`
display:flex;
margin-left:-1vh;
`;



const Others = styled.div`
 margin-top: 42vh;
 margin-left:6vh;  

`;

export const Publications = styled.div`
display:flex;
margin-bottom: 4vh;
`;

export const Ecosystem = styled.div`
display:flex;
margin-bottom: 4vh;
`;

export const Entities = styled.div`
display:flex;
`;






  const LeftMenu: FC = () => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
      ...globalState.users,
      ...globalState.photos
    }));
    
   const PhotoUrl= (photosList?.[((usersList?.[0]?.id)-1)]?.thumbnailUrl);
   
  return (
    <div className="LeftMenu">
 
        <Profile>
          <Hello>
            <img src={PhotoUrl} style={{width:'5rem'}} className="rounded-circle" alt="zdjecie"/>
           <Link style={{textDecoration:'none'}} to="/profile"><h3 className="h5" style={{color:'rgb(42,63,157)'}}>{usersList?.[0]?.name}</h3></Link>
            <h4 style={{color:'rgb(157,160,165)'}} >{usersList?.[0]?.company.catchPhrase} - <br/>{usersList?.[0]?.company.name}</h4>
            <hr style={{width:'126%',marginLeft:'-2rem'}}></hr>
          </Hello>
          <Network>
                    <img style={{width:'4vh'}}  alt="zdjecie" src="./media/network.png"/>
                    <h1 style={{paddingLeft:'1vh', paddingRight:'4vh',marginTop:'1vh',color:'rgb(35,44,71)'}}>Your Network</h1>
                    <img style={{marginLeft:'3.5vh'}} className="radius"  alt="zdjecie" src="./media/user-plus.svg"/>
            </Network>
            <YourPublications>
                    <img style={{width:'4vh'}}   alt="zdjecie" src="./media/publications.svg"/>
                    <h1 style={{paddingLeft:'1vh', marginRight:'4vh',marginTop:'1.5vh',color:'rgb(35,44,71)'}}>Your Publications</h1>
                    <img style={{marginLeft:'1vh'}} className="radius"  alt="zdjecie" src="./media/plus.svg"/>
            </YourPublications>
        </Profile>
        
        <Others>
          <Publications>
            <img style={{width:'7%'}}   alt="zdjecie" src="./media/publications.svg"/>
            <Link to="/publications"  style={{paddingLeft:'5%', paddingTop:'2%', color:'rgb(75,82,104)',textDecoration:'none'}}>Publications</Link>
          </Publications>
          <Ecosystem>
            <img style={{width:'7%'}}   alt="zdjecie" src="./media/ecosystem.svg"/>
            <Link to="/empty"  style={{paddingLeft:'5%', paddingTop:'2%', color:'rgb(75,82,104)',textDecoration:'none'}}>Ecosystem</Link>
          </Ecosystem>
          <Entities>
          
            <img style={{width:'7%'}}   alt="zdjecie" src="./media/entities.svg"/>
            <Link to="/entities"  style={{paddingLeft:'5%', paddingTop:'2%', color:'rgb(75,82,104)',textDecoration:'none'}}>Entities</Link>
            
          </Entities>
        </Others>
    </div>        
  )
};

export default LeftMenu;
