/* Pie chart based on the pen by aaronlsilber (http://codepen.io/aaronlsilber/pen/IqrkL) which is based on an article by James Litten (http://html5.litten.com/graphing-data-in-the-html5-canvas-element-part-iv-simple-pie-charts/) */

/* Peak Chart Javascript
=====================================================================*/
var peakColors = ['rgb(236, 208, 120)', 'rgba(217, 91, 67, 1)', 'rgba(192, 41, 66, 1)', 'rgba(248, 120, 49, 1)', 'rgba(83, 119, 122, 1)', 'rgba(119, 146, 174, 1)'];

function drawPeakChart( canvasId ) {
    var i, start, peakPoint,
        canvas = document.getElementById( canvasId ),
        peakData = canvas.dataset.values.split(',').map( function(x){ return parseInt( x, 10 )}),
        ctx = canvas.getContext( '2d' ),
        max = Math.max.apply( Math, peakData ),
        plotBase = canvas.width / peakData.length,
        overlap = plotBase * .4;
        plotBase += canvas.width * .05;
    
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    
    for( i = 0; i < peakData.length; i++) {
        start = i === 0 ? 0 : i * plotBase - i * overlap;
        peakPoint = canvas.height - Math.round( canvas.height * ( peakData[i] / max ) );
        ctx.fillStyle = peakColors[i];
        ctx.beginPath();
        ctx.moveTo( start, canvas.height );
        ctx.lineTo( start + plotBase * .5, peakPoint );
        ctx.lineTo( start + plotBase, canvas.height );
        ctx.lineTo( start, canvas.height );
        ctx.fill();
    }
}

drawPeakChart('canPeak');

