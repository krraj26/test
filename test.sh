#!/bin/bash
if git ...
then
  echo "git succeeded"
fi

if ! git ...
then
  echo "git failed"
fi

git ... || echo "git failed"
git ... && echo "git succeeded"