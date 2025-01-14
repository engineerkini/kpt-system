export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  subject: string;
  hireDate: string;
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  grade: string;
}

export interface Fee {
  id: number;
  name: string;
  amount: number;
  dueDate: string;
}

export interface Grade {
  id: number;
  studentId: number;
  subject: string;
  score: number;
  date: string;
}

// Add more types as needed
