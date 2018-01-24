$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'Prashant', weight: 40},
				{word: 'Sandeep', weight: 39},
				{word: 'Ajinkya', weight: 11, color: 'green'},
				{word: 'Rishi', weight: 27},
				{word: 'Kuldeep', weight: 36},
				{word: 'Vivek', weight: 39},
				{word: 'Saheer', weight: 12, color: 'green'},
				{word: 'Lohit', weight: 27},
				{word: 'Anirudh', weight: 36},
				{word: 'Raj', weight: 22}
				       		        
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
