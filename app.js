// const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'My name is Abel Levran Lenathea')
//fs.appendFileSync('catatan.txt', ' i live in Padang')
//const catatan = require('./catatan.js')
//const pesan = catatan()
//console.log(pesan) 
//const chalk = require('chalk');
//const log = console.log;
// const validator = require('validator')
// const ambilcatatan = require('./catatan.js')
// const pesan = ambilcatatan()
// console.log(pesan)
// console.log(validator.isURL('https://levran.com'))
//const command = process.argv
//console.log(process.argv[5])
//    if (command === 'tambah'){
//        console.log('Tambah Catatan')
//    } else if (command === 'hapus'){
//    console.log('Hapus Catatan')
//    }
//const pesan = catatan()
//console.log(pesan)
//console.log(validator.isURL('https://levran.com'))



// const chalk = require('chalk');
// console.log(chalk.red('Hello world!'));

const yargs = require('yargs')
const catatan = require('./catatan.js')
//kustominasi versi yargs
yargs.version('10.1.0')
//membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    handler: function (){
        console.log('sebuah catatan baru ditambahkan!')
    }
})

//perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan' ,
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        catatan.HapusCatatan(argv.judul)
    }
})
yargs.command({
    command: 'list',
    describe: 'menampilkan daftar semua catatan',
    handler: function () {
        catatan.listCatatan();
    }
});
yargs.command({
    command: 'baca',
    describe: 'membaca catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang akan dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul);
    }
});

yargs.parse()
