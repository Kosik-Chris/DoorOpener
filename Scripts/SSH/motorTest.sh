#!/usr/bin/expect
#connects to ssh zero pi for microcontroller
#THIS IS A MODIFIED VERSION (EDIT CONFIGS YOURSELF)
#Need to move forward in using SSH keys + encrypt!
spawn ssh host@ipv4
expect "password:"
sleep 1
send "your host's password"
sleep 1
send "cd Desktop\r"
send "node motorTest.js\r"
sleep 1
send "exit\r"
interact
