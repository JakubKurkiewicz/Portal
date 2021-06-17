import React, {ChangeEvent, FC, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IPostsReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import Slider from "react-slick";
import Carousel from 'nuka-carousel';
import { Url } from 'node:url';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { title } from 'node:process';
import { Link } from 'react-router-dom';


const LatestPublication = styled.div`
width: 100%;
height:420px;
display: flex;
`;

const Workspaces = styled.div`
width: 100%;
height:220px;
background-color:rgb(245, 247, 249);
display:flex;
position: relative;
`;

const Resume = styled.div`
    width: 100%;
    height: 100%;
`;
const LeftPhoto = styled.div`
    width: 33%;
    height: 100%;
    box-shadow: 0px 1px 8px 1px #aaaaaa;
    border-top-left-radius:'10px';
    border-bottom-left-radius:'10px';
    
`;
const RightContent = styled.div`
    width: 67%;
    height: 100%;
    padding-left: 1rem;
    padding-top: 1rem;
    border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
    box-shadow: 0px 1px 8px 1px #aaaaaa;

`;


const Posts = styled.div`

`;




const PostWrapper = styled.div`
display: flex;
margin-left: 4.75rem;
margin-top: -1.2rem;
`;




interface IWork {
    name?: string;
    source?: string;
    minisource?: string;
    type?: string;
    users?: string;
    update?: string;
}

const Work : FC<IWork> = (props) => {
    const { usersList, photosList, postsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts
      }));
    return(
        
        <div className="work" >
         
        <div style={{position:'absolute',left:'3%',top:'25%',width:'40%',height:'40%',backgroundColor:'white',borderRadius:'10%',border:'1px black solid'}}>
           <img src={props.minisource} style={{position:'absolute',left:'25%',top:'25%',width:'53%'}} alt='zdjecie'></img>
           </div>
       <div style={{height:'40%',width:'100%'}}>
        <img src={props.source} style={{height:'100%',width:'100%',borderRadius:'5% 5% 0 0'}}></img>
       </div>
       <div style={{height:'60%',width:'100%',position:'relative'}}>
           <h3 className="font-weight-bold" style={{position:'absolute', left:'47%',top:'4%',color:'rgb(35,44,71)'}}>{props.name}</h3>
           <img src={props.minisource} style={{position:'absolute', left:'3%',top:'54%',width:'8%'}}></img>
           <p style={{position:'absolute', left:'15%',top:'55%',color:'rgb(98,104,123)'}}>{props.type}</p>
           <img src="./media/black-circle.svg" style={{width:'2%',position:'absolute', left:'45%',top:'59%'}}></img>
           <p style={{position:'absolute', left:'67%',top:'55%',color:'rgb(98,104,123)'}}>{props.users}</p>
           <img src="./media/people.svg" style={{position:'absolute', left:'55%',top:'55%',width:'8%'}} ></img>
           <p style={{position:'absolute', left:'3%',top:'80%',color:'rgb(180,183,186)'}}>{props.update}</p>
       </div>
       </div>
       
    )
}

const Twins: FC = () =>{
    const { usersList, photosList, postsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts
      }));
    return(
        <Link style={{color:'black',textDecoration:'none'}} to="/workpage">
        <div className="twins">
        <Work  name="Client contract" type="Contract" users="25 users" update="Last update 5 days ago" minisource="./media/contract.svg" source={photosList?.[(usersList?.[8]?.id)]?.url}/>
        <Work  name="Corporate" type="Corporate" users="34 users" update="Last update 3 days ago" minisource="./media/entities.svg" source={photosList?.[(usersList?.[6]?.id)]?.url}/>
        <Work  name="House client" type="House" users="57 users" update="Last update 11 days ago" minisource="./media/house.svg" source={photosList?.[(usersList?.[4]?.id)]?.url}/>
        <Work  name="Client contract" type="Corporate" users="125 users" update="Last update 8 days ago" minisource="./media/book.svg" source={photosList?.[(usersList?.[2]?.id)]?.url}/>
        <Work  name="Corporate" type="Corporate" users="11 users" update="Last update 15 days ago" minisource="./media/entities2.svg" source={photosList?.[(usersList?.[1]?.id)]?.url}/>
        <Work  name="Corporate" type="Corporate" users="24 users" update="Last update 19 days ago" minisource="./media/entities2.svg" source={photosList?.[(usersList?.[7]?.id)]?.url}/>
        </div>
        </Link>
    )
}


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

  const MainRight: FC = () => {

    const { usersList, photosList, postsList, commentsList, someData} = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments,
        ...globalState.users
      }));

      const [inputText, setInputText] = useState<string>('');
      const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
        console.log(text)
      }
    
      const PhotoUrl= (photosList?.[((usersList?.[0]?.id)-1)]?.url);
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="MainRight">
   <LatestPublication>
    <LeftPhoto style={{position:'relative'}}>
     <img style={{width:'100%',height:'100%'}} src={PhotoUrl}   alt="zdjecie"/>
     <h1 className="font-weight-bold" style={{position:'absolute',color:'white',top:'75%',left:'5%'}}>{postsList?.[8]?.title}</h1>
     <div style={{display:'flex', position:'absolute',top:'90%',left:'5%'}}>
                <p style={{color:'white'}}>7 jan. 2020</p>
                <img src={photosList?.[8]?.thumbnailUrl} style={{width:'1rem',height:'1rem'}} className="rounded-circle ml-2 mr-2" ></img>
                <p style={{color:'white'}}>{usersList?.[8]?.name}</p>
     </div>
    </LeftPhoto>
    <RightContent>
        <h1 style={{marginBottom:'1rem',color:'rgb(75,82,104)',fontSize:'150%'}}>Latest publications</h1>
        <Posts style={{width:'50%',height:'20%'}}>
            <img src={photosList?.[(usersList?.[8]?.id)]?.thumbnailUrl} style={{width:'4rem'}}></img>
            <h1 className="font-weight-bold" style={{float:'right',color:'rgb(35,44,71)'}}>{postsList?.[8]?.title}</h1>
            <PostWrapper>
                <p style={{color:'rgb(186,189,198)'}}>7 jan. 2020</p>
                <img src={photosList?.[8]?.thumbnailUrl} style={{width:'1rem',height:'1rem'}} className="rounded-circle ml-2 mr-2" ></img>
                <p style={{color:'rgb(90,97,117)'}}>{usersList?.[8]?.name}</p>
            </PostWrapper>
        </Posts>
        <Posts style={{width:'50%',height:'20%'}}>
            <img src={photosList?.[(usersList?.[8]?.id)]?.thumbnailUrl} style={{width:'4rem'}}></img>
            <h1 className="font-weight-bold" style={{float:'right',color:'rgb(35,44,71)'}}>{postsList?.[8]?.title}</h1>
            <PostWrapper>
                <p style={{color:'rgb(186,189,198)'}}>7 jan. 2020</p>
                <img src={photosList?.[8]?.thumbnailUrl} style={{width:'1rem',height:'1rem'}} className="rounded-circle ml-2 mr-2" ></img>
                <p style={{color:'rgb(90,97,117)'}}>{usersList?.[8]?.name}</p>
            </PostWrapper>
        </Posts>
        <Posts style={{width:'50%',height:'20%'}}>
            <img src={photosList?.[(usersList?.[8]?.id)]?.thumbnailUrl} style={{width:'4rem'}}></img>
            <h1 className="font-weight-bold" style={{float:'right',color:'rgb(35,44,71)'}}>{postsList?.[8]?.title}</h1>
            <PostWrapper>
                <p style={{color:'rgb(186,189,198)'}}>7 jan. 2020</p>
                <img src={photosList?.[8]?.thumbnailUrl} style={{width:'1rem',height:'1rem'}} className="rounded-circle ml-2 mr-2" ></img>
                <p style={{color:'rgb(90,97,117)'}}>{usersList?.[8]?.name}</p>
            </PostWrapper>
        </Posts>
        <Posts style={{width:'50%',height:'20%'}}>
            <img src={photosList?.[(usersList?.[8]?.id)]?.thumbnailUrl} style={{width:'4rem'}}></img>
            <h1 className="font-weight-bold" style={{float:'right',color:'rgb(35,44,71)'}}>{postsList?.[8]?.title}</h1>
            <PostWrapper>
                <p style={{color:'rgb(186,189,198)'}}>7 jan. 2020</p>
                <img src={photosList?.[8]?.thumbnailUrl} style={{width:'1rem',height:'1rem'}} className="rounded-circle ml-2 mr-2" ></img>
                <p style={{color:'rgb(90,97,117)'}}>{usersList?.[8]?.name}</p>
            </PostWrapper>
        </Posts>
        <h1 style={{color:'rgb(42,63,157)',fontSize:'125%'}}>See more publications</h1>
    </RightContent>
   </LatestPublication>
   <h1 style={{marginTop:'2rem',color:'rgb(75,82,104)',fontSize:'150%',marginLeft:'1rem'}}>Workspaces</h1>
   <Workspaces >
   <Carousel>
   <Twins/>
   <Twins/>
   <Twins/>
   <Twins/>
      </Carousel>

   
    
   </Workspaces>
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
                    <Comment title={val.name} body={commentsList[(Math.floor(Math.random() * 10) + 1)]?.body} source={photosList?.[(Math.floor(Math.random() * 10) + 1)]?.url} name={usersList?.[(Math.floor(Math.random() * 10) + 1)]?.company?.name} minisource="./media/entities2.svg" type="Corporate"  update={"Update" + " " +(Math.floor(Math.random() * 20) + 1) + " " +"days ago by" + " " + usersList[(Math.floor(Math.random() * 10) + 1)]?.name}  />   
                    }
                      
    
                  </>
                  )})
  }
   </Resume>
   </div>
  )
};

export default MainRight;
