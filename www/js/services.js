angular.module('starter.services', ['ngResource'])

.factory('Resource', function ($resource) {
    return {
	    query: function() {
	      return resources;
	    },
	    queryAllCategories: function(){
	    	var result = [];
			angular.forEach(categories, function(value, key) {
			  	this.push(value);
			}, result);
	    	return result;
	    },

	    queryCategories: function(level){
	    	var result = [];
			angular.forEach(categories, function(value, key) {
				if (value.level === level){
			  		this.push(value);
				}
			}, result);
	    	return result;
	    },
	    queryWizard: function(level){
	    	var result = [];
			angular.forEach(wizard, function(value, key) {
				if (value.level === level){
			  		this.push(value);
				}
			}, result);
	    	return result;
	    },
	    getSubWizardOf: function(id){
	    	id = parseInt(id);
	    	var result = [];

	    	var subList = [];
	    	//Get Sub List
	    	angular.forEach(wizard, function(value, key) {
				if (value.id === id){
					for (var i = 0; i < value.answers.length; i++){
						this.push(value.answers[i]);
					}
				}
			}, subList);
			//

			//Get all the sub categories
			angular.forEach(wizard, function(value, key) {
				if (subList.indexOf(value.id) > -1){
					this.push(value);
				}
			  	
				
			}, result);
	    	return result;
	    },
	    getSubCategoriesOf: function(id){
	    	id = parseInt(id);
	    	var result = [];

	    	var subList = [];
	    	//Get Sub List
	    	angular.forEach(categories, function(value, key) {
				if (value.id === id){
					for (var i = 0; i < value.sub_categories.length; i++){
						this.push(value.sub_categories[i]);
					}
				}
			}, subList);
			//

			//Get all the sub categories
			angular.forEach(categories, function(value, key) {
				if (subList.indexOf(value.id) > -1){
					this.push(value);
				}
			  	
				
			}, result);
	    	return result;
	    },
	    remove: function(resource) {
	      resources.splice(resources.indexOf(resource), 1);
	    },
	    get: function(resourceId) {
	    	resourceId = resourceId.resourceId;
			for (var i = 0; i < resources.length; i++) {
				if (resources[i].id === parseInt(resourceId)) {
					return resources[i];
				}
			}
			return null;
	    }
	};
});

//
var wizard = [
	{
		id: 0,
		name: "I am a Volunteer",
		answers: [30,33,34,43],
		level: 0
	},
	{
		id: 1,
		name: "I am a Branch Officer",
		answers: [2,3,4,5,6,7,8,9],
		level: 0
	},
	{
		id: 2,
		name: "I am looking for design resources",
		answers: [3]
	},
	{
		id: 3,
		name: "I want to design a template?",
		answers: []
	},
	{
		id: 4,
		name: "I am looking for MemberShip Development",
		answers: []
	},
	{
		id: 5,
		name: "I want to know IEEE Student Branches by Region",
		answers: []
	},
	{
		id: 6,
		name: "Applying and information for S-PAC",
		answers: []
	},
	{
		id: 7,
		name: "IEEE Member-Get-a-Member (MGM) ",
		answers: []
	},
	{
		id: 8,
		name: "My Responsibility ",
		answers: []
	},
	{
		id: 9,
		name: "Important Dates ",
		answers: []
	},
	{
		id: 30,
		name: "I am looking IEEE Support Center ",
		answers: [31,32]
	},
	{	id: 31,
		name: "I want Auto Call Back ",
		answers: []
	},
	{	
		id: 32,
		name: "I want Live Chat ",
		answers: []
	},
	{	
		id: 33,
		name: "I want IEEE Distinguished Lecturers Program ",
		answers: []
	},
	{	
		id: 34,
		name: "I am looking for career resources ",
		answers: [35,37,39,41]
	},
	{	
		id: 35,
		name: "Looking for a job ",
		answers: [36]
	},
	{	
		id: 36,
		name: "IEEE Job Site ",
		link: "careers.ieee.org",
		answers: []
	},
	{	
		id: 37,
		name: "I want to create Resume ",
		answers: [38]
	},
	{	
		id: 38,
		name: "IEEE Resume Lab ",
		link: "www.ieee.org/resumelab",
		answers: []
	},
	{	
		id: 39,
		name: "I want to be a Mentor or Needed a Mentor ",
		answers: [40]
	},
	{	
		id: 40,
		name: "I want to create Resume ",
		link: "http://www.ieee.org/mentoring",
		answers: [38]
	},
	{	
		id: 41,
		name: "I need Career Guidance  ",
		answers: [42]
	},
	{	
		id: 42,
		name: "Knowledge resources Career Guidance @ The Institute",
		link: "http://theinstitute.ieee.org/career-and-education",
		answers: []
	},
		{	
		id: 43,
		name: "Looking for a education/Leadership",
		//link: "http://theinstitute.ieee.org/career-and-education",
		answers: [44,47,48]
	},
	{	
		id: 44,
		name: "Free Educational services",
		link: "http://www.ieee.org/Loginforms/msdna/login.html",
		answers: [45,46]
	},
	{	
		id: 45,
		name: "Google Apps@IEEE",
		link: "http://www.ieee.org/membership_services/membership/products/googleapps.html",
		answers: []
	},
	{	
		id: 46,
		name: "MSDN",
		link: "http://www.ieee.org/Loginforms/msdna/login.html",
		answers: []
	},
	{	
		id: 47,
		name: "IEEE Distinguished Lecturers Program",
		link: "http:// 	www.ieee.org/about/volunteers/tab/distinguished_lecturer_program.html",
		answers: []
	},
	{	
		id: 48,
		name: "IEEE Volunteer Training",
		link: "http://www.ieee.org/about/volunteers/training/volunteer_training_index.html",
		answers: []
	}

]
// Data
var categories = [
	{
		id: 6,
		name: "Volunteer Resources",
		level: 0,
		sub_categories: [0,1,2,3]
	},
	{
		id: 7,
		name: "Branch Officer Resources",
		level: 0,
	},
	{
		id : 0,
		name: "Website hosting Resources",
		sub_categories: [4,5,6],
		//level: 0
	},
	{
		id: 1,
		name: "Design Resources",
		sub_categories: [],
		//level: 0
	},
	{
		id: 2,
		name: "Template Resource",
		sub_categories: [],
		//level: 0
	},
	{
		id: 3,
		name: "Important Websites",
		sub_categories: [],
		//level: 0
	},
	{
		id: 4,
		name: "career Resources",
		sub_categories: [],
		//level: 0
	}
]

var questions = [
	{
		id: 0,
		name: "Who are you?",
		sub_questions: [1,2]
	}
]

var resources = [
	{
		id: 0,
		name: "Free website host",
		description:"xyz",
		category: 0
	},
	{
		id: 1,
		name: "Another Random Resource",
		description:"xyz",
		category: 0
	},
]