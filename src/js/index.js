import '../css/style.css';
import $ from 'jquery';

var phrases = [
	[ "Dead horse... Hot chick...", "LIVE DICK" ],
	[ "If the horse is dead, the dick must be too...", "NOT HERE, ASSHOLE" ],
	[ "The horse died...", "But his dick would not" ],
	[ "Chicks who like it thick...", "Dead horses with LIVE DICK" ],
	[ "You're gonna need a lot of lube...", "If you wanna insert this dead horse's live tube." ],
	[ "Piece of shit bitch smokes the rock...", "Then she gets down with a dead horse's live cock." ],
	[ "You must be blowing fat lines of coke...", "If you don't wanna see a dead horse whose cock don't croke." ],
	[ "See bitches covered with oil...", "As they fuck a dead horse whose dick didn't spoil." ],
	[ "Sloppy young sluts drunk off cheap wine...", "Fuck a dim horse whose dick's still got shine." ],
	[ "These chicks are down on their luck...", "And this dead horse still wants to fuck." ],
	[ "If you're sitting at home all alone...", "Check out this dead horse who still wants to bone." ],
	[ "It might not trot, it might not buck...", "But this dead horse still wants to fuck." ],
	[ "If you want a stretched out vagina...", "Just let this dead horse sneak up behind ya." ],
	[ "These farm girls are grooving...", "With this dead horse whose dick is still moving." ],
	[ "Sweet young things are dripping with sweat...", "Bang this dried up horse whose dick's still wet." ],
	[ "A doctor would tell you that this horse is dead...", "But believe it or not, its dick still wants head." ],
	[ "Hollowed out horse corpse covered in flies...", "Gets fucked and sucked because his dick never dies." ],
	[ "Nasty young whores loaded up on crystal meth...", "Fuck this dead horse whose dick was forgotten by death." ],
	[ "Damn freaky bitches looking for money...", "Bang a bitter horse whose dick tastes like honey." ],
	[ "It's been laying in a ditch for damn near a week...", "But for some reason it's dick is still totally sleek." ],
	[ "The rest of the horse is made of dead meat...", "But its dick is alive and very, very sweet." ],
];

// start program
$(document).ready(function() {
	$('#saying').click(update_phrase).click();
});

// change the phrase in the view
function update_phrase() {

	$('#saying').append("<div style='display: hidden;'>" + random_phrase() + "</div>");

	if ($('#saying div').length > 1) {
    const first = $('#saying div:first');
    first.slideDown(250, () => { first.remove() });
		// $('#saying div:first').remove();
	}
	$('#saying div:last').show('slide', { direction: 'up' }, 250);
}

// return a random phrase
function random_phrase() {
	return phrases[ Math.floor(Math.random() * phrases.length) ].join('<br/>');
}
