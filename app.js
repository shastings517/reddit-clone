var app = angular.module("redditClone", []);
  app.controller('EventController', function($scope, $filter){
    
    $scope.post = {};
    $scope.sortReverse = false;
    $scope.formVisible = false;
    
    // SEED DATA
    $scope.allPosts = [
      {
        author: "Sam",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores provident fuga, ab architecto odio! Architecto quo dolorem ab incidunt nisi, explicabo neque vitae nam aliquid, sint, voluptas eius eligendi dignissimos!",
        image: "http://images.vcpost.com/data/images/full/45699/deadpool.jpeg",
        postRating: 0,
        title: "Deadpool"
      },  
      {
        author: "Sam",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur quibusdam sequi consequatur quasi suscipit ipsum obcaecati sunt, perspiciatis ducimus, nihil unde dignissimos animi iste earum a iusto tempore, nesciunt.",
        image: "http://www.theamazingspidermangame.com/etc/designs/atvi/amazing-spiderman-game/amazing-spiderman-game-2/images/features/img5.jpg",
        postRating: 0,
        title: "Spiderman"
      },
      {
        author: "Sam",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur quibusdam sequi consequatur quasi suscipit ipsum obcaecati sunt, perspiciatis ducimus, nihil unde dignissimos animi iste earum a iusto tempore, nesciunt.",
        image: "https://i.ytimg.com/vi/FEZLYYeECtc/maxresdefault.jpg",
        postRating: 0,
        title: "Batman"
      },
      {
        author: "Sam",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consectetur quibusdam sequi consequatur quasi suscipit ipsum obcaecati sunt, perspiciatis ducimus, nihil unde dignissimos animi iste earum a iusto tempore, nesciunt.",
        image: "http://cdn.zmescience.com/wp-content/uploads/2013/07/superman-mkvsdc-1.jpg",
        postRating: 0,
        title: "Superman"
      }    
    ];

    
    $scope.newPost = function(post){
      $scope.post.postRating = 0;
      // $scope.post.id = 0;
      // $scope.post.id++;
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

    
    $scope.upRating = function($$hashKey){
      var postArr = $scope.allPosts;
      for(var i = 0; i < postArr.length; i++){
        if(postArr[i].$$hashKey === $$hashKey){
          postArr[i].postRating++;
        }
      } 
    };
    
    $scope.downRating = function($$hashKey){
      var postArr = $scope.allPosts;
      for(var i = 0; i < postArr.length; i++){
        if(postArr[i].$$hashKey === $$hashKey){
          postArr[i].postRating--;
        }
      }
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