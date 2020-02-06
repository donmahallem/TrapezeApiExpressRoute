#!/bin/bash
if [ "$TEST_SUITE" == "unit" ]; then
    npm install coveralls --no-save -g
    cat ./coverage/lcov.info | coveralls -v
    echo "Coveralls Data uploaded"
fi
