fx_version 'cerulean'
game 'gta5'
author 'Francisco Fernández Morales'

client_scripts {
    'client/*.lua'
}

server_scripts {
    'server/*.lua'
}

shared_scripts {
    'shared/*.lua'
}

ui_page "web/dist/index.html"

files {
    "web/dist/*.html",
    "web/dist/assets/*.js",
    "web/dist/assets/*.css",
    "web/dist/assets/*.png",
    "web/dist/assets/*.jpg",
    "web/dist/assets/*.gif",
    "web/dist/assets/*.webp",
    "web/dist/assets/*.svg",
    "web/dist/assets/*.jpeg",
}