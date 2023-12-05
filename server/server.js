import express from 'express';
import { typeDefs, resolvers } from './schemas'
import { Profile } from './models'

const PORT = process.env.PORT || 3001;
const app = express()
