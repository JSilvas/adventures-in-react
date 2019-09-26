$_$wp(1);
function Doggo(name, sound) {
    $_$wf(1);
    $_$w(1, 0), this.name = name;
    $_$w(1, 1), this.sound = sound;
    $_$w(1, 2), this.speak = () => {
        $_$wf(1);
        return $_$w(1, 3), console.log(`${ this.name } loves to ${ this.sound }!`);
    };
}
let g = ($_$w(1, 4), new Doggo('Gerald', 'bork'));
$_$w(1, 5), g.speak();
class Animal {
    constructor(name) {
        $_$wf(1);
        $_$w(1, 6), this.name = name;
    }
    sound() {
        $_$wf(1);
        $_$w(1, 7), $_$tracer.log(`${ this.name } makes a noise.`, '`${ this.name } makes a noise.`', 1, 7);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(($_$wf(1), $_$w(1, 8), name));
    }
    speak() {
        $_$wf(1);
        $_$w(1, 9), $_$tracer.log(`${ this.name } barks.`, '`${ this.name } barks.`', 1, 9);
    }
}
let a = ($_$w(1, 10), new Animal('THE DOG'));
let d = ($_$w(1, 11), new Dog('MITZIE'));
$_$w(1, 12), a.sound();
$_$w(1, 13), d.speak();
class Person {
    constructor(first, last, age, gender, interests) {
        $_$wf(1);
        $_$w(1, 14), this.name = {
            first,
            last
        };
        $_$w(1, 15), this.age = age;
        $_$w(1, 16), this.gender = gender;
        $_$w(1, 17), this.interests = interests;
    }
    greeting() {
        $_$wf(1);
        $_$w(1, 18), $_$tracer.log(`Hi! I'm ${ this.name.first }`, '`Hi! I\'m ${ this.name.first }`', 1, 18);
    }
    farewell() {
        $_$wf(1);
        $_$w(1, 19), $_$tracer.log(`${ this.name.first } has left the building. Bye for now!`, '`${ this.name.first } has left the build...', 1, 19);
    }
}
let ivana = ($_$w(1, 20), new Person('Ivana', 'Berger', 36, 'female', [
    'Mainframe Hacking',
    'Scotch'
]));
$_$w(1, 21), ivana.greeting();
$_$wpe(1);