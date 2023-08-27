const articles = document.querySelectorAll('article.blog');

// Grab the data update articles
// Add children with the respective classes and it should be set
// First loop

// let varb = fetch('./articles/ES-career-guide.html').then(r=>r.text()).then((html)=>{ // get the content of products.html
//     let element = document.createElement("html");
//     element.innerHTML = html; // parse the html
//     let p1 = element.querySelector(".description");
//     return p1
//   });

//   console.log(varb);

createBlogPreviews();

function createBlogPreviews() {
    // for (article of articles){
    //     getElements(article.id).then((dict)=>{
    //         article = addElements(dict, article);
    //         console.log(article);
    //     });
    // };

    articles.forEach((article)=>{getElements(article.id).then((dict)=>{
        article = addElements(dict, article);
        console.log(article);
    });})
}

function getElements(filename) {
    filename = "./articles/" + filename + ".html";
    let dict = fetch(filename).then(r=>r.text()).then((html)=>{
        let element = document.createElement("html");
        element.innerHTML = html; // parse the html
        
        dict = {
            "title":element.querySelector('h1'),
            "img":element.querySelector('img#header'),
            "description":element.querySelector('p.description'),
            "button":document.createElement('a')
        }

        // Making sure the image path is pointing to the same one
        let source = dict["img"].src;
        console.log(source);
        dict["img"].src = './articles/' + source.slice(source.indexOf("images"));
        
        // Making sure the button has the correct link
        dict["button"].href = filename;
        dict["button"].textContent = "Read More";
        return dict;
    });
    return dict;
}

function addElements(dict_of_elements, article) {
    // console.log(dict_of_elements);
    
    let div = document.createElement('div');
    div.appendChild(dict_of_elements["title"]);
    div.appendChild(dict_of_elements["description"]);
    div.appendChild(dict_of_elements["button"]);
    
    article.appendChild(dict_of_elements["img"]);
    article.appendChild(div);

    return article;
}