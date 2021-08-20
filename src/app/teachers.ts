export class TeacherList {
  id:number;
  teacher_name:string;
  teacher_address:string;
  telephone:number;
  id_group:number;

  constructor(id, teacher_name, teacher_address, telephone, id_group) {
    this.id = id;
    this.teacher_name = teacher_name;
    this.teacher_address = teacher_address;
    this.telephone = telephone;
    this.id_group = id_group;
  }
}
