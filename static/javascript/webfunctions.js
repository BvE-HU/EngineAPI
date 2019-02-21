function loadProducts() {
    fetch('/productservice/')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            // console.log(myJson);
            for (product of myJson) {
                var row = element("tr",
                    element("td", text(product['_id'])),
                    element("td", text(product['brand'])),
                    element("td", text(product['category'])),
                    element("td", link(product['deeplink'], product['deeplink']))
                )

                document.querySelector("#products").appendChild(row);
            }
        });
}

function element(name, ...childs) {
    var element = document.createElement(name);
    for (let i=0; i < childs.length; i++) {
        element.appendChild(childs[i]);
    }
    return element;
}

function text(value) {
    return document.createTextNode(value)
}

function link(href, value) {
    var link = document.createElement("a");
    link.appendChild(text(value));
    link.setAttribute("href", href);
    link.setAttribute("target", "blank");
    return link;
}