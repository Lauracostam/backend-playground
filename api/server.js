import express from 'express';

const app = express();
app.use(express.json()); // Middleware para parsear o corpo das requisições como JSON (express não utiliza json por padrão, é necessário configurar)

const users = []

app.post('/users', (req, res) => {
    users.push(req.body);
    res.send('user created');
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// 1. tipo da rota/método http (get, post, put, delete)
// 2. caminho da rota (endpoint)
// 3. função de callback (req, res) => {} - o que deve ser feito quando a rota for acessada