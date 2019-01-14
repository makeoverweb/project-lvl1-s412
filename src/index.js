import readlineSync from 'readline-sync';

export const actual = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hellow ' + name + '!');
}
