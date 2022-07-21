// 1.

let user = {
  first_name: "John",
  last_name: "Smith",
  email: "jhon_smith@mail.com",
  umur: "35",

  //   2.
  full_name() {
    return this.first_name + " " + this.last_name;
  },
};

console.log(`1. ${JSON.stringify(user, null, 4)}`);

console.log(`2. ${user.full_name()}`);
// 3.
class User {
  constructor(first_name, last_name, email, umur) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.umur = umur;
  }

  full_name() {
    return this.first_name + " " + this.last_name;
  }
}

const array_of_object = [];

let user_1 = new User("John", "Smith", "jhon_smith@mail.com", 35);
let user_2 = new User("Josua", "Slamet", "josua_slamet@mail.com", 15);
let user_3 = new User("Muhidin", "Akbar", "muhidin_akbar@mail.com", 20);

array_of_object.push(user_1, user_2, user_3);

console.log(
  `3. Array of Object Data Before Sort: ` +
    JSON.stringify(array_of_object, null, 4)
);

// 4.

const asc = async (array) => {
  try {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i].umur < array[j].umur) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }

    return array;
  } catch (error) {
    console.log(error);
  }
};

asc(array_of_object).then((x) => {
  console.log(
    `4. Array of Object Data After Sort: ` + JSON.stringify(x, null, 4)
  );
});

// 5.

const count_average = async (array) => {
  try {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i].umur;
    }

    let average = sum / array.length;
    return average;
  } catch (error) {
    console.log(error);
  }
};

count_average(array_of_object).then((x) => {
  console.log(`5. Average of Age: ${x}`);
});

// 6.

const sort_name = async (array) => {
  try {
    let new_name_array = [];
    let longest_name = "";
    for (let i = 0; i < array.length; i++) {
      new_name_array.push(array[i].full_name());
    }

    for (let a = 0; a < new_name_array.length; a++) {
      if (new_name_array[a].length > longest_name.length) {
        longest_name = new_name_array[a];
      }
    }

    return longest_name;
  } catch (error) {
    console.log(error);
  }
};

sort_name(array_of_object).then((x) => {
  console.log(`6. Longest Name: ${x}`);
});

// 7.

const sort_umur = async (array) => {
  try {
    let umur_array = [];

    for (let i = 0; i < array.length; i++) {
      umur_array.push(array[i].umur);
    }

    return Math.min(...umur_array);
  } catch (err) {
    console.log(err);
  }
};

sort_umur(array_of_object).then((umur) => {
  console.log(`7. Minimum Age: ${umur}`);
});

// 8.

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

console.log(`8. Luas Persegi Panjang : ${rectangle.luas()}`);
console.log(`8. Luas Segitiga : ${triangle.luas()}`);
console.log(`8. Luas Lingkaran : ${circle.luas()}`);

const go_luas = (shape) => {
  return shape.luas();
};

console.log(`8. polymorphism : ${go_luas(rectangle)}`);
