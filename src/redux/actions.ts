import { createAction } from '@reduxjs/toolkit';

export const addTeacher = createAction('ADD_TEACHER', (teacher) => ({
  payload: teacher,
}));

export const editTeacher = createAction('EDIT_TEACHER', (teacher) => ({
  payload: teacher,
}));

export const deleteTeacher = createAction('DELETE_TEACHER', (teacherId) => ({
  payload: teacherId,
}));

// Add more actions for other entities like students, fees, etc.