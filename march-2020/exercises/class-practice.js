// class practice, 3/14/20 Saturday 

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  introduction() {
    console.log(`my name is ${this.name}, and I am a ${this.position}`)
  }
}

class Rookie extends Player {
  constructor(name, position) {
    super(name, position);
  }
  play() {
    console.log('I am happy to be a Seahawk');
  }
}

const dk = new Rookie('dk', 'wide receiver');
dk.play();