// 유저가 값을 입력한다.
// + 버튼을 클라하면, 할 일이 추가된다.
// delete 버튼을 누르면, 할 일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 생긴다.
// 1. check 버튼 누르면 객체 isComplete의 false를 true로 바꾼다.
// 2. true가 되면, 끝난 것으로 간주하고 밑줄을 생성한다.
// 3. false이면, 안 끝난 것으로 간주하고 그대로 둔다.
// 'All','to-do','done' 탭들을 누르면, 언더바가 이동한다.
// 'to-do'탭에는 진행중인 item만, 'done'탭에는 완료한 item 만 넣는다
// 'All'탭을 누르면 다시 전체 item으로 돌아옴

let task_input = document.getElementById("task_input");
let add_button = document.getElementById("add_button");
let task_list = [];
add_button.addEventListener("click", addTask); // 작동 안 됐던 이유 : L13에서 getAnimations 함수 넣어놓음 (바보)


function addTask() {
    let task = { // 객체 ,로 구분하네..
        id:randomID(),
        taskContent: task_input.value,
        isComplete:false,
    };
    task_list.push(task); 
    console.log(task_list);
    render();
}

function render() { // 그럼 그려주는 함수 전부 여기로~
    let resultHTML = "" ; // HTML 영역에 갖다붙이는 작업
    for(let i=0; i<task_list.length; i++){ // 객체로 바꿨으니까 수정해라
        if(task_list[i].isComplete==true){
            resultHTML += `<div class="task_list">
            <div class="task_done">${task_list[i].taskContent}</div> 
            <div>
                <button onclick="toggleComplete('${task_list[i].id}')">check</button>
                <button onclick="deleteTask('${task_list[i].id}')">delete</button>
            </div>
        </div>`;
        } else{
            resultHTML += `<div class="task_list">
                <div>${task_list[i].taskContent}</div> 
                <div>
                    <button onclick="toggleComplete('${task_list[i].id}')">check</button>
                    <button onclick="deleteTask('${task_list[i].id}')">delete</button>
                </div>
            </div>`
        } 
    } 

    document.getElementById("task_board").innerHTML = resultHTML ;
    
}

function toggleComplete(id) { // 함수한테 어떤 아이템을 선택했는지 알려줘야함
    for(let i=0; i<task_list.length; i++){
        if(task_list[i].id == id){
            task_list[i].isComplete=!task_list[i].isComplete; // ! = not (부정)
            break; //찾고나면 for문 끝내세욤
    }
}
render(); // 값만 바꾸면 안되고 UI 업뎃도 해줘야함
console.log(task_list)

}


function randomID() {
    return '_' + Math.random().toString(36).substr(2,9); // 이 함수의 결과물이 다른 곳에 쓰일 때 return!!
}

function deleteTask(id) {
    for(let i=0; i<task_list.length; i++){
        if(task_list[i].id == id)
            task_list.splice(i,1)//i번째 1개만 삭제요
        break;
    }
 render()
}
