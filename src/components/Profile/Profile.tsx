import React, {FC} from "react";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IPhotosReducer } from "../../reducers/photosReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import '../../../src/index.css'



const Profile: FC = () => {
    
    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
      }));
      
      const bgcolor = 'rgb(230,240,243)';
      const greycolor= 'rgb(116,174,189)';
      const darkcolor='rgb(35,44,71)';
     const PhotoUrl= (photosList?.[((usersList?.[0]?.id)-1)]?.thumbnailUrl);
    return(
        <div style={{width:'45%',height:'100%',borderRadius:'15px',border:'1px white solid',boxShadow:'0px 1px 8px 1px  #aaaaaa',marginBottom:'1rem',backgroundColor:'white'}}>
            <div style={{width:'100%',height:'10%',display:'flex',paddingTop:'1rem',marginBottom:'1rem'}}>
                <img style={{width:'3%',marginRight:'0.5rem',marginLeft:'9rem'}}  src="./media/speech-bubble.svg"></img>
                <p style={{marginRight:'1.5rem',color:darkcolor}}>Message</p>
                <img style={{width:'3%',marginRight:'0.5rem'}}  src="./media/document.svg"></img>
                <p style={{marginRight:'1.5rem',color:darkcolor}}>Create a request</p>
                <img style={{width:'3%',marginRight:'0.5rem'}}  src="./media/briefcase.svg"></img>
                <p style={{marginRight:'2.25rem',color:darkcolor}}>Add to a cluster</p>
                <img style={{width:'2%'}}  src="./media/close.svg"></img>
            </div>
            <div style={{width:'100%',height:'10%',display:'flex',paddingRight:'1rem',fontSize:'105%'}}>
                <div style={{width:'20%',height:'100%',paddingLeft:'1.75rem'}}>
                    <img src={PhotoUrl} style={{width:'4rem',marginBottom:'0.5rem',marginLeft:'-0.25rem'}} className="rounded-circle" alt="zdjecie"/>
                    <p style={{color:greycolor,marginLeft:'-0.6rem'}}>See profile</p>
                </div>
                <div style={{width:'80%',height:'100%',position:'relative',paddingBottom:'1rem'}}>
                    <p className="mb-2 font-weight-bold" style={{color:darkcolor}}>{usersList[0]?.name}</p>
                    <p className="mb-2 font-weight-bold" style={{color:darkcolor}}>{usersList[0]?.address?.street}</p>
                    <p className="mb-2" style={{color:darkcolor}}>{usersList[0]?.address?.city}</p>
                    <p style={{color:darkcolor}}>Partner</p>
                    <div style={{position:'absolute',left:'50%',top:'55%'}}>
                        <p style={{color:darkcolor}}>{usersList[0]?.email}</p>
                        <p style={{color:darkcolor}}>{usersList[0]?.phone}</p>
                    </div>
                </div>
            </div>
            <hr style={{backgroundColor:'rgb(232,232,232)'}}/>
            <div style={{width:'100%',height:'80%',paddingLeft:'1rem',paddingRight:'1rem'}} >
                <p className='mb-2' style={{color:greycolor}}>Expertise</p>
                <div style={{display:'flex'}}>
                    <p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',color:'rgb(90,158,177)'}}>Mergers and acquisition</p>
                </div>
                <p className='mb-2' style={{color:greycolor}}>Specialties</p>
                <div style={{display:'flex'}}><p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',marginRight:'0.75rem',color:'rgb(90,158,177)'}}>Cross border operation</p>
                    <p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',color:'rgb(90,158,177)'}}>Transaction over 500M $</p>
                </div>
                <p className='mb-2' style={{color:greycolor}}>Admission to practice law</p>
                <div style={{display:'flex'}}>
                    <p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',marginRight:'0.75rem',color:'rgb(90,158,177)'}}>Paris bar association</p>
                    <p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',color:'rgb(90,158,177)'}}>Tunisian bar association</p>
                </div>
                <p className='mb-2' style={{color:greycolor}}>Counties</p>
                <div style={{display:'flex'}}>
                    <p style={{backgroundColor:bgcolor,padding:'0.25rem',borderRadius:'5px',marginBottom:'0.5rem',color:'rgb(90,158,177)'}}>Tunisia</p>
                </div>
                <hr style={{width:'106%',marginLeft:'-1rem'}}/>
                <h1 style={{fontSize:'125%',marginBottom:'1rem',fontWeight:'bold',color:darkcolor}}>Panel informations</h1>
                <p style={{marginBottom:'0.5rem',color:greycolor,fontSize:'110%'}}>Hourly fee</p>
                <p style={{marginBottom:'0.75rem',color:darkcolor,fontSize:'110%'}}>610$/hour (Negociated)</p>
                <p style={{marginBottom:'0.5rem',color:greycolor,fontSize:'110%'}}>Terms & conditions</p>
                <p style={{marginBottom:'0.5rem',color:darkcolor,fontSize:'110%'}}>Monthly 10k$ retainer - see with Jeanny Smith</p>
                <div style={{marginBottom:'1rem',display:'flex',backgroundColor:bgcolor,padding:'0.5rem'}}>
                    <img style={{width:'2%',marginRight:'0.5rem'}}  src="./media/contract.svg"></img>
                    <p style={{color:darkcolor,fontSize:'115%'}}>Attachment_lorem-ipsum25425.jpg</p>
                </div>
                <p  style={{marginBottom:'0.75rem',fontWeight:'bold',color:darkcolor,fontSize:'125%'}}>Services & projects</p>
                <p style={{marginBottom:'1rem',color:darkcolor,fontSize:'110%'}}>Corporate M&A and international acquisitions</p>
                <p  style={{marginBottom:'0.5rem',fontWeight:'bold',color:darkcolor,fontSize:'125%'}}>Internal correspondants</p>
                <div style={{marginBottom:'1.5rem'}}>
                <div style={{display:'flex',backgroundColor:bgcolor,padding:'0.5rem'}}>
                    <img src={PhotoUrl} style={{width:'1.2rem'}} className="rounded-circle" alt="zdjecie"/>
                    <p style={{marginLeft:'0.5rem',fontWeight:'bold',marginRight:'3.5rem',color:darkcolor,fontSize:'110%'}}>Firstname Lastname</p>
                    <img style={{width:'3%',marginRight:'0.25rem'}}  src="./media/speech-bubble.svg"></img>
                    <p style={{fontSize:'110%'}}>Message</p>
                    <img style={{width:'3%',marginRight:'0.25rem',marginLeft:'2.5rem'}}  src="./media/user.svg"></img>
                    <p style={{fontSize:'110%'}}>Profile</p>
                </div>
                <div style={{display:'flex',backgroundColor:bgcolor,padding:'0.5rem'}}>
                    <img src={PhotoUrl} style={{width:'1.2rem'}} className="rounded-circle" alt="zdjecie"/>
                    <p style={{marginLeft:'0.5rem',fontWeight:'bold',marginRight:'3.5rem',color:darkcolor,fontSize:'110%'}}>Firstname Lastname</p>
                    <img style={{width:'3%',marginRight:'0.25rem'}}  src="./media/speech-bubble.svg"></img>
                    <p style={{fontSize:'110%'}}>Message</p>
                    <img style={{width:'3%',marginRight:'0.25rem',marginLeft:'2.5rem'}}  src="./media/user.svg"></img>
                    <p style={{fontSize:'110%'}}>Profile</p>
                </div>
                </div>
                <hr style={{width:'106%',marginLeft:'-1rem'}}/>
                <p  style={{marginBottom:'2rem',fontWeight:'bold',color:darkcolor,fontSize:'125%'}}>Proposals</p>
                <div style={{display:'flex',marginBottom:'1rem'}}>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Name</h1>
                        <hr style={{width:'160%',marginLeft:'-1.5rem'}}/>
                        <p style={{marginBottom:'0.5rem'}}>Operation Ti...</p>
                        <p style={{marginBottom:'0.5rem'}}>Op. Prometh...</p>
                        <p >Op. Latandre</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Entity</h1>
                        <hr style={{width:'133%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>Renault Co...</p>
                        <p style={{marginBottom:'0.5rem'}}>Renault HQ</p>
                        <p >Renault Gr...</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Location</h1>
                        <hr style={{width:'136%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>France</p>
                        <p style={{marginBottom:'0.5rem'}}>USA</p>
                        <p >Italia</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Expertise</h1>
                        <hr style={{width:'134%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>#Tax</p>
                        <p style={{marginBottom:'0.5rem'}}>#M&A</p>
                        <p >#Social</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Date</h1>
                        <hr style={{width:'137%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>20/01/2018</p>
                        <p style={{marginBottom:'0.5rem'}}>18/02/2019</p>
                        <p >18/02/2019</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Firm</h1>
                        <hr style={{width:'127%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>Racine</p>
                        <p style={{marginBottom:'0.5rem'}}>Clifford chance</p>
                        <p >SVZ</p>
                    </div>
                  
                </div>
                <p style={{marginLeft:'26rem',marginBottom:'1rem',color:greycolor,fontSize:'115%'}}>See more proposals</p>
                <hr style={{width:'106%',marginLeft:'-1rem'}}/>
                <p  style={{marginBottom:'2rem',fontWeight:'bold',color:darkcolor,fontSize:'125%'}}>Internal reviews</p>
                <div style={{display:'flex',marginBottom:'1rem'}}>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Name</h1>
                        <hr style={{width:'160%',marginLeft:'-1.5rem'}}/>
                        <p style={{marginBottom:'0.5rem'}}>Operation Ti...</p>
                        <p style={{marginBottom:'0.5rem'}}>Op. Prometh...</p>
                        <p >Op. Latandre</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Entity</h1>
                        <hr style={{width:'133%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>Renault Co...</p>
                        <p style={{marginBottom:'0.5rem'}}>Renault HQ</p>
                        <p >Renault Gr...</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Location</h1>
                        <hr style={{width:'136%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>France</p>
                        <p style={{marginBottom:'0.5rem'}}>USA</p>
                        <p >Italia</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Expertise</h1>
                        <hr style={{width:'134%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>#Tax</p>
                        <p style={{marginBottom:'0.5rem'}}>#M&A</p>
                        <p >#Social</p>
                    </div>
                    <div style={{marginLeft:'0.5rem',fontSize:'85%',marginRight:'1rem'}}>
                        <h1 style={{fontWeight:'bold',fontSize:'125%',color:darkcolor}}>Date</h1>
                        <hr style={{width:'310%'}}/>
                        <p style={{marginBottom:'0.5rem'}}>20/01/2018</p>
                        <p style={{marginBottom:'0.5rem'}}>18/02/2019</p>
                        <p >18/02/2019</p>
                    </div>
                   
                  
                </div>
                <p style={{fontWeight:'bold',marginBottom:'1rem',color:darkcolor,fontSize:'125%'}}>See more Reviews</p>
                <hr style={{width:'106%',marginLeft:'-1rem'}}/>
                <p style={{fontWeight:'bold',marginBottom:'1rem',color:darkcolor,fontSize:'125%'}}>Amount of fees</p>
                <div style={{display:'flex',paddingBottom:'3rem',color:darkcolor}}>
                    <div style={{marginRight:'6rem'}}>
                        <h1 style={{marginBottom:'0.5rem',fontWeight:'bold'}}>Year</h1>
                        <p style={{marginBottom:'0.5rem'}}>2019</p>
                        <p style={{marginBottom:'0.5rem'}}>2018</p>
                        <p style={{marginBottom:'0.5rem'}}>2017</p>
                    </div>
                    <div style={{marginRight:'2.5rem'}}>
                        <h1 style={{marginBottom:'0.5rem',fontWeight:'bold',width:'80px'}}>Cost center</h1>
                        <p style={{marginBottom:'0.5rem'}}>CS 153</p>
                        <p style={{marginBottom:'0.5rem'}}>CS 153</p>
                        <p style={{marginBottom:'0.5rem'}}>CS 47</p>
                        <p style={{marginBottom:'0.5rem'}}>CS 153</p>
                        <p style={{marginBottom:'0.5rem'}}>CS 32</p>
                    </div>
                    <div style={{marginRight:'1rem'}}>
                        <h1 style={{marginBottom:'0.5rem',fontWeight:'bold',width:'120px'}}>Total amount</h1>
                        <p style={{marginBottom:'0.5rem'}}>3 500€</p>
                        <p style={{marginBottom:'0.5rem'}}>9 500€</p>
                        <p style={{marginBottom:'0.5rem'}}>10 500€</p>
                        <p style={{marginBottom:'0.5rem'}}>18 500€</p>
                        <p style={{marginBottom:'0.5rem'}}>15 500€</p>
                    </div>
                    <div >
                        <h1 style={{marginBottom:'0.5rem',fontWeight:'bold'}}>Law firm</h1>
                        <p style={{marginBottom:'0.5rem'}}>Clifford chance</p>
                        <p style={{marginBottom:'0.5rem'}}>Linklaters</p>
                        <p style={{marginBottom:'0.5rem'}}>Linklaters</p>
                        <p style={{marginBottom:'0.5rem'}}>Linklaters</p>
                        <p style={{marginBottom:'0.5rem'}}>Linklaters</p>
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default Profile;