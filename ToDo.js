function getAnUpdate(){
    console.log('updating...')
    var tit = document.getElementById('title').value;
    var desc = document.getElementById('discription').value;

    if(localStorage.getItem('itemJson') == null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update(){
    if(localStorage.getItem('itemJson') == null){
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
      
    }
    
    // populate the table
    var TB = document.getElementById('tableBody');
    str = "";
    itemJsonArray.forEach((element, index) =>{
        str +=`
        <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button onclick="deleteFor(${index})"  class="btn btn-sm btn-danger">Delete</button></td>
                  </tr>`;
    });
    TB.innerHTML= str;

}


var add = document.getElementById("add");
add.addEventListener("click", getAnUpdate);
update();

function deleteFor(itemIndex){
    console.log('Delete');
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //deleteing the element from the array
    itemJsonArray.splice(itemIndex, 1);

    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();
}

function clearStorage(){
    if(confirm('Do you really wanna clear all the items from list?')){
        console.log('clear storage')
        localStorage.clear();
        update();
    }
   
}