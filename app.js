var app = angular.module("redditClone", []);
  app.controller('EventController', function($scope){
    // $scope.addPost.ngHide();
    
  
    
    $scope.post = {};
    $scope.allPosts = [];
    $scope.formVisible = false;
    // $scope.button = false;

    

    // $scope.resetForm = function resetForm(){
    //   $scope.addPost.$setPristine();
    // };

    $scope.newPost = function(post){
      $scope.allPosts.push($scope.post);
      $scope.post = {};
      $scope.formVisible = !$scope.formVisible;
      $scope.addPost.title.$touched = false;
      $scope.addPost.author.$touched = false;
      $scope.addPost.image.$touched = false;
      $scope.addPost.description.$touched = false;
      $scope.post.postRating = 0;


      
      // debugger
    };
    $scope.showForm = function(){
      $scope.formVisible = !$scope.formVisible;
    };
  });

  app.controller('PostController', function($scope){

    $scope.postRating = 0;
    $scope.post.


    $scope.upRating = function(){
      $scope.postRating++;
      debugger
    };

    $scope.downRating = function(){
      $scope.postRating--;
    };

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