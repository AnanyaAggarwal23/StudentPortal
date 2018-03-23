let inn = false;
let ed = false;
$(document).ready(()=>{
    $(`#form1`).hide();
    $(`#but1`).click(function(){
    ed = false;
    inn = true;
    $(`#form1`).toggle(1000);});
});

$(document).ready(()=>{
    $(`#form1`).hide();
    $(`#but2`).click(function(){
        inn = false;
	ed = true;
	$(`#form1`).toggle(1000);    
    });
});

let submitForm = ()=>{
    $(`#form1`).hide();
    let n = document.getElementById(`na`).value;
    let r = document.getElementById(`rno`).value;
    let s = document.getElementById(`str`).value;
    let y = document.getElementById(`yr`).value;
    let patt1 = /[a-z][A-Z]$/;
    let patt2 = /[0-9]{4}$/;
    let patt3 = /[0-9]{10}$/;
    let tabb = $(`#tab`);
    if(n == `` || r == `` || s == `` || y == ``)
	alert(`ALL FIELDS ARE REQUIRED`);
    else if(r.length != 10 || !patt3.test(r))
	alert(`ROLL NO MUST BE OF 10 digits`);
    
    else if(!patt2.test(y))
        alert(`YEAR MUST BE IN CORRECT FORMAT`); 
    else
    {
        if(inn == true)
	{
		tabb.append(`<tr><td>${n}</td><td>${r}</td><td>${s}</td><td>${y}</td><td><input type = 'checkbox' name='cBox'></td></tr>`);
	}
	if(ed == true)
	{
		let ar = document.getElementsByTagName(`tr`);
		for(let i in ar)
		{
			let rollno = ar[i].children[1].innerHTML;
			if(rollno == document.getElementById(`rno`).value)
			{
				ar[i].children[0].innerHTML = document.getElementById(`na`).value;
            			ar[i].children[3].innerHTML = document.getElementById(`yr`).value;
            			ar[i].children[2].innerHTML = document.getElementById(`str`).value;
            			break;
			}
		}
        }
    }
   
}

let del = ()=>{
    let chk = $(`td input:checked`);
    chk.closest(`tr`).remove();
}
let checkAll = (cb)=> {
    let checkBoxes = document.getElementsByName(`cBox`);
    if(cb.is(`:checked`)){
        $("input[name='cBox']").prop("checked", true);
    }
    else{
        $("input[name='cBox']").prop("checked", false);
    }
}

			
	
 
