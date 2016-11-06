angular.module('myApp', [])
       .controller('MovieController', function($scope,$http,$log){
         $scope.$watch('search',function(){
           fetch();
         });

         $scope.search = "Sultan";

         function fetch(){
               $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
                .then(function(response){ $scope.details = response.data;
                  $log.info(response);
                });

               $http.get("http://www.omdbapi.com/?s=" + $scope.search)
                .then(function(response){ $scope.related = response.data;
                  $log.info(response);
                });
    }

         $scope.update= function(movie){
           $scope.search = movie.Title;
         };

         $scope.update= function(){
          this.setSelectionRange(0,this.value.length);
        };

       });
