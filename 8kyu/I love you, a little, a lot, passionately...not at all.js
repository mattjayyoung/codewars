// I love you, a little , a lot, passionately ... not at all - 8kyu (January 13th)

function howMuchILoveYou(numPetals) {
    const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

    const index = (numPetals - 1) % phrases.length;
    return phrases[index];
}