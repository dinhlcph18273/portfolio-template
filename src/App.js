import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import ListProfile from './features/profile/layouts/ListProfile';
import AddProfile from './features/profile/layouts/AddProfile';
import EditProfile from './features/profile/layouts/EditProfile';
import ListProject from './features/project/layouts/ListProject';
import AddProject from './features/project/layouts/AddProject';
import EditProject from './features/project/layouts/EditProject';
import ListSkill from './features/skill/layouts/ListSkill';
import AddSkill from './features/skill/layouts/AddSkill';
import EditSkill from './features/skill/layouts/EditSkill';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Project from './pages/Project';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path='project' >
              <Route index element={<ProjectPage/>}/>
              <Route path=':id' element={<Project/>}/>
            </Route>
            <Route path='resume' element={<Resume/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='profile'>
              <Route index element={<ListProfile/>}/>
              <Route path='add' element={<AddProfile/>}/>
              <Route path=':id/edit' element={<EditProfile/>}/>
            </Route>
            <Route path='project'>
              <Route index element={<ListProject/>}/>
              <Route path='add' element={<AddProject/>}/>
              <Route path=':id/edit' element={<EditProject/>}/>
            </Route>
            <Route path='skill'>
              <Route index element={<ListSkill/>}/>
              <Route path='add' element={<AddSkill/>}/>
              <Route path=':id/edit' element={<EditSkill/>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
