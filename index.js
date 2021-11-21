const app = require('express')()
const router = require('express').Router()

router.get('/:size', (req, res) => {
    const size = req.params.size;
    console.log(size)
})

app.listen(3000, () => {
    console.log('listening on http://localhost:3000')
})

