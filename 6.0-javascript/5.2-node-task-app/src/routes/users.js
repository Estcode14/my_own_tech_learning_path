const router  = require("express").Router()

router.get('/users/singin', (req, res) => {
    res.send('Ingresando a la app')
})

router.get('/users/singup', (req, res) => {
    res.send('autentification a la app')
})

router.get('/users/singout', (req, res) => {
    res.send('Saliendo a la app')
})

module.exports = router;