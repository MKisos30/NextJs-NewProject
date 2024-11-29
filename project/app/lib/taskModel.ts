// import mongoose, { Schema, model } from 'mongoose'
import mongoose, { Document, Model } from 'mongoose';

export interface ITodo {
  title: string;
  done: boolean;
  description: string;
  ddLine: Date;
  adress: string;
  todoDeadline: number;
}

// Merging ITodo interface with mongoose's Document interface to create
// a new interface that represents a todo document in MongoDB
export interface ITodoDocument extends ITodo, Document {
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new mongoose.Schema<ITodoDocument>(
  {
    title: {
      type: String,
      require: [true, 'Please enter task title'],
    },
    done: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      require: [true, 'Please enter task description'],
    },
    ddLine: {
      type: Date,
      default: new Date(),
    },
    adress: {
      type: String,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

const Task: Model<ITodoDocument> = mongoose.models?.Task || mongoose.model('Task', TaskSchema);
export default Task;
