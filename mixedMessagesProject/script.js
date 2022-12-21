//get a random number from 0 -> num -1
function generateRandomNumber(num) {

    return Math.floor(Math.random() *num)
}

const pickMyTeam = {
    teamHome: ['Las Vegas', 'Eaton', 'San Jose', 'St. Luke', 'Tampa Bay', 'Montbello', 'Dubai', 'London', 'Manhattan', 'Wrong side of the tracks', 'Franktown'],
    teamName: ['Raiders', 'Silly Nannies', '49ers', 'Rockstompers', 'Buccaneers', 'Warriors', 'Skyscrapers', 'Tea Sippers', 'Native New Yorkers', 'Railroad Raiders', 'Mountaineers'],
    teamMotto: ['Just Win Baby', 'Slap me silly and call me a nannie', 'Faithful To The Bay', 'Lets go Strong men, lets go', 'Raise The Flags', 'Truth, Honor, and Dignity', 'Make it Happen', 'Tea before thee', 'I/m walking here', 'We were first', 'Dont Stop Til You/re at the Top']
}

//store the team in the array
let myTeam = []

//iterate over my array indexs
for(let prop in pickMyTeam) {
    let optionIdx = generateRandomNumber(pickMyTeam[prop].length)

    //use properties to create my team with a custom message
    switch(prop) {
        case 'teamHome': myTeam.push(`Your team's home base is "${pickMyTeam[prop][optionIdx]}".`)
        break
        case 'teamName': myTeam.push(`Your team name is "${pickMyTeam[prop][optionIdx]}".`)
        break
        case 'teamMotto': myTeam.push(`This is your team's war cry: "${pickMyTeam[prop][optionIdx]}".`)
        break
        default: myTeam.push('There is not enough info.')
    }
}

console.log(myTeam);

