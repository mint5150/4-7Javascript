/*1. AND(&&)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)*/ */
var stringA = "Javascript";
var stringB = "CSS";
if (stringA == "Javascript" && stringB == "HTML") {
    console.log("ANDの条件と一致した処理");
    console.log(stringA == "Javascript" && stringB == "HTML");
  } else {
    console.log("ANDの条件と一致しなかった処理");
    console.log(stringA == "Javascript" && stringB == "HTML");
};

/*2.OR(||)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)*/ */
var stringA = "Ruby";
var stringB = "CSS";
if (stringA == "Javascript" || stringB == "HTML") {
    console.log("ANDの条件と一致した処理");
    console.log(stringA == "Javascript" || stringB == "HTML");
  } else {
    console.log("ANDの条件と一致しなかった処理");
    console.log(stringA == "Javascript" || stringB == "HTML");
};

/*3.NOT(!)の条件を作成し、その処理に入るよう作ってください。比較条件は数値型の比較でお願いしま
す。(elseの処理も作成してください)*/
var num = "Javascript";
if (!num) {
    console.log("NOTの条件と一致した処理");
    console.log(num);
  } else {
    console.log("NOTの条件と一致しなかった処理");
    console.log(num);
};