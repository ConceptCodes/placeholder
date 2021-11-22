// imports
const express = require('express')
const morgan = require('morgan')
const { createCanvas, createImageData } = require('canvas')
const app = express()

// logging
app.use(morgan('dev'))

// main endpoint
app.get("/:size", (req, res) => {
    // get size dimensions 
    const width = parseInt(req.params.size);
    const height = parseInt(req.params.size);

    // create the image
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#808080' // set background to gray
    ctx.fillRect(0, 0, width, height)

    // convert canvas to image format and return to user
    res.status(200).send({ width, height,  img: canvas.toDataURL() })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});