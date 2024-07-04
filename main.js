// 유저가 값을 입력한다.
// + 버튼을 클라하면, 할 일이 추가된다.
// delete 버튼을 누르면, 할 일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 생긴다.
// 'All','to-do','done' 탭들을 누르면, 언더바가 이동한다.
// 'to-do'탭에는 진행중인 item만, 'done'탭에는 완료한 item 만 넣는다
// 'All'탭을 누르면 다시 전체 item으로 돌아옴

let task_input = document.getElementById("task_input");
let add_button = document.getElementById("add_button");
let task_list = [];
add_button.addEventListener("click", addTask); // 작동 안 됐던 이유 : L10에서 getAnimations 함수 넣어놓음 (바보)


function addTask() {
    let taskContent = task_input.value ; // 여기가 이상한데... 배열에 왜 할당이 안되노
    task_list.push(taskContent);
    console.log(task_list)
}

function render() {
    let resultHTML = ''
    for(let i=0; i<task_list.length; i++){
        resultHTML += `<div class="task_list">
                <div>${task_list[i]}</div> 
                <div>
                    <button>check</button>
                    <button>delete</button>
                </div>
            </div>`
    }

    document.getElementById("task_board").innerHTML = resultHTML ;
    
}