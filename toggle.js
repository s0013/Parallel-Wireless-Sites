function toggleVisibility(id) {
    var elements = document.querySelectorAll('.hidden');
    elements.forEach(function(element) {
        if (element.id !== id && !element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    });

    var targetElement = document.getElementById(id);
    targetElement.classList.toggle('hidden');
}
