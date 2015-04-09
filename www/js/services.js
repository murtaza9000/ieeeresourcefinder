angular.module('starter.services', ['ngResource'])

.factory('Resource', function ($resource) {
    return {
	    query: function() {
	      return resources;
	    },

	    allResources: function(){
	    	var result = [];
			angular.forEach(categories, function(value, key) {
				if (value.sub_categories.length === 0){
					this.push(value);	
				}
			  	
			}, result);

			angular.forEach(wizard, function(value, key) {
				if (value.answers.length === 0){
					if (isDuplicate(result, value) === false){
						this.push(value);
					}
				}
			}, result);

	    	return result;
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
					if (value.sub_categories){
						for (var i = 0; i < value.sub_categories.length; i++){
							this.push(value.sub_categories[i]);
						}
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
		answers: [30,33,34,43,55,58],
		level: 0
	},
	{
		id: 1,
		name: "I am a Branch Officer",
		answers: [24,2,4,5,6,7,8,9,19],
		level: 0
	},
	{
		id: 24,
		name: "I want to do reporting ",
		link:"http://sites.ieee.org/files/2014/06/ieee-wp-theme-documentation20140516.pdf ",
		answers: [25,26]
	},
	{
		id: 25,
		name: " Are you looking for SB reporting ",
		link:"https://officers.vtools.ieee.org ",
		answers: []
	},
	{
		id: 26,
		name: "Are you looking officers reporting ",
		link:"https://sbr.vtools.ieee.org ",
		answers: []
	},
	{
		id: 2,
		name: "I am looking for design resources",
		answers: [3]
	},
	{
		id: 3,
		name: "I want to design a template?",
		link:"",
		answers: [10,14,15]
	},
	{
		id: 10,
		name: "You want visual guidance?",
		link:"",
		answers: [11,12,13]
	},
	{
		id: 11,
		name: "Visual identity guidelines quick reference guide",
		link:"http://www.ieee.org/documents/ieee_quick_reference_guide.pdf",
		answers: []
	},
	{
		id: 12,
		name: "Visual identity guidelines",
		link:"http://www.ieee.org/documents/ieee_visual_guidelines.pdf",
		answers: []
	},

	{
		id: 13,
		name: "Tagline Videos",
		link:"http://www.ieee.org/about/toolkit/brand/videos.html",
		answers: []
	},
	{
		id: 14,
		name: "Power Point template",
		link:"http://www.ieee.org/documents/ieee_powerpoint_template.zip",
		answers: [],

	},
	{
		id: 15,
		name: "All other templates",
		link:"http://www.ieee.org/about/toolkit/tools/index.html",
		answers: []
	},
	{
		id: 4,
		name: "I am looking for MemberShip Development",
		answers: [16,17,18]
	},
	{
		id: 16,
		name: "You want MD Officer Training",
		link:"http://www.ieee.org/secure/documents/2013_membership_volunteer_training.ppt",
		answers: []
	},
	{
		id: 17,
		name: "Recuitment Best practice",
		link:"http://www.ieee.org/about/volunteers/membership_development/recruit_bestpractices.html",
		answers: []
	},
	{
		id: 18,
		name: "Retention Best practice",
		link:"http://www.ieee.org/about/volunteers/membership_development/retention_bestpractices.html",
		answers: []
	},
	{
		id: 5,
		name: "I want to know IEEE Student Branches by Region",
		link:"http://www.ieee.org/membership_services/membership/students/branches/DF_IEEE_MIG_MCT_70595",
		answers: []
	},
	{
		id: 6,
		name: "Applying and information for S-PAC",
		link:"http://www.ieeeusa.org/volunteers/committees/spac/budget_forms.html",
		answers: []
	},
	{
		id: 7,
		name: "IEEE Member-Get-a-Member (MGM) ",
		link:"http://www.ieee.org/membership_services/membership/join/mgm.html",
		answers: []
	},
	{
		id: 8,
		name: "My Responsibility ",
		link:"http://www.ieee.org/membership_services/membership/students/branches/officers.html",
		answers: []
	},
	{
		id: 9,
		name: "Important Dates ",
		link:"http://www.ieee.org/membership_services/membership/students/st_calendar-student_branch_development.pdf",
		answers: []
	},
	{
		id: 19,
		name: "I want website for my SB ",
	//	link:"http://www.ieee.org/membership_services/membership/students/st_calendar-student_branch_development.pdf",
		answers: [20,21,22,23]
	},
	{
		id: 20,
		name: "For webmaster ",
		link:"http://www.ieee.org/about/webteam/index.html",
		answers: []
	},
	{
		id: 21,
		name: "Free website host. ",
		link:"http://sites.ieee.org/hosting/",
		answers: []
	},
	{
		id: 22,
		name: " WordPress Editor’s guide ",
		link:"http://sites.ieee.org/files/2011/04/WordPress-Editors-Guide-WL.pdf",
		answers: []
	},
	{
		id: 23,
		name: "The IEEE Sites WordPress theme ",
		link:"http://sites.ieee.org/files/2014/06/ieee-wp-theme-documentation20140516.pdf ",
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
		name: "I am looking for technical societies",
		link :"https://www.ieee.org/membership_services/membership/societies/index.html",
		answers: [51]
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
		link: "http://careers.ieee.org",
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
		answers: [44,47,49]
	},
	{	
		id: 44,
		name: " Educational services",
		link: "http://www.ieee.org/Loginforms/msdna/login.html",
		answers: [45,46,53,54]
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
		name: "Students Webinar",
		link: "http://www.ieee.org/membership_services/membership/students/student_webinars.html",
		answers: []
	},
	{	
		id: 48,
		name: "IEEE Distinguished Lecturers Program",
		link: "http:// 	www.ieee.org/about/volunteers/tab/distinguished_lecturer_program.html",
		answers: []
	},
	{	
		id: 49,
		name: "IEEE Volunteer Training",
		link: "http://www.ieee.org/about/volunteers/training/volunteer_training_index.html",
		answers: [48,50]
	},

	{	
		id: 50,
		name: "IEEE Center for Leadership Excellence",
		link: "https://ieee-elearning.org/CLE/",
		answers: []
	},

	{	
		id: 52,
		name: "What are your interests",
		link: "https://ieee-elearning.org/CLE/",
		answers: []
	}
	,

	{	
		id: 53,
		name: "Are you looking for IEEE eLearning Library",
		link: "http://www.ieee.org/education_careers/education/elearning_library/index.html",
		answers: []
	}
	,

	{	
		id: 54,
		name: "Are you looking for online education portal",
		link: "http://ieee-elearning.org/outreach/",
		answers: []
	},

	{	
		id: 55,
		name: "I want to know what's happening in IEEE",
		//link: "https://ieee-elearning.org/CLE/",
		answers: [56,57]
	},

	{	
		id: 56,
		name: "I want to know Conferences and events",
		link: "http://www.ieee.org/conferences_events/index.html",
		answers: []
	},

	{	
		id: 57,
		name: "I want Scholarships, Grants, and Fellowships",
		link: "http://www.ieee.org/membership_services/membership/students/awards/index.html",
		answers: []
	},

	{	
		id: 58,
		name: "Do you want to be a part of WIE",
		//link: "http://www.ieee.org/membership_services/membership/students/awards/index.html",
		answers: [59,60]
	},

	{	
		id: 59,
		name: "Are you looking For WIE Resources",
		link: "http://www.ieee.org/membership_services/membership/women/women_resources.html",
		answers: []
	},

	{	
		id: 60,
		name: "Are you looking For WIE Membership servicess",
		link: "http://www.ieee.org/membership_services/membership/women/women_in_engineering.html",
		answers: []
	}
	
]
// Data
var categories = [
	{
		id: 1,
		name: "Volunteer Resources",
		level: 0,
		sub_categories: []
	},
	{
		id: 2,
		name: "Branch Officer Resources",
		level: 0,
		sub_categories: [5,6,7,8,9,10,11,12,13,14,16],
	},{
		id: 3,
		name: "IEEE YP",
		level: 0,
		sub_categories: [],
	},
	{
		id: 4,
		name: "IEEE WIE",
		level: 0,
		sub_categories: [],
	},
	{
		id: 15,
		name: "IEEE Member-Get-a-Member",
		level: 0,
		sub_categories: [],
	},
	{
		id : 5,
		name: "Website hosting Resources",
		sub_categories: [17,18,19,20],
		//level: 0
	},
	{
		id: 6,
		name: "Design Resources",
		sub_categories: [21,22,23,24,25],
		//level: 0
	},
	{
		id: 7,
		name: "Membership Development",
		sub_categories: [26,27,28],
		//level: 0
	},
	{
		id: 8,
		name: "Important Websites",
		sub_categories: [30,31,32],
		//level: 0
	}, 
	//{
	//	id: 9,
	//	name: "Membership Development",
	//	sub_categories: [],
	//	//level: 0
	//},
	{
		id: 10,
		name: "Important Dates",
		sub_categories: [43],
		//level: 0
	},
	{
		id: 11,
		name: "Student Branch awards",
		sub_categories: [],
		//level: 0
	},
	{
		id: 12,
	name: "Student Branches by Region",
		sub_categories: [],
		//level: 0
	},
	{
		id: 13,
		name: "IEEE events",
		sub_categories: [],
		//level: 0
	},
	{
		id: 14,
		name: "IEEE societies and communities",
		sub_categories: [],
		//level: 0
	},
	//{
	//	id: 16,
	//	name: "career Resources",
	//	sub_categories: [],
	//	//level: 0
	//},
	//Website resource: 5 from 17 -20
	{
		id: 17,
		name: "For webmaster ",
		link:"http://www.ieee.org/about/webteam/index.html",
		sub_categories: [],
	},
	{
		id: 18,
		name: "Free website host. ",
		link:"http://sites.ieee.org/hosting/",
		sub_categories: [],
	},
	{
		id: 19,
		name: " WordPress Editor’s guide ",
		link:"http://sites.ieee.org/files/2011/04/WordPress-Editors-Guide-WL.pdf",
		sub_categories: [],
	},
	{
		id: 20,
		name: "The IEEE Sites WordPress theme ",
		link:"http://sites.ieee.org/files/2014/06/ieee-wp-theme-documentation20140516.pdf ",
		sub_categories: [],
	},
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////design resource: 6 from 21-25
	{
		id: 21,
		name: "Visual identity guidelines quick reference guide",
		link:"http://www.ieee.org/documents/ieee_quick_reference_guide.pdf",
		sub_categories: [],
	},
	{
		id: 22,
		name: "Visual identity guidelines",
		link:"http://www.ieee.org/documents/ieee_visual_guidelines.pdf",
		sub_categories: [],
	},

	{
		id: 23,
		name: "Tagline Videos",
		link:"http://www.ieee.org/about/toolkit/brand/videos.html",
		sub_categories: [],
	},
	{
		id: 24,
		name: "Power Point template",
		link:"http://www.ieee.org/documents/ieee_powerpoint_template.zip",
		sub_categories: [],

	},
	{
		id: 25,
		name: "All other templates",
		link:"http://www.ieee.org/about/toolkit/tools/index.html",
		sub_categories: [],
	},
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////Membership reosurce: 7 from 26-28
	{
		id: 26,
		name: "MD Officer Training",
		link:"http://www.ieee.org/secure/documents/2013_membership_volunteer_training.ppt",
		sub_categories: [],
	},
	{
		id: 27,
		name: "Recuitment Best practice",
		link:"http://www.ieee.org/about/volunteers/membership_development/recruit_bestpractices.html",
		sub_categories: [],
	},
	{
		id: 28,
		name: "Retention Best practice",
		link:"http://www.ieee.org/about/volunteers/membership_development/retention_bestpractices.html",
	sub_categories: [],
	},
	{
		id: 29,
		name: "Member benefits",
		link:"http://www.ieee.org/about/volunteers/membership_development/secure/11memb_0353membershipflyer_r1.pdf",
		sub_categories: [],
	},
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////Important website reosurce: 8 from 30-32
	{
		id: 30,
		name: "IEEE TV",
		link:"https://ieeetv.ieee.org/",
		sub_categories: [],
	},
	{
		id: 31,
		name: "IEEE Xtreme",
		link:"http://www.ieee.org/membership_services/membership/students/competitions/xtreme/57664_IEEEXtreme24HourProgrammingChallenge.html",
	sub_categories: [],
	},
	{
		id: 32,
		name: "Regional Websites",
		//link:"http://www.ieee.org/membership_services/membership/students/competitions/xtreme/57664_IEEEXtreme24HourProgrammingChallenge.html",
		sub_categories: [33,34,35,36,37,38,39,40,41,42],
	},
	{
		id: 33,
		name: "Region 1 (Northeastern U.S.) ",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_1.html",
		sub_categories: [],
	},
	
	{
		id: 34,
		name: " Region 2 (Eastern U.S.)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_2.html",
		sub_categories: [],
	},
	{
		id: 35,
		name: " Region 3 (Southern U.S)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_3.html",
		sub_categories: [],
	},
	{
		id: 36,
		name: " Region 4 (Central U.S.)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_4.html",
		sub_categories: [],
	},
	{
		id: 37,
		name: "Region 5 (Southwestern U.S.)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_5.html",
	sub_categories: [],
	},
	{
		id: 38,
		name: " Region 6 (Western U.S.)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_6.html",
		sub_categories: [],
	},
	{
		id: 39,
		name: " Region 7 (Canada)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_7.html",
	sub_categories: [],
	},
	{
		id: 40,
		name: "Region 8 (Africa, Europe, Middle East)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_8.html",
	sub_categories: [],
	},
	{
		id: 41,
		name: " Region 9 (Latin America)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_9.html",
		sub_categories: [],
	},
	{
		id: 42,
		name: "IEEE Region 10 (Asia and Pacific)",
		link:"https://www.ieee.org/societies_communities/geo_activities/regional_list_region_10.html",
		sub_categories: [],
	},
	////////////////////////////////
	///////////Important Dates 10 43-
	{
		id: 43,
		name: "Important Dates",
		link :"http://www.ieee.org/membership_services/membership/students/st_calendar-student_branch_development.pdf",
		sub_categories: [],
		//level: 0
	},
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

function isDuplicate(array, elem){
	for (var i = 0; i < array.length; i++){
		if (array[i].link === elem.link){
			return true;
		}
	}
}