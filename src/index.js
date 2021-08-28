module.exports = function towelSort (matrix) {
  let sort = [];
  if (!matrix) return sort;
  else {
    matrix.forEach((item, index) => {
      if (index % 2 === 0) {
        for (let i = 0; i < item.length; i++) {
          sort.push(item[i]);
        }
      } else {
          for (let j = item.length - 1; j >= 0; j--) {
            sort.push(item[j]);
          }
        }
    });
    return sort;
  };
};
