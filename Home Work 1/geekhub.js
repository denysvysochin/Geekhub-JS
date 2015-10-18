if (finish) {
	finish = '';
	iteration = 0;
	lastWall = '';
	lastStep = '';
} else {
	var finish;
	var iteration = 0;
	var lastWall;
	var lastStep;
}

while (finish !== "next" && iteration < 999) {
	//console.log(lastWall);
	if ((lastWall == 'south' && isFree('south')) 
			|| (lastWall == 'west'  && isFree('west')) 
			|| (lastWall == 'north' && isFree('north')) 
			|| (lastWall == 'east'  && isFree('east'))) {
		if (lastWall == 'east'  && lastStep != 'west') {
			finish = east();
			lastWall = 'south';
			lastStep = 'east';
		} else if (lastWall == 'north'  && lastStep != 'south') {
			finish = north();
			lastWall = 'east';
			lastStep = 'north';
		} else if (lastWall == 'west'  && lastStep != 'east') {
			finish = west();
			lastWall = 'north';
			lastStep = 'west';
		} else {
			finish = south();
			lastWall = 'west';
			lastStep = 'south';
		}
	} else {
		if(isFree('east') && !isFree('south') && lastStep != 'west' || ((!isFree('west') || !lastStep) && (!isFree('north') && !isFree('south')))) {
			finish = east();
			lastWall = 'south';
			lastStep = 'east';
		} else if (isFree('north') && !isFree('east') && lastStep != 'south' || ((!isFree('south') || !lastStep) && (!isFree('east') && !isFree('west')))) {
			finish = north();
			lastWall = 'east';
			lastStep = 'north';
		} else if (isFree('west') && !isFree('north') && lastStep != 'east' || ((!isFree('east') || !lastStep) && (!isFree('north') && !isFree('south')))) {
			finish = west();
			lastWall = 'north';
			lastStep = 'west';
		} else if (isFree('south') && !isFree('west') && lastStep != 'north' || ((!isFree('north') || !lastStep) && (!isFree('east') && !isFree('west')))) {
			finish = south();
			lastWall = 'west';
			lastStep = 'south';
		} 
	}
	iteration ++;
	//map();
}