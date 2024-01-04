// const ambilcatatan = function (){
//     return 'ini catatan Abel Levran ...'
// }


// module.exports = ambilcatatan()
const chalk = require('chalk');
const fs = require('fs')
const ambilcatatan = function(){
    return 'ini catatan abel levran'
}

const tambahCatatan = function (judul, isi){
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function(note){
        return note.title === judul
    })

    if (catatanGanda.length === 0){
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan)
        console.log('Catatan baru ditambahkan!')
    }
    else{
        console.log('judul catatan telah dipakai')
    }
}

const HapusCatatan = function(judul){
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function(note){
        return note.judul !== judul
    })
    if (catatan.length > catatanUntukDisimpan.length){
        console.log(chalk.green.inverse('catatan Dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    }else{
        console.log(chalk.red.inverse('catatan tidak ditemukan!'))
    }
}

const simpanCatatan = function(catatan){
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}

const listCatatan = function(){
    const catatan = muatCatatan()

    console.log(chalk.blue.inverse('Daftar Catatan:'))
    catatan.forEach(function(note){
        console.log(chalk.blue(note.judul))
    })
}

const bacaCatatan = function(judul){
    const catatan = muatCatatan()
    const catatanDitemukan = catatan.find(function(note){
        return note.judul === judul
    })

    if (catatanDitemukan){
        console.log(chalk.blue.inverse(catatanDitemukan.judul))
        console.log(catatanDitemukan.isi)
    }else{
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

const muatCatatan = function(){
    try{
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return[]
    }
}
module.exports = {
    ambilcatatan: ambilcatatan,
    tambahCatatan: tambahCatatan,
    HapusCatatan: HapusCatatan,
    listCatatan: listCatatan,
    bacaCatatan: bacaCatatan
}
