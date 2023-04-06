function solution(players, callings) {
  let obj = {};

  for (let i = 0; i < players.length; i++) {
    obj[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let player1 = players[obj[callings[i]] - 1];
    let player2 = players[obj[callings[i]]];

    players[obj[callings[i]] - 1] = player2;
    players[obj[callings[i]]] = player1;

    obj[player1] += 1;
    obj[player2] -= 1;
  }

  return players;
}
