const newObj = {
  city: "Oslo",
  greet() {
    console.log(`Welcome to ${this.city}`);
  },
};

newObj.greet();
