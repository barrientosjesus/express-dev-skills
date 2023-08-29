const skills = [
    {
        id: 1,
        name: 'HTML',
        hasSkill: true
    },
    {
        id: 2,
        name: 'CSS',
        hasSkill: true
    },
    {
        id: 3,
        name: 'JavaScript',
        hasSkill: true
    },
    {
        id: 4,
        name: 'TypeScript',
        hasSkill: false
    },
    {
        id: 5,
        name: 'GO',
        hasSkill: false
    },
    {
        id: 6,
        name: 'Ruby',
        hasSkill: true
    }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}