import react,{FC} from 'react'
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';

const Resume = styled.div`
    width: 100%;
    height: 60%;
`;

const Publication = styled.div`
    width: 100%;
    height: 340px;
    background-color: yellow;
    border:20px black solid;
`;

const Workspace = styled.div`
    width: 100%;
    height: 300px;
    background-color: pink;
    display:flex;
`;

interface IComment {
    title?: string;
    body?: string;
    source?: string;
    name?: string;
    minisource?: string;
    type?: string;
    update?: string;
}

const Comment : FC<IComment> = (props) => {
    const { usersList, photosList, postsList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments
      }));
    return(
        <div className="comment">
            <p style={{paddingBottom:'1rem',fontSize:'125%', color:'rgb(42,63,157)'}}>{props.title}</p>
            <p style={{color:'rgb(86,93,114)'}}>{props.body}</p>
            <div className="comment_sector">
                <img className="rounded-circle" style={{width:'2%',height:'2%'}} src={props.source}></img>
                <p style={{color:'rgb(97,103,123)'}} className="comment_move">{props.name}</p>
                <img src="./media/black-circle.svg" style={{width:'0.3%',marginRight:'0.5rem'}}></img>
                <img src={props.minisource}></img>
                <p  style={{color:'rgb(120,125,142)'}} className="comment_move">{props.type}</p>
                <img src="./media/black-circle.svg" style={{width:'0.3%'}}></img>
                <p  style={{color:'rgb(165,168,172)'}} className="comment_move">{props.update}</p>
            </div>
        </div>
    )
}


const WorkPage = () =>{
    const { usersList, photosList, postsList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments
      }));
       const [inputText, setInputText] = useState<string>('');
      const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
        console.log(text)
      }
    
    return(
        <div style={{width:'100%',height:'100%'}}>
            <Publication>
                <div style={{width:'100%',height:'55%'}}>
                    <img style={{width:'100%',height:'100%'}} src={photosList?.[(usersList?.[8]?.id)]?.url}></img>
                </div>
                <div style={{width:'100%',height:'45%',display:'flex'}}>
                    <div style={{width:'10%',height:'100%',textAlign:'center'}}>
                        <img style={{width:'40%',marginTop:'2.5rem'}} src="./media/contract.svg"></img>
                    </div>
                    <div style={{width:'90%',height:'100%',position:'relative',paddingTop:'1rem'}}>
                        <img style={{position:'absolute',right:'1rem'}} src="./media/settings.svg"></img>
                        <p style={{fontSize:'150%',marginBottom:'1rem'}}>Client Contract</p>
                        <p style={{width:'90%'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </div>
                </div>
            </Publication>
            <Workspace>
                <div style={{width:'33.3%',height:'100%',backgroundColor:'#8a5151'}} >
                    <div style={{width:'100%',height:'90%',padding:'1.5rem',marginTop:'2rem'}}>
                        <div style={{width:'100%',height:'30%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <img style={{width:'10%'}} src="./media/entities.svg"></img>
                        </div>
                        <div style={{width:'100%',height:'60%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <p style={{fontSize:'150%'}}>Explore your <b style={{fontWeight:'bold'}}>entities</b></p>
                            <p style={{marginTop:'1rem',width:'75%',fontSize:'105%'}}>Take a few minutes to look at the most important elements and specificates of your entities.</p>
                        </div>
                    </div>
                </div>
                <div style={{width:'33.3%',height:'100%',backgroundColor:'#8a5151'}}>
                    <div style={{width:'100%',height:'90%',padding:'1.5rem',marginTop:'2rem'}}>
                        <div style={{width:'100%',height:'30%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <img style={{width:'13%'}} src="./media/diagram.svg"></img>
                        </div>
                        <div style={{width:'100%',height:'60%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <p style={{fontSize:'150%'}}>Structure the <b style={{fontWeight:'bold'}}>ownership</b></p>
                            <p style={{marginTop:'1rem',width:'75%',fontSize:'105%'}}>Get a clear view of the ownership by looking at the relationship between individuals and entities.</p>
                        </div>
                    </div>
                </div>
                <div style={{width:'33.33%',height:'100%',backgroundColor:'#8a5151'}}>
                    <div style={{width:'100%',height:'90%',padding:'1.5rem',marginTop:'2rem'}}>
                        <div style={{width:'100%',height:'30%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <img style={{width:'10%'}} src="./media/calendar.svg"></img>
                        </div>
                        <div style={{width:'100%',height:'60%',backgroundColor:'red',paddingLeft:'1rem',paddingTop:'1rem'}}>
                            <p style={{fontSize:'150%'}}>Define the <b style={{fontWeight:'bold'}}>calendar</b></p>
                            <p style={{marginTop:'1rem',width:'75%',fontSize:'105%'}}>Prepare future events by creating detailed plans arround the life of your entity</p>
                        </div>
                    </div>
                </div>
            </Workspace>
            <div style={{display:'flex'}}>
   <h1 style={{marginTop:'1rem',marginBottom:'2rem',color:'rgb(75,82,104)',fontSize:'150%',marginLeft:'1rem',marginRight:'40rem'}}>Resume Your Work</h1>
   <input style={{width:'20%',marginTop:'1rem'}} type="text" className="form-control" value={inputText} onChange={inputHandler}  placeholder="Filter..."/>
   <img  alt="zdjecie"  style={{marginLeft:'-1.4rem'}} src="./media/search.svg"/>
   <div style={{display:'flex',marginLeft:'4rem'}}>
   <img style={{width:'1.3rem'}}  src="./media/signal.svg"></img>
       <p style={{marginLeft:'0.75rem',marginRight:'0.75rem',marginTop:'1.75rem'}}>Followed</p>
       <img style={{width:'1rem'}}  alt="zdjecie"  src="./media/arrow-down.svg"/>
   </div>
   </div>
            <Resume>
                {commentsList.map((val, key) => {
                                return (
                                    <>
                                    {val.name.toLowerCase().includes(inputText.toLowerCase()) &&
                                    <Comment title={val.name} body={commentsList[20]?.body} source={photosList?.[4]?.url} name={usersList?.[4]?.company?.name} minisource="./media/entities2.svg" type="Corporate"  update={"Update 8 days ago by" + " " + usersList[4]?.name}  />   
                                    }
                                </>
                )})
                }
            </Resume>
        </div>
    )
}

export default WorkPage;