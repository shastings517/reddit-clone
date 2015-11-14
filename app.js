var app = angular.module("redditClone", []);
  app.controller('EventController', function($scope){
    // $scope.addPost.ngHide();
    
  
    $scope.postRating = 0;

    $scope.upRating = function(){
      $scope.postRating++;
    };
    $scope.downRating = function(){
      $scope.postRating--;
    };

    $scope.mv = {};
    $scope.allPosts = [];

    $scope.newPost = function(){
      $scope.allPosts.push($scope.mv);
      $scope.mv = {};
      // debugger
    };
2
    // $scope.vote = function(){
    //   if($scope.postRating < 0){
    //     return 
    //   }
    // };
  });


  // var app = angular.module("signInApp", []);

  //   app.controller("EventController", function($scope){

  //     $scope.myRegex = /^\d{5}$/;
  //     $scope.mv = {};
  //     $scope.userArr = [];


  //     $scope.submit = function() {  
  //       $scope.userArr.push($scope.mv);
  //     // debugger
  //       $scope.mv = {};
  //       $scope.signIn.$setPristine();
  //     };



  //   });