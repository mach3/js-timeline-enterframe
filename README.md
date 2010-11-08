#Timeline / EnterFrame class


## About

These two classes have the almost same future,  
( using timeline just as a ActionScript )   
but "EnterFame" is simpler.

## Requires

- jQuery

## Usage of "Timeline"

	var tl = new Timeline( 60 ); // Argument is fps number
	tl.bind( "enterFrame", function(){
		// do something by interval
	});
	tl.start();

You can write also like this.

	var tl = new Timeline({ fps:60 }); // Arguments can be object
	tl.bind( tl.EVENT_ENTER_FRAME, function(){ // This has the constant for "enterFrame"
		// do something by interval
	});

You can use jQuery.unbind to remove event listener
	
	var func = function(){ /* do something */ }
	tl.bind( tl.EVENT_ENTER_FRAME, func ); // add
	tl.unbind( tl.EVENT_ENTER_FRAME, func ); // remove

## Usage of "EnterFrame"

	var ef = new EnterFrame( 60 ); // Argument is fps number ( this can be object )
	var hoge = function(){
		// do something by interval
	};
	ef.add( hoge ); // Add event listener function
	ef.start();
	
You can remove event listener by "remove" method
	
	ef.remove( hoge );
