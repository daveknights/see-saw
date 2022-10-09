const obj1 = document.querySelector('.object-1');
const obj2 = document.querySelector('.object-2');
const plank = document.querySelector('.plank');




const obj1Rotate = (delay, loop, degStart, degEnd) => 
    Velocity(obj1, { rotate: [degEnd, degStart] }, {queue: false, delay: delay, duration: 250, loop: loop});

const obj1Up = () => {
    Velocity(obj1, { top: ['0px', 'easeOut', '331px'], left: ['-20px', '20px']}, {delay: 900, duration: 700, complete: obj1Down});
    obj1Rotate(900, true, '-11deg', '0deg');
}

const obj1Down = () => 
    Velocity(obj1, { top: ['331px', 'easeOut', '0px'], left: ['20px', '-20px']}, {duration: 700, complete: obj1Up});

const obj2Down = () => 
    Velocity(obj2, { top: ['0px', 'easeOut', '-329px'], right: ['20px', '80px']}, {duration: 700, complete: obj2Up});

const obj2Up = () => {
    Velocity(obj2, { top: ['-329px', 'easeOut', '0px'], right: ['80px', '20px']}, {delay: 900, duration: 700, complete: obj2Down});
    Velocity(obj2, { rotate: ['-11deg', '0deg'] }, {queue: false, delay: 900, duration: 250, loop: true});
}

const plankMove = () => 
    Velocity(plank, { rotate: ['-22deg', '0deg'] }, {duration: 250, delay: 900, loop: true});

// The opacity: 1 does nothing here, these are just initial delays
// as the animation starts half way through the up => down cycle
Velocity(obj1, {opacity: 1}, {delay: 500, complete: obj1Down});
obj1Rotate(1200, false, '0deg', '-11deg');
Velocity(obj2, {opacity: 1}, {delay: 0, complete: obj2Up});
Velocity(plank, {opacity: 1}, {delay: 0, complete: plankMove});
