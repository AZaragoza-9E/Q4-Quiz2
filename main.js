function gradingScience() {
	var Sciencegrade = document.getElementById('Science').value;
	
	if (Sciencegrade >= 94 && Sciencegrade <= 100) {
		document.getElementById('displayScience').innerHTML = 'Excellent';
	}
		else if (Sciencegrade >= 87 && Sciencegrade <= 93.99) {
			document.getElementById('displayScience').innerHTML = 'Above Standard';
		}
		else if (Sciencegrade >= 80 && Sciencegrade <= 86.99) {
			document.getElementById('displayScience').innerHTML = 'Standard';
		}
		else if (Sciencegrade >= 75 && Sciencegrade <= 79.99) {
			document.getElementById('displayScience').innerHTML = 'Needs Improvement';
		}
		else if (Sciencegrade >= 70 && Sgrade <= 74.99) {
			document.getElementById('displayScience').innerHTML = 'Poor';
		}
		else if (Sciencegrade <= 0) {
			document.getElementById('displayScience').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displayScience').innerHTML = 'Failed';
		}
}


function gradingEnglish() {
	var Englishgrade = document.getElementById('English').value;
	
	if (Englishgrade >= 94 && Englishgrade <= 100) {
		document.getElementById('displayEnglish').innerHTML = 'Excellent';
	}
		else if (Englishgrade >= 87 && Englishgrade <= 93.99) {
			document.getElementById('displayEnglish').innerHTML = 'Above Standard';
		}
		else if (Englishgrade >= 80 && Englishgrade <= 86.99) {
			document.getElementById('displayEnglish').innerHTML = 'Standard';
		}
		else if (Englishgrade >= 75 && Englishgrade <= 79.99) {
			document.getElementById('displayEnglish').innerHTML = 'Needs Improvement';
		}
		else if (Englishgrade >= 70 && Englishgrade <= 74.99) {
			document.getElementById('displayEnglish').innerHTML = 'Poor';
		}
		else if (Englishgrade <= 0) {
			document.getElementById('displayEnglish').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displayEnglish').innerHTML = 'Failed';
		}
}


function gradingMath() {
	var Mathgrade = document.getElementById('Math').value;
	
	if (Mathgrade >= 94 && Mathgrade <= 100) {
		document.getElementById('displayMath').innerHTML = 'Excellent';
	}
		else if (SSgrade >= 87 && Mathgrade <= 93.99) {
			document.getElementById('displayMath').innerHTML = 'Above Standard';
		}
		else if (SSgrade >= 80 && Mathgrade <= 86.99) {
			document.getElementById('displayMath').innerHTML = 'Standard';
		}
		else if (SSgrade >= 75 && Mathgrade <= 79.99) {
			document.getElementById('displayMath').innerHTML = 'Needs Improvement';
		}
		else if (SSgrade >= 70 && Mathgrade <= 74.99) {
			document.getElementById('displayMath').innerHTML = 'Poor';
		}
		else if (SSgrade <= 0) {
			document.getElementById('displayMath').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displayMath').innerHTML = 'Failed';
		}
}