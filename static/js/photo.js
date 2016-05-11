var myApp = new Framework7();
var $$ = Dom7;

// Add view

var tool_view = myApp.addView('#photo_view', {
    dynamicNavbar: true
});

(function(){
        // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = $$('#photo_list .ks-facebook-card').length;
    // Attach 'infinite' event handler
    $$('#photo_list').on('infinite', function () {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;
        // Request some file with data
        data = '<div class="card ks-facebook-card"><div class="card-content"><div class="card-content-inner"><img data-src="./static/img/11.jpg" width="100%" class="lazy-fadeIn lazy-loaded" src="./static/img/11.jpg"></div></div></div>';
        // $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
            loading = false;
            if (data === '') {
                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                myApp.detachInfiniteScroll($$('#photo_list'));
            }
            else {
                // Append loaded elements to list block
                $$('#photo_list').append(data);
                // Update last loaded index
                lastLoadedIndex = $$('#photo_list .ks-facebook-card').length;
                data = '';
            }
        // });
    });
})();