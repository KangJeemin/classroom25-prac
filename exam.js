let dummyText = "아버지가방에들어가신다."

let refineNounData = ["아버지","방"];

let spacing="";

function spacingLetter(text,nounData, spacing){

    let result = Array.from(text);
    let Josa = ["이가","가"];
    let Busa = ["에"];

    if(result.includes(Josa[1])){
        let number=result.indexOf(Josa[1])
        result.splice(number+1,0," ")
    }

    //text에서 가, 에, 등이 있으면 가,에 다음 글자에 띄어쓰기를 추가한다.
    //위에서 완성된 문장을 받아 result에 할당한다.--
    return result.join("");
}

console.log(spacingLetter(dummyText))