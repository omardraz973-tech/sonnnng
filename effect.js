document.addEventListener('DOMContentLoaded', function() {
	var searchInput = document.querySelector('.searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', function() {
			var filter = searchInput.value.toLowerCase();
			var cards = document.querySelectorAll('.artist-card');
			cards.forEach(function(card) {
				var name = card.querySelector('figcaption').textContent.toLowerCase();
				if (name.includes(filter)) {
					card.style.display = '';
				} else {
					card.style.display = 'none';
				}
			});
		});
	}
});
