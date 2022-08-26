var clothes = {
    title: 'shirt',
    cost: 100,
    color: 'red',
    available: true
};
var funCloth = function (trend) {
    console.log("".concat(trend.title, ", ").concat(trend.cost, ", ").concat(trend.color, ", ").concat(trend.available));
};
funCloth(clothes);
