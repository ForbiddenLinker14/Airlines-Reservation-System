const {Flight} = require('./dbConnect')

const result = Flight.find({flightNo: 'DC 317'})

result.then((data)=>{
    console.log(data[0].DepDT.toLocaleDateString())
    console.log(data[0].DepDT.toLocaleTimeString())
    console.log(data[0].ArvDT.toLocaleDateString())
    console.log(data[0].ArvDT.toLocaleTimeString())
})
.catch((err)=>{
    console.log(err)
})