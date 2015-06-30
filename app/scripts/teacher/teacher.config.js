(function() {
  'use strict';
  
  angular
    .module('educationSystemApp.teacher')
    .config(configure);
  
  function configure($stateProvider) {
    $stateProvider
      .state('teachersDashboard', {
        url: '/teachers-dashboard/:view/:courseId',
        controller: 'teacherDashboardCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/teacher/teacher-dashboard.html'
      })
      .state('teachersDashboard.statistics', {
        url: '/statistics/:courseId',
        controller: 'courseStatisticsCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/teacher/teacher-course-statistics.html'
      })
      .state('teachersDashboard.students', {
        url: '/students/:courseId',
        controller: 'studentsListCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/teacher/teacher-student-list.html'
      })
      .state('teachersDashboard.students.statistics', {
        url: '/students/:courseId/:studentId',
        controller: 'studentStatisticsCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/teacher/teacher-student-statistics.html'
      });
  };
})();
