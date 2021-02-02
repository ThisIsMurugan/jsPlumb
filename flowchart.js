jsPlumb.ready(function(){
    var flowChartInstance = window.jsp = jsPlumb.getInstance({
        DragOptions:{cursor:'pointer',zIndex:2000},
        ConnectionOverlays:[
            ["Arrow",{
                location:1,
                visible:true,
                width:11,
                length:11,
                id:"ARROW",
                events:{
                    click:function(){
                        alert("You clicked on the Arroww overlay")
                    }
                }
            }],
            ["Label",{
                location:0.1,
                id:"label",
                cssClass:"aLabel",
                events:{
                    tap:function(){alert("hey label");}
                }
            }]
        ],
        Container:"canvas"
    });

    var connectorPaintStyle={
        strokeWidth:2,
        stroke:"#61B7CF",
        joinstyle:"round",
        outlineStroke:"white",
        outlineWidth:2
    },
    connectorHoverStyle={
        stroeWidth:33,
    stroke:"#216477",
    outlineWidth:5,
    outlineStroke:"white"
    },
    endpointHoverStyle={
        fill:"#216477",
        stroke:"#216477"
    },
    sourceEndpoint={
        endpoint:"Dot",
        paintStyle:{
            stroke: "#7AB02C",
            fill:"transparent",
            radius:7,
            strokeWidth:1
        },
        isSource:true,
        connector:["Flowchart",{stub:[40,60],gap:10,cornerRadius:5,alwaysRespectStubs:true}],
        connectorStyle:connectorPaintStyle,
        hoverPaintStyle:endpointHoverStyle,
        connectorHoverStyle: connectorHoverStyle,
        dragOptions:{},
        overlays:[
            ["Label",{
                location:[0.5,1.5],
                label:"Drag",
                cssClass:"endpointSourceLabel",
                visible:true
            }
            ]
        ]
    },
    targetEndpoint={
        endpoint:"Dot",
        paintStyle:{fill:"#7AB02C",radius:7},
        hoverPaintStyle: endpointHoverStyle,
        maxConnections:-1,
        dropOptions:{hoverClass:"hover",activeClass:"active"},
        isTarget:true,
        overlays:[
            ["Label",{
                location:[0.5,-0.5],
                label:"Drop Here",
                cssClass:"endpointTargetLabel",
                visible:true
            }]
        ]

    },
    init = function(connection) {
        connection.getOverlay("label").setLabel(connection.sourceId.substring(15)+" - "+connection.targetId);
    };

    var _addEndpoints = function(toId,sourceAnchors,targetAnchors){
        for(var i=0;i<sourceAnchors.length;i++){
            var sourceUUID = toId+sourceAnchors[i];
            flowChartInstance.addEndpoint("flowchart"+toId,sourceEndpoint,{
                anchor:sourceAnchors[i],uuid:sourceUUID
            });
        }

        for(var j=0;j<targetAnchors.length;j++){
            var targetUUID = toId+targetAnchors[j];
            flowChartInstance.addEndpoint("flowchart"+toId,targetEndpoint,{
                anchor:targetAnchors[j],uuid:targetUUID
            });
        }

    };

    flowChartInstance.batch(function(){
        _addEndpoints("Window4",["TopCenter","BottomCenter"],["LeftMiddle","RightMiddle"]);
        _addEndpoints("Window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
        _addEndpoints("Window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
        _addEndpoints("Window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);
        _addEndpoints("WindowCutom", ["BottomCenter", "RightMiddle"], ["TopCenter", "BottomCenter"]);

        flowChartInstance.bind("connection", function (connInfo, originalEvent) {
            init(connInfo.connection);
        });
        //flowChartInstance.draggable(jsPlumb.getSelector(".flowchart-demo .window"), { grid: [20, 20] });
        jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });
        
        instance.connect({uuids: ["Window2BottomCenter", "Window3TopCenter"]});
        instance.connect({uuids: ["Window2LeftMiddle", "Window4LeftMiddle"]});
        instance.connect({uuids: ["Window4TopCenter", "Window4RightMiddle"]});
        instance.connect({uuids: ["Window3RightMiddle", "Window2RightMiddle"]});
        instance.connect({uuids: ["Window4BottomCenter", "Window1TopCenter"]});
        instance.connect({uuids: ["Window3BottomCenter", "Window1BottomCenter"] });
        //

        //
        // listen for clicks on connections, and offer to delete connections on click.
        //
        flowChartInstance.bind("click", function (conn, originalEvent) {
           if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?")) {
               flowChartInstance.deleteConnection(conn);
           }
        });

        flowChartInstance.bind("connectionDrag", function (connection) {
            console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
        });

        flowChartInstance.bind("connectionDragStop", function (connection) {
            console.log("connection " + connection.id + " was dragged");
        });

        flowChartInstance.bind("connectionMoved", function (params) {
            console.log("connection " + params.connection.id + " was moved");
        });
    });
    jsPlumb.fire("jsPlumbDemoLoaded", flowChartInstance);
});