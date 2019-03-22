import { getConnection, Connection } from 'typeorm';
import { Users } from '../src/users/Users.entity';


export class TestUtils {
  private readonly repositories: Array<any> = [Users];
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
   }
  
  clearSchema() {
    this.repositories.forEach( repository => getConnection().getRepository(repository).clear() );
  }
}