var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "km";
    DistanceUnit["MILE"] = "m";
})(DistanceUnit || (DistanceUnit = {}));
var myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed: function () {
        console.log("the Current Speed of ".concat(this.plate_no, " is ").concat(this.speed));
    }
};
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("the Current Speed of ".concat(this.full_name, " is ").concat(this.speed));
    }
};
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(janeDee);
