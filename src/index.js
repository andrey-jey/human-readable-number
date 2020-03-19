module.exports = function toReadable (number) {
    

    const stringNumbersAll = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
         "sixteen", "seventeen", "eighteen", "nineteen", "twenty"

    ]; 

    const stringNumbersDozens = ["", "", "twenty", "thirty","forty","fifty","sixty","seventy","eighty","ninety"
    ];

    for (let i = 21; i < 1000; i++) {



        if (i < 100) stringNumbersAll.push(
            stringNumbersDozens[Math.floor(i/10)] + ( i%10 == 0 ? "" : " " + stringNumbersAll[i%10])
            );

        else stringNumbersAll.push(stringNumbersAll[Math.floor(i/100)] + " hundred" + (i%100 == 0 ? "" : " "+stringNumbersAll[i%100]));
    }
  return stringNumbersAll[number]
}