import React from 'react';
import { Component } from 'react';

/**
 * Creates a running, analog clock
 * 
 * @className = class names to add to root SVG element
 * @height = height of the SVG element (default = 400)
 * @width = width of the SVG element (default = 400)
 **/
export default class Clock extends React.Component {
    pointToString(point) {
        return (point.x + "," + point.y);
    }

    formatPoints(p1, p2) {
        return (this.pointToString(p1) + " " + this.pointToString(p2));
    }
    
    render() {
        //Allow classes to be passed in to Component
        var className = "clock ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        //Setup Height & Width
        var height = 400;
        if (this.props.height !== undefined) {
            height = this.props.height;
        }

        var width = 400;
        if (this.props.width !== undefined) {
            width = this.props.width;
        }

        //Setup image values
        var cx = width / 2;
        var cy = height / 2;
        var r = Math.min(cx, cy) * .8;
        var origin = {
            x: cx,
            y: cy
        };

        //Calculate Clock Positions
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes() + second / 60;
        var hour = (date.getHours() % 12) + minute / 60;

        //Calculate Hour Hand
        var hourA = Math.radians(hour * 30 - 90);
        var hourPoint = Math.pointOnCircle(cx, cy, r * .6, hourA);
        var hourPoints = this.formatPoints(origin, hourPoint); 

        //Calculate Minutes Hand
        var minuteA = Math.radians(minute * 6 - 90);
        var minutePoint = Math.pointOnCircle(cx, cy, r * .8, minuteA);
        var minutePoints = this.formatPoints(origin, minutePoint);

        //Calculate Seconds Hand
        var secondA = Math.radians(second * 6 - 90);
        var secondPoint = Math.pointOnCircle(cx, cy, r * .85, secondA);
        var secondPoints = this.formatPoints(origin, secondPoint);

        return (
            <svg className={className} width={width} height={height}>
                <circle className="clock__face"
                    cx={cx}
                    cy={cy}
                    r={r} />

                {/* Second Hand */}
                <polyline className="clock__second-hand"
                    points={secondPoints} />

                {/* Hour Hand */}
                <polyline className="clock__hour-hand"
                    points={hourPoints} />
                
                {/* Minute Hand */}
                <polyline className="clock__minute-hand"
                    points={minutePoints} />
            </svg>
        );
    }
}