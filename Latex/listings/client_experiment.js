// Cloak configurations
var configCustom = {
	messages: { // Messages from server
		choose: function() { $('.game').removeClass('hide').show(); },
		wait: function() { $('.wait').removeClass('hide').show(); },
		split: function(msg) { // The round ended
			info = msg.split(';'); // info[0] is what user choose
			$('.game').hide();
			$('.wait').hide();
			$('.result').removeClass('hide').show();
			if(info[0] == "undefined") { // User did not choose the split
				$('.you strong').text(100-Number(info[1]));
				$('.other strong').text(info[1]);
			} else { // User choose the split
				$('.you strong').text(info[1]);
				$('.other strong').text(100-Number(info[1]));
			}
		},
		payment: function(amount) {
			$('.earnings strong').text("DKK "+amount);
			if(amount == "0") {
				$('.earnings span').hide();
				$('.payment').hide();
				$('.nooption').removeClass('hide').show();
			}
		}
	}
};

// Merge basic config for cree with custom config need for specefic experiment.
config = extend(configBasic, configCustom);
cloak.configure(config);	
$(document).ready(function(event) { 
	cloak.run('http://'+location.hostname+':8090');

// Events and actions
	$('#container').on('click', '.next', function(e) {
	    next();
		return false;
	});
	$('#container').on('submit', '#input-form', function(){
		var amount = Number($('#slider input').val());
		cloak.message('split', amount);
		return false;
	});
	$('#container').on('click', 'form .payment .btn', function () {
		$(this).button('complete') // button text will be "finished!"
		$('fieldset').hide(); // hide all others and show corresponding form
		$('fieldset.'+$('input',this).attr('id')).removeClass('hide').show();
	});
});