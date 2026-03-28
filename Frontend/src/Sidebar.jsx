import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { Mycontext } from "./MyContext";
import { v1 as uuidv1 } from "uuid";

function Sidebar() {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setPrompt,
    setReply,
    setCurrThreadId,
    setPrevChats,
  } = useContext(Mycontext);

  const getallThread = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/thread");
      const res = await response.json();
      const filterData = res.map((thread) => ({
        threadId: thread.threadId,
        title: thread.title,
      }));
      console.log(filterData);
      setAllThreads(filterData);
      // console.log(res);
      //threadId,title:
    } catch (err) {
      console.log(err);
    }
      //fetch all threads from backend
  };

  useEffect(() => {
    getallThread();
  }, [currThreadId]);

  const createNewChat = () => {
    //logic to create new chat
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
    console.log("New Chat Created");
  };


  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);
    try {
      const response = await fetch(
     `http://localhost:8080/api/thread/${newThreadId}`);
      const res = await response.json();
      console.log(res);
      setPrevChats(res);
      setNewChat(false);
      setPrompt('');
      setReply(null);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread=async(threadId)=>{
      try{
     const response=await fetch(`http://localhost:8080/api/thread/${threadId}`,{method:"DELETE"});
     const res=await response.json();
     console.log(res);

     //updated threads re-render:
   setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));
       if(threadId===currThreadId){
      //if deleted thread is current thread
           createNewChat();
       }
      } catch(err) {
        console.log(err);
      }
  }


  return (
    <>
    <section className="sidebar">
      {/* { new chat button} */}
      <button onClick={createNewChat}>
        <img
          src="/images/blacklogo.png"
          alt="gpt logo"
          className="logo"
        ></img>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      {/* {history} */}
           <ul className="history">
            {
              allThreads?.map((thread,idx)=>(
                <li key={idx}
                onClick={(e)=>changeThread(thread.threadId)}
                className={thread.threadId===currThreadId?"highlighted":""}
                >
                  {thread.title}
                  <i className="fa-solid fa-trash"
                    onClick={(e)=>{
                      e.stopPropagation();//stop event bubbling
                      deleteThread(thread.threadId);
                    }}>
                  </i>
                </li>
              ))
            }
     </ul>

      {/* {sign} */}
      <div className="sign">
        <p>By Gaurav Zore &hearts;</p>
      </div>
    </section>
 </>
  );
}
export default Sidebar;
