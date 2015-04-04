angular.module('starter.services', ['ngResource'])

.factory('Resource', function ($resource) {
    return {
	    query: function() {
	      return resources;
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

// Data
var categories = [
	{
		id : 0,
		name: "Website hosting Resources",
		sub_categories: [4,5,6]
	},
	{
		id: 1,
		name: "Design Resources",
		sub_categories: []
	},
	{
		id: 2,
		name: "Template Resource",
		sub_categories: []
	},
	{
		id: 3,
		name: "Important Websites",
		sub_categories: []
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

	}
]