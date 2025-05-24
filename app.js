class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
 
  introduce() {
    console.log(`Hello I'm ${this.name} and I'm a ${this.type} warrior`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }

  play() {
    console.log(`wee! i'm a ${this.type} type. lets play`);
  }
}
