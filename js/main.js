let insertFlag = false;
let editFlag = false;
let count = 3;
let toggleFlag = 0;
$(document).ready(() => {
    $(`#form`).hide();
    $(`#but2`).click(function () {
        document.getElementById(`form`).reset();
        if (toggleFlag == 0) {
            $(`#form`).toggle(1000);
            toggleFlag = 1;
        }
        alert(`ENTER STUDENT DETAILS YOU WANT TO EDIT WITH RESPECT TO THE ROLL NO.`);
        insertFlag = false;
        editFlag = true;

    });
    $(`#but1`).click(function () {

        document.getElementById(`form`).reset();

        if (toggleFlag == 0) {
            $(`#form`).toggle(1000);
            toggleFlag = 1;
        }
        alert(`ENTER STUDENT DETAILS YOU WANT TO INSERT`);
        editFlag = false;
        insertFlag = true;

    });
});


let submitForm = () => {
    let n = document.getElementById(`name`).value;
    let r = document.getElementById(`rollNo`).value;
    let s = document.getElementById(`stream`).value;
    let y = document.getElementById(`year`).value;
    let patternName = /^[a-zA-Z]*$/;
    let patternYear = /[0-9]{4}$/;
    let patternRollNo = /[0-9]{10}$/;
    let table = $(`#table`);
    if (n == `` || r == `` || s == `` || y == ``)
        alert(`ALL FIELDS ARE REQUIRED`);
    else if (r.length != 10 || !patternRollNo.test(r))
        alert(`ROLL NO MUST BE OF 10 digits`);
    else if (!patternName.test(n))
        alert(`NAME MUST CONTAIN ALPHABETS ONLY`);
    else if (!patternYear.test(y))
        alert(`YEAR MUST BE IN CORRECT FORMAT`);
    else {
        $(`#form`).hide();
        toggleFlag = 0;

        if (insertFlag == true) {
            table.append(`<tr>
            <td>${n}</td>
            <td>${r}</td>
            <td>${s}</td>
            <td>${y}</td>
            <td><input type = 'checkbox' name='checkBox'></td>
            </tr>`);
            count++;
            alert(`RECORD IS INSERTED`);
            document.getElementById(`form`).reset();
        }
        if (editFlag == true) {
            let flag = 0;
            let array = document.getElementsByTagName(`tr`);
            for (let i in array) {
                let rollno = array[i].children[1].innerHTML;
                if (rollno == document.getElementById(`rollNo`).value) {
                    flag = 1;
                    array[i].children[0].innerHTML = document.getElementById(`name`).value;
                    array[i].children[3].innerHTML = document.getElementById(`year`).value;
                    array[i].children[2].innerHTML = document.getElementById(`stream`).value;
                    break;
                }
            }
            if (flag == 0)
                alert(`NO SUCH RECORD EXIST`);
            else
                alert(`RECORD WILL BE EDITTED`);
            document.getElementById(`form`).reset();
        }
    }
}


let del = () => {
    $(`#form`).hide();
    document.getElementById(`form`).reset();
    let check = $(`td input:checked`);
    count = count - check.length;
    console.log(count);
    if (count < 0)
        alert(`NO RECORD TO DELETE`);
    else if (check.length == 0) {
        alert(`SELECT THE RECORD TO DELETE`);
    }
    else {
        check.closest(`tr`).remove();
        alert(`RECORD WILL BE DELETED`);
    }
}


let checkAll = (cb) => {
    $(`#form`).hide();
    document.getElementById(`form`).reset();
    let checkBoxes = document.getElementsByName(`checkBox`);
    if (cb.is(`:checked`)) {
        $("input[name='checkBox']").prop("checked", true);
    }
    else {
        $("input[name='checkBox']").prop("checked", false);
    }
}
