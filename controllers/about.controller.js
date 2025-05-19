const express = require('express')



const aboutFunctions = async (req, res) => {
    res.send('here is the about page')
}

module.exports = { aboutFunctions }