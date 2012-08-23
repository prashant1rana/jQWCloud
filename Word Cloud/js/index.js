$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'Rajesh', weight: 40},{word: 'Mayank', weight: 39},{word: 'Rajni', weight: 1, color: 'green'},
				{word: 'Rahul', weight: 27},{word: 'Kuldeep', weight: 36},{word: 'Monika', weight: 25},
				{word: 'Preeti', weight: 25},{word: 'Geetanjal', weight: 34},{word: 'Manali', weight: 23},
				{word: 'Praveen', weight: 23},{word: 'Kapil', weight: 32},{word: 'Prashant', weight: 21},
				{word: 'MLA', weight: 30},{word: 'Ravi', weight: 29},{word: 'Rohit', weight: 29},
				{word: 'Parul', weight: 29},{word: 'Pummy', weight: 29},{word: 'Manjot', weight: 28},
				{word: 'Nishant', weight: 1},{word: 'Neha', weight: 27},{word: 'Megha', weight: 27},
				{word: 'Mohammad', weight: 24},{word: 'Khushboo', weight: 24},{word: 'Mayur', weight: 22},
				{word: 'AB', weight: 1}, {word: 'Gurpree', weight: 21} ,{word: 'Rajni', weight: 20},
		        {word: 'Mayank', weight: 19},{word: 'Rajesh', weight: 19},{word: 'Rahul', weight: 17},		        
				{word: 'Kuldeep', weight: 16},{word: 'Monika', weight: 15},{word: 'Preeti', weight: 15},
				{word: 'Geetanjal', weight: 14},{word: 'Manali', weight: 13},{word: 'Praveen', weight: 13},
				{word: 'Kapil', weight: 1},{word: 'Prashant', weight: 11},{word: 'MLA', weight: 10},
				{word: 'Ravi', weight: 1},{word: 'Rohit', weight: 9},{word: 'Parul', weight: 9},
				{word: 'Pummy', weight: 9},{word: 'Manjot', weight: 8},{word: 'Nishant', weight: 8},
				{word: 'Neha', weight: 1},{word: 'Megha', weight: 7},{word: 'Mohammad', weight: 4},
				{word: 'Khushboo', weight: 1},{word: 'Mayur', weight: 2},{word: 'AB', weight: 1}, 
		        {word: 'Gurpree', weight: 1}       		        
				],
		//cloud_color: 'yellow',		
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',
		word_mouseOver :function(){
		},
		word_click: function(){ 
		$(this).css("background-color","yellow");
		},		              
		beforeCloudRender: function(){
		       date1=new Date();
	 	},
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});
	
});