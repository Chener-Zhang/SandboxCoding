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

  return <></>;
}
