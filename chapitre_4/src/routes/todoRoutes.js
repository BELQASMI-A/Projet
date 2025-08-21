import express from 'express'
import db from '../db.js'
import prisma from '../primsaClient.js'

const router = express.Router()

 

router.get('/', async(req, res) => {
    // Fetch all todos for the logged-in user
    const todos = await prisma.todo.findMany({
        where: {    userId: req.userId }        
    })
    res.json(todos)
     
})


router.post('/',  async(req, res) => {
    const { task } = req.body
    
    const todo = await prisma.todo.create({
        data: {     
            userId: req.userId,
            task
        }       
    })

    res.json(todo)
})  



// Update a todo
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
 

    const updatetodo = await prisma.todo.update({
        where: { 
            id: parseInt(id),
            userId: req.userId 
        },

        data: {
             completed  : !!completed 
        }
    })  

    res.json(updatetodo)
})

// Delete a todo
router.delete('/:id', async(req, res) => {
    const { id } = req.params
    const userId = req.userId

    const deletetodo = await prisma.todo.delete({
        where: { 
            id: parseInt(id),
            userId: userId 
        }
    })      
    res.send(deletetodo)
})

export default router
 