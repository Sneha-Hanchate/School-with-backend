export class Reg {
  constructor(
    public id: String,
    public std: String,
    public division: String,
    public name: String,
    public address: String,
    public rollno: String,
    public dob: String,
    public mobile: String,
    public email: String,
    public photo: String,
    public password: String
  ) {}
}

export interface Reg2 {
  id: String;
  std: String;
  division: String;
  name: String;
  address: String;
  rollno: String;
  dob: String;
  mobile: String;
  email: String;
  photo: String;
  password: String;
}
