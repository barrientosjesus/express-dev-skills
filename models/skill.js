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
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    if (skills.find(mSkill => mSkill.name === skill.name)) return;
    skill.id = Date.now() % 1000000;
    skill.hasSkill = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const retrievedSkill = skills.find(skill => skill.id === id);
    Object.assign(retrievedSkill, updatedSkill);
}