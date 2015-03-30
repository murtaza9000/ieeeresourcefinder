angular.module('starter.services', ['ngResource'])

.factory('Resource', function ($resource) {
    return {
	    query: function() {
	      return chats;
	    },
	    remove: function(chat) {
	      chats.splice(chats.indexOf(chat), 1);
	    },
	    get: function(sessionId) {
	    	sessionId = sessionId.sessionId;
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(sessionId)) {
					return chats[i];
				}
			}
			return null;
	    }
	};
});

///// Data
var categories = [
	{
		id = 0,
		name: "Calendar",
		sub_categories: [1,2]
	},
	{
		id = 1,
		name: "Tafreeh",
		sub_categories: []
	}
]

var questions = [
	{
		id = 0,
		name = "Who are you?",
		sub_questions: [1,2]
	}
]