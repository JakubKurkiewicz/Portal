import React, {ChangeEvent, FC, useEffect} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import '../../../src/index.css'
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getSomeData } from '../../actions/usersActions';


const DropHome = styled.div`
display:flex;
margin-bottom: 1vh;
`;

const DropPublications = styled.div`
  display:flex;
  margin-bottom: 1vh;
`;

const DropPeople = styled.div`
  display:flex;
  margin-bottom: 1vh;
`;

const DropEntities = styled.div`
  display:flex;
  margin-bottom: 1vh;
`;
const DropAdministration = styled.div`
  display:flex;
  margin-bottom: 1vh;
`;


const Wrapper = styled.div`
  background-color: rgb(255,255,255);
  
`;




const DropClientContract = styled.div`
display:flex;
  margin-bottom: 1vh;
`;

const DropSupplierContract = styled.div`
display:flex;
  margin-bottom: 1vh;
`;



const DropCorporate = styled.div`
display:flex;
  margin-bottom: 1vh;
`;

const DropGroupNorms = styled.div`
display:flex;
  margin-bottom: 1vh;
`;

const DropProfile = styled.div`
display:flex;
  margin-bottom: 1vh;
`;

const DropPrivacy = styled.div`
display:flex;
  margin-bottom: 1vh;
`;

const DropSettings = styled.div`
display:flex;
  margin-bottom: 1vh;
`;


const DropLogout = styled.div`
display:flex;
  margin-bottom: 1vh;
  margin-left: 9vh;
`;


const DropFilter = styled.div`

`;

type GetSomeData = ReturnType<typeof getSomeData>

const ExpandedMenu: FC = (props) => {
  const [iconName, setIconName] = useState("");

const nameHandler = (e:any) =>{
  const iconName = e.target.innerHTML;
  setIconName(iconName);
} 



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetSomeData>(getSomeData(iconName));
  },[iconName]);

  const handleClick =(e:any) => {
   
  const name = e.target.innerHTML
  console.log(e)
    
  }

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text)
    console.log(text)
  }

  const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
    ...globalState.users,
    ...globalState.photos
  }));
  return (
    <Wrapper  className="menuBorder">
    <input type="text" className="form-control mb-3" value={inputText} onChange={inputHandler} placeholder="Filter..."/>
    <h3  className="grey ml-2 mb-2">Platform</h3>
    {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
    <Link style={{color:'black',textDecoration:'none'}} to="/publications">
      <DropHome  className="ml-2" >
      <img alt="zdjecie"   src="./media/house2.svg"/>
      <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.2vh'}}>Home</h1>
      </DropHome>
      </Link>
    }
    {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/publications">
      <DropPublications className="ml-2">
      <img alt="zdjecie"  src="./media/publications.svg"/>
      <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Publications</h1>
      </DropPublications>
      </Link>
    }  
    {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
    <Link style={{color:'black',textDecoration:'none'}} to="/empty">
            <DropPeople className="ml-2">
            <img alt="zdjecie"  src="./media/people.svg"/>
            <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.2vh'}}>People</h1>
          </DropPeople>
          </Link>
    }
    {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
    <Link style={{color:'black',textDecoration:'none'}} to="/entities">
                <DropEntities className="ml-2">
                <img alt="zdjecie"  src="./media/entities2.svg"/>
                <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Entities</h1>
              </DropEntities>
    </Link>
    }
    {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
    <Link style={{color:'black',textDecoration:'none'}} to="/empty">
                <DropAdministration className="ml-2">
                <img alt="zdjecie"  src="./media/administration.svg"/>
                  <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Administration</h1>
                </DropAdministration>
                </Link>
    }
      
      <h3   className="grey ml-2 mb-2">Workspaces</h3>

      {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/empty">
        <DropClientContract className="ml-2">
        <img alt="zdjecie"  src="./media/contract.svg"/>
          <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Client contract</h1>
        </DropClientContract >
        </Link>
      }
      {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/empty">
        <DropSupplierContract className="ml-2">
        <img alt="zdjecie"  src="./media/contract.svg"/>
          <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Supplier contract</h1>
        </DropSupplierContract >
        </Link>
      }
      {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/empty">
        <DropCorporate className="ml-2">
        <img alt="zdjecie"  src="./media/entities.svg"/>
          <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Corporate</h1>
        </DropCorporate>
        </Link>
      }
      {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/empty">
        <DropGroupNorms className="ml-2">
        <img  alt="zdjecie"  src="./media/book.svg"/>
          <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Group Norms</h1>
        </DropGroupNorms>
        </Link>
      }
      {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
      <Link style={{color:'black',textDecoration:'none'}} to="/empty">
        <DropSupplierContract className="ml-2">
        <img alt="zdjecie"  src="./media/contract.svg"/>
          <h1 onClick={e=>nameHandler(e)} style={{marginLeft:'2.5vh'}}>Real estate contracts</h1>
        </DropSupplierContract>
        </Link>
      }
      <hr/>
      <h3    className="grey ml-2 mb-2">Account</h3>
      <DropProfile className="ml-2">
      
      <img className="rounded-circle" alt="zdjecie" style={{width:'1.5rem'}}  src={(photosList?.[((usersList?.[0]?.id)-1)]?.thumbnailUrl)}/>
      <Link style={{color:'black',textDecoration:'none'}} to="/profile"><h1 style={{marginLeft:'2.5vh',paddingTop:'0.25rem'}}>{usersList?.[0]?.name}</h1>  </Link>
      
      </DropProfile>
      <DropPrivacy className="ml-2">
      <img alt="zdjecie"  src="./media/privacy.svg"/>
        <h1 style={{marginLeft:'2.5vh'}}>Privacy</h1>
      </DropPrivacy>
      <DropSettings className="ml-2">
      <img alt="zdjecie"  src="./media/settings.svg"/>
        <h1 style={{marginLeft:'2.5vh'}}>Settings</h1>
      </DropSettings>
      <hr/>
      <DropLogout>
      <img alt="zdjecie"  src="./media/Logout.svg"/>
        <h1 style={{marginLeft:'2.5vh'}} className="grey">Logout</h1>
      </DropLogout>
      
    </Wrapper>

  )
}



export default ExpandedMenu;