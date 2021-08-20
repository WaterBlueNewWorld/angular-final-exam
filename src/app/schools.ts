export class SchooolList {
  idS:number;
  school_name:string;
  s_registry:number;
  school_address:string;
  telephone:number;
  school_zone:string;
  created_at:string;
  director:string;

  constructor(id,name, s_registry, school_address, telephone, school_zone, created_at, director) {
    this.idS = id;
    this.school_name = name;
    this.s_registry = s_registry;
    this.school_address = school_address;
    this.telephone = telephone;
    this.school_zone = school_zone;
    this.created_at = created_at;
    this.director = director;
  }
}
