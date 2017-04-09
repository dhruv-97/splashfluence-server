angular.module('formExample', [])
	.config(function ($httpProvider) {
	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};
	})
      .controller('formController', ['$scope', '$http', function($scope, $http) {
      	$scope.timetable = {
      		sem: '',
      		group:'',
	        monday:{
	        	p1: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p2: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p3: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p4: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p5: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p6: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p7: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	}
	        },
	        tuesday:{
	        	p1: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p2: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p3: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p4: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p5: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p6: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p7: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	}
	        },
	        wednesday:{
	        	p1: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p2: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p3: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p4: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p5: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p6: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p7: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	}
	        },
	        thursday:{
	        	p1: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p2: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p3: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p4: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p5: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p6: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p7: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	}
	        },
	        friday:{
	        	p1: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p2: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p3: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p4: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p5: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p6: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	},
	        	p7: {
	        		subject: '',
			        teacher: '',
			        room:''
	        	}
	        }
	    };
      
	    $scope.sendTimeTable = function () {


		        $http.post('http://localhost:3000/timetable', {
    
    "sem": $scope.timetable.sem,
    "group": $scope.timetable.group,
    "friday": [{
	        "p7": [{
            
            "teacher": $scope.timetable.friday.p7.teacher,
            "room": $scope.timetable.friday.p7.room,
            "subject": $scope.timetable.friday.p7.subject
          }],
        "p6": [{
            
            "teacher": $scope.timetable.friday.p6.teacher,
            "room": $scope.timetable.friday.p6.room,
            "subject": $scope.timetable.friday.p6.subject
          }],
        "p5": [{
            
            "teacher": $scope.timetable.friday.p5.teacher,
            "room": $scope.timetable.friday.p5.room,
            "subject": $scope.timetable.friday.p5.subject
          }],
        "p4": [{
            
            "teacher": $scope.timetable.friday.p4.teacher,
            "room": $scope.timetable.friday.p4.room,
            "subject": $scope.timetable.friday.p4.subject
          }],
        "p3": [{
            
            "teacher": $scope.timetable.friday.p3.teacher,
            "room": $scope.timetable.friday.p3.room,
            "subject": $scope.timetable.friday.p3.subject
          }],
        "p2": [{
            
            "teacher": $scope.timetable.friday.p2.teacher,
            "room": $scope.timetable.friday.p2.room,
            "subject": $scope.timetable.friday.p2.subject
          }],
        "p1": [
          {
            
            "teacher": $scope.timetable.friday.p1.teacher,
            "room": $scope.timetable.friday.p1.room,
            "subject": $scope.timetable.friday.p1.subject
          }
        ]
      }],
    "thursday": [{
        "p7": [{
            
            "teacher": $scope.timetable.thursday.p7.teacher,
            "room": $scope.timetable.thursday.p7.room,
            "subject": $scope.timetable.thursday.p7.subject
          }],
        "p6": [{
            
            "teacher": $scope.timetable.thursday.p6.teacher,
            "room": $scope.timetable.thursday.p6.room,
            "subject": $scope.timetable.thursday.p6.subject
          }],
        "p5": [{
            
            "teacher": $scope.timetable.thursday.p5.teacher,
            "room": $scope.timetable.thursday.p5.room,
            "subject": $scope.timetable.thursday.p5.subject
          }],
        "p4": [{
            
            "teacher": $scope.timetable.thursday.p4.teacher,
            "room": $scope.timetable.thursday.p4.room,
            "subject": $scope.timetable.thursday.p4.subject
          }],
        "p3": [{
            
            "teacher": $scope.timetable.thursday.p3.teacher,
            "room": $scope.timetable.thursday.p3.room,
            "subject": $scope.timetable.thursday.p3.subject
          }],
        "p2": [{
            
            "teacher": $scope.timetable.thursday.p2.teacher,
            "room": $scope.timetable.thursday.p2.room,
            "subject": $scope.timetable.thursday.p2.subject
          }],
        "p1": [
          {
            
            "teacher": $scope.timetable.thursday.p1.teacher,
            "room": $scope.timetable.thursday.p1.room,
            "subject": $scope.timetable.thursday.p1.subject
          }
        ]
      }],
    "wednesday": [{
        "p7": [{
            
            "teacher": $scope.timetable.wednesday.p7.teacher,
            "room": $scope.timetable.wednesday.p7.room,
            "subject": $scope.timetable.wednesday.p7.subject
          }],
        "p6": [{
            
            "teacher": $scope.timetable.wednesday.p6.teacher,
            "room": $scope.timetable.wednesday.p6.room,
            "subject": $scope.timetable.wednesday.p6.subject
          }],
        "p5": [{
            
            "teacher": $scope.timetable.wednesday.p5.teacher,
            "room": $scope.timetable.wednesday.p5.room,
            "subject": $scope.timetable.wednesday.p5.subject
          }],
        "p4": [{
            
            "teacher": $scope.timetable.wednesday.p4.teacher,
            "room": $scope.timetable.wednesday.p4.room,
            "subject": $scope.timetable.wednesday.p4.subject
          }],
        "p3": [{
            
            "teacher": $scope.timetable.wednesday.p3.teacher,
            "room": $scope.timetable.wednesday.p3.room,
            "subject": $scope.timetable.wednesday.p3.subject
          }],
        "p2": [{
            
            "teacher": $scope.timetable.wednesday.p2.teacher,
            "room": $scope.timetable.wednesday.p2.room,
            "subject": $scope.timetable.wednesday.p2.subject
          }],
        "p1": [
          {
            
            "teacher": $scope.timetable.wednesday.p1.teacher,
            "room": $scope.timetable.wednesday.p1.room,
            "subject": $scope.timetable.wednesday.p1.subject
          }
        ]
      }],
    "tuesday": [{
        "p7": [{
            
            "teacher": $scope.timetable.tuesday.p7.teacher,
            "room": $scope.timetable.tuesday.p7.room,
            "subject": $scope.timetable.tuesday.p7.subject
          }],
        "p6": [{
            
            "teacher": $scope.timetable.tuesday.p6.teacher,
            "room": $scope.timetable.tuesday.p6.room,
            "subject": $scope.timetable.tuesday.p6.subject
          }],
        "p5": [{
            
            "teacher": $scope.timetable.tuesday.p5.teacher,
            "room": $scope.timetable.tuesday.p5.room,
            "subject": $scope.timetable.tuesday.p5.subject
          }],
        "p4": [{
            
            "teacher": $scope.timetable.tuesday.p4.teacher,
            "room": $scope.timetable.tuesday.p4.room,
            "subject": $scope.timetable.tuesday.p4.subject
          }],
        "p3": [{
            
            "teacher": $scope.timetable.tuesday.p3.teacher,
            "room": $scope.timetable.tuesday.p3.room,
            "subject": $scope.timetable.tuesday.p3.subject
          }],
        "p2": [{
            
            "teacher": $scope.timetable.tuesday.p2.teacher,
            "room": $scope.timetable.tuesday.p2.room,
            "subject": $scope.timetable.tuesday.p2.subject
          }],
        "p1": [
          {
            
            "teacher": $scope.timetable.tuesday.p1.teacher,
            "room": $scope.timetable.tuesday.p1.room,
            "subject": $scope.timetable.tuesday.p1.subject
          }
        ]
      }],
    "monday": [
      {
        "p7": [{
            
            "teacher": $scope.timetable.monday.p7.teacher,
            "room": $scope.timetable.monday.p7.room,
            "subject": $scope.timetable.monday.p7.subject
          }],
        "p6": [{
            
            "teacher": $scope.timetable.monday.p6.teacher,
            "room": $scope.timetable.monday.p6.room,
            "subject": $scope.timetable.monday.p6.subject
          }],
        "p5": [{
            
            "teacher": $scope.timetable.monday.p5.teacher,
            "room": $scope.timetable.monday.p5.room,
            "subject": $scope.timetable.monday.p5.subject
          }],
        "p4": [{
            
            "teacher": $scope.timetable.monday.p4.teacher,
            "room": $scope.timetable.monday.p4.room,
            "subject": $scope.timetable.monday.p4.subject
          }],
        "p3": [{
            
            "teacher": $scope.timetable.monday.p3.teacher,
            "room": $scope.timetable.monday.p3.room,
            "subject": $scope.timetable.monday.p3.subject
          }],
        "p2": [{
            
            "teacher": $scope.timetable.monday.p2.teacher,
            "room": $scope.timetable.monday.p2.room,
            "subject": $scope.timetable.monday.p2.subject
          }],
        "p1": [
          {
            
            "teacher": $scope.timetable.monday.p1.teacher,
            "room": $scope.timetable.monday.p1.room,
            "subject": $scope.timetable.monday.p1.subject
          }
        ]
      }
    ]
  },{
        headers: { 'Content-Type': 'application/json'}
    }).success(function(data, status, headers, config) {
	              alert("Success!")
	             }).error(function(data, status, headers, config) {
	               alert("Error");
	            });
	      
	            $scope.timetableForm.$setPristine();
	        };
      }])
  .controller('announcementController', ['$scope', '$http', function($scope, $http) {
    $scope.announcement={
      name:'',
      sem:'',
      group:'',
      message:''
    };
    $scope.sendAnnouncement = function () {


            $http.post('http://localhost:3000/announcement', {
              "name":$scope.announcement.name,
              "sem":$scope.announcement.sem,
              "group":$scope.announcement.group,
              "message":$scope.announcement.message
            },{
            headers: { 'Content-Type': 'application/json'}
        }).success(function(data, status, headers, config) {
                    alert("Success!")
                   }).error(function(data, status, headers, config) {
                     alert("Error");
                  });
              };
  }])
;