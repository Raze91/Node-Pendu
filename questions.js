module.exports = [
    {
    type: 'list',
        name: 'question_1',
        message: 'Choisissez la longueur du mot.',
        choices: [
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
        ]
    },
    {
        type: 'input',
        name: 'question_2',
        message: 'Quelle lettre voulez-vous tester ?',
    },
]