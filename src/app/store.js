import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice'
import projectReducer from '../features/project/projectSlice'
import skilleReducer from '../features/skill/skillSlice'


export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer,
    skill: skilleReducer
  },
});
