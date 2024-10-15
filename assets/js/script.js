function showPersonality() {
    document.getElementById('animals').classList.remove('active');
    document.getElementById('personality').classList.add('active');
}

function showAnimals() {
    document.getElementById('personality').classList.remove('active');
    document.getElementById('animals').classList.add('active');
}

function getName() {
    document.getElementById('personality').classList.remove('active');
    
    const names = ['Charlie', 'Michael', 'Khadijih', 'Erin', 'Mati', 'Zippy', 'Dash', 'Snuggles', 'Shadow', 'Snugs', 'Dozer', 'Echo', 'Gizmo', 'Nibbles', 'Breeze', 'Sonny', 'Puff', ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    storedName = randomName;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your pet's new name is ${randomName}!`;    
    resultDiv.style.display = 'block';
    document.getElementById('keepNameBtn').classList.add('active');
}

document.getElementById('keepNameBtn').addEventListener('click', function() {
    alert(`You have kept the name: ${storedName}`);
    localStorage.setItem('savedPetName', storedName);

});
