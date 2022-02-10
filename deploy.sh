#!/bin/sh

ssh $SSH_USER@$SSH_SERVER << 'ENDSSH'
    cd /home/potedev/app/website
    docker login registry.gitlab.com -u $USERNAME -p $TOKEN
    docker pull registry.gitlab.com/pote.dev/website:nextjs
    docker pull registry.gitlab.com/pote.dev/website:nginx
    docker-compose -f docker-compose.yml up -d --build
ENDSSH