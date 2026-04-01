var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };
      return extendStatics(d, b);
    };

    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();

var Person = /** @class */ (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.describe = function () {
    return "Name: " + this.name;
  };
  return Person;
})();

var Student = /** @class */ (function (_super) {
  __extends(Student, _super);
  function Student(name, rollNo) {
    var _this = _super.call(this, name) || this;
    _this.rollNo = rollNo;
    return _this;
  }
  Student.prototype.describe = function () {
    return _super.prototype.describe.call(this) + "\nRoll No: " + this.rollNo;
  };
  return Student;
})(Person);

var GraduateStudent = /** @class */ (function (_super) {
  __extends(GraduateStudent, _super);
  function GraduateStudent(name, rollNo, specialization) {
    var _this = _super.call(this, name, rollNo) || this;
    _this.specialization = specialization;
    return _this;
  }
  GraduateStudent.prototype.describe = function () {
    return _super.prototype.describe.call(this) + "\nSpecialization: " + this.specialization;
  };
  return GraduateStudent;
})(Student);

document.getElementById("showBtn").addEventListener("click", function () {
  var graduate = new GraduateStudent("Devang Deokule", 58, "Information Technology");
  document.getElementById("output").textContent = graduate.describe();
});
