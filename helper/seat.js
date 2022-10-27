module.exports = () => {
    const alphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      const result = {};
      alphabets.forEach((alphabet) => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
          return {
            id: num,
            isBooked: false,
          };
        });
        result[alphabet] = data;
      });
      return result;
}