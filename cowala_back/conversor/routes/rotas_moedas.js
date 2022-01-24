const router = require('express').Router()
const Moeda = require('../models/Moeda')
const callback_api = require('../api/api');

router.post('/', async (req, res) => {

  const { id, valorEnviado} = req.body
  
  const valorConvertido = valorEnviado * valor

  const moeda = {
    id,
    moedaOriginal,
    moedaDaConversão,
    valorEnviado,
    valorConvertido
  }

  try {

    await Moeda.create(moeda)

    res.status(201).json({ message: 'Moeda inserida!' })
    
  } catch (error) {
    res.status(500).json({ error: 'Problema com o servidor tente novamente mais tarde' })
  }
})

router.get('/', async (req, res) => {

  try {

    const moedas = await Moeda.find()

    res.status(200).json(moedas)

  } catch {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }

})

router.get('/:id', async (req, res) => {

  const id = req.params.id

  try {

    const moeda = await Moeda.findOne({ id: id })

    if(!moeda) {
      res.status(422).json({message: 'Id não foi encotrado'})
    }

    res.status(200).json(moeda)

  } catch (error) {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }
})


router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const moeda = await Moeda.findOne({ id: id })

  if(!moeda) {
    res.status(422).json({message: 'Id não foi encontrado'})
  }

  try {

    await Moeda.deleteOne({ id: id })

    res.status(200).json({message: 'conversão retirada!'})

  } catch (error) {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }
})

module.exports = router 