/*!
 * Timeline version 1.0
 * Copyright (c) Matsukaze. All rights reserved.
 * @version 1.0
 * @author mach3
 * @require jQuery 1.4 or later
 */

/**
 * Create timeline instance for animation
 * @class
 * @param {option} option Configuration options 
 * @require jQuery 1.4 or later
 * @example var tl = new Timline(60);
 */
var Timeline = function( option  ){
	this.config( option );
};
Timeline.prototype = {
	EVENT_ENTER_FRAME : "enterFrame",

	option:{
		fps:30
	},
	tid:null,
	active:false,
	
	/**
	 * Configuration settings
	 * @param {option} option Configuration options
	 * @return {object} Timeline object
	 */
	config:function( option ){
		if( isNaN( option ) ){
			this.option = $.extend( {}, this.option, option );
		} else {
			this.option.fps = option;
		}
		return this;
	},
	/**
	 * Start playing timeline
	 * @return {object} Timeline object
	 */
	start:function(){
		this.active = true;
		this._enterFrame();
		return this;
	},
	_enterFrame:function(){
		if( this.active ){
			$(this).trigger( this.EVENT_ENTER_FRAME );
			this.tid = setTimeout(
				$.proxy( this._enterFrame, this ),
				Math.floor( 1000 / this.option.fps )
			);
		}
	},
	/**
	 * Stop playing timeline
	 * @return {object} Timeline object
	 */
	stop:function(){
		this.active = false;
		clearTimeout( this.tid );
		return this;
	},
	/**
	 * Add event listener to timeline instance ( wrapper of jQuery.bind )
	 * @param {string} name Event name
	 * @param {function} func Function to add
	 * @return {object} Timeline object
	 */
	bind:function( name, func ){
		$(this).bind( name, func );
		return this;
	},
	/**
	 * Remove event listener from timline instance ( wrapper of jQuery.unbind )
	 * @param {string} name Event name
	 * @param {function} func Function to remove
	 * @return {object} Timeline object
	 */
	unbind:function( name, func ){
		$(this).unbind( name, func );
		return this;
	}
};
