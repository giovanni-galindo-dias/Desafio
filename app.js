const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');  

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'giovanni'
});

db.connect();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname))); 

app.get('/resultados/:disciplina/:bimestre', (req, res) => {
    const disciplina = req.params.disciplina;
    const bimestre = req.params.bimestre;

    const query = "SELECT * FROM resultado WHERE disciplina = ? AND bimestre = ?";
    db.query(query, [disciplina, bimestre], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar resultados');
            return;
        }

        res.status(200).send(results);
    });
});



app.post('/cadastrar', (req, res) => {
    const { disciplina, bimestre, nota } = req.body;  // Adicionei "nota" aqui
    
    const sql = "INSERT INTO resultado (disciplina, bimestre, nota, criadoEm, atualizadoEm) VALUES (?,?,?, NOW(), NOW())"; // Adicionei "nota" e datas aqui
    db.query(sql, [disciplina, bimestre, nota], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar');
            return;
        }
        res.status(200).send({ insertId: result.insertId });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/cadastrar', (req, res) => {
    const { disciplina, bimestre, nota } = req.body;
    
    const selectQuery = "SELECT * FROM resultado WHERE disciplina = ? AND bimestre = ?";
    db.query(selectQuery, [disciplina, bimestre], (selectErr, selectResult) => {
        if (selectErr) {
            console.error(selectErr);
            res.status(500).send('Erro ao verificar duplicatas');
            return;
        }

        if (selectResult.length > 0) {
            // Já existe um registro com a mesma disciplina e bimestre
            res.status(400).send('Já existe um registro com a mesma disciplina e bimestre');
            return;
        }

        // Não existe registro duplicado, realizar a inserção
        const insertQuery = "INSERT INTO resultado (disciplina, bimestre, nota, criadoEm, atualizadoEm) VALUES (?, ?, ?, NOW(), NOW())";
        db.query(insertQuery, [disciplina, bimestre, nota], (insertErr, insertResult) => {
            if (insertErr) {
                console.error(insertErr);
                res.status(500).send('Erro ao cadastrar');
                return;
            }
            res.status(200).send({ insertId: insertResult.insertId });
        });
    });
});

app.delete('/excluir/:disciplina/:bimestre/:nota', (req, res) => {
    const { disciplina, bimestre, nota  } = req.params;

    const deleteQuery = "DELETE FROM resultado WHERE disciplina = ? AND bimestre = ?";
    db.query(deleteQuery, [disciplina, bimestre, nota], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao excluir resultado');
            return;
        }
        res.status(200).send('Resultado excluído com sucesso');
    });
});

