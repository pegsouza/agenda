const express = require('express');

const server = express();

server.use(express.json());

const agenda = [

    { id: 1, compromisso: 'Reunião de trabalho', data: '03/05/2020', realizado: 'sim' },
    { id: 2, compromisso: 'Palestra para universitarios', data: '10/05/2020', realizado: 'sim' },
    { id: 3, compromisso: 'Viagem com a familia', data: '01/05/2020', realizado: 'não' }
]

// GET

server.get('/agenda', function(request, response) {
    response.json(agenda);
})

//POST

server.post('/agenda', function(request, response) {
    const id = request.body.id;
    const compromisso = request.body.compromisso;
    const data = request.body.data;
    const realizado = request.body.realizado;

    agenda.push({id:id, compromisso:compromisso, data:data, realizado:realizado});
    response.status(204).send();
})

//PUT

server.put('/agenda/:cod', function(request, response){
    const cod = request.params.cod;
    const {id,compromisso, data, realizado} = request.body;

    for (let i = 0; i < agenda.length; i++){
        if (agenda[i].id == cod ){
            agenda[i].id = id;
            agenda[i].compromisso = compromisso;
            agenda[i].data = data;
            agenda[i].realizado = realizado;
             break;
        }
       
    }
    return response.status(204).send();
})

// DELETE

server.delete('/agenda/:cod', function(request, response){
    const cod = request.params.cod;
    for (let i = 0; i < agenda.length; i++){
        if (agenda[i].id == cod ){
            agenda.splice(i, 1);
             break;
        }
       
    } 
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);