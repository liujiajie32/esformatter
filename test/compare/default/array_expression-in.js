[

];

[1,2,3];

[1,2,[3,4,[5,6,[7,8,9]]]];

function fn(){
    return [4,5,[6,  7 , 8 ]];
}

// issue #12
var tuples = [
    // comment test
    ["resolve", "done", "bla", "resolved"],
        ["reject", "fail", "lorem", "rejected"],
    [
["lorem", "ipsum"]
    ],
["notify", "progress", "ipsum"]
];

var x,
  y = [
    "a",
    "b",
    "c"
  ];

// rocambole issue with sparse arrays
;[,3,[,4]];

// issue #165 (ChainedMemberExpression)
[
    "grunt-contrib-concat",
    "grunt-contrib-watch",
    "grunt-contrib-jshint",
    "grunt-contrib-qunit"
].forEach(function( task ) {
    grunt.loadNpmTasks( task );
});
