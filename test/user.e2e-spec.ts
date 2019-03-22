import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import users from './fixtures/user';
import { getConnection } from "typeorm";
import { Users } from '../src/users/Users.entity';
import { TestUtils } from './TestUtils';

describe('UserController (e2e)', () => {
  let app;
  let testUtils: TestUtils;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    app = moduleFixture.createNestApplication();
    
    testUtils = new TestUtils();
    testUtils.clearSchema();
    await app.init();
  });

  it('/ (Post)', () => {
    return request(app.getHttpServer())
    .post('/users')
    .send(users.omokolataiwo)
    .expect(201)
   })
})
