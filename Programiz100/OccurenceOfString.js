// JavaScript Program to Check the Number of Occurrences of a Character in the String

const str = 'helloworld';
const visited = {};

for (let i = 0; i<str.length; i++){
    var char = str.charAt(i);
    if (char in visited){
        visited[str.charAt(i)] += 1;
    }
    else{
        visited[str.charAt(i)] = 1;
    }
}

console.log(visited);
