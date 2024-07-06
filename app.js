var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "".concat(this.name, " is ").concat(this.age, "} years old.");
    };
    return Person;
}());
var person = new Person("Alisha", 20);
console.log(person.getDetails());
var takePhoto = /** @class */ (function () {
    function takePhoto(filName, brstNo) {
        this.brust = brstNo;
        this.filter = filName;
    }
    return takePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(filName, brstNo, rlTime) {
        var _this = _super.call(this, filName, brstNo) || this;
        _this.reelTime = rlTime;
        return _this;
    }
    return Instagram;
}(takePhoto));
var instaApp = new Instagram("Whitness", 10, 10);
console.log(instaApp);
var personalData = /** @class */ (function () {
    function personalData(tName, tAge, tExp) {
        this.name = tName;
        this.age = tAge;
        this.experience = tExp;
    }
    Object.defineProperty(personalData.prototype, "updataAge", {
        set: function (updataAge) {
            this.age = updataAge;
        },
        enumerable: false,
        configurable: true
    });
    return personalData;
}());
var tdata1 = new personalData("ubaid", 10, 3);
console.log(tdata1);
tdata1.updataAge = 20;
console.log(tdata1);
