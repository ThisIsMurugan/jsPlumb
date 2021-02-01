//You should not start making calls to jsPlumb until the DOM has been initialized
jsPlumb.bind("ready", function () {
    console.log('Binding code is run after the DOM is loaded');
});

//Another way of invoking the jsPlumb ready method
jsPlumb.ready(function(){
    console.log('another way of invoking the ready function after DOM is loaded');
});