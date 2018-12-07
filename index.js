const figlet = require('figlet');
const shuffle = require('lodash/shuffle');
const clear = require('clear');
const chalk = require('chalk');
const inquirer = require('inquirer');

const questions = require('./questions');

let MotATrouver= [];
let MotMystere = [];
let nombre = 3;

let  mots = ['TANK','ABUS','STYLO','AVRIL','CHIENS','SOLEIL','ZOMBIE','POMPIER','VOYANCE','BASEBALL','CAVALIER'
,'TURQUOISE','TROMPETTE','ABSOLUTION','TRANSFERTS','BIJOUTIERE','MANUFACTURE','UNILATERAUX'];

let Mot = shuffle(mots);

const App = {
    title : figlet.textSync('Node-Pendu','Ghost'),
    logTitle : function() {
        clear();
        console.log( chalk.blue(this.title));
        console.log( chalk.green('Jeu du Pendu sur Node.js\n'));
    }
}

App.logTitle()


MotATrouver = Mot[nombre];

console.log(MotATrouver);

let regex = MotATrouver
let tiret = '-';

MotMystere = MotATrouver.replace(regex, tiret.repeat(MotATrouver.length));

console.log(MotMystere);


inquirer.prompt(questions).then(reponsesUtilisateur => {
    
});
