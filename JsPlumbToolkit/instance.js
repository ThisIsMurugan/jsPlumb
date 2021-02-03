// create a new instance of the Toolkit by calling the newInstance method:
var toolKit = jsPlumbToolkit.newInstance();

//ready function is invoked when the DOM is loaded successfully.
jsPlumbToolkit.ready(function () {
    console.log("wow ready function invoked Get ready to play with jsPlumb toolkit edition!!!!!");
});

/*
---------------------------------------
Loading Data
---------------------------------------
*/
var data = {
    "nodes": [
        { "id": "sourceElement", "name": "fooName" },
        { "id": "targetElement", "name": "barName" }
    ],
    "edges": [
        { "source": "sourceElement", "target": "targetElement" }
    ]
};

//1-Load data during the constructor
var instance = jsPlumbToolkit.newInstance({
    data: data
});

//2-Load the data using load()
toolKit.load({
    data: {
        "nodes": [
            { "id": "sourceElement", "name": "fooName" },
            { "id": "targetElement", "name": "barName" }
        ],
        "edges": [
            {
                "source": "sourceElement", "target": "targetElement"
            }
        ]
    }
});

