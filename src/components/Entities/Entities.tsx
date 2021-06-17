import React, {ChangeEvent, FC, useEffect} from 'react';
import styled from 'styled-components'
import '../../index.css';
import {useDispatch, useSelector} from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { useState } from 'react';

interface IEntitiesElement{
  class?:any;
  class2?:any;
  class3?:any;
  companyName?:string;
  address?:string;
  photo?:string;
}
let myclass="class2"

const EntitiesElement: FC<IEntitiesElement> = (props) => {
    const { usersList, photosList, postsList} = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer >(globalState => ({
      ...globalState.users,
      ...globalState.photos,
      ...globalState.posts,
     
    }));
    
    return(
      <div className={`${props.class}`}>
          <div className={`${props.class2}`}>
            <img  src={props.photo} style={{width:'100%',height:'100%',borderRadius:'10px'}}></img>
          </div>
        <div  className={`${props.class3}`}>
          <h1 style={{paddingTop:'1rem',paddingBottom:'1rem'}}>{props.companyName}</h1>
          <p style={{fontSize:'75%'}}>{props.address}</p>
        </div>
       
      </div>
    )
  }
  
const EntitiesPage: FC = () => {
  const { usersList, photosList, postsList, commentsList} = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer >(globalState => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
    ...globalState.comments
  }));
    const [isActive, setActive] = useState(false);
    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setInputText(text)
      console.log(text)
    }
  
   

   const [isFilter, setFilter] = useState(false);
   const greycolor= 'rgb(116,174,189)';
    const getUrl = () => {
      {navigator.clipboard.writeText(window.location.href)}
    }
    const mosaicToggle = () => {
        setActive(false);
    }

    const filterToogle = () =>{
      setFilter(!isFilter)
    }

    const listToggle = () => {
        setActive(true);
    }
      return(
        <div style={{width:'100%',height:'100%',paddingLeft:'1rem',paddingTop:'1rem'}}>
          <div style={{width:'100%',height:'100%',marginBottom:'2rem'}}>
            <div style={{display:'flex'}}>
                <h1 style={{marginRight:'1rem',fontSize:'125%'}}>Entities</h1>
                <img src="./media/settings.svg"></img>
            </div>
            <div style={{display:'flex',borderRadius:'25px',border:'2px black solid',width:'13%',float:'right',marginRight:'1rem',marginTop:'-1.25rem'}}>
                <div style={{display:'flex'}} onClick={mosaicToggle}>
                    <img style={{paddingLeft:'1rem'}} src="./media/mosaic.svg"></img>
                    <p style={{paddingLeft:'1rem',paddingRight:'1rem',paddingTop:'0.25rem'}}>Mosaic</p>
                </div>
                <div style={{borderLeft:'2px black solid',paddingLeft:'1rem'}} onClick={listToggle}>
                    <img src="./media/menu.svg"></img>
                </div>
            </div>
          </div>
          <div style={{display:'flex',marginBottom:'1rem'}}>
            <div style={{display:'flex',marginRight:'1rem'}}>
              <img style={{width:'1rem',marginRight:'0.5rem'}} src="./media/circle-outline-with-a-central-dot.svg"></img>
              <p style={{marginRight:'0.5rem'}}>All</p>
              <img style={{width:'1rem'}} src="./media/arrow-down.svg"></img>
            </div>
            <div style={{display:'flex',borderRight:'1px grey solid'}}>
              <img style={{width:'1rem',marginRight:'1rem'}} src="./media/more.svg"></img>
            </div>
            <div style={{display:'flex',marginRight:'1rem'}}>
              <img style={{width:'1rem',marginLeft:'1rem',marginRight:'0.5rem'}} src="./media/sort.svg"></img>
              <p>Sort</p>
            </div>
            <div onClick={filterToogle} style={{display:'flex',marginRight:'1rem',borderRight:'1px grey solid'}}>
              <img style={{width:'1rem',marginRight:'0.5rem'}} src="./media/filter.svg"></img>
              <p style={{marginRight:'1rem'}}>Filters</p>
            </div>
            <div style={{display:'flex',marginRight:'1rem',borderRight:'1px grey solid'}}>
              <img style={{width:'1rem',marginRight:'1rem'}} src="./media/fullscreen.svg"></img>
            </div>
            <div onClick={getUrl}  style={{display:'flex'}}>
              <img style={{width:'1rem',marginRight:'0.5rem'}} src="./media/filter.svg"></img>
              <p>Share</p>
            </div>
            <div style={{position:'absolute',right:'14rem',top:'8rem'}}>
            <input type="text" className="form-control"  value={inputText} onChange={inputHandler}  placeholder="Filter..."/>
            </div>
          </div>
          <div   className={isFilter ? "filters" : "filters_none"}>
            <p style={{color:greycolor}}>Rows are filtered by the following conditions starting from the top</p>
            <div style={{display:'flex',marginLeft:'1rem',marginTop:'1rem'}}>
              <img style={{width:'1%',marginRight:'0.75rem'}}  src="./media/close.svg"></img>
              <p style={{marginRight:'1.5rem',marginTop:'0.5rem'}}>Where</p>
              <p  style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Company</p>
              <img style={{marginRight:'1.5rem'}} alt="zdjecie"  src="./media/arrow-down.svg"/>
              <p style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Contains</p>
              <img alt="zdjecie"  src="./media/arrow-down.svg"/>
              <div style={{borderRadius:'25px',backgroundColor:'rgb(232,232,232)',padding:'0.5rem',paddingRight:'5rem',marginLeft:'1.5rem'}}>
                <p>Type...</p>
              </div>
            </div>
            <div style={{display:'flex',marginLeft:'1rem',marginTop:'1rem'}}>
              <img style={{width:'1%',marginRight:'0.75rem'}}  src="./media/close.svg"></img>
              <p style={{marginRight:'1.5rem',marginTop:'0.5rem'}}>Where</p>
              <p  style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Status</p>
              <img style={{marginRight:'1.5rem'}} alt="zdjecie"  src="./media/arrow-down.svg"/>
              <p style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Is</p>
              <img alt="zdjecie"  src="./media/arrow-down.svg"/>
              <div style={{borderRadius:'25px',backgroundColor:'rgb(232,232,232)',padding:'0.5rem',paddingRight:'5rem',marginLeft:'1.5rem',marginRight:'1.5rem'}}>
                <p>Type...</p>
              </div>
              <p style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>In</p>
              <img style={{}} alt="zdjecie"  src="./media/arrow-down.svg"/>
              <div style={{borderRadius:'25px',backgroundColor:'rgb(232,232,232)',padding:'0.5rem',paddingRight:'5rem',marginLeft:'0.5rem',marginRight:'1.5rem'}}>
                <p>Entity...</p>
              </div>
            </div>
            <div style={{display:'flex',marginLeft:'1rem',marginTop:'1rem'}}>
              <img style={{width:'1%',marginRight:'0.75rem'}}  src="./media/close.svg"></img>
              <p style={{marginRight:'2.45rem',marginTop:'0.5rem'}}>And</p>
              <p  style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Status</p>
              <img style={{marginRight:'1.5rem'}} alt="zdjecie"  src="./media/arrow-down.svg"/>
              <p style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>Ends before</p>
              <img alt="zdjecie"  src="./media/arrow-down.svg"/>
              <div style={{borderRadius:'25px',backgroundColor:'rgb(232,232,232)',padding:'0.5rem',paddingRight:'5rem',marginLeft:'1.5rem',marginRight:'1.5rem'}}>
                <p>Date...</p>
              </div>
              <p style={{marginRight:'0.75rem',marginTop:'0.5rem'}}>In</p>
              <img style={{}} alt="zdjecie"  src="./media/arrow-down.svg"/>
              <div style={{borderRadius:'25px',backgroundColor:'rgb(232,232,232)',padding:'0.5rem',paddingRight:'5rem',marginLeft:'0.5rem',marginRight:'1.5rem'}}>
                <p>Entity...</p>
              </div>
            </div>
            <div style={{display:'flex',marginLeft:'1rem',marginTop:'1rem',marginBottom:'0.5rem',color:'rgb(42,63,157)'}}>
              <img style={{width:'1%',marginRight:'0.75rem'}}  src="./media/plus.svg"></img>
              <p style={{marginRight:'0.5rem',marginTop:'0.25rem'}}>Add filter</p>
              <p  style={{marginRight:'0.75rem',marginTop:'0.25rem'}}>choose property</p>
              <img style={{marginRight:'1.5rem'}} alt="zdjecie"  src="./media/arrow-down.svg"/>
            </div>
          </div>
          <div  className={isActive ? "entities_collumn" : "entities_flex"}>
                
                {usersList.map((val, key) => {
                  return (
                 
                      
                    
                    <>
                    {val.company.name.toLowerCase().includes(inputText.toLowerCase()) &&   
                     <EntitiesElement class={isActive ? "a" : "b"} class2={isActive ? "c" : "d"} class3={isActive ? "e" : "f"} photo={photosList?.[(Math.floor(Math.random() * 10) + 1)]?.url} companyName={val.company.name} address={val.address.suite + " , " + val.address.street + " , " + val.address.city}/>
                    }
                    {val.company.name.toLowerCase().includes(inputText.toLowerCase()) &&   
                     <EntitiesElement class={isActive ? "a" : "b"} class2={isActive ? "c" : "d"} class3={isActive ? "e" : "f"} photo={photosList?.[(Math.floor(Math.random() * 10) + 1)]?.url} companyName={val.company.name} address={val.address.suite + " , " + val.address.street + " , " + val.address.city}/>
                    }
                    {val.company.name.toLowerCase().includes(inputText.toLowerCase()) &&   
                     <EntitiesElement class={isActive ? "a" : "b"} class2={isActive ? "c" : "d"} class3={isActive ? "e" : "f"} photo={photosList?.[(Math.floor(Math.random() * 10) + 1)]?.url} companyName={val.company.name} address={val.address.suite + " , " + val.address.street + " , " + val.address.city}/>
                    }
                    {val.company.name.toLowerCase().includes(inputText.toLowerCase()) &&   
                     <EntitiesElement class={isActive ? "a" : "b"} class2={isActive ? "c" : "d"} class3={isActive ? "e" : "f"} photo={photosList?.[(Math.floor(Math.random() * 10) + 1)]?.url} companyName={val.company.name} address={val.address.suite + " , " + val.address.street + " , " + val.address.city}/>
                    }
                   
                      </>
                  )
                })}

               
                
          </div>
        </div>
      )
    }

    export default EntitiesPage;