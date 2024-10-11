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
    
    const names = ['Charlie', 'Michael', 'Khadijih', 'Erin', 'Mati'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your pet's new name is ${randomName}!`;
    resultDiv.style.display = 'block';
}