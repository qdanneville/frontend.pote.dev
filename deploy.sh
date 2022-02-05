#!/bin/sh

ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_SERVER:/home/potedev << 'ENDSSH'
    cd /app
    docker login registry.gitlab.com -u $USERNAME -p $TOKEN
    docker pull registry.gitlab.com/pote.dev/website:nextjs
    docker pull registry.gitlab.com/pote.dev/website:nginx
    docker-compose -f docker-compose.yml up -d --build
ENDSSH