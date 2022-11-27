#!/bin/bash

# The purpose of this script is to do things with files generated by
# 'create-react-app' after 'build' is run.
# 1. Move files to a new directory called 'user'
#    The resulting structure is 'build/user/static/<etc>'
# 2. Update reference on generated files from
#    static/<etc>
#     to
#    user/static/<etc>
#
# More details on: https://github.com/facebook/create-react-app/issues/3824

# Browse into './build/' directory
cd build
# Create './user/' directory
echo '1/4 Create "webapp" directory'
mkdir webapp
# Find all files, excluding (through 'grep'):
# - '.',
# - the newly created directory './user/'
# - all content for the directory'./static/'
# Move all matches to the directory './user/'
echo '2/4 Move relevant files'
find . | grep -Ev '^.$|^.\/user$|^.\/static\/.+' | xargs -I{} mv -v {} webapp