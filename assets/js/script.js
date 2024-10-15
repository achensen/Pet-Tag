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
    document.getElementById('keepNameBtn').classList.remove('hidden');
    document.getElementById('home').classList.remove('hidden');
}

document.getElementById('keepNameBtn').addEventListener('click', function() {
    alert(`You saved the name ${storedName}!`);
    localStorage.setItem('savedPetName', storedName);

});

function goHome() {
    location.reload()
}