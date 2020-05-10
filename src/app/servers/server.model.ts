export class Server {
  public id
  public name
  public desc
  constructor(private serverId: number,private serverName: String,private serverDesc: String ) {
    this.id = serverId
    this.name = serverName
    this.desc = serverDesc
  }
}