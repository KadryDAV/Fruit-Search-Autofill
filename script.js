const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to search for fruits based on the input string
function search(str) {
	let results = [];
	results = fruit.filter(function(fruit) {
		return fruit.toLowerCase().includes(str.toLowerCase());
	});

	return results;
}

// Event handler for the search input
function searchHandler(e) {
	let inputVal = e.target.value;
	let results = search(inputVal);
	showSuggestions(results);
}

// Function to display the suggestions
function showSuggestions(results) {
	// Clear the suggestions list
	suggestions.innerHTML = '';

	// For each result, create a new list item and append it to the suggestions list
	results.forEach(function(result) {
		let li = document.createElement('li');
		li.textContent = result;
		suggestions.appendChild(li);
	});
}

// Event handler for selecting a suggestion
function useSuggestion(event) {
	// Check if the clicked element is a list item
	if (event.target.tagName === 'LI') {
		// Set the value of the search input to the text of the clicked suggestion
		input.value = event.target.textContent;
	}
}

// Event handler for highlighting suggestions on hover
function highlightSuggestion(e) {
	// Check if the hovered element is a list item
	if (e.target.tagName === 'LI') {
		// Remove the highlight from suggestions
		const allSuggestions = suggestions.querySelectorAll('li');
		allSuggestions.forEach(function(suggestion) {
			suggestion.classList.remove('highlight');
		});

		// Add highlight to suggestion
		e.target.classList.add('highlight');
	}
}

// Add event listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);