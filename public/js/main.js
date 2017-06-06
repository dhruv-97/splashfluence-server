
angular.module('fileUpload', ['ngFileUpload','ngResource','ocNgRepeat'])
//.constant("baseURL", "https://peaceful-forest-22917.herokuapp.com/")
.constant("baseURL","http://ec2-52-66-87-230.ap-south-1.compute.amazonaws.com/")
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
.controller('MyCtrl',['Upload','$window',function(Upload,$window){
    var vm = this;
    vm.cats=[
    'gyanmudra',
    'kalakriti',
    'naitikta',
    'roobaru',
    'others'];
    vm.event={
      featured: true,
      category: 'gyanmudra'
    };
    vm.submit = function(){ //function to call on form submit
        //check if from is valid
            console.log(vm.event);
            vm.upload(vm.image1,vm.image2,vm.event); //call upload function
    }
    
    vm.upload = function (image1,image2,event) {
        Upload.upload({
            url: baseURL+'event/upload', //webAPI exposed to upload the file
            //url: 'http://localhost:3000/event/upload',
            data:{image1:image1,
                  image2:image2,
                  name:event.name,
                  category:event.category,
                  description:event.description,
                  place:event.place,
                  featured:event.featured
                  } //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code !== 500){ //validate success
                $window.alert('Success');
            } else {
                $window.alert('an error occured');
            }
            console.log(resp);
        });
    };
}])
.controller('MyCtrl2',['Upload','$window',function(Upload,$window){
    var vm2 = this;
    vm2.member={
    };
    
    vm2.submit = function(){ //function to call on form submit
        //check if from is valid
            console.log(vm2.member);
            vm2.upload(vm2.image,vm2.member); //call upload function
    }
    
    vm2.upload = function (image,member) {
        Upload.upload({
            url: baseURL+'member', //webAPI exposed to upload the file
            data:{image:image,
                  name:member.name,
                  designation: member.designation,
                  facebook: member.facebook,
                  twitter: member.twitter,
                  linkedin: member.linkedin
                  } //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code !== 500){ //validate success
                $window.alert('Success');
            } else {
                $window.alert('an error occured');
            }
            console.log(resp);
        });
    };
}])
.controller('MyCtrl3',['Upload','$window',function(Upload,$window){
    var vm3 = this;
    vm3.test={
    };
    
    vm3.submit = function(){ //function to call on form submit
        //check if from is valid
            console.log(vm3.test);
            vm3.upload(vm3.test); //call upload function
    }
    
    vm3.upload = function (test) {
        Upload.upload({
            url: baseURL+'/test', //webAPI exposed to upload the file
            data:{
                    heading: test.heading,
                    description: test.description,
                    name: test.name,
                    date: test.date,
                    link: test.link
                  
                  } //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code !== 500){ //validate success
                $window.alert('Success');
            } else {
                $window.alert('an error occured');
            }
            console.log(resp);
        });
    };
}])
.controller('recentEventController', ['$scope', 'eventFactory','memberFactory','testFactory','$timeout',function ($scope, eventFactory,memberFactory,testFactory,$timeout) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showFavorites = false;
    $scope.showMenu = false;
    $scope.showEvents = false
    $scope.message = "Loading ...";
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
    memberFactory.query(
        function (response) {
            $scope.members = response;
            $scope.showMenu=true;
            
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
.controller('recentEventController2', ['$scope','$window', 'eventFactory','$timeout',function ($scope,$window, eventFactory,$timeout) {
    $scope.showMenu = false;
    $scope.showDetails = false;
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
.controller('memberController', ['$scope', '$window','memberFactory','$timeout',function ($scope,$window, memberFactory,$timeout) {
    $scope.showMenu = false;
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
            $window.location.reload();
            
        }
    };
}])
.controller('testController', ['$scope', '$window','testFactory','$timeout',function ($scope,$window, testFactory,$timeout) {
    $scope.showMenu = false;
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
;