// const lectures = [
//     {
//         name: 'Java',
//         start: 1,
//         end: 7
//     },
//     {
//         name: 'OOP',
//         start: 3,
//         end: 13
//     },
//     {
//         name: 'C_Programming',
//         start: 5,
//         end: 9
//     },
//     {
//         name: 'Advanced_JavaScript',
//         start: 10,
//         end: 14
//     },
// ];

// const lectures = [
//     {
//         name: 'Programming_Basics',
//         start: 3,
//         end: 5
//     },
//     {
//         name: 'PHP',
//         start: 2,
//         end: 4
//     },
//     {
//         name: 'Photoshop',
//         start: 1,
//         end: 6
//     },
// ];

const lectures = [
    {
        name: 'Advanced_CSharp',
        start: 3,
        end: 8
    },
    {
        name: 'High_Quality_Code',
        start: 7,
        end: 10
    },
    {
        name: 'Databases',
        start: 5,
        end: 12
    },
    {
        name: 'ASP_NET',
        start: 9,
        end: 14
    },
    {
        name: 'Angular_JS',
        start: 13,
        end: 15
    },
    {
        name: 'Algorithms',
        start: 15,
        end: 19
    },
    {
        name: 'Programming_Basics',
        start: 17,
        end: 20
    },
];

const pickLectures = () => {
    const schedule = [];

    lectures.sort((a, b) => a.end - b. end).forEach(lecture => {
        console.log({lecture});

        if(schedule.length == 0) {
            schedule.push(lecture);            
        } else {
            if(schedule[schedule.length - 1].end <= lecture.start) {
                schedule.push(lecture);
            }
        }
    });

    console.log(`Lectures (${schedule.length})`);

    schedule.forEach(lecture => {
        console.log(`${lecture.start}-${lecture.end} -> ${lecture.name}`);

    });
};

pickLectures();
