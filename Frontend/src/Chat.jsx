import "./Chat.css";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

//Two Packages to install for formating the Reply:
//react-markdown:
//rehype-highlight

function Chat() {
  const { newChat, prevChats, reply } = useContext(Mycontext);
  const [latestReply, setLatestReply ] = useState(null);

  useEffect(() => {
    if (reply === null) {
      setLatestReply(null);
      return;
    }
    //latestReplay seperate=>typing effect create:
    if (!prevChats?.length) return;
    const content = reply.split(" "); //individual words

    let idx = 0;
    const interval = setInterval(() => {
      setLatestReply(content.slice(0, idx + 1).join(" "));
      idx++;
      if (idx >= content.length) clearInterval(interval);
      return;
    }, 40);

    return () => clearInterval(interval);
  }, [prevChats, reply]);

  return (
    <>
      {newChat && <h1>Start a New Chat</h1>}
      <div className="chats">
        {prevChats?.slice(0, -1).map((chat, idx) => (
          <div
            className={chat.role === "user" ? "userDiv" : "gptDiv"}
            key={idx}
          >
            {chat.role === "user" ? (
              <p className="userMessage">{chat.content}</p>
            ) : (
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}
                className="markdown-content" >
                {chat.content}
              </ReactMarkdown>
            )}
          </div>
        ))}
        {prevChats.length > 0 && (
          <>
            {latestReply == null ? (
              <div className="gptDiv" key={"non-typing"}>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {prevChats[prevChats.length - 1].content}
                </ReactMarkdown>
              </div>
            ) : (
              
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {latestReply}
              </ReactMarkdown>
            )}
          </>
        )}
      </div>
    </>
  );
}
export default Chat;
