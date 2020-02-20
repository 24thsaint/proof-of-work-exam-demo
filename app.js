const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

const users = {}
const config = {
    difficulty: '0x000'
}

let winner = false
let sessionAnswer = ''

app.post('/login', (req, res) => {
    const id = req.body.id || Math.random().toString()
    users[id] = req.body.name
    res.json({
        name: req.body.name,
        id
    })
})

app.post('/attempt', (req, res) => {
    if (winner) {
        res.status(403).json({
            response: 'Somebody already got the correct answer first'
        })
        return
    }
    if (req.body.hash.startsWith(config.difficulty)) {
        if (req.body.answer.toUpperCase() === sessionAnswer.toUpperCase()) {
            winner = {
                id: req.body.id,
                name: users[req.body.id],
                hash: req.body.hash
            }
            res.json({
                response: 'Correct answer accepted!',
            })
        } else {
            res.status(403).json({
                response: 'Wrong answer.'
            })
        }
        return
        
    }
    res.status(500).json({
        response: 'Server Error'
    })
})

app.get('/config', (req, res) => {
    res.json(config)
})

app.get('/config/answer/:answer', (req, res) => {
    winner = false
    sessionAnswer = req.params.answer
    res.send('OK')
})

app.get('/config/difficulty/:difficulty', (req, res) => {
    config.difficulty = req.params.difficulty
    res.send('OK')
})

app.get('/winner', (req, res) => {
    res.json({
        winner
    })
})

app.listen(3333, () => {
    console.log('Listening 3333')
})