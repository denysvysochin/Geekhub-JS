var lastStep;
for (var i=0; i<31; i++) {
	if (isFree("east") && lastStep != "east") {
		east();
		lastStep = "west"
	} else if (isFree("west") && lastStep != "west") {
		west();
		lastStep = "east"
	} else if (isFree("north") && lastStep != "north") {
		north();
		lastStep = "south"
	}  else {
		south();
		lastStep = "north"
	}
}