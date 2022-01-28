export default function InterviewQuestion() {
  //bitcounter
  function bitcounter(n) {
    const l = n.toString(2).split("");
    const result = l.reduce((a, b) => {
      return a + Number(b);
    }, 0);
    return result;
  }

  //bitcounterUpgrade
  function bitcounterUpgrade(n) {
    let list = [];
    for (let i = 0; i <= n; i++) {
      list.push(bitcounter(i));
    }
    return list;
  }
  //Function return number of apartments
  function CountApartment(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
  }

  function ObjectTraversal(obj) {
    let result = [];
    for (const [key, value] of Object.entries(obj)) {
      result.push(value);
    }
    return result;
  }
  // Given an array of integers, return an array of integers which contains
  // [1st integer, Sum of next 2 integers (2nd, 3rd), Sum of next 3 integers
  const find = (arr) => {
    const arr2 = [];
    for (let i = 1, j = 0; j < arr.length; i++) {
      const item = arr.slice(j, j + i).reduce((acc, item) => {
        return acc + item;
      });
      arr2.push(item);
      j = j + i;
    }
    return arr2;
  };

  //Cout(sPrime)
  function countPrime(n) {
    let counter = 0;
    function isPrime(num) {
      for (var i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    }
    for (let i = 0; i <= n; i++) {
      if (isPrime(i)) {
        counter++;
      }
    }
    return counter;
  }
  console.log(countPrime(8));
  return <></>;
}
