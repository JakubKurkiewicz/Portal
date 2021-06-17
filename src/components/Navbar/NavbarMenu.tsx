import React, {FC} from 'react';
import styled from 'styled-components'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../../../src/index.css'
import useDropdown from 'react-dropdown-hook';
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu'
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';


const RightIcons = styled.div`
position:absolute;
right:3rem;
top:1rem;
`;


const Menu = styled.div`
width: 30vh;
height: 0px;
position: absolute;
left: 13vh;
z-index: 100;
`;




  const NavbarMenu: FC = () => {
    const { someData, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
      ...globalState.users,
      ...globalState.photos

    }));
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  return (
      <div style={{height:'40px'}}>
        
      <Menu>
      <div style={{marginTop:'1rem'}} ref={wrapperRef}>
                <div  style={{display:"flex"}} onClick={toggleDropdown}>
                <img className="ml-2"  alt="zdjecie"  src="./media/house2.svg"/>
                    <h1  className="menuMLeft mt-2">{someData}</h1>
                    
                    <img style={{marginLeft:"14vh"}} className="menuMLeft" alt="zdjecie"  src="./media/arrow-down.svg"/>
                </div>
				{dropdownOpen &&
					<>
						 <ExpandedMenu/>
					</> 
				}
			</div>
      </Menu>
      <img  alt="zdjecie" style={{width:'2.4rem',marginLeft:'1rem'}}   src="./media/logo.png"/>
      <Form inline >
        <FormControl type="text" placeholder="Search Logalcluster" className="mr-sm-2 SearchBox"  />
        <img  alt="zdjecie" className="lupka"  src="./media/search.svg"/>
      </Form>
      <RightIcons>
      <img className="mr-sm-4" alt="zdjecie"  src="./media/house.svg"/>
      <img className="mr-sm-4" alt="zdjecie" src="./media/commentsN.png"/>
      <img alt="zdjecie" src="./media/bellN.png"/>
      </RightIcons>  
    </div>
   
  )
};

export default NavbarMenu;
