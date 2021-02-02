var connectionInstance = jsPlumb.getInstance();

//Default styles will be applied
connectionInstance.connect(
    {
        source: "someDiv",
        target: "someDiv1",
        anchors:["Right","Left"],
        endpoint:"Rectangle",
        endpointStyle:{fill:"yellow"}
    });

