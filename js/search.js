var results = [];
var input = document.querySelector('#search-str');
if (input) {
    input.addEventListener('keyup', function(_) {
        let searchString = input.value;
        results = [];
        fetch('/search.json').then(function(response) {
            return response.json();
        }).then(function(response) {
            return response.search;
        }).then(function(searchIndex){
            for (var item in searchIndex) {
                var found = searchIndex[item].text.indexOf(searchString);
                if (found != -1 ) {
                    results.push(searchIndex[item])
                }
            }
            let list = document.getElementById("resultList");
            list.innerHTML = '';
            results.forEach((item)=>{
            let li = document.createElement("li");
            li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            list.appendChild(li);
            });
        });
    }, false);
}