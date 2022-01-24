const router = require('express').Router()
const Produto = require('../models/Produto')

router.post('/', async (req, res) => {

  const { id, nome, preço } = req.body

  const produto = {
    id,
    nome,
    preço
  }

  try {

    await Produto.create(produto)

    res.status(201).json({ message: 'Produto inserido!' })

  } catch (error) {
    res.status(500).json({ error: 'Problema com o servidor tente novamente mais tarde' })
  }
})

router.patch('/:id', async (req, res) => {

  const id = req.params.id

  const { preço } = req.body

  const produto = {
    preço
  }

  try {

    const atualizarProduto = await Produto.updateOne({ id: id }, produto)

    if(!atualizarProduto) {
      res.status(422).json({message: 'O produto não foi encontrado!'})
    }

    res.status(200).json(produto)
  

  } catch (error) {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }

})

router.get('/', async (req, res) => {

  try {

    const produtos = await Produto.find()

    res.status(200).json(produtos)

  } catch {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }

})

router.get('/:id', async (req, res) => {

  const id = req.params.id

  try {

    const produto = await Produto.findOne({ id: id })

    if(!produto) {
      res.status(422).json({message: 'O produto não foi encontrado'})
    }

    res.status(200).json(produto)

  } catch (error) {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }
})


router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const produto = await Produto.findOne({ id: id })

  if(!produto) {
    res.status(422).json({message: 'O produto não foi encontrado'})
  }

  try {

    await Produto.deleteOne({ id: id })

    res.status(200).json({message: 'Produto retirado!'})

  } catch (error) {
    res.status(500).json({ message: 'Problema com o servidor tente novamente mais tarde!' })
  }
})

module.exports = router