angular.module('fileUpload', ['ngResource','ocNgRepeat'])
.constant("baseURL","http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/")
.factory('eventFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "event/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])
.factory('memberFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "member/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])
.factory('testFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "test/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])
.controller('MyCtrl',['$scope','$timeout','$http','$window','eventFactory',function($scope,$timeout,$http,$window,eventFactory){
    $scope.token=$window.sessionStorage.accessToken;
    $scope.cats=[
    'gyanmudra',
    'kalakriti',
    'naitikta',
    'roobaru',
    'others'];
    var track=$window.sessionStorage.id;
    if(track==-1){
        $scope.event={
        featured: true,
        category: 'gyanmudra',
        images:[]
        };
    }
    else{
        eventFactory.get({id:track},
        function (response) {
            console.log(response);
            $scope.event = response;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    }
    $scope.check=true;
    $scope.show=false;
    $scope.done=false;
    
    $scope.sendEvent = function () {
            console.log($scope.event);
            var eventObj = angular.toJson($scope.event);
            if(track==-1){
            $http.post('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/event',eventObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
              }
              else{
                $http.put('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/event/'+track,eventObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    track=-1;
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
            }
        };
        
    
    function uploadFile(file, signedRequest, url){
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            $scope.event.images.push(url);
          }
          else{
            alert('Could not upload file.');
          }
        }
      };
      xhr.send(file);
    }
    function getSignedRequest(file){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/member/sign-s3?file-name=${file.name}&file-type=${file.type}`);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            uploadFile(file, response.signedRequest, response.url);
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.send();
    }
    /*
     Function called when file input updated. If there is a file selected, then
     start upload procedure by asking for a signed request from the app.
    */
    function initUpload(){
      $timeout(function() {
        $scope.show=true;
      }, 0);
      const files = document.getElementById('file-input').files;
      if(files.length == 0){
        return alert('No file selected.');
      }
      var i;
      for(i=0; i<files.length; i++)
        getSignedRequest(files[i]);
      if(i==files.length){
          alert('Image Uploading is now complete');
            $timeout(function() {
            $scope.check=false;
            $scope.show=false;
            $scope.done=true;
          }, 0);

        }
    }
    (() => {
        document.getElementById('file-input').onchange = initUpload;
    })();
}])
.controller('editEvent',['$scope','$window',function($scope,$window){
    $scope.changeId=function(){
        $window.sessionStorage.id=-1;
    };
    $scope.token=$window.sessionStorage.accessToken;
}])
.controller('MyCtrl2',['$scope','$timeout','$http','$window','memberFactory',function($scope,$timeout,$http,$window,memberFactory){
    $scope.check=true;
    $scope.show=false;
    $scope.done=false;
    $scope.token=$window.sessionStorage.accessToken;
    var track=$window.sessionStorage.id;
    $scope.member={};
    if(track!=-1){
        memberFactory.get({id:track},
        function (response) {
            $scope.member = response;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    }
    $scope.submit = function () {
            console.log($scope.member);
            var memberObj = angular.toJson($scope.member);
            if(track==-1){
            $http.post('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/member',memberObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
              }
            else{
                $http.put('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/member/'+$scope.member._id,memberObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    track=-1;
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
            }
    };
    function uploadFile(file, signedRequest, url){
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            $scope.member.image=url;
          }
          else{
            alert('Could not upload file.');
          }
        }
      };
      xhr.send(file);
    }

    /*
      Function to get the temporary signed request from the app.
      If request successful, continue to upload the file using this signed
      request.
    */
    function getSignedRequest(file){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/member/sign-s3?file-name=${file.name}&file-type=${file.type}`);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            uploadFile(file, response.signedRequest, response.url);
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.send();
    }
    

    /*
     Function called when file input updated. If there is a file selected, then
     start upload procedure by asking for a signed request from the app.
    */
    function initUpload(){
      $timeout(function() {
        $scope.show=true;
      }, 0);
      
      const files = document.getElementById('file-input').files;
      if(files.length == 0){
        return alert('No file selected.');
      }
      getSignedRequest(files[0]);
    }
    (() => {
        document.getElementById('file-input').onchange = initUpload;
    })();
}])
.controller('MyCtrl3',['$scope','$timeout','$http','$window','testFactory',function($scope,$timeout,$http,$window,testFactory,TrackId){
    $scope.token=$window.sessionStorage.accessToken;
    var track=$window.sessionStorage.id;
    if(track!=-1){
       testFactory.get({id:track},
        function (response) {
            console.log(response);
            $scope.test= response;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    }
    else {
        $scope.test={};
    }
    
    $scope.submit = function(){ //function to call on form submit
        var testObj = angular.toJson($scope.test);
        console.log(testObj);
        if(track==-1){
            $http.post('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/test',testObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
              }
        else{
                $http.put('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/test/'+$scope.test._id,testObj,{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    track=-1;
                    alert("Success!");
                    $window.location.reload();
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
            }
    };
}])
.controller('recentEventController', ['$scope', 'eventFactory','memberFactory','testFactory','$timeout',function ($scope, eventFactory,memberFactory,testFactory,$timeout) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showFavorites = false;
    $scope.showMenu = false;
    $scope.showEvents = false;
    $scope.message = "Loading ...";
    $(window).on("load", function() {
        $("#myCarousel").carousel("cycle");
    });
    var filterList = {
        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });

        },

        hoverEffect: function() {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        top: -20
                    }, 300, 'easeOutQuad');
                },
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: -75
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );

        }

    };
    eventFactory.query({
            featured: true
        })
        .$promise.then(
            function (response) {
                console.log(response);
                $scope.fevents = response;
                $scope.showMenu = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    eventFactory.query(
        function (response) {
            $scope.events = response;
            $scope.showDetails=true;  
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    memberFactory.query(
        function (response) {
            $scope.members = response;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    testFactory.query(
        function (response) {
            $scope.tests = response;
            //$scope.showMenu=true;
            
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
    $scope.carouselInitializer = function() {
        $(".portfolio-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoHeight: true,
            mouseDrag: false,
            touchDrag: false,
            transitionStyle: "fadeUp"
        });
        
    };
        $scope.carouselInitializer2 = function() {
        $(".about-carousel").owlCarousel({
            items: 3,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });
        };
    $scope.carouselInitializer3 = function() {
        $(".testimonials-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: true,
            autoHeight: true,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            transitionStyle: "backSlide"
        });

      };
      $timeout(function() {
        filterList.init();
        }, 2000);
    
}])
.controller('recentEventController2', ['$scope','$window', 'eventFactory','$timeout',function ($scope,$window, eventFactory,$timeout,TrackId) {
    
    $scope.showMenu = false;
    $scope.showDetails = false;
    $scope.changeId=function(x){
        $window.sessionStorage.id=x;
    }
    $scope.token=$window.sessionStorage.accessToken;
    var filterList = {
        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });

        },

        hoverEffect: function() {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        top: -20
                    }, 300, 'easeOutQuad');
                },
                function() {
                    $(this).find('.caption').stop().animate({
                        bottom: -75
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );

        }

    };
    eventFactory.query({
            featured: true
        })
        .$promise.then(
            function (response) {
                $scope.fevents = response;
                $scope.showMenu = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    eventFactory.query(
        function (response) {
            $scope.events = response;
            $scope.showDetails=true;
            
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
        $scope.carouselInitializer = function() {
        $(".portfolio-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoHeight: true,
            mouseDrag: false,
            touchDrag: false,
            transitionStyle: "fadeUp"
        });
    };
    $timeout(function() {
        filterList.init();
        }, 2000);
    $scope.deleteEvent=function(eventid){
        if (confirm("sure to delete")) {
            console.log('Delete event', eventid);
            eventFactory.delete({id: eventid});
            $window.location.reload();
            
        }
    };
    
}])
.controller('memberController', ['$scope', '$window','memberFactory','$timeout', function ($scope,$window, memberFactory,$timeout, TrackId) {
    $scope.token=$window.sessionStorage.accessToken;
    $scope.showMenu = false;
    $scope.modifyMember = function(x){
        $window.sessionStorage.id=x;
    }
    memberFactory.query(
        function (response) {
            $scope.members = response;
            $scope.showMenu=true;
            
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
        $scope.carouselInitializer2 = function() {
        $(".about-carousel").owlCarousel({
            items: 3,
            navigation: true,
            pagination: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });
        };
    $scope.deleteMember=function(memberid){
        if (confirm("sure to delete")) {
            console.log('Delete event', memberid);
            memberFactory.delete({id: memberid});
            //$window.location.reload();
            
        }
    };
}])
.controller('testController', ['$scope', '$window','testFactory','$timeout',function ($scope,$window, testFactory,$timeout,TrackId) {
    $scope.token=$window.sessionStorage.accessToken;
    $scope.showMenu = false;
    $scope.modifyTest = function(x){
        $window.sessionStorage.id=x;
    }
    testFactory.query(
        function (response) {
            $scope.tests = response;
            $scope.showMenu=true;
            
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            console.log($scope.message);
        });
        $scope.carouselInitializer3 = function() {
        $(".testimonials-carousel").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: true,
            autoHeight: true,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            transitionStyle: "backSlide"
        });

      };
    $scope.deleteTest=function(testid){
        if (confirm("sure to delete")) {
            console.log('Delete event', testid);
            testFactory.delete({id: testid});
            $window.location.reload();
            
        }
    };
}])
.controller('login',['$scope','$http','$window',function($scope,$http,$window){
    $scope.username='';
    $scope.password='';
    $scope.login = function(){
        $http.post('http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/users/login',
        {
            "username":$scope.username,
            "password":$scope.password
        },{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    if(data.success==true){
                        $window.sessionStorage.accessToken = data.token;
                        window.location.href = "http://ec2-13-126-34-179.ap-south-1.compute.amazonaws.com/admin/admin.html?token="+data.token;
                    }
                    //$window.location.reload();
                   }).error(function(data, status, headers, config) {
                       
                     alert("Error");
                  });
    }
}])
;