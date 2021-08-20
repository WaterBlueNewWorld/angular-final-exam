export class PersonnelList {
  idP:number;
  m_name:string;
  telephone:number;
  email:string;
  created_at:string;
  position:string;
  m_address:string;

  constructor(idP, m_name, telephone, email, created_at, position, m_address){
    this.idP = idP;
    this.m_name = m_name;
    this.telephone = telephone;
    this.email = email;
    this.created_at = created_at;
    this.position = position;
    this.m_address = m_address;
  }
}
