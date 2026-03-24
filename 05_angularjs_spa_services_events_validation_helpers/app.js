var app = angular.module("advancedSpaApp", []);

app.service("TaskService", function ($rootScope) {
  var tasks = [];

  this.list = function () {
    return tasks;
  };

  this.add = function (text) {
    tasks.push({ text: text.trim() });
    $rootScope.$broadcast("task:updated", tasks.length);
  };

  this.remove = function (index) {
    tasks.splice(index, 1);
    $rootScope.$broadcast("task:updated", tasks.length);
  };
});

app.controller("MainController", function ($scope, TaskService, $filter) {
  var vm = this;
  vm.tasks = TaskService.list();
  vm.newTask = "";
  vm.message = "Add a task to begin.";

  vm.addTask = function (form) {
    if (form.$invalid) {
      vm.message = "Please fix validation errors.";
      return;
    }

    var cleanedTask = $filter("uppercase")(vm.newTask.trim());
    TaskService.add(cleanedTask);
    vm.newTask = "";
    form.$setPristine();
    form.$setUntouched();
  };

  vm.removeTask = function (index) {
    TaskService.remove(index);
  };

  vm.taskCount = function () {
    return vm.tasks.length;
  };

  $scope.$on("task:updated", function (_event, count) {
    vm.message = "Task list updated. Total tasks: " + count;
  });
});
