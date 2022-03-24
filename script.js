function generate_user_id(){
    dataLayer.push({
        "UserInfo": {
            "userId": parseInt(Math.random() * 100000)
        }
    });
}

function change_history() {
    history.pushState({'page': 1}, '', 'a');
}

function virtual_page_view() {
    dataLayer.push({
        "PageInfo": {
            "page": "/virtual-page",
            "original_path": window.location.href
        }
    });
}