import React, { useState } from 'react'

const Top = () => {
    const [posts,setpost] = useState([
        { title: 'learn React', id: 1},
        { title: 'learn Redux', id: 2}
    ]);
    const [input, setInput] = useState("");

    const add = (new) => {
        posts.push()
    }

    const deleted = (id) => {
        const newposts = posts.filter((post) => post.id !== id);
        setpost(newposts);
    }

    // const sendposts = (e) => {
    //     e.preventDefault();
    //   }

  return (
    <div>
        <h1>TODO</h1>
        <div className="div">
            <form action="" className="my-5">
                <input type="text" value={input} name="todo" id="" />
                <input className="ms-4" type="submit" value="add todo" onClick={() => handleChange()} />
            </form>
            {posts.map((post) => (
                <div className="preview d-flex align-items-center justify-content-center mt-3">
                    <li>
                     {post.title}
                    </li>
                    <button className="ms-4" onClick={() => {deleted(post.id)} } >delete</button>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Top