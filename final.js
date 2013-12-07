var form = document.querySelector('form');
			form.addEventListener('submit', function (e) {
				var errors, i, errorDiv, namePattern, numCheck, urlCheck;
				
				errors = [];
				errorDiv = document.getElementById('error');
				namePattern = /[a-z]{2}/i;
				numCheck = /^[a-zA-Z0-9 \_]{0,50}$/;
				emailCheck = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
				urlCheck = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/igm;
				phoneCheck = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
				bioCheck = /^[a-zA-Z0-9 \_]{0,140}$/;
				dobCheck = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
				dateCheck = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;

				//First and Last Name Validation
				if (namePattern.test(this.first_name.value) === false) {
					errors.push('First name must be two letters or more');
				}

				if (namePattern.test(this.last_name.value) === false) {
					errors.push('Last name must be two letters or more');
				}

				//First and Last name less than 50 characters 
				if (numCheck.test(this.first_name.value) === false) {
					errors.push('First name cannot be more than 50 characters!');
				} 

				if (numCheck.test(this.last_name.value) === false) {
					errors.push('Last name cannot be more than 50 characters!');
				} 

				//Email validation
				if (emailCheck.test(this.email.value) === false) {
					errors.push('Please enter a valid email, such as johndoe@aol.com');
				}

				//Experience valiation
				if (document.getElementById('expLev').selectedIndex === 0) {
					errors.push('Please choose an experience level');
				}
				
				//Bio validation, no html
				if (this.bio.value < 3) {
					errors.push('Please tell us more, at least 3 words!');
				}

				if (bioCheck.test(this.bio.value) === false) {
					errors.push('Sorry, fewer than 140 characters please.');
				}

				//Meal pref. validation
				if (document.querySelectorAll('[name="meal"]:checked').length === 0) {
                errors.push('You are required to eat, please select a type of meal :)');
        }  

				//Skills validation				 
				        if (document.querySelectorAll('[name=skillsC]:checked').length === 0) {
 		       errors.push('Please choose at least one skill, it is required for the conference');
			}

				//url validation
				if (urlCheck.test(this.url.value) === false) {
					errors.push('Please enter a valid url, such as http://google.com');
				}

				//Phone valid numbers 
				if (phoneCheck.test(this.mphone.value) === false) {
					errors.push('Please enter a valid number, such as 718-450-1290');
				}

				if (phoneCheck.test(this.hphone.value) === false) {
					errors.push('Please enter a valid number, such as 703-540-4109');
				}

				//Expected date validation
				if (dateCheck.test(this.date.value) === false) {
					errors.push('Please enter a date in this format: 01/02/2014');
				}

				if (dateCheck.test(this.birthday.value) === false) {
					errors.push('Please enter a date in this format: 01/02/2014');
				}
				
				//If any inputs failed prevent form submit
				if (errors.length > 0) {
					//prevent form submit
					e.preventDefault();
					
					//unhide
					errorDiv.className = '';
					
					//clear out previous errors
					errorDiv.innerHTML = errors.join('<br>');
				}
			}, false);