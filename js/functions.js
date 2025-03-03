document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: [
            "THE CODE OF LOVE",
            "Hey rella!",
            "Do you remember our first date?",
            "// Wed, Aug 21 at 19:08",
            "Since that day a spark begun;",
            "// Your face, Your Voice, Your Words.",
            "You left an imprint on my heart.",
            "As time passed,",
            "Our bond only grew stronger.",
            "Journey from Infatuation to Love;",
            "Traveling a long and beautiful path together.",
            "All I want to say is:",
            "Pookie, I will love you forever."
        ],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    };

    var typed = new Typed("#typed", options);

	function timeElapse(date) {
		var current = new Date();
		var seconds = (current - date) / 1000; // Calculate seconds as a float
		var days = Math.floor(seconds / (3600 * 24));
		seconds = seconds % (3600 * 24);
		var hours = Math.floor(seconds / 3600);
		if (hours < 10) {
			hours = "0" + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = Math.floor(seconds % 60); // Round seconds to an integer
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
		document.getElementById("elapseClock").innerHTML = result;
	}
	
	// Set the initial date
	var together = new Date();
	together.setFullYear(2024, 8, 21);
	together.setHours(19);
	together.setMinutes(8);
	together.setSeconds(0);
	together.setMilliseconds(0);
	
	// Call the timeElapse function once when the page loads
	timeElapse(together);
	
	// Update the clock every second
	setInterval(function() {
		timeElapse(together);
	}, 1000);
	// heart class 
class Heart {
   
	constructor( x, y, color ) {
	   this.x = parseFloat( x || window.innerWidth - 50 );
	   this.y = parseFloat( y || window.innerHeight - 30 );
	   this.color = color || Math.floor( Math.random() * 360 );
	   this.phase = Math.random() * 360;
	   this.radius = Math.random() * 1;
	   this.speed = 1 + Math.random() * 2;
	   this.scale = 0.2 + Math.random() * 0.8;
	   this.grow = 0.01;
	   this.alpha = 1;
	   this.done = false;
	   
	   this.outer = document.createElement( "div" );
	   this.outer.className = "heart-outer";
	   
	   this.inner = document.createElement( "div" );
	   this.inner.className = "heart-inner";
	   this.inner.style.backgroundColor = "hsl( "+ this.color +", 50%, 50% )";
	   
	   this.outer.appendChild( this.inner ); 
	   document.body.appendChild( this.outer ); 
	   this.draw();
	}
	
	flush() {
	   if( document.body.contains( this.outer ) ) {
		  document.body.removeChild( this.outer );
	   }
	   this.outer = null; 
	   this.inner = null; 
	}
 
	draw() {
	   if( this.done ) return; 
	   this.outer.style.transform = "translateX( "+ this.x +"px ) translateY( "+ this.y +"px ) translateZ( 0 ) scale( "+ this.grow +" )";
	   this.outer.style.opacity = this.alpha; 
	}
	
	update() {
	   this.alpha = ( this.alpha > 0 ) ? ( this.alpha - 0.0015 ) : this.alpha; 
	   this.alpha = ( this.alpha < 0 ) ? 0 : this.alpha; 
	   
	   this.x += Math.cos( this.phase / 50 ) * this.radius;
	   this.y -= this.speed; 
	   
	   this.grow += ( this.scale - this.grow ) / 10;
	   this.phase += 1;
	   
	   this.done = ( this.y < -100 || this.alpha <= 0 ) ? true : false;  
	}
 }
 
 // hearts list
 let hearts = []; 
 hearts.push( new Heart() ); 
 hearts.push( new Heart() ); 
 hearts.push( new Heart() ); 
 
 // add on click 
 window.addEventListener( "click", ( e ) => {
	hearts.push( new Heart() ); 
 });
 
 // auto add on interval 
 let id = setInterval( () => {
	hearts.push( new Heart() ); 
 }, 1500 );
 
 setTimeout(function() {
   clearInterval(id);
 }, 10000);
	
 // main loop 
 function loop() {
	requestAnimationFrame( loop );
	let i; 
	
	// cleanup 
	for( i = 0; i < hearts.length; ++i ) {
	   if( hearts[i].done ) {
		  hearts[i].flush();
		  hearts.splice( i, 1 ); 
	   }
	}
	// animate 
	for( i = 0; i < hearts.length; ++i ) {
	   hearts[i].update(); 
	   hearts[i].draw(); 
	}
 }
 
 loop();
});
