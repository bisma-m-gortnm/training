var clothes = {
    title: 'shirt',
    cost: 100,
    color: 'red',
    available: true,
    launch: new Date(),
    comments: function () {
        return "name ".concat(this.title);
    }
};
var funCloth = function (trend) {
    console.log("".concat(trend.title, ", ").concat(trend.cost, ", ").concat(trend.color, ", ").concat(trend.available, ", ").concat(trend.launch));
};
funCloth(clothes);
