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
      $scope.post.postRating = 0;
      $scope.allPosts.push($scope.post);
      $scope.post = {};
      $scope.formVisible = !$scope.formVisible;
      $scope.addPost.title.$touched = false;
      $scope.addPost.author.$touched = false;
      $scope.addPost.image.$touched = false;
      $scope.addPost.description.$touched = false;



      
      // debugger
    };
    $scope.showForm = function(){
      $scope.formVisible = !$scope.formVisible;
    };



    // function changeDesc( value, desc ) {
    //    for (var i in projects) {
    //      if (projects[i].value == value) {
    //         projects[i].desc = desc;
    //         break; //Stop this loop, we found it!
    //      }
    //    }
    // }

    $scope.upRating = function($index){
      // for (var i in $scope.allPosts) {
        $scope.allPosts[$index].postRating++;
        
      

    };

    $scope.downRating = function($index){
      $scope.allPosts[$index].postRating--;
    };

    $scope.orderByVote = function(){
      
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