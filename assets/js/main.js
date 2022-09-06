const listContainer = document.querySelector('[data-list-container-body]');
const newList = document.querySelector('[data-new-list]');
const inputName = document.querySelector('[data-input-name]');
const inputDate = document.querySelector('[data-input-date]');
const inputStart = document.querySelector('[data-input-start]');
const inputEnd = document.querySelector('[data-input-end');
const inputColor = document.querySelector('[data-input-color]');

const saturDay = document.querySelector('[data-day-sat]');
const sunDay = document.querySelector('[data-day-sun]');
const monDay = document.querySelector('[data-day-mon]');
const tuesDay = document.querySelector('[data-day-tue]');
const wednesDay = document.querySelector('[data-day-wed]');
const thursDay = document.querySelector('[data-day-thu]');
const friDay = document.querySelector('[data-day-fri]');


let scheduleList = [];

newList.addEventListener('submit', e =>{
    e.preventDefault()
    const listName = inputName.value
    if(listName == null || listName === '') return
    const listDate = inputDate.options[inputDate.selectedIndex].value;
    const listDateText = inputDate.options[inputDate.selectedIndex].innerHTML;
    const listStart = inputStart.options[inputStart.selectedIndex].value;
    const listEnd = inputEnd.options[inputEnd.selectedIndex].value;
    // if(listStart >= listEnd) return
    const listColor = inputColor.options[inputColor.selectedIndex].innerHTML;
    const listColorCode = inputColor.options[inputColor.selectedIndex].value;

    const list = createList(listName,listDate,listStart,listEnd,listColor,listColorCode,listDateText);
    scheduleList.push(list);
    render();
    createSchedule();
    inputName.value = null;
    console.log(scheduleList)
})


function createList(elementOne,elementTow,elementThree,elementFour,elementFive,elementSix,elementSeven){
    return {
        id: Date.now().toString(),
        name: elementOne,
        date: parseInt(elementTow),
        text:elementSeven,
        start: parseInt(elementThree),
        end: parseInt(elementFour),
        color: elementFive,
        colorCode: elementSix
    }
}

function render(){
    clearElement(listContainer);
    scheduleList.forEach(list =>{
        const listElement = document.createElement('div');
        listElement.classList.add('list-container_body_lists');
        listElement.dataset.listId = list.id;
        listElement.innerHTML=`
            <div class="list-container_body_title title-name">
                ${list.name}
            </div>
            <div class="list-container_body_title title-date">
                ${list.text}
            </div>
            <div class="list-container_body_title title-start">
                ${list.start}
            </div>
            <div class="list-container_body_title title-end">
                ${list.end}
            </div>
            <div class="list-container_body_title title-color">
                ${list.color}
            </div>
        `
        listContainer.appendChild(listElement);
    });
}
// ----------------------------------------------------------------------------
function createSchedule(){
    scheduleList.forEach(list=>{
        if(list.date === 1){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            saturDay.appendChild(taskElement);
        }else if(list.date === 2){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            sunDay.appendChild(taskElement);
        }else if(list.date === 3){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            monDay.appendChild(taskElement);
        }else if(list.date === 4){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            tuesDay.appendChild(taskElement);
        }else if(list.date === 5){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            wednesDay.appendChild(taskElement);
        }else if(list.date === 6){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            thursDay.appendChild(taskElement);
        }else if(list.date === 7){
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.dataset.listId = list.id;
            taskElement.style.background= list.colorCode;
            taskElement.style.right = getPosition(list.start);
            taskElement.style.width = getWidth(list.start,list.end);
            taskElement.innerHTML= list.name;
            friDay.appendChild(taskElement);
        }
    })
}

function getPosition(number){
    if(number === 8){
        return 0;
    }else if(number === 9){
        return '90px';
    }else if(number === 10){
        return '180px';
    }else if(number === 11){
        return '270px';
    }else if(number === 12){
        return '360px';
    }else if(number === 13){
        return '450px';
    }else if(number === 14){
        return '540px';
    }else if(number === 15){
        return '630px';
    }else if(number === 16){
        return '720px';
    }else if(number === 17){
        return '810px';
    }else if(number === 18){
        return '900px';
    }else if(number === 19){
        return '990px';
    }else return '1080px';
}
function getWidth(number1,number2){
    let result = (number2 - number1)*90;
    return `${result}px`
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}