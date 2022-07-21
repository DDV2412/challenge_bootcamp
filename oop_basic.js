const user = {
  first_name: "John",
  last_name: "Smith",
  email: "jhon_smith@mail.com",
  umur: "35",

  //   2.
  full_name() {
    return this.first_name + " " + this.last_name;
  },
};

const array_of_object = [
  {
    first_name: "John",
    last_name: "Smith",
    email: "jhon_smith@mail.com",
    umur: "35",

    full_name() {
      return this.first_name + " " + this.last_name;
    },
  },

  {
    first_name: "Eliseo",
    last_name: "Eugene Melvin",
    email: "eliseo_eug@mail.com",
    umur: "20",

    full_name() {
      return this.first_name + " " + this.last_name;
    },
  },

  {
    first_name: "Leighton",
    last_name: "Ryker",
    email: "leighton_r@mail.com",
    umur: "24",

    full_name() {
      return this.first_name + " " + this.last_name;
    },
  },
];

const sort_by_umur = array_of_object.sort((a, b) => {
  return a.umur - b.umur;
});

const sort_umur = array_of_object.sort((a, b) => {
  return a.umur - b.umur;
});

let sum = 0;
let rata_rata_umur = 0;
for (let i = 0; i < array_of_object.length; i++) {
  sum = array_of_object[i].umur;
  rata_rata_umur = sum / array_of_object.length;
}

const long_name = array_of_object.sort((a, b) => {
  return b.full_name().length - a.full_name().length;
});

class Shape {
  constructor(name) {
    this.name = name;
  }

  luas() {
    return "Luas";
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  luas() {
    super.luas();

    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(name, alas, tinggi) {
    super(name);
    this.alas = alas;
    this.tinggi = tinggi;
  }

  luas() {
    super.luas();

    return 0.5 * this.alas * this.tinggi;
  }
}

class Circle extends Shape {
  constructor(name, jari_jari) {
    super(name);
    this.jari_jari = jari_jari;
  }

  luas() {
    super.luas();

    return 3.14 * (this.jari_jari * this.jari_jari);
  }
}

let rectangle = new Rectangle("Rectangle", 10, 20);
let triangle = new Triangle("Triangle", 10, 20);
let circle = new Circle("Circle", 10);

const go_luas = (shape) => {
  return shape.luas();
};

console.log("1.======= Object Tanpa Class========");
console.log(user);
console.log("====================================");

console.log("2. ======== Get Full Name  =========");
console.log(user.full_name());
console.log("====================================");

console.log("3.======== Array of Object =========");
console.log(array_of_object);
console.log("====================================");

console.log("4.========= Sort by Ummur ==========");
console.log(sort_by_umur);
console.log("====================================");

console.log("5.======== Rata Rata Umur ==========");
console.log(Math.floor(rata_rata_umur));
console.log("====================================");

console.log("6.======== Nama Terpanjang =========");

console.log("======== Nama Terpanjang Pertama =========");
console.log(long_name[0]);

console.log("======== Sort by Nama Terpanjang =========");
console.log(long_name);
console.log("====================================");

console.log("7.========= Umur Termuda ==========");
console.log(sort_umur[0]);
console.log("====================================");

console.log("8.=============Shape ===============");
console.log(`Luas Persegi Panjang : ${rectangle.luas()}`);
console.log(`Luas Segitiga : ${triangle.luas()}`);
console.log(`Luas Lingkaran : ${circle.luas()}`);
console.log(`Polymorphism : ${go_luas(rectangle)}`);
console.log("====================================");
