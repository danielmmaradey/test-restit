const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const pool = require('../database/connection');

router.get('/api/mesas', async (req, res) => {
    const result = await pool.query('SELECT * FROM mesas');
    res.json({result})
})

router.post('/api/mesas', async (req, res) => {
    const { type, puestos, ocupados , id_mesa, id_pedido } = req.body;
    const newmesa = {
        type,
        puestos,
        ocupados,
        id_mesa,
        id_pedido
    }
    const result = await pool.query('INSERT INTO mesas set ?', [newmesa]);
    res.json({result});
})

router.delete('/api/mesa/:id', async (req, res) => {
    const id  = req.params;
    console.log(id.id)
    const result = await pool.query('DELETE FROM mesas WHERE id = ?', [id.id]);
    res.json({result});
})

router.put('/api/upmesa/:id', async (req, res) => {
    const id  = req.params;
    const { type, puestos, ocupados , id_mesa, id_pedido } = req.body;
    const upmesa = {
        type,
        puestos,
        ocupados,
        id_mesa,
        id_pedido
    }
    console.log(upmesa)
    await pool.query('UPDATE mesas set ? WHERE id = ?', [upmesa, id.id]);
    res.send('updated')
})

module.exports = router;