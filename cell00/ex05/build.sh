#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: $0 folder_name1 [folder_name2 ...]"
    exit 1
fi

for arg in "$@"; do
    mkdir "ex$arg"
done
