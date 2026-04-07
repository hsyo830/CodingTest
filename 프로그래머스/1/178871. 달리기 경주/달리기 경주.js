function solution(players, callings) {
    const rank = new Map();

    for (let i = 0; i < players.length; i++) {
        rank.set(players[i], i);
    }

    for (const name of callings) {
        const idx = rank.get(name);
        const frontPlayer = players[idx - 1];

        // 자리 교체
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

        // 등수 갱신
        rank.set(name, idx - 1);
        rank.set(frontPlayer, idx);
    }

    return players;
}