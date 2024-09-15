import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Student, StudentService } from '../student-list/student.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    FormsModule,
    NgFor      
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  student: Student = {
    name: '',
    surname: '',
    courseName: '',
    semester: 1
  };

  courses: string[] = [
    'Informatyka',
    'Matematyka',
    'Fizyka',
    'Chemia',
    'Biologia',
    'Historia',
    'Geografia',
    'Filologia Polska',
    'Ekonomia',
    'Filozofia'
  ];

  semesters: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private studentService: StudentService, private router: Router) { }

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      alert('Student added successfully');
      this.router.navigate(['/students']); // Navigate back to student list
    });
  }
}
