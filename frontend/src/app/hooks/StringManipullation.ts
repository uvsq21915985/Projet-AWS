export function getInitialLetter(text: string){
    let [first, second] = text.split(" ");

    if(first.length == 0) return ""
    
    return first.slice(0,1) + (second && second.length != 0 ? second.slice(0,1) : (first.length > 1 ? first.slice(1,2) : first.slice(0,1)));
}