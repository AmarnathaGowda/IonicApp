import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  gender?: string;
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine', gender: 'Male' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett', gender: 'Male' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte', gender: 'Male' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend', gender: 'Female' },
  { id: '5', firstName: 'Casey', lastName: 'McBride', gender: 'Female' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera', gender: 'Female' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez', gender: 'Male' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little', gender: 'Female' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins', gender: 'Male' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner', gender: 'Male' }
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getAll() {
    return [...mockStudents];
  }


}
