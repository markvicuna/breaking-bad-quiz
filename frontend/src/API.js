import { shuffleArray } from './utils';

export const fetchQuizQuestions = async () => {
    const endpoint = `https://breakingbadapi.com/api/quotes?series=Breaking+Bad`;
    const data = await (await fetch(endpoint)).json();

    const characterPhotos = await fetchCharacterPhotos();

    //Extract only characters with quotes
    const characters = data.map(item => item.author).filter((value, index, self) => self.indexOf(value) === index);

    const questions = [];

    data.forEach(item => {
        const wrongAnswers = shuffleArray(characters.filter(name => name !== item.author)).slice(0,3);
        const answerPhoto = characterPhotos.find(character => character.name === item.author).photo;
        const question = {
            question: item.quote,
            correct_answer: item.author,
            answers: shuffleArray([...wrongAnswers, item.author]),
            answer_photo: answerPhoto
        }
        questions.push(question);
    });

    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions;
}

const fetchCharacterPhotos = async () => {
    const endpoint = `https://breakingbadapi.com/api/characters?category=Breaking+Bad`;
    const data = await (await fetch(endpoint)).json();

    const characterPhotos = [];

    data.forEach(character => {
        // Quick fix for character list using fullnames while quote list uses nicknames
        let characterName = character.name;

        if (character.name === 'Henry Schrader') {
            characterName = 'Hank Schrader'
        } else if (character.name === 'Gustavo Fring') {
            characterName = 'Gus Fring'
        }

        const characterObject = {
            name: characterName,
            photo: character.img
        }
        characterPhotos.push(characterObject);
    })
    return characterPhotos;
}