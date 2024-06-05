const express = require('express');
const path = require('path');
const app = express();  
app.use(express.static('public'));
app.set('view engine', 'html');
const { EventEmitter } = require('events');
const emitter = new EventEmitter();


emitter.on('sectionOpen', (sectionId) => {
    console.log(`Section ${sectionId} opened`);
});

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))); 
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/kombinatorika', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'KP.html'));
});

app.get('/satuanjarak', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jarak.html'));
});

app.get('/satuansuhu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'suhu.html'));
});

app.use((req, res, next) => {
    res.status(404).send("Page Not Find");
  });
 
const PORT = process.env.PORT || 443;
app.listen(PORT, () => console.log(`Servernya jalan :)`)); 