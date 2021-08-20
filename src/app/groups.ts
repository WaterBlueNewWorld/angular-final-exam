export class GroupList {
  idG:number;
  group_name:string;
  created_at:string;

  constructor(id, group_name, created_at) {
    this.idG = id;
    this.group_name = group_name;
    this.created_at = created_at;
	}
}
