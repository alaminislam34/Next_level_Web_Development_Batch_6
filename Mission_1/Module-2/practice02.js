const footballPlayers = [
  { name: "Lionel Messi", country: "Argentina", goals: 815 },
  { name: "Cristiano Ronaldo", country: "Portugal", goals: 875 },
  { name: "Kylian Mbappé", country: "France", goals: 320 },
  { name: "Erling Haaland", country: "Norway", goals: 210 },
  { name: "Neymar Jr", country: "Brazil", goals: 450 },
  { name: "Robert Lewandowski", country: "Poland", goals: 560 },
  { name: "Harry Kane", country: "England", goals: 10203 },
  { name: "Mohamed Salah", country: "Egypt", goals: 360 },
  { name: "Karim Benzema", country: "France", goals: 430 },
  { name: "Vinícius Júnior", country: "Brazil", goals: 120 },
];

const topGoaler = footballPlayers.reduce((bestGoaler, player) => {
    if(bestGoaler.goals > player.goals){
        return bestGoaler;
    }
    return player
}, footballPlayers[0])

console.log(topGoaler)