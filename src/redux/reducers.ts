import { createReducer } from '@reduxjs/toolkit';
import { addTeacher, editTeacher, deleteTeacher } from './actions';
import { Teacher, Student, Fee, Grade } from './types';

interface AppState {
  teachers: Teacher[];
  students: Student[];
  fees: Fee[];
  grades: Grade[];
}

const initialState: AppState = {
  teachers: [],
  students: [],
  fees: [],
  grades: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTeacher, (state, action) => {
      state.teachers.push(action.payload);
    })
    .addCase(editTeacher, (state, action) => {
      const index = state.teachers.findIndex((teacher) => teacher.id === action.payload.id);
      if (index !== -1) {
        state.teachers[index] = action.payload;
      }
    })
    .addCase(deleteTeacher, (state, action) => {
      state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
    });
  // Add more cases for other entities like students, fees, etc.
});

export default rootReducer;