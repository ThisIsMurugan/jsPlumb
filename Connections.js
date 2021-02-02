var connectionInstance = jsPlumb.getInstance();

//Default styles will be applied
connectionInstance.connect(
    {
        source: "someDiv",
        target: "someDiv1"        
    });

    //Added anchors, endpoint with styles.    
connectionInstance.connect(
    {
        source: "someDiv",
        target: "someDiv1",
        anchors:["Right","Left"],
        endpoint:"Rectangle",
        endpointStyle:{fill:"yellow"}

    });

//Common styles used across the connection
var commonStyle  = {
    anchors:["Left","Right"],
    endpoints:["Dot","Blank"]
};

connectionInstance.connect({
    source:"div1",
    target:"div2",    
  detachable:false
},commonStyle);

connectionInstance.connect({
    source:"div3",
    target:"div4"
},commonStyle);