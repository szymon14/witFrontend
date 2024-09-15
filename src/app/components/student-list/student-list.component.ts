import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from './student.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.refreshStudents();
  }

  refreshStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  navigateToAddStudent(): void {
    this.router.navigate(['/add-student']);
  }
}