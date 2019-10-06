let simpan = document.querySelector('#box_detail').children[document.querySelector('#box_detail').children.length-1].innerHTML.replace('<strong>[심판]</strong> ', '').split(' ')[0];
if (typeof simpan==='string' && simpan.length>0) {
    let form = document.createElement("form");
    let simpanField = document.createElement("input");
    let dateField = document.createElement("input");
    let textField = document.createElement("textarea");
    let url = new URL(window.location.href);



    form.setAttribute("charset", "UTF-8");
    form.setAttribute("method", "Post");
    form.setAttribute("action", "http://localhost/dashboard/phpinfo.php");


    simpanField.setAttribute("name", "simpan");
    simpanField.setAttribute("value", simpan);
    form.appendChild(simpanField);

    dateField.setAttribute("name", "game_id");
    dateField.setAttribute("value", url.searchParams.get("gameId"));
    form.appendChild(dateField);

    document.body.appendChild(form);
    form.submit();
    //self.close();

    /*
    document.location.href = document.location.href.replace('gameRecord', 'textRelay');
    document.getElementById('inning_tab_all').click();
    document.getElementById('relay_text').innerHTML;

    let form = document.createElement("form");
    let simpanField = document.createElement("input");
    let dateField = document.createElement("input");
    let textField = document.createElement("textarea");


    form.setAttribute("charset", "UTF-8");
    form.setAttribute("method", "Post");
    form.setAttribute("action", "http://localhost/dashboard/phpinfo.php");


    simpanField.setAttribute("name", "simpan");
    simpanField.setAttribute("value", simpan);
    form.appendChild(simpanField);

    dateField.setAttribute("name", "date");
    dateField.setAttribute("value", document.location.search.substring(8,16));
    form.appendChild(dateField);

    textField.setAttribute("name", "body");
    const textNode = document.createTextNode(document.getElementById('relay_text').innerHTML);
    textField.appendChild(textNode);
    form.appendChild(textField);

    document.body.appendChild(form);
    form.submit();
    self.close();

    var url = new URL(window.location.href);
    var c = url.searchParams.get("c");

    */
}
