export class Notice1 {
  constructor(
    public id: String,
    public std: String,
    public division: String,
    public note: String,
    public subject: String,
    public givendate: String,
    public img: String,
    public teachername: String
  ) {}
}

export interface Notice2 {
  id: String;
  std: String;
  division: String;
  note: String;
  subject: String;
  givendate: String;
  img: String;
  teachername: String;
}
