#!/bin/sh

ssh $SSH_USER@$SSH_SERVER << EOF
    cd ~/app/website
    pwd
    ls -la
    echo "docker login"
    docker login registry.gitlab.com -u $USERNAME -p $TOKEN
    docker-compose -f docker-compose.yml down
    docker pull $IMAGE:nextjs
    docker-compose -f docker-compose.yml up -d
EOF