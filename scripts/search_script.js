function searchFunction() {
    var input, filter, ul, li, name, major, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('member_list');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        name = li[i].getElementsByTagName("h3")[0];
        major = li[i].getElementsByTagName("p")[0];
        if(name.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else if(major.innerHTML.toUpperCase().indexOf(filter) > -1){
              li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
