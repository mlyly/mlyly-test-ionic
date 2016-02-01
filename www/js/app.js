angular.module('starter', ['ionic', 'wSQL'])

        .controller("TodoCtrl", function ($scope, $ionicPopup, $ionicListDelegate, wSQL) {

            console.log("wSQL = ", wSQL);

            if (false) {
                wSQL.insert("todo", {
                    title: "From db: " + new Date(),
                    completed: 0
                }).then(function (insert) {
                    console.log("insert_id");
                    console.log(insert.insertId);
                });
            }

            $scope.tasks = [];
            reloadTasks();

            function reloadTasks() {
                console.log("reloadTasks()");
                wSQL
                        .select("*")
                        .from("todo")
                        .query()
                        .then(function (res) {
                            console.log("TODOs from db: ", res);
                            $scope.tasks = res;
                        });
            }

            function updateTask(task) {
                console.log("updateTask()", task);
                wSQL
                        .update("todo", {
                            title: task.title,
                            completed: task.completed ? 1 : 0
                        })
                        .where("id", task.id)
                        .query()
                        .then(function (updated) {
                            console.log("Updated db.", updated);
                        });
            }

            function deleteTask(task) {
                console.log("deleteTask()", task);
                wSQL
                        .delete("todo")
                        .where("id", task.id)
                        .query()
                        .then(function (deleted) {
                            console.log("deleted task.", deleted);
                            reloadTasks();
                        });
            }
            $scope.deleteTask = deleteTask;

            $scope.updateTaskCompleted = function (task) {
                task.completed = !task.completed;   
                updateTask(task);
            }


            $scope.newTask = function () {
                console.log("newTask()");
                $ionicPopup.prompt({
                    title: "New Task",
                    template: "Enter task: ",
                    inputPlaceholder: "What do you need to do?",
                    okText: "Create Task"
                }).then(function (res) {
                    if (res) {
                        wSQL
                                .insert("todo", {
                                    title: res,
                                    completed: 0
                                })
                                .then(function (insert) {
                                    console.log("inserted", insert);
                                    reloadTasks();
                                });
                        // $scope.tasks.push({title: res, completed: false});
                    }
                });
            };

            $scope.edit = function (task) {
                console.log("edit()");
                $scope.data = {response: task.title};
                $ionicPopup.prompt({
                    title: "Edit task",
                    scope: $scope
                }).then(function (res) {
                    if (res !== undefined) {
                        task.title = $scope.data.response;
                        $ionicListDelegate.closeOptionButtons();
                        updateTask(task);
                    }
                });
            };
        })

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                console.log("$ionicPlatform.ready()");
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        