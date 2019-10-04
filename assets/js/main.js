function searchFunction() {

    var input, filter,  posts, cardBody, p, i, txtValue, error;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    posts = document.getElementsByClassName('posts');
    cardBody = document.getElementsByClassName('card-body');
    error = document.getElementById('error');
    for(i=0; i<posts.length; i++){
        a=posts[i].getElementsByClassName("card-body")[0];
        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter)>-1){
            posts[i].style.display = "";
        }
       
        else{
             posts[i].style.display = "none";

        }
    }
}

