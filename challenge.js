// 1. Input String
const input = (inputname) => inputname;

console.log("1. Print " + input("Hello World"));

// 2. Count Quatrat
const count_quadrat = (n) => n * n;

console.log("2. Nilai Quadrat Dari 2: " + +count_quadrat(2));

// 3. Convert Temp
const convert_temp = (celcius) => celcius * 1.8 + 32;

console.log("3. Celcius 20 to Fahrenheit: " + convert_temp(20));

// 4. Convert to lowercase
const to_LowerCase = (input) => input.toLowerCase();

console.log("4. Convert to Lowercase: " + to_LowerCase("Makan Nasi"));

// 5. Count Length

const count_length = (text, char) => {
  let text_array = [];
  let char_array = [];

  for (let i = 0; i < text.length; i++) {
    text_array.push(text[i]);
  }

  text_array.forEach((element) => {
    if (element === char) {
      char_array.push(element);
    }
  });

  return char_array.length;
};

console.log(
  "5. Huruf a dalam string `sepak bola` berjumlah: " +
    count_length("Sepak Bola", "a")
);

// 6.count_array_string

const count_array_string = (array) => {
  let t = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > t) {
      t = array[i];
    }
  }
  return t;
};

console.log(
  "6. Array Terpanjang: " +
    count_array_string(["javascript", "java", "python", "php"])
);

// 7.

const nd_array_max = (array) => {
  let secondMax = 0;
  if (array.length !== 1) {
    let max = Math.max.apply(null, array), // get the max of the array
      maxi = array.indexOf(max);
    array[maxi] = -Infinity; // replace max in the array with -infinity
    secondMax = Math.max.apply(null, array); // get the new max
    array[maxi] = max;
  }

  return secondMax;
};

console.log("7. 2nd array: " + nd_array_max([6, 1]));

// 8.

const huruf_vokal = (input) => {
  let text_array = [];
  let vokal_array = [];
  for (let i = 0; i < input.length; i++) {
    text_array.push(input[i]);
  }

  text_array.forEach((item) => {
    if (
      item === "a" ||
      item === "i" ||
      item === "u" ||
      item === "e" ||
      item === "o"
    ) {
      vokal_array.push(item);
    }
  });

  return vokal_array.length;
};

console.log("8. Jumlah Huruf Vokal: " + huruf_vokal("Manado"));

// 9.
const count_factorial = (n) => {
  let value = 1;
  if (n == 0 || n == 1) {
    return value;
  }

  return n * count_factorial(n - 1);
};

console.log("9. factorial :" + count_factorial(5));

// 10.

const mean = (array) => {
  let count = 0;
  let total = 0;

  array.forEach((item) => {
    total += item;

    count++;
  });

  return total / count;
};

console.log("10. Rata rata: " + mean([3, 5, 7, 3]));
