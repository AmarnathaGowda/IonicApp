import { Student, StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {

  students: Student[] = [];

  constructor( private studentService: StudentsService, private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.students = this.studentService.getAll();
  }

  studentUrl(student: Student) {
    return `/student/${student.id}`;
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter(x => x.id !== student.id);
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({ 
      header: '${student.firstName} ${student.lastname}',
      buttons:[]
    })

    await actionSheet.present();
  }

}
