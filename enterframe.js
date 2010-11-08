/*!
 * EnterFrame.js
 * Copyright (c) Matsukaze. All Rights Reserved.
 * @version 1.0
 * @author mach3
 * @require jQuery
 */

/**
 * Let us to add event handler to timeline
 * @class
 * @param {object} option Configuration object
 * @return {object} Enterframe object
 */
var EnterFrame = function( option ){
	this.config( option );
};
EnterFrame.prototype = {

	option:{
		fps:30
	},
	
	active:true,
	funcs:[],
	tid:null,

	/**
	 * Configure
	 * @param {object} option Configuration object
	 * @return {object} Enterframe object
	 */
	config:function( option ){
		if ( isNaN(option) ){
			this.option = $.extend( {}, this.option, option );
		} else {
			this.option.fps = option;
		}
		return this;
	},
	/**
	 * Start playing timeline
	 * @return {object} Enterframe object
	 */
	start:function(){
		this.active = true;
		this._enterFrame();
		return this;
	},
	_enterFrame:function(){
		if ( this.active ){
			$.each( this.funcs, function( i, f ){ f(); } );
			this.tid = setTimeout(
				$.proxy( this._enterFrame, this ),
				Math.floor( 1000 / this.option.fps )
			);
		}
	},
	/**
	 * Stop playing timeline
	 * @return {object} Enterframe object
	 */
	stop:function(){
		this.active = false;
		clearTimeout( this.tid );
		return this;
	},
	/**
	 * Add function
	 * @param {function} func Function to add to the list
	 * @return {object} Enterframe object
	 */
	add:function( func ){
		this.funcs.push( func );
		return this;
	},
	/**
	 * Remove function
	 * @param {function} func Function to remove from the list
	 * @return {object} Enterframe object
	 */
	remove:function( func ){
		this.funcs = $.grep( this.funcs, function( f, i ){
			return ( func !== f );
		} );
		return this;
	}
};

