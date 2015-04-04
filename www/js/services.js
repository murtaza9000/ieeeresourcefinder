angular.module('starter.services', ['ngResource'])

.factory('Resource', function ($resource) {
    return {
	    query: function() {
	      return resources;
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
		answers: [2],
		level: 0
	},
	{
		id: 1,
		name: "I am a Branch Officer",
		answers: [],
		level: 0
	},
	{
		id: 2,
		name: "I am looking for design resources",
		answers: [3],
	},
	{
		id: 3,
		name: "I want to design a template?",
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