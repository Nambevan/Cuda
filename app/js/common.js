var Progress = function(opt) {
    this.option = this.extend({
        radius: 70,

        text: {
            font: '25px Arial',
            style: '#3c4761',
            alpha: 1
        },

        outSideCircle: {
            style: '#30bae7',
            alpha: 1,
            lineWidth: 10
        },
        outSideCircle_2: {
            style: '#d74680',
            alpha: 1,
            lineWidth: 10
        },
        outSideCircle_3: {
            style: '#15c7a8',
            alpha: 1,
            lineWidth: 10
        },
        outSideCircle_4: {
            style: '#eb7d4b',
            alpha: 1,
            lineWidth: 10
        },
        inSideCircle:{
            style: '#dfe8ed',
            alpha: 0.3,
            lineWidth: 10
        }
    }, opt);

    this.el = this.option.element;
    this.context = this.el.getContext('2d');
    this.elWidth = this.el.width;
    this.elHeight = this.el.height;
    this.hElWidth = this.elWidth / 2;
    this.hElHeight = this.elHeight / 2;
};

Progress.prototype = {
    constructor: Progress,

    extend: function(tar, sub) {
        for (var x in sub) {
            tar[x] = sub[x];
        }

        return tar;
    },


    _drawCircle: function(n) {
        var option = this.option,
            context = this.context,
            pi = Math.PI,
            inSideCircle = option.inSideCircle,
            outSideCircle = option.outSideCircle;

        context.beginPath();


        this.extend(context, {
            globalAlpha: inSideCircle.alpha,
            strokeStyle: inSideCircle.style,
            lineWidth: inSideCircle.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius + outSideCircle.lineWidth - inSideCircle.lineWidth, 0, pi * 2, false);


        context.stroke();

        context.beginPath();


        this.extend(context, {
            globalAlpha: outSideCircle.alpha,
            strokeStyle: outSideCircle.style,
            lineWidth: outSideCircle.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius, -(pi / 2), pi * 2 / 100 * (n - 25), false);


        context.stroke();
    },
/////////////////////
    _drawCircle_2: function(n) {
        var option = this.option,
            context = this.context,
            pi = Math.PI,
            inSideCircle = option.inSideCircle,
            outSideCircle_2 = option.outSideCircle_2;

        context.beginPath();


        this.extend(context, {
            globalAlpha: inSideCircle.alpha,
            strokeStyle: inSideCircle.style,
            lineWidth: inSideCircle.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius + outSideCircle_2.lineWidth - inSideCircle.lineWidth, 0, pi * 2, false);


        context.stroke();

        context.beginPath();


        this.extend(context, {
            globalAlpha: outSideCircle_2.alpha,
            strokeStyle: outSideCircle_2.style,
            lineWidth: outSideCircle_2.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius, -(pi / 2), pi * 2 / 100 * (n - 25), false);


        context.stroke();
    },
/////////////////////
    _drawCircle_3: function(n) {
        var option = this.option,
            context = this.context,
            pi = Math.PI,
            inSideCircle = option.inSideCircle,
            outSideCircle_3 = option.outSideCircle_3;

        context.beginPath();


        this.extend(context, {
            globalAlpha: inSideCircle.alpha,
            strokeStyle: inSideCircle.style,
            lineWidth: inSideCircle.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius + outSideCircle_3.lineWidth - inSideCircle.lineWidth, 0, pi * 2, false);


        context.stroke();

        context.beginPath();


        this.extend(context, {
            globalAlpha: outSideCircle_3.alpha,
            strokeStyle: outSideCircle_3.style,
            lineWidth: outSideCircle_3.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius, -(pi / 2), pi * 2 / 100 * (n - 25), false);


        context.stroke();
    },
    /////////////////////
    _drawCircle_4: function(n) {
        var option = this.option,
            context = this.context,
            pi = Math.PI,
            inSideCircle = option.inSideCircle,
            outSideCircle_4 = option.outSideCircle_4;

        context.beginPath();


        this.extend(context, {
            globalAlpha: inSideCircle.alpha,
            strokeStyle: inSideCircle.style,
            lineWidth: inSideCircle.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius + outSideCircle_4.lineWidth - inSideCircle.lineWidth, 0, pi * 2, false);


        context.stroke();

        context.beginPath();


        this.extend(context, {
            globalAlpha: outSideCircle_4.alpha,
            strokeStyle: outSideCircle_4.style,
            lineWidth: outSideCircle_4.lineWidth
        });


        context.arc(this.hElWidth, this.hElHeight, option.radius, -(pi / 2), pi * 2 / 100 * (n - 25), false);


        context.stroke();
    },

    _drawText: function(n) {
        var context = this.context,
            number = n + '%',
            numberWidth = 0,
            textObj = this.option.text;

        context.beginPath();

        this.extend(context, {
            font: textObj.font,
            fillStyle: textObj.style,
            globalAlpha: textObj.alpha
        });


        numberWidth = context.measureText(number).width;

        context.fillText(number, this.hElWidth - numberWidth / 2, this.hElHeight + 10 / 3)
    },

    setProgress: function(n) {

        this.context.clearRect(0, 0, this.elWidth, this.elHeight);

        this._drawCircle(n);

        this._drawText(n);
    },

    setProgress_2: function(n) {

        this.context.clearRect(0, 0, this.elWidth, this.elHeight);

        this._drawCircle_2(n);

        this._drawText(n);
    },

    setProgress_3: function(n) {

        this.context.clearRect(0, 0, this.elWidth, this.elHeight);

        this._drawCircle_3(n);

        this._drawText(n);
    },

    setProgress_4: function(n) {

        this.context.clearRect(0, 0, this.elWidth, this.elHeight);

        this._drawCircle_4(n);

        this._drawText(n);
    }
}

var progress_1 = new Progress({element: document.getElementById('canvasEl')});
var n_1 = 0;
var timer_1 = setInterval(function() {
    if (n_1++ !== 90) {
        progress_1.setProgress(n_1);
    } else {
        clearInterval(timer_1);
    }
}, 100);


var progress_2 = new Progress({element: document.getElementById('canvasEl_2')});
var n_2 = 0;
var timer_2 = setInterval(function() {
    if (n_2++ !== 75) {
        progress_2.setProgress_2(n_2);
    } else {
        clearInterval(timer_2);
    }
}, 100);

var progress_3 = new Progress({element: document.getElementById('canvasEl_3')});
var n_3 = 0;
var timer_3= setInterval(function() {
    if (n_3++ !== 70) {
        progress_3.setProgress_3(n_3);
    } else {
        clearInterval(timer_3);
    }
}, 100);

var progress_4 = new Progress({element: document.getElementById('canvasEl_4')});
var n_4 = 0;
var timer_4 = setInterval(function() {
    if (n_4++ !== 85) {
        progress_4.setProgress_4(n_4);
    } else {
        clearInterval(timer_4);
    }
}, 100);