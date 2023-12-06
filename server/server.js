import express from 'express';
import { User } from './models'
import { Post } from './models'

const PORT = process.env.PORT || 3001;
const app = express()
