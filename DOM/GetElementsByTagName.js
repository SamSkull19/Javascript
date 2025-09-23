const lists = document.getElementsByTagName('li');
console.log(lists)

for(const list of lists){
    console.log(list);
}

for(const list of lists){
    console.log(list.innerText);
}


const uls = document.getElementsByTagName('ul');
console.log(uls);

for(const ul of uls){
    console.log(ul.innerHTML);
}

for(const ul of uls){
    console.log(ul.innerText);
}

const sections = document.getElementsByTagName('section');
console.log(sections);

for(const section of sections){
    console.log(section.innerHTML);
}

for(const section of sections){
    console.log(section.innerText);
}