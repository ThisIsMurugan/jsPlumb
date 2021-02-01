//It is recommended to use separate instances of jsPlumb. 
//version 4.x is released there will no longer be an instance of jsPlumb available on the window.
var firstInstance = jsPlumb.getInstance();

firstInstance.importDefaults({
    Connector: ["Bezier", { curviness: 350 }],
    Anchors: ["Center", "RightMiddle"]
});

firstInstance.connect({
    source: "sourceElement",
    target: "targetElement"
});

//Another Instance with defaults object
var secondInstance = jsPlumb.getInstance({
    PaintStyle: {
        strokeWidth: "6",
        stroke: "#567567",
        outlineWidth: 1,        
        outlineStroke: "black",
    },
    Connector: ["Bezier", { curviness: 30 }],
    Endpoint: ["Dot", { radius: 5 }],
    EndpointStyle: { fill: "#567567" },
    Anchor: [0.5, 0.5, 1, 1],
});

secondInstance.connect({
    source: "defaultESource",
    target: "defaultETarget"
});