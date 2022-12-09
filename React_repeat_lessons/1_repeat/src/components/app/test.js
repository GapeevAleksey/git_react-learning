const Test = () => {
  class Cars {
    constructor(brand, model) {
      this.type = 'Cars';
      this.brand = brand;
      this.model = model;
    }
    getInfo() {
      console.log(
        `${this.type}: brand is ${this.brand} and model is ${this.model}.`
      );
    }
  }

  class Truck extends Cars {
    constructor(brand, model, carrying) {
      super(brand, model);
      this.carrying = carrying;
    }
    getCarrying() {
      console.log(`Грузоподъемность: ${this.carrying}.`);
    }
  }
  const kamaz = new Truck('kamaz', '5512', 12);

  return (
    <div>
      {kamaz.getCarrying()}
      {console.log(kamaz)}
    </div>
  );
};

export default Test;
