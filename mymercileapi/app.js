import express from 'express';
import {signInWithEmail, signUpNewUser, signOut} from './authentication.js'
import { getCourses, modifyCourses, createCourses } from './courses.js';
import { createInterests, getInterests } from './interests.js';
import { createProfile, getProfile } from './profile.js';
const app = express('mymercile')
const port = 3001
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var session = null;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/login', async (req, res) => {
  try {
    const data = req.body
    var response = await signInWithEmail(data.email, data.password)
    session = response.content.user
    res.setHeader('Content-Type', 'application/json');
    res.status(response.status).send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.post('/registration', async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    var response = await signUpNewUser(data.email, data.password)
    session = response.user
    res.setHeader('Content-Type', 'application/json')
    if(response.status) {
      res.status(response.status)
    }
    res.send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.post('/logout', async (req, res) => {
  try { 
    var response = await signOut() 
    if(response.status == 200) {
      session = null;
    }
    res.status(response.status).send(response)
  } catch (err) { 
    res.status(500).send(err.message)
  }
})

app.post('/createprofile', async (req, res) => {
  try {
    const data = req.body
    var response = await createProfile(data, session)
    res.setHeader('Content-Type', 'application/json')
    res.status(response.status).send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
    
  }
})

app.post('/modifyprofile', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/profile', async (req, res) => {
  try {
    var response = await getProfile(session)
    res.setHeader('Content-Type', 'application/json')
    res.status(response.status).send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.post('/addcourse', async (req, res) => {
  try {
    const data = req.body
    var response = await createCourses(data, session)
    res.setHeader('Content-Type', 'application/json')
    res.status(response.status).send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/courses', async (req, res) => {
  try {
    var response = await getCourses(session);
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})


app.post('/addinterests', async (req, res) => {
  try {
    const data = req.body
    var response = await createInterests(data, session)
    res.setHeader('Content-Type', 'application/json')
    res.status(response.status).send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.get('/interests', async (req, res) => {
  try {
    var response = await getInterests(session);
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(response))
  } catch (err) {
    res.status(500).send(err.message)
  }
})

