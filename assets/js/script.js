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
    
    const names = ['Charlie', 'Michael', 'Khadijih', 'Erin', 'Mati', 'Zippy', 'Dash', 'Snuggles', 'Shadow', 'Snugs', 'Dozer', 'Echo', 'Gizmo', 'Nibbles', 'Breeze', 'Sonny', 'Puff', 'Aang', 'Zuko', 'Katara', 'Iroh', 'Bumi', 'Momo', 'Sokka', 'Toph', 'Appa', 'Azula'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    //if statement , if name exists in local storage call get name fuction again, else only run if "if"stsamnt is false 
    if()
    storedName = randomName;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your pet's new name is ${randomName}!`;    
    resultDiv.style.display = 'block';
    
    document.getElementById('keepNameBtn').classList.remove('hidden');
    document.getElementById('home').classList.remove('hidden');
}

document.getElementById('keepNameBtn').addEventListener('click', function() {
    alert(`You saved the name ${storedName}!`);
    let myPets = JSON.parse(localStorage.getItem('myPets')) || [];
    
    myPets.push(storedName);
    localStorage.setItem('myPets', JSON.stringify(myPets));
    
    
})

function goHome() {
    location.reload()
}

function updateAsideText(animal) {
    const asideText = document.getElementById('aside-text');
    switch(animal) {
        case 'Dog':
            asideText.textContent = "Woof! Pick a characteristic to generate a cool name for your new dog!";
            break;
        case 'Cat':
            asideText.textContent = "Meow! Let's pick a characteristic to find a perfect name for your cat!";
            break;
        case 'Bird':
            asideText.textContent = "Chirp chirp! Pick a characteristic to get a name for your bird!";
            break;
        case 'Reptile':
            asideText.textContent = "Slither in style! Pick a characteristic to generate a reptile name!";
            break;
        case 'Fish':
            asideText.textContent = "Pick a characteristic and swim through names for your new fish!";
            break;
        case 'Personality':
             asideText.textContent = "Congratulations! You can save the name or click Home to try again!";
             break;
        default:
            asideText.textContent = "Can't think of a name? Click on an animal type to begin generating a name for your new pet!";
    }
}
