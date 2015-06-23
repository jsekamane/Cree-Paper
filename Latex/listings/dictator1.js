// Configurations
global.experimentURL = ['./dictator1.json', 'utf8'];
global.clientPort = 8080;
global.serverPort = 8090;
global.autoCreateRooms = false;
global.autoJoinLobby = true;
global.totalMembers = 2;
global.membersPerRoom = 2;
global.requireUniqueIP = false;
global.storeMessage = []; // empty array to log all messages from users.
// node.js required modules
var cree = require('cree');
	
// Cloak configurations
var configCustom = {
	port: serverPort, minRoomMembers: membersPerRoom, defaultRoomSize: membersPerRoom, autoCreateRooms: autoCreateRooms, autoJoinLobby: autoJoinLobby,
	messages: { // Messages from users
		split: function(amount, user) { // User sends split-message and amount.
			storeMessage.push(["split", user.id, amount, cree.timeGlobal.getValue()]);
			// Server-side validation of split
			// Only the first user is dictator. Check that split is between 0-100.
			if(user.name == 1 && Number(amount) >= 0 && Number(amount) <= 100) {
				// Save amount in user's data. Then message all users the result
				user.data.split = amount;
				room = user.getRoom();
				for(var key in room.getMembers()) {
					var user = cree.cloak.getUser(room.getMembers()[key].id);
					// user.message("split", user's split ; split);
					user.message("split", user.data.split+";"+amount);
					var profit = (user.data.split == amount) ? amount : 100-amount; 
					// Push profit to user's profit array.
					(user.data.profit = user.data.profit||[]).push(profit); 
				}
			}
		}	
	}
}
// Merge basic config for cree with custom config need for specefic experiment.
config = cree.extend(cree.configBasic, configCustom);
cree.cloak.configure(config);
cree.cloak.run();
cree.timeGlobal.start(); // Start the global timer
cree.connect().use(cree.connect.static('./client')).listen(clientPort);
	
// Server-side scripts
global.dictator = function(stage, room){
	// There are only two subjects. The first subject is always the dictator.
	for(var key in room.getMembers()) {
		var user = cree.cloak.getUser(room.getMembers()[key].id);
		if(key == 0) user.message("choose"); // Tell user to split
		else user.message("wait"); // Tell user to wait for split
	}
}
global.payment = function(user){
	// Calculate payment for each user. Sum profit from each round
	var sum = user.data.profit.reduce(function(pv, cv) { return pv + cv; }, 0);
	user.message("payment", sum);
}