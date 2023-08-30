const { Flight } = require('./dbConnect')

let obj = {

}

const update = async () => {

    /*const result = await Flight.updateOne(
        {
            $and: [
                {flightNo : "CBM 400"},
                {Seats : { $elemMatch: { seatNo: "F2" } }}
            ]
        },
        {
            $set : {
                "Seats.$.PassengerName" : "Person1",
                "Seats.$.PassengerNumber" : "1234569870",
                "Seats.$.PassengerDOB" : "15-05-2023"
            }
        }
    )*/

    const result = await Flight.find({flightNo:"DM 200"})
    // let date = new Date()
    // console.log(result)

}

update()