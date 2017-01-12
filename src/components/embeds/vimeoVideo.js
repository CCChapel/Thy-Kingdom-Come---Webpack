import React from 'react';
import { Component } from 'react';

/**
 * Embeds a Vimeo video
 * 
 * @vimeoId = id of the Vimeo video to embed
 * @className = classes to apply to iframe
 * @width = width of the iframe
 * @height = height of the iframe
 */
export default class VimeoVideo extends React.Component {
    render() {
        var src = String.format(
            "https://player.vimeo.com/video/{0}?color=28708a&title=0&byline=0&portrait=0",
            [ this.props.vimeoId ]);

        return (
            <div className="js-video [ vimeo, widescreen ]">
                <iframe src={src} 
                    className={this.props.className}
                    width={this.props.width} 
                    height={this.props.height}
                    frameborder="0" 
                    webkitallowfullscreen 
                    mozallowfullscreen 
                    allowfullscreen></iframe>
            </div>
        );
    }
}