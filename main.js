// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할 일이 추가된다.
// delete 버튼을 클릭하면, 할 일이 삭제된다
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 생긴다.
// '진행중', '끝남' 탭을 누르면, 언더바가 이동한다.
// '끝남'탭에는 끝난 아이템을 넣고, '진행중' 탭에는 진행중인 아이템을 넣는다
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴 



let task_input = document.getElementById("task_input")
let Add_button = document.getElementById("Add_button")
let taskList = []
Add_button.addEventListener("click",addTask)



function addTask(){
    let taskContent = task_input.value
    taskList.push(task_input)
}

function render(){
    let resultHTML =  '';
    for(let i=0 ; i < taskList.length; i++) {
        resultHTML += `<div class="tasks_button">
                    <div>${taskList[i]}</div> 
                    <div>
                        <button>check</button>
                        <button>delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("tasks_board").innerHTML = resultHTML ;
}