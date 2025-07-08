
weeks = {
        mon: {
            degree:"25.5",
            wind:"Vw"
        },
        tue: {
            degree:"30",
            wind:"w"
        },
        wed: {
            degree:"40",
            wind:"m"
        },
        thurs: {
            degree:"10",
            wind:"m"
        },
        fri: {
            degree:"21",
            wind:"w"
        },
        sat: {
            degree:"34",
            wind:"vw"
        },
        sun: {
            degree:"23",
            wind:"w"
        },

}



let frweek = ""
for(let x in weeks){
    frweek += x + ": " + weeks[x].degree + "," + weeks[x].wind; 
}

document.getElementById("wks").innerHTML = frweek;