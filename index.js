const figlet = require('figlet');
const shuffle = require('lodash/shuffle');
const clear = require('clear');
const chalk = require('chalk');
const inquirer = require('inquirer');

const questions = require('./questions');

const mots = ['TANK','ABUS','STYLO','AVRIL','CHIENS','SOLEIL','ZOMBIE','POMPIER','VOYANCE','BASEBALL','CAVALIER','TURQUOISE','TROMPETTE',
'ABSOLUTION','TRANSFERTS','BIJOUTIERE','MANUFACTURE','UNILATERAUX'];

const mots4 = ['TANK','ABUS'];

const mots5 = ['STYLO','AVRIL'];

const mots6 = ['CHIENS','SOLEIL','ZOMBIE'];

const mots7 = ['POMPIER','VOYANCE'];

const mots8 = ['BASEBALL','CAVALIER'];

const mots9 = ['TURQUOISE','TROMPETTE'];

const mots10 = ['ABSOLUTION','TRANSFERTS','BIJOUTIERE'];

const mots11 = ['MANUFACTURE','UNILATERAUX'];

const Mots = shuffle(mots);

const Mots4 = shuffle(mots4);

const Mots5 = shuffle(mots5);

const Mots6 = shuffle(mots6);

const Mots7 = shuffle(mots7);

const Mots8 = shuffle(mots8);

const Mots9 = shuffle(mots9);

const Mots10 = shuffle(mots10);

const Mots11 = shuffle(mots11);
let MotATrouver= Mots[3];
const data = MotATrouver.split('');
let MotMystere = '';
const letters = [];
let essais = 5;

const App = {
    title : figlet.textSync('Node-Pendu','Ghost'),
    logTitle : function() {
        clear();
        console.log( chalk.blue(this.title));
        console.log( chalk.green('Jeu du Pendu sur Node.js\n'));
    }
}

App.logTitle()

function AskQuestion(){
    inquirer.prompt(questions).then(reponsesUtilisateur => {
        MotMystere = '';
        for(let key in reponsesUtilisateur){
            if(reponsesUtilisateur[key] === 'A'){
                letters.push('A');
            };
            if(reponsesUtilisateur[key] === 'B'){
                letters.push('B');
            };
            if(reponsesUtilisateur[key] === 'C'){
                letters.push('C');
            };
            if(reponsesUtilisateur[key] === 'D'){
                letters.push('D');
            };
            if(reponsesUtilisateur[key] === 'E'){
                letters.push('E');
            };
            if(reponsesUtilisateur[key] === 'F'){
                letters.push('F');
            };
            if(reponsesUtilisateur[key] === 'G'){
                letters.push('G');
            };
            if(reponsesUtilisateur[key] === 'H'){
                letters.push('H');
            };
            if(reponsesUtilisateur[key] === 'I'){
                letters.push('I');
            };
            if(reponsesUtilisateur[key] === 'J'){
                letters.push('J');
            };
            if(reponsesUtilisateur[key] === 'K'){
                letters.push('K');
            };
            if(reponsesUtilisateur[key] === 'L'){
                letters.push('L');
            };
            if(reponsesUtilisateur[key] === 'M'){
                letters.push('M');
            };
            if(reponsesUtilisateur[key] === 'N'){
                letters.push('N');
            };
            if(reponsesUtilisateur[key] === 'O'){
                letters.push('O');
            };
            if(reponsesUtilisateur[key] === 'P'){
                letters.push('P');
            };
            if(reponsesUtilisateur[key] === 'Q'){
                letters.push('Q');
            };
            if(reponsesUtilisateur[key] === 'R'){
                letters.push('R');
            };
            if(reponsesUtilisateur[key] === 'S'){
                letters.push('S');
            };
            if(reponsesUtilisateur[key] === 'T'){
                letters.push('T');
            };
            if(reponsesUtilisateur[key] === 'U'){
                letters.push('U');
            };
            if(reponsesUtilisateur[key] === 'V'){
                letters.push('V');
            };
            if(reponsesUtilisateur[key] === 'W'){
                letters.push('W');
            };
            if(reponsesUtilisateur[key] === 'X'){
                letters.push('X');
            };
            if(reponsesUtilisateur[key] === 'Y'){
                letters.push('Y');
            };
            if(reponsesUtilisateur[key] === 'Z'){
                letters.push('Z');
            };
            for (let j = 0; j < data.length; j++) {
                if (letters.includes(data[j]) == true) {
                MotMystere += data[j];
                } else {
                MotMystere += '-';
                }
            }

        }
        console.log('\n'+MotMystere);
        if(MotMystere === MotATrouver){
            console.log(figlet.textSync('Bravo !','Ogre'));
        } else {
            AskQuestion();
        }
        // if(essais < 1){
        // console.log(figlet.textSync('Game Over !','Ogre'));
        // }
    });
}

AskQuestion();

