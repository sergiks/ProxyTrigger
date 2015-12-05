var self = require('sdk/self')
	,buttons = require('sdk/ui/button/action')
	,tabs = require("sdk/tabs")
	,iconOff = {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	}
	,iconOn = {
		"16": "./icon-16on.png",
		"32": "./icon-32on.png",
		"64": "./icon-64on.png"
	}
	,service = require("sdk/preferences/service")
	,propName = "network.proxy.type"

	,button = buttons.ActionButton({
		id: "mozilla-link",
		label: "Proxy is " + (service.get(propName, 0) ? "on" : "off"),
		icon: service.get(propName, 0) ? iconOn : iconOff,
		onClick: proxyTrigger
	})
;


// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}


function proxyTrigger(state) {
	var val = service.get(propName, 0) ? 0 : 1;
	
	//console.log("Setting " + name + " to " + val);
	service.set(propName, val);
	button.icon = val ? iconOn : iconOff;
	button.label = "Proxy is " + (val ? "on" : "off");
	return val;
}

exports.dummy = dummy;
//exports.proxyTrigger = proxyTrigger;
