import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos.js";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About/About.js";
import AdminLog from './MyComponents/Admin/AdminLog';
import { MailVer } from './MyComponents/Admin/MailVer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './MyComponents/Home';
import UserChoice from './MyComponents/UserChoice';
import Footer from "./MyComponents/Footer.js";
import { VideoGallery } from './MyComponents/VideoGallery.js';
import { PartyImages } from './MyComponents/Photos/PartyImages.js';
import { PublicImages } from './MyComponents/Photos/PublicImages.js';
import { EventImages } from './MyComponents/Photos/EventImages.js';
import { IssuesImages } from './MyComponents/Photos/IssuesImages.js';
// import { News } from './MyComponents/News/News.js';
import { AdminPage } from './MyComponents/Admin/AdminPage.js';
import { AdminPost } from './MyComponents/Admin/AdminPost.js';
import Dummy from './MyComponents/Dummy.js';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Variable Declarations
  const addTodo = (fname, mobile, email, village, constituency, district, pin) => {
    console.log("I am adding user name and mobile", fname, mobile)
    alert("Your Joining Form Submitted successfully")
    let sno;
    if (todos.length === 0) {
      sno = 202403001;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      fname: fname,
      mobile: mobile,
      email: email,
      village: village,
      constituency: constituency,
      district: district,
      pin: pin,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="JanaSena" searchBar={false} />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path="/signup" element={<AddTodo addTodo={addTodo} />}></Route>
          <Route exact path='/admin' element={<AdminLog />}></Route>
          <Route exact path='/verification' element={<MailVer />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/PartyImages" element={<PartyImages />}></Route>
          <Route exact path="/PublicImages" element={<PublicImages />}></Route>
          <Route exact path="/EventImages" element={<EventImages />}></Route>
          <Route exact path="/IssuesImages" element={<IssuesImages />}></Route>
          <Route exact path="/VideoGallery" element={<VideoGallery />}></Route>
          <Route exact path="/Adminpanel" element={<AdminPage />}></Route>
          <Route exact path="/Adminpanel/joinings" element={<Todos todos={todos} onDelete={onDelete} />}></Route>
          <Route exact path='/Adminpanel/AdminPost' element={<AdminPost />}></Route>
          <Route exact path='/Adminpanel/district' element={<UserChoice />}></Route>
          <Route exact path='/news' element={<Dummy />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
