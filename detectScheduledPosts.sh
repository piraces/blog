#!/usr/bin/env bash

scheduled_posts=( $(grep -rnw 'posts/' -e 'scheduled:' | cut -d ':' -f 1) )

for i in "${scheduled_posts[@]}"
do
   scheduled_time=$(cat $i | grep 'scheduled:' | cut -d ' ' -f 2)
   d1=$(date -d "now" +%s)
   d2=$(date -d "$scheduled_time" +%s)
   difference=$((d2 - d1))
   if [ $difference -le 0 ]; then
    exit 42
   else
    exit 0
   fi
done