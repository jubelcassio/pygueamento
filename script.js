function generate_user_id(){
    dataLayer.push({
        event: "UserInfo",
        "user": {
            "userId": parseInt(Math.random() * 100000)
        }
    });
}

function change_history() {
    history.pushState({'page': 1}, '', 'a');
}

function virtual_page_view() {
    dataLayer.push({
        "event": "PageInfo",
        "page": {
            "virtual_path": "/virtual-page",
            "original_path": window.location.href
        }
    });
}