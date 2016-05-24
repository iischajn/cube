var myApp = new Framework7();
var $$ = Dom7;

// Add view

var tool_view = myApp.addView('#tool_view', {
    dynamicNavbar: true
});
var collect_view = myApp.addView('#collect_view', {
    dynamicNavbar: true
});
var index_view = myApp.addView('#index_view', {
    dynamicNavbar: true
});
var project_view = myApp.addView('#project_view', {
    dynamicNavbar: true
});
var me_view = myApp.addView('#me_view', {
    dynamicNavbar: true
});



var isInit = false;

$$('#me_view').on('show', function(e){
	if(!isInit){
		isInit = true;

		var myChart = echarts.init($$('#echarts')[0]);

		var option = {
		    radar: {
		        indicator: [
		           { name: '科技', max: 100},
		           { name: '自然', max: 100},
		           { name: '经济', max: 100},
		           { name: '娱乐', max: 100},
		           { name: '文艺', max: 100},
		           { name: '教育', max: 100}
		        ]
		    },
		    series: [{
		        type: 'radar',
		        areaStyle: {normal: {}},
		        data : [
		            {
		                value : [75, 90, 50, 20, 50, 40],
		                name : '2015-06'
		            }
		        ]
		    }]
		};

		myChart.setOption(option);
	}
})




// $$(document).on('pageReinit', function (e) {
// 	console.log(e);
//   // Do something here when page loaded and initialized
  
// })
 
// // Option 2. Using live 'pageInit' event handlers for each page (not recommended)
// $$(document).on('pageReinit', '.page[data-page="me"]', function (e) {
// 	console.log(e);
//   // Do something here when page with data-page="about" attribute loaded and initialized
// })      


// myApp.onPageInit('me', function (page) {
// 	console.log(page);
	
// });

// // In page events:
// $$(document).on('pageInit', function (e) {
// 	console.log(e);
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
// })

// $$(document).on('pageBeforeAnimation', function (e) {
// 	console.log(e);
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
// })
// $$(document).on('pageAfterAnimation', function (e) {
// 	console.log(e);
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
// })
// $$(document).on('pageBack', function (e) {
// 	console.log(e);
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
// })

