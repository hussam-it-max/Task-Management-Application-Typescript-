import {describe,it,expect} from 'vitest';
import request from "supertest";
import app from '../app.js';
import Task from '../modules/task/task.model.js';
import mongoose from 'mongoose';
import { title } from 'node:process';
// Test getTaskById ENDPOINT
describe('Get task by ID',()=>{
    it('should return 400 when the task ID is invalid',async ()=>{
        const response=await request(app).get('/task/get-tasks/invalid-id');
        expect(response.status).toBe(400);
    });
    it('should return 404 when the task does not exist',async()=>{
        const nonExisitingID=new mongoose.Types.ObjectId();
        const response=await request(app)
        .get(`/task/get-tasks/${nonExisitingID}`);
        expect(response.status).toBe(404);
    });
    it('should return 200 when the task exists',async()=>{
        const task=await Task.create({
            title:'Test task',
            description:'Testing task retrieval',
            status:'todo',
            priority:'high',
            dueDate:new Date('2026-12-01')

        });
        const response=await request(app)
        .get(`/task/get-tasks/${task._id}`);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Test task');
        expect(response.body.status).toBe('todo');

        
    });
});
/// Test creatTask ENDPOINT 
describe('Creat Task',()=>{
    it('should return 201 when the task is created succesfully',async()=>{
        const newTask = {
      title: "Test1 task",
      description: "Testing task creation",
      priority: "high",
      dueDate: "2026-12-01",
    };
        const response=await request(app)
        .post('/task/create-task')
        .send(newTask);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test1 task');

    });
    it('should return 400 when the title is missing',async()=>{
        const response=await request(app)
        .post('/task/create-task')
        .send({ description: "Testing task creation",
      priority: "high",
      dueDate: "2026-12-01",});
      expect(response.status).toBe(400);
      expect(Array.isArray(response.body.errors)).toBe(true);
       expect(response.body.errors).toContainEqual(
    expect.objectContaining({ field: "title" })
  );
    });
});

// Test Editing Task
describe('Edit Task',()=>{
    it('should return 200 when the task is updated ',async()=>{
        const task=await Task.create({
             title:'Test2 task',
            description:'Testing task2',
            status:'todo',
            priority:'high',
            dueDate:new Date('2026-12-01')

        });
        const updatedTask={
            _id:task._id,
            title:'Update Task2'
        };
        const response=await request(app)
        .put('/task/update-tasks')
        .send(updatedTask);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Update Task2');
    });
    it('should return 404 when the taskId is not valid',async()=>{
        const response=await request(app)
        .put('/task/update-tasks')
        .send({_id:'invalid-task',title:'new title'});
        expect(response.status).toBe(400);

    });
    it('should return 404 when the taskId is empty',async()=>{
        const response=await request(app)
        .put('/task/update-tasks')
        .send({_id:"",title:'new task'});
        expect(response.status).toBe(400);
        expect(response.body.errors).toContainEqual({
            field:"_id",message:"Task ID is required"
        });
      
    });
    it('should return 404 when the task in not exists',async()=>{
        const nonExisitingID=await new mongoose.Types.ObjectId();
        const response=await request(app)
        .put('/task/update-tasks')
        .send({
            _id:nonExisitingID,
            title:'updated title'
        });
        expect(response.status).toBe(404);

    });
});
/// test get all tasks ENDPOINT
describe('test getAllTasks',()=>{
    it('should return 200 when tasks get returnd ',async()=>{
        const response=await request(app)
        .get('/task/get-tasks');
        console.log(response.status, response.text);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.tasks)).toBe(true);
    });
});



