window.onload = function (){
     let todolist = [];
    document.getElementById('add_text').onclick = function (){
        let d = document.getElementById('text_input').value;
        let i = todolist.length;
        todolist[i] = d;
        out()
    }
    function out(){
        let out = '';
        for (let i in todolist){
            out += '• ' + todolist[i] + '<br/>' + '<br/>';
        }
        document.getElementById('out').innerHTML = out;
    }
}