import mongoose from 'mongoose';
import {MongoMemoryServer} from 'mongodb-memory-server';
import {beforeAll,afterAll,beforeEach} from 'vitest';

let mongoServer:MongoMemoryServer;
 beforeAll(async()=>{
    mongoServer=await MongoMemoryServer.create();
    const mongoUri=mongoServer.getUri();
    await mongoose.connect(mongoUri);

 });
 beforeEach(async()=>{
    await mongoose.connection.db?.dropDatabase();
 });
 afterAll(async()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
 });
