export class Server {
  public name
  public desc
  constructor(private serverName: String,private serverDesc: String ) {
    this.name = serverName
    this.desc = serverDesc
  }
}