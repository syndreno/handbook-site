# Linux Mastery Handbook
## A Beginner-to-Advanced Practical Guide for Learning, Administration, Troubleshooting, Automation, DevOps, and Real-World Linux Work

> **Goal:** This handbook is designed to be a single master reference for Linux learners.  
> It starts from absolute basics and gradually moves into system administration, networking, shell scripting, security, troubleshooting, servers, containers, automation, and production-oriented practices.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What Is Linux?](#2-what-is-linux)
3. [Linux Architecture](#3-linux-architecture)
4. [Linux Distributions](#4-linux-distributions)
5. [Installing Linux and Virtual Labs](#5-installing-linux-and-virtual-labs)
6. [The Linux Terminal and Shell](#6-the-linux-terminal-and-shell)
7. [Understanding the Linux Filesystem](#7-understanding-the-linux-filesystem)
8. [Navigation Commands](#8-navigation-commands)
9. [Creating, Copying, Moving, and Deleting Files](#9-creating-copying-moving-and-deleting-files)
10. [Viewing and Reading Files](#10-viewing-and-reading-files)
11. [Finding Files and Searching Text](#11-finding-files-and-searching-text)
12. [Wildcards, Globbing, Quoting, and Expansion](#12-wildcards-globbing-quoting-and-expansion)
13. [Redirection and Pipes](#13-redirection-and-pipes)
14. [Text Processing Commands](#14-text-processing-commands)
15. [Users and Groups](#15-users-and-groups)
16. [Linux Permissions](#16-linux-permissions)
17. [Special Permissions](#17-special-permissions)
18. [sudo and Privilege Management](#18-sudo-and-privilege-management)
19. [Processes and Jobs](#19-processes-and-jobs)
20. [Signals and Process Control](#20-signals-and-process-control)
21. [Package Management](#21-package-management)
22. [Services and systemd](#22-services-and-systemd)
23. [Logs and journalctl](#23-logs-and-journalctl)
24. [Environment Variables](#24-environment-variables)
25. [Shell Configuration](#25-shell-configuration)
26. [Bash Scripting Fundamentals](#26-bash-scripting-fundamentals)
27. [Bash Scripting Intermediate Topics](#27-bash-scripting-intermediate-topics)
28. [Scheduling with cron and systemd Timers](#28-scheduling-with-cron-and-systemd-timers)
29. [Disk, Partition, and Filesystem Basics](#29-disk-partition-and-filesystem-basics)
30. [Mounting and /etc/fstab](#30-mounting-and-etcfstab)
31. [LVM](#31-lvm)
32. [Swap](#32-swap)
33. [RAID Concepts](#33-raid-concepts)
34. [File Archiving and Compression](#34-file-archiving-and-compression)
35. [Networking Fundamentals](#35-networking-fundamentals)
36. [Linux Networking Commands](#36-linux-networking-commands)
37. [DNS](#37-dns)
38. [SSH](#38-ssh)
39. [SCP, SFTP, and rsync](#39-scp-sftp-and-rsync)
40. [Firewalls](#40-firewalls)
41. [Web Servers](#41-web-servers)
42. [Databases on Linux](#42-databases-on-linux)
43. [Linux Security Basics](#43-linux-security-basics)
44. [SELinux and AppArmor](#44-selinux-and-apparmor)
45. [Resource Monitoring](#45-resource-monitoring)
46. [Performance Troubleshooting](#46-performance-troubleshooting)
47. [Boot Process](#47-boot-process)
48. [GRUB and Recovery](#48-grub-and-recovery)
49. [Kernel and Modules](#49-kernel-and-modules)
50. [Devices and udev](#50-devices-and-udev)
51. [Shared Libraries](#51-shared-libraries)
52. [System Information Commands](#52-system-information-commands)
53. [File Descriptors and Open Files](#53-file-descriptors-and-open-files)
54. [Links: Hard Links and Symbolic Links](#54-links-hard-links-and-symbolic-links)
55. [Linux ACLs](#55-linux-acls)
56. [SSH Hardening](#56-ssh-hardening)
57. [Linux Containers](#57-linux-containers)
58. [Docker Concepts for Linux Learners](#58-docker-concepts-for-linux-learners)
59. [Namespaces and cgroups](#59-namespaces-and-cgroups)
60. [Linux for DevOps](#60-linux-for-devops)
61. [Git on Linux](#61-git-on-linux)
62. [Production Troubleshooting Workflow](#62-production-troubleshooting-workflow)
63. [Common Real-World Scenarios](#63-common-real-world-scenarios)
64. [Important Configuration Files](#64-important-configuration-files)
65. [Essential Command Cheat Sheet](#65-essential-command-cheat-sheet)
66. [Linux Interview Topics](#66-linux-interview-topics)
67. [Hands-On Practice Labs](#67-hands-on-practice-labs)
68. [30-Day Linux Learning Roadmap](#68-30-day-linux-learning-roadmap)
69. [Common Mistakes to Avoid](#69-common-mistakes-to-avoid)
70. [Linux Mastery Checklist](#70-linux-mastery-checklist)

---

# 1. How to Use This Handbook

Linux is best learned by **doing**, not only by reading.

For every topic:

1. Read the explanation.
2. Run the command yourself.
3. Change the example.
4. Break something safely in a lab.
5. Fix it.
6. Write down what happened.

Recommended practice environment:

```text
Windows
  |
  +-- WSL2 Ubuntu
  |
  +-- VirtualBox / VMware
       |
       +-- Ubuntu Server
       +-- Rocky Linux / AlmaLinux
```

For DevOps or server administration, it is useful to learn both major Linux families:

```text
Debian family
├── Debian
└── Ubuntu

Red Hat family
├── RHEL
├── Rocky Linux
├── AlmaLinux
└── Fedora
```

---

# 2. What Is Linux?

Linux is technically the **kernel**.

The kernel is the core software layer between applications and computer hardware.

A complete Linux operating system normally consists of:

```text
Applications
    |
Shell / GUI
    |
System Utilities
    |
Libraries
    |
Linux Kernel
    |
Hardware
```

When people say:

```text
"I installed Linux"
```

they usually mean:

```text
Linux kernel + GNU utilities + package manager + desktop/server tools
```

Examples:

- Ubuntu
- Debian
- Fedora
- Rocky Linux
- AlmaLinux
- Arch Linux

## Why Linux Is Important

Linux is heavily used for:

- cloud servers
- web servers
- databases
- Kubernetes nodes
- Docker hosts
- DevOps pipelines
- cybersecurity
- networking appliances
- Android
- embedded systems
- supercomputers

If you want to become strong in:

- DevOps
- Cloud
- Backend Development
- Cybersecurity
- SRE
- Infrastructure
- Platform Engineering

then Linux is one of the most important skills to master.

---

# 3. Linux Architecture

The major layers are:

```text
User Applications
      |
Shell
      |
System Libraries
      |
Kernel
      |
Hardware
```

## Kernel

The kernel handles:

- CPU scheduling
- memory management
- device drivers
- networking
- process management
- filesystems
- security controls

Check kernel version:

```bash
uname -r
```

Full system information:

```bash
uname -a
```

## Shell

The shell is a command interpreter.

Popular shells:

```text
bash
zsh
sh
fish
ksh
```

Check current shell:

```bash
echo "$SHELL"
```

Example:

```bash
/bin/bash
```

---

# 4. Linux Distributions

A Linux distribution packages:

- Linux kernel
- package manager
- GNU utilities
- system libraries
- init system
- optional desktop environment

## Ubuntu

Good for:

- beginners
- developers
- cloud
- servers
- DevOps

Package manager:

```bash
apt
```

## Debian

Known for:

- stability
- large package repository
- servers

## Red Hat Enterprise Linux

Common in enterprises.

Package manager:

```bash
dnf
```

Older environments may use:

```bash
yum
```

## Rocky Linux / AlmaLinux

RHEL-compatible community distributions.

## Fedora

Newer technologies reach Fedora earlier.

## Arch Linux

Good for advanced learners wanting fine-grained control.

---

# 5. Installing Linux and Virtual Labs

You do not need to replace Windows to learn Linux.

## Option 1: WSL2

Useful for:

- Linux command learning
- shell scripting
- Git
- Python
- development

Example:

```powershell
wsl --install
```

## Option 2: Virtual Machine

Install:

- VirtualBox
- VMware Workstation

Create Linux VMs.

Recommended beginner VM:

```text
CPU: 2 cores
RAM: 4 GB
Disk: 30 GB
OS: Ubuntu Server
```

## Option 3: Cloud VM

Examples:

- AWS EC2
- Azure VM
- Google Compute Engine
- DigitalOcean

Cloud VMs are valuable for learning:

- SSH
- firewall rules
- web servers
- networking
- production-style administration

---

# 6. The Linux Terminal and Shell

A typical prompt:

```bash
shoeb@server01:~$
```

Meaning:

```text
shoeb       -> username
server01    -> hostname
~           -> current directory
$           -> normal user
```

Root often sees:

```bash
root@server01:~#
```

## Basic Command Structure

```bash
command option argument
```

Example:

```bash
ls -l /var/log
```

Where:

```text
ls        command
-l        option
/var/log  argument
```

## Command Help

```bash
command --help
```

Example:

```bash
ls --help
```

Manual pages:

```bash
man ls
```

Search manual:

```bash
man -k network
```

---

# 7. Understanding the Linux Filesystem

Linux uses a single filesystem tree starting at:

```text
/
```

Important directories:

| Directory | Purpose |
|---|---|
| `/` | Root filesystem |
| `/home` | User home directories |
| `/root` | Root user's home |
| `/etc` | System configuration |
| `/var` | Logs and variable data |
| `/tmp` | Temporary files |
| `/usr` | Programs and libraries |
| `/bin` | Essential commands |
| `/sbin` | System administration commands |
| `/opt` | Optional third-party software |
| `/dev` | Device files |
| `/proc` | Runtime process/kernel information |
| `/sys` | Kernel and device information |
| `/boot` | Bootloader and kernel files |
| `/mnt` | Temporary mounts |
| `/media` | Removable media |
| `/srv` | Service data |

## Example

Apache/Nginx configuration often lives under:

```text
/etc
```

Logs commonly live under:

```text
/var/log
```

Application files may live under:

```text
/opt/myapp
```

---

# 8. Navigation Commands

## pwd

Shows current directory.

```bash
pwd
```

Example:

```text
/home/shoeb
```

## ls

List files.

```bash
ls
```

Detailed listing:

```bash
ls -l
```

Show hidden files:

```bash
ls -a
```

Human-readable sizes:

```bash
ls -lh
```

All combined:

```bash
ls -lah
```

## cd

Change directory.

```bash
cd /var/log
```

Go home:

```bash
cd ~
```

Go one level up:

```bash
cd ..
```

Previous directory:

```bash
cd -
```

## Absolute vs Relative Paths

Absolute:

```text
/var/log/nginx/access.log
```

Relative:

```text
logs/access.log
```

Example:

```bash
cd /var
cd log
```

is equivalent to:

```bash
cd /var/log
```

---

# 9. Creating, Copying, Moving, and Deleting Files

## touch

Create an empty file.

```bash
touch notes.txt
```

Create multiple:

```bash
touch file1 file2 file3
```

## mkdir

Create directory:

```bash
mkdir project
```

Nested directories:

```bash
mkdir -p project/src/components
```

## cp

Copy a file:

```bash
cp source.txt backup.txt
```

Copy directory:

```bash
cp -r project project_backup
```

Preserve attributes:

```bash
cp -a project project_backup
```

## mv

Move file:

```bash
mv file.txt /tmp/
```

Rename:

```bash
mv old.txt new.txt
```

## rm

Delete:

```bash
rm file.txt
```

Delete directory recursively:

```bash
rm -r folder
```

Force:

```bash
rm -rf folder
```

> `rm -rf` is powerful and dangerous. Always verify the path.

Safer pattern:

```bash
ls /path/to/delete
rm -rf /path/to/delete
```

---

# 10. Viewing and Reading Files

## cat

Display file:

```bash
cat config.txt
```

Combine files:

```bash
cat file1 file2
```

## less

Useful for large files:

```bash
less /var/log/syslog
```

Important keys:

```text
Space      next page
b          previous page
/word      search
n          next result
q          quit
```

## head

First 10 lines:

```bash
head file.txt
```

First 20:

```bash
head -n 20 file.txt
```

## tail

Last 10:

```bash
tail file.txt
```

Follow live log:

```bash
tail -f /var/log/nginx/access.log
```

Last 100 and follow:

```bash
tail -n 100 -f application.log
```

---

# 11. Finding Files and Searching Text

## find

Find file by name:

```bash
find /home -name "config.php"
```

Case insensitive:

```bash
find /home -iname "CONFIG.php"
```

Find directories:

```bash
find /var -type d -name "cache"
```

Files larger than 100 MB:

```bash
find / -type f -size +100M 2>/dev/null
```

Files modified in last day:

```bash
find /var/log -type f -mtime -1
```

Delete matching files carefully:

```bash
find /tmp -type f -name "*.tmp" -delete
```

## locate

Fast filename search:

```bash
locate nginx.conf
```

Database may require:

```bash
sudo updatedb
```

## grep

Search text:

```bash
grep "ERROR" app.log
```

Ignore case:

```bash
grep -i "error" app.log
```

Show line number:

```bash
grep -n "ERROR" app.log
```

Recursive:

```bash
grep -R "database_host" /etc/myapp
```

Multiple patterns:

```bash
grep -E "ERROR|WARNING|CRITICAL" app.log
```

Count matches:

```bash
grep -c "ERROR" app.log
```

---

# 12. Wildcards, Globbing, Quoting, and Expansion

## `*`

Matches any number of characters.

```bash
ls *.log
```

## `?`

Matches one character.

```bash
ls file?.txt
```

Matches:

```text
file1.txt
fileA.txt
```

## Character Range

```bash
ls file[1-5].txt
```

## Brace Expansion

```bash
mkdir project_{dev,test,prod}
```

Creates:

```text
project_dev
project_test
project_prod
```

## Single Quotes

No variable expansion:

```bash
echo '$HOME'
```

Output:

```text
$HOME
```

## Double Quotes

Variable expansion happens:

```bash
echo "$HOME"
```

## Command Substitution

```bash
echo "Today is $(date)"
```

---

# 13. Redirection and Pipes

Linux programs commonly use:

```text
stdin   standard input
stdout  standard output
stderr  standard error
```

File descriptor numbers:

```text
0 stdin
1 stdout
2 stderr
```

## Redirect Output

```bash
ls > files.txt
```

Overwrite file.

Append:

```bash
ls >> files.txt
```

## Redirect Errors

```bash
command 2> errors.log
```

Discard errors:

```bash
command 2>/dev/null
```

Redirect both stdout and stderr:

```bash
command > output.log 2>&1
```

Modern Bash:

```bash
command &> output.log
```

## Pipe

Send output of one command into another:

```bash
ps aux | grep nginx
```

Examples:

```bash
cat access.log | grep "500"
```

Better:

```bash
grep "500" access.log
```

Count users:

```bash
cut -d: -f1 /etc/passwd | wc -l
```

---

# 14. Text Processing Commands

These commands are extremely important in Linux automation.

## wc

Count lines:

```bash
wc -l file.txt
```

Words:

```bash
wc -w file.txt
```

## sort

```bash
sort names.txt
```

Numeric:

```bash
sort -n numbers.txt
```

Reverse:

```bash
sort -r names.txt
```

## uniq

Remove consecutive duplicates:

```bash
sort names.txt | uniq
```

Count duplicates:

```bash
sort names.txt | uniq -c
```

## cut

Example `/etc/passwd`:

```text
root:x:0:0:root:/root:/bin/bash
```

Extract usernames:

```bash
cut -d: -f1 /etc/passwd
```

## tr

Convert lowercase to uppercase:

```bash
echo "linux" | tr 'a-z' 'A-Z'
```

## sed

Replace text:

```bash
sed 's/http/https/' file.txt
```

Replace globally per line:

```bash
sed 's/dev/prod/g' config.txt
```

Edit file in place:

```bash
sed -i 's/dev/prod/g' config.txt
```

## awk

Print columns:

```bash
awk '{print $1}' file.txt
```

Filesystem example:

```bash
df -h | awk '{print $1, $5}'
```

Filter:

```bash
awk '$3 > 80 {print $1, $3}' data.txt
```

Real log scenario:

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head
```

This can show top IP addresses.

---

# 15. Users and Groups

Linux is a multi-user operating system.

## Current User

```bash
whoami
```

## User Identity

```bash
id
```

Example:

```text
uid=1000(shoeb) gid=1000(shoeb) groups=1000(shoeb),27(sudo)
```

## `/etc/passwd`

Contains user information:

```bash
cat /etc/passwd
```

Format:

```text
username:x:UID:GID:description:home:shell
```

## `/etc/shadow`

Password-related information.

```bash
sudo cat /etc/shadow
```

Only privileged users should access it.

## Add User

Ubuntu/Debian friendly command:

```bash
sudo adduser developer
```

Low-level:

```bash
sudo useradd -m developer
```

## Set Password

```bash
sudo passwd developer
```

## Delete User

```bash
sudo userdel developer
```

Delete home too:

```bash
sudo userdel -r developer
```

## Groups

Create:

```bash
sudo groupadd devops
```

Add user:

```bash
sudo usermod -aG devops developer
```

Check:

```bash
groups developer
```

---

# 16. Linux Permissions

Run:

```bash
ls -l file.txt
```

Example:

```text
-rwxr-xr--
```

Breakdown:

```text
- | rwx | r-x | r--
    user  group other
```

Permission values:

```text
r = read
w = write
x = execute
```

Numeric:

```text
r = 4
w = 2
x = 1
```

Examples:

```text
7 = rwx
6 = rw-
5 = r-x
4 = r--
```

## chmod

```bash
chmod 755 script.sh
```

Means:

```text
owner: rwx
group: r-x
other: r-x
```

Private file:

```bash
chmod 600 secret.txt
```

Common permissions:

```text
644 normal file
755 executable/directory
600 private credentials
700 private directory/script
```

Symbolic:

```bash
chmod u+x script.sh
chmod g-w file.txt
chmod o-r file.txt
```

## chown

Change owner:

```bash
sudo chown shoeb file.txt
```

Owner and group:

```bash
sudo chown shoeb:developers file.txt
```

Recursive:

```bash
sudo chown -R www-data:www-data /var/www/app
```

---

# 17. Special Permissions

## SUID

Executable runs with file owner's effective permission.

Example:

```bash
ls -l /usr/bin/passwd
```

Often shows:

```text
-rwsr-xr-x
```

Set:

```bash
chmod u+s executable
```

Numeric:

```bash
chmod 4755 executable
```

## SGID

On directories, new files inherit directory group.

```bash
chmod g+s shared_dir
```

Numeric:

```bash
chmod 2775 shared_dir
```

Useful for shared team folders.

## Sticky Bit

Common on `/tmp`.

```bash
ls -ld /tmp
```

Example:

```text
drwxrwxrwt
```

Users cannot delete files owned by other users.

Set:

```bash
chmod +t shared
```

Numeric:

```bash
chmod 1777 shared
```

---

# 18. sudo and Privilege Management

Root has unrestricted privileges.

Avoid logging in as root for daily tasks.

Use:

```bash
sudo command
```

Example:

```bash
sudo systemctl restart nginx
```

Edit sudo configuration safely:

```bash
sudo visudo
```

Example:

```text
%devops ALL=(ALL:ALL) ALL
```

Allow specific command:

```text
developer ALL=(root) /usr/bin/systemctl restart nginx
```

This follows the principle of least privilege.

---

# 19. Processes and Jobs

A process is a running program.

## ps

```bash
ps
```

All processes:

```bash
ps aux
```

Tree:

```bash
ps auxf
```

Search:

```bash
ps aux | grep nginx
```

Better:

```bash
pgrep nginx
```

Detailed:

```bash
pgrep -a nginx
```

## top

```bash
top
```

Shows:

- CPU
- RAM
- processes
- load

## htop

More interactive:

```bash
htop
```

May require installation.

## Background Processes

```bash
command &
```

Example:

```bash
sleep 100 &
```

## jobs

```bash
jobs
```

## fg

Bring to foreground:

```bash
fg %1
```

## bg

Continue stopped job in background:

```bash
bg %1
```

## nohup

Keep process running after terminal closes:

```bash
nohup python app.py > app.log 2>&1 &
```

---

# 20. Signals and Process Control

Signals tell a process to perform an action.

Common signals:

| Signal | Number | Meaning |
|---|---:|---|
| SIGHUP | 1 | Hangup/reload |
| SIGINT | 2 | Interrupt |
| SIGTERM | 15 | Graceful terminate |
| SIGKILL | 9 | Force kill |

Graceful stop:

```bash
kill PID
```

Equivalent:

```bash
kill -15 PID
```

Force:

```bash
kill -9 PID
```

Kill by name:

```bash
pkill nginx
```

Important rule:

Use SIGTERM before SIGKILL whenever possible.

---

# 21. Package Management

## Debian / Ubuntu

Update package metadata:

```bash
sudo apt update
```

Upgrade:

```bash
sudo apt upgrade
```

Install:

```bash
sudo apt install nginx
```

Remove:

```bash
sudo apt remove nginx
```

Search:

```bash
apt search nginx
```

Show package:

```bash
apt show nginx
```

## RHEL / Rocky / AlmaLinux / Fedora

Install:

```bash
sudo dnf install nginx
```

Update:

```bash
sudo dnf upgrade
```

Remove:

```bash
sudo dnf remove nginx
```

Search:

```bash
dnf search nginx
```

## RPM

List installed:

```bash
rpm -qa
```

Package details:

```bash
rpm -qi package
```

---

# 22. Services and systemd

Most modern Linux distributions use `systemd`.

A service is a long-running application managed by the system.

Examples:

- nginx
- ssh
- mysql
- docker

## Start Service

```bash
sudo systemctl start nginx
```

## Stop

```bash
sudo systemctl stop nginx
```

## Restart

```bash
sudo systemctl restart nginx
```

## Reload

```bash
sudo systemctl reload nginx
```

## Status

```bash
systemctl status nginx
```

## Enable at Boot

```bash
sudo systemctl enable nginx
```

Start now and enable:

```bash
sudo systemctl enable --now nginx
```

## Disable

```bash
sudo systemctl disable nginx
```

## List Failed Units

```bash
systemctl --failed
```

## Unit Files

Common location:

```text
/etc/systemd/system/
```

Example custom service:

```ini
[Unit]
Description=My Application
After=network.target

[Service]
User=appuser
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Save:

```text
/etc/systemd/system/myapp.service
```

Reload:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now myapp
```

---

# 23. Logs and journalctl

Linux troubleshooting depends heavily on logs.

## journalctl

All logs:

```bash
journalctl
```

Current boot:

```bash
journalctl -b
```

Specific service:

```bash
journalctl -u nginx
```

Follow:

```bash
journalctl -u nginx -f
```

Recent:

```bash
journalctl -u nginx --since "1 hour ago"
```

Priority errors:

```bash
journalctl -p err
```

Kernel logs:

```bash
journalctl -k
```

## Traditional Logs

Common:

```text
/var/log/syslog
/var/log/messages
/var/log/auth.log
/var/log/secure
/var/log/nginx/
/var/log/apache2/
```

Distribution differences matter.

---

# 24. Environment Variables

Variables hold values for applications and shells.

List:

```bash
env
```

Example:

```bash
echo "$PATH"
```

Set temporary variable:

```bash
APP_ENV=production
```

Export:

```bash
export APP_ENV=production
```

Verify:

```bash
echo "$APP_ENV"
```

## PATH

`PATH` tells Linux where to search for commands.

```bash
echo "$PATH"
```

Example:

```text
/usr/local/bin:/usr/bin:/bin
```

Add:

```bash
export PATH="$PATH:$HOME/bin"
```

---

# 25. Shell Configuration

Important Bash files:

```text
~/.bashrc
~/.bash_profile
~/.profile
/etc/profile
```

Aliases:

```bash
alias ll='ls -lah'
```

Persistent alias in `~/.bashrc`:

```bash
echo "alias ll='ls -lah'" >> ~/.bashrc
source ~/.bashrc
```

Useful aliases:

```bash
alias gs='git status'
alias c='clear'
alias ..='cd ..'
```

Be cautious with destructive aliases such as replacing `rm`.

---

# 26. Bash Scripting Fundamentals

Create:

```bash
nano hello.sh
```

Content:

```bash
#!/usr/bin/env bash

echo "Hello Linux"
```

Make executable:

```bash
chmod +x hello.sh
```

Run:

```bash
./hello.sh
```

## Variables

```bash
name="Shoeb"
echo "$name"
```

No spaces around `=`:

Wrong:

```bash
name = "Shoeb"
```

Correct:

```bash
name="Shoeb"
```

## User Input

```bash
read -r -p "Enter your name: " name
echo "Hello $name"
```

## Arguments

```bash
#!/usr/bin/env bash

echo "Script: $0"
echo "First: $1"
echo "Second: $2"
echo "Count: $#"
```

Run:

```bash
./script.sh hello world
```

## Exit Status

```bash
echo $?
```

Convention:

```text
0 = success
non-zero = error
```

Example:

```bash
mkdir /tmp/test

if [ $? -eq 0 ]; then
    echo "Success"
fi
```

Better:

```bash
if mkdir /tmp/test; then
    echo "Success"
fi
```

## Condition

```bash
if [ "$age" -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi
```

String:

```bash
if [ "$env" = "prod" ]; then
    echo "Production"
fi
```

File exists:

```bash
if [ -f config.ini ]; then
    echo "File exists"
fi
```

Directory:

```bash
if [ -d /var/log ]; then
    echo "Directory exists"
fi
```

## Loops

For:

```bash
for server in web1 web2 web3; do
    echo "$server"
done
```

While:

```bash
count=1

while [ "$count" -le 5 ]; do
    echo "$count"
    count=$((count + 1))
done
```

## Functions

```bash
backup() {
    echo "Backing up $1"
}

backup "/etc"
```

---

# 27. Bash Scripting Intermediate Topics

## Strict Mode

Common production-friendly beginning:

```bash
#!/usr/bin/env bash
set -euo pipefail
```

Meaning:

```text
-e        exit on failed command
-u        fail on undefined variable
-o pipefail detect errors inside pipelines
```

Be aware that `set -e` has edge cases, so still handle expected failures explicitly.

## Arrays

```bash
servers=("web1" "web2" "db1")

for server in "${servers[@]}"; do
    echo "$server"
done
```

## Case

```bash
case "$1" in
    start)
        echo "Starting"
        ;;
    stop)
        echo "Stopping"
        ;;
    restart)
        echo "Restarting"
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac
```

## Arithmetic

```bash
a=10
b=20
result=$((a + b))
echo "$result"
```

## Command Substitution

```bash
today=$(date +%F)
```

## Here Document

```bash
cat <<EOF
Application: billing
Environment: production
Date: $(date)
EOF
```

## Logging Function

```bash
log() {
    printf '%s %s\n' "$(date '+%F %T')" "$*"
}
```

## Example: Disk Usage Alert

```bash
#!/usr/bin/env bash
set -euo pipefail

threshold=80

usage=$(df / | awk 'NR==2 {gsub("%","",$5); print $5}')

if [ "$usage" -ge "$threshold" ]; then
    echo "WARNING: root filesystem usage is ${usage}%"
else
    echo "Disk usage normal: ${usage}%"
fi
```

---

# 28. Scheduling with cron and systemd Timers

## cron

Edit user cron:

```bash
crontab -e
```

List:

```bash
crontab -l
```

Format:

```text
minute hour day month weekday command
```

Example:

```cron
0 2 * * * /home/shoeb/backup.sh
```

Runs every day at 2 AM.

Every 5 minutes:

```cron
*/5 * * * * /opt/app/check.sh
```

Important:

cron has a limited environment. Use full paths where appropriate.

Example:

```cron
0 2 * * * /usr/bin/python3 /opt/app/backup.py >> /var/log/backup.log 2>&1
```

## systemd Timers

More powerful alternative.

Service:

```ini
[Unit]
Description=Run backup

[Service]
Type=oneshot
ExecStart=/opt/scripts/backup.sh
```

Timer:

```ini
[Unit]
Description=Daily Backup Timer

[Timer]
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

List timers:

```bash
systemctl list-timers
```

---

# 29. Disk, Partition, and Filesystem Basics

## lsblk

```bash
lsblk
```

Example:

```text
sda
├─sda1
├─sda2
└─sda3
```

## fdisk

List partitions:

```bash
sudo fdisk -l
```

Interactive partitioning:

```bash
sudo fdisk /dev/sdb
```

Be careful—incorrect partition operations can destroy data.

## blkid

```bash
sudo blkid
```

Shows UUID and filesystem types.

## df

Filesystem usage:

```bash
df -h
```

Inodes:

```bash
df -i
```

## du

Directory usage:

```bash
du -sh /var/log
```

Largest children:

```bash
du -h /var | sort -h | tail
```

Better for top-level:

```bash
du -xh --max-depth=1 /var | sort -h
```

## Filesystem Types

Common:

```text
ext4
xfs
btrfs
vfat
tmpfs
```

Create ext4:

```bash
sudo mkfs.ext4 /dev/sdb1
```

Create XFS:

```bash
sudo mkfs.xfs /dev/sdb1
```

---

# 30. Mounting and /etc/fstab

Linux needs filesystems mounted into the directory tree.

Create mount point:

```bash
sudo mkdir -p /data
```

Mount:

```bash
sudo mount /dev/sdb1 /data
```

Check:

```bash
findmnt /data
```

Unmount:

```bash
sudo umount /data
```

## Persistent Mount

Edit:

```text
/etc/fstab
```

Prefer UUID.

Get UUID:

```bash
blkid /dev/sdb1
```

Example:

```fstab
UUID=1234-abcd /data ext4 defaults 0 2
```

Test before reboot:

```bash
sudo mount -a
```

If this returns errors, fix them before reboot.

---

# 31. LVM

LVM = Logical Volume Manager.

It adds flexibility between physical disks and filesystems.

Architecture:

```text
Physical Disk
    |
Physical Volume (PV)
    |
Volume Group (VG)
    |
Logical Volume (LV)
    |
Filesystem
```

Create PV:

```bash
sudo pvcreate /dev/sdb
```

Create VG:

```bash
sudo vgcreate vgdata /dev/sdb
```

Create LV:

```bash
sudo lvcreate -L 10G -n lvapp vgdata
```

Format:

```bash
sudo mkfs.ext4 /dev/vgdata/lvapp
```

Extend:

```bash
sudo lvextend -L +5G /dev/vgdata/lvapp
```

For ext4:

```bash
sudo resize2fs /dev/vgdata/lvapp
```

For XFS:

```bash
sudo xfs_growfs /mountpoint
```

Useful commands:

```bash
pvs
vgs
lvs
```

---

# 32. Swap

Swap is disk space used to support memory management.

Check:

```bash
swapon --show
free -h
```

Create swap file:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Persist in `/etc/fstab`:

```fstab
/swapfile none swap sw 0 0
```

Swappiness:

```bash
cat /proc/sys/vm/swappiness
```

Temporary change:

```bash
sudo sysctl vm.swappiness=10
```

---

# 33. RAID Concepts

RAID combines disks for redundancy and/or performance.

## RAID 0

Striping.

```text
Performance: high
Redundancy: none
```

If one disk fails, array fails.

## RAID 1

Mirroring.

```text
2 disks
1 copy on each disk
```

Good redundancy.

## RAID 5

Requires at least 3 disks.

Uses parity.

## RAID 6

Can survive 2 disk failures.

## RAID 10

Mirror + stripe.

Often used for performance plus redundancy.

Linux software RAID often uses:

```bash
mdadm
```

---

# 34. File Archiving and Compression

## tar

Create archive:

```bash
tar -cf backup.tar /etc/nginx
```

Extract:

```bash
tar -xf backup.tar
```

gzip:

```bash
tar -czf backup.tar.gz /etc/nginx
```

Extract:

```bash
tar -xzf backup.tar.gz
```

bzip2:

```bash
tar -cjf backup.tar.bz2 directory
```

xz:

```bash
tar -cJf backup.tar.xz directory
```

## gzip

```bash
gzip file.log
```

Decompress:

```bash
gunzip file.log.gz
```

## zip

```bash
zip -r archive.zip folder
```

Extract:

```bash
unzip archive.zip
```

---

# 35. Networking Fundamentals

Before Linux networking commands, understand these concepts.

## IP Address

Example:

```text
192.168.1.50
```

## Subnet

Example:

```text
192.168.1.0/24
```

Typical usable host range:

```text
192.168.1.1 - 192.168.1.254
```

## Default Gateway

Router used to reach other networks.

Example:

```text
192.168.1.1
```

## DNS

Converts:

```text
google.com
```

into an IP address.

## Ports

Examples:

| Service | Port |
|---|---:|
| SSH | 22 |
| HTTP | 80 |
| HTTPS | 443 |
| DNS | 53 |
| MySQL | 3306 |
| PostgreSQL | 5432 |

## TCP vs UDP

TCP:

- connection-oriented
- reliable
- ordered delivery

UDP:

- no connection handshake
- lower overhead
- useful for DNS, streaming, telemetry, etc.

---

# 36. Linux Networking Commands

## ip

Show addresses:

```bash
ip addr
```

Short:

```bash
ip a
```

Routes:

```bash
ip route
```

Interfaces:

```bash
ip link
```

## ping

```bash
ping 8.8.8.8
```

Test DNS too:

```bash
ping google.com
```

Interpretation:

- IP ping works but hostname fails -> likely DNS issue.
- gateway ping fails -> local network issue.
- remote IP fails -> route/firewall/connectivity issue.

## ss

Listening ports:

```bash
ss -tuln
```

Include process:

```bash
sudo ss -tulpn
```

Established connections:

```bash
ss -tan
```

## curl

HTTP request:

```bash
curl https://example.com
```

Headers:

```bash
curl -I https://example.com
```

Verbose:

```bash
curl -v https://example.com
```

Local health endpoint:

```bash
curl http://127.0.0.1:8080/health
```

## wget

Download:

```bash
wget https://example.com/file.zip
```

## traceroute

```bash
traceroute example.com
```

## mtr

Combines ping and traceroute:

```bash
mtr example.com
```

## Network Troubleshooting Pattern

```text
1. Is interface UP?
2. Does it have IP?
3. Is route present?
4. Can gateway respond?
5. Can remote IP respond?
6. Does DNS resolve?
7. Is port open?
8. Is application listening?
9. Is firewall blocking?
10. Is proxy/load balancer involved?
```

---

# 37. DNS

Check resolution:

```bash
getent hosts example.com
```

Using `dig`:

```bash
dig example.com
```

Specific record:

```bash
dig example.com A
dig example.com MX
dig example.com TXT
```

Nameserver configuration:

```bash
cat /etc/resolv.conf
```

Depending on distribution, DNS may be managed by:

- NetworkManager
- systemd-resolved
- cloud-init
- DHCP

Check systemd-resolved:

```bash
resolvectl status
```

---

# 38. SSH

SSH provides secure remote access.

Connect:

```bash
ssh user@server
```

Custom port:

```bash
ssh -p 2222 user@server
```

## SSH Keys

Create:

```bash
ssh-keygen -t ed25519
```

Public key:

```text
~/.ssh/id_ed25519.pub
```

Private key:

```text
~/.ssh/id_ed25519
```

Never share the private key.

Copy public key:

```bash
ssh-copy-id user@server
```

## Permissions

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_ed25519
```

## SSH Config

```text
~/.ssh/config
```

Example:

```sshconfig
Host production
    HostName 10.10.10.50
    User deploy
    Port 22
    IdentityFile ~/.ssh/id_ed25519
```

Then:

```bash
ssh production
```

---

# 39. SCP, SFTP, and rsync

## SCP

Local to remote:

```bash
scp file.txt user@server:/tmp/
```

Remote to local:

```bash
scp user@server:/var/log/app.log .
```

Recursive:

```bash
scp -r project user@server:/opt/
```

## SFTP

```bash
sftp user@server
```

Common commands:

```text
ls
cd
lcd
get
put
exit
```

## rsync

Excellent for synchronization and backups.

```bash
rsync -av source/ destination/
```

Remote:

```bash
rsync -avz project/ user@server:/opt/project/
```

Delete destination files not present in source:

```bash
rsync -av --delete source/ destination/
```

Dry run first:

```bash
rsync -av --delete --dry-run source/ destination/
```

---

# 40. Firewalls

## UFW

Common on Ubuntu.

Status:

```bash
sudo ufw status
```

Enable:

```bash
sudo ufw enable
```

Allow SSH:

```bash
sudo ufw allow 22/tcp
```

Allow HTTP/HTTPS:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## firewalld

Common on RHEL-family systems.

Status:

```bash
sudo firewall-cmd --state
```

List:

```bash
sudo firewall-cmd --list-all
```

Allow HTTP permanently:

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

## nftables

Modern Linux packet filtering framework.

List rules:

```bash
sudo nft list ruleset
```

---

# 41. Web Servers

## Nginx

Install:

```bash
sudo apt install nginx
```

Check:

```bash
systemctl status nginx
```

Config commonly:

```text
/etc/nginx/nginx.conf
/etc/nginx/sites-available/
/etc/nginx/sites-enabled/
```

Test:

```bash
sudo nginx -t
```

Reload:

```bash
sudo systemctl reload nginx
```

Example server block:

```nginx
server {
    listen 80;
    server_name app.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Apache HTTP Server

Ubuntu service:

```bash
apache2
```

RHEL service:

```bash
httpd
```

Ubuntu config:

```text
/etc/apache2/
```

RHEL config:

```text
/etc/httpd/
```

---

# 42. Databases on Linux

Typical database services:

```text
mysql
mariadb
postgresql
redis
```

Check service:

```bash
systemctl status mysql
```

Port:

```bash
sudo ss -tulpn | grep 3306
```

Logs:

```bash
journalctl -u mysql
```

Database troubleshooting often involves:

```text
1. Is service running?
2. Is port listening?
3. Is bind address correct?
4. Is firewall open?
5. Is database user allowed remotely?
6. Is DNS correct?
7. Is storage full?
8. Are there too many connections?
```

---

# 43. Linux Security Basics

Security should be layered.

Core principles:

- least privilege
- patch systems
- disable unnecessary services
- restrict network exposure
- use SSH keys
- protect secrets
- audit logs
- use file permissions properly
- keep backups
- monitor changes

## Check Open Ports

```bash
sudo ss -tulpn
```

Every listening service should have a reason to exist.

## Failed Login Attempts

Ubuntu/Debian:

```bash
grep "Failed password" /var/log/auth.log
```

RHEL-family:

```bash
grep "Failed password" /var/log/secure
```

Using journal:

```bash
journalctl -u ssh
```

or:

```bash
journalctl -u sshd
```

## Password Aging

```bash
chage -l username
```

## Lock Account

```bash
sudo passwd -l username
```

Unlock:

```bash
sudo passwd -u username
```

---

# 44. SELinux and AppArmor

These provide Mandatory Access Control.

## SELinux

Common on RHEL-family systems.

Check:

```bash
getenforce
```

Possible:

```text
Enforcing
Permissive
Disabled
```

Status:

```bash
sestatus
```

Do not disable SELinux immediately when something fails.

Investigate context and denials.

View:

```bash
ausearch -m AVC
```

File contexts:

```bash
ls -Z
```

Restore:

```bash
restorecon -Rv /var/www
```

## AppArmor

Common on Ubuntu.

Status:

```bash
sudo aa-status
```

Profiles restrict what applications can access.

---

# 45. Resource Monitoring

## CPU

```bash
top
```

Load average:

```bash
uptime
```

Example:

```text
load average: 0.45, 0.30, 0.20
```

Represents approximately:

```text
1 minute
5 minutes
15 minutes
```

Interpret relative to CPU count.

Check cores:

```bash
nproc
```

## Memory

```bash
free -h
```

Important fields:

- total
- used
- available
- swap

Linux uses free RAM for cache, so do not interpret low "free" memory alone as a problem.

## Disk

```bash
df -h
```

Directory:

```bash
du -sh /var/log
```

## I/O

If installed:

```bash
iostat -xz 1
```

## Process Memory

```bash
ps aux --sort=-%mem | head
```

CPU:

```bash
ps aux --sort=-%cpu | head
```

---

# 46. Performance Troubleshooting

Use a structured approach.

## CPU High

Check:

```bash
top
ps aux --sort=-%cpu | head
```

Then ask:

- which process?
- expected workload?
- one core or all cores?
- high system CPU?
- runaway loop?
- compression/encryption?
- database query?

## Memory High

```bash
free -h
ps aux --sort=-%mem | head
```

Look for:

- memory leaks
- oversized JVM/Node/Python workers
- caching
- too many workers
- swap activity
- OOM kills

Search OOM:

```bash
journalctl -k | grep -i oom
```

## Disk Full

```bash
df -h
```

Find largest top-level directories:

```bash
sudo du -xhd1 / | sort -h
```

Then drill down:

```bash
sudo du -xhd1 /var | sort -h
```

Common causes:

- logs
- Docker data
- database files
- old backups
- package cache
- temporary files

## Inodes Full

Filesystem may show free GB but fail to create files.

Check:

```bash
df -i
```

Cause can be millions of tiny files.

## I/O Slow

```bash
iostat -xz 1
```

Also:

```bash
vmstat 1
```

Look for:

- disk utilization
- wait time
- I/O wait
- swapping

---

# 47. Boot Process

Simplified boot flow:

```text
Power On
  |
BIOS / UEFI
  |
Bootloader (GRUB)
  |
Linux Kernel
  |
initramfs
  |
systemd PID 1
  |
services
  |
login
```

## systemd Targets

Examples:

```text
multi-user.target
graphical.target
rescue.target
emergency.target
```

Default:

```bash
systemctl get-default
```

Change:

```bash
sudo systemctl set-default multi-user.target
```

---

# 48. GRUB and Recovery

GRUB is a common Linux bootloader.

Configuration often:

```text
/etc/default/grub
```

Generated config depends on distribution.

Ubuntu:

```bash
sudo update-grub
```

RHEL-family often:

```bash
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

Recovery concepts:

- rescue mode
- emergency mode
- single-user access
- filesystem repair
- reset root password
- regenerate initramfs
- fix fstab mistakes

One very common boot failure:

```text
Bad /etc/fstab entry
```

Always test:

```bash
sudo mount -a
```

before reboot after editing `fstab`.

---

# 49. Kernel and Modules

Kernel:

```bash
uname -r
```

Loaded modules:

```bash
lsmod
```

Module info:

```bash
modinfo module_name
```

Load:

```bash
sudo modprobe module_name
```

Remove:

```bash
sudo modprobe -r module_name
```

Kernel parameters:

```bash
sysctl -a
```

Example:

```bash
sysctl net.ipv4.ip_forward
```

Temporary enable:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

Persistent settings commonly go in:

```text
/etc/sysctl.conf
/etc/sysctl.d/
```

---

# 50. Devices and udev

Linux represents many devices in:

```text
/dev
```

Examples:

```text
/dev/sda
/dev/nvme0n1
/dev/null
/dev/random
/dev/tty
```

## `/dev/null`

Discard output:

```bash
command >/dev/null 2>&1
```

## udev

Device manager for Linux.

Inspect device:

```bash
udevadm info /dev/sda
```

Monitor events:

```bash
udevadm monitor
```

---

# 51. Shared Libraries

Linux applications depend on shared libraries.

Check dependencies:

```bash
ldd /usr/bin/curl
```

Library cache:

```bash
ldconfig -p
```

Common library paths:

```text
/lib
/usr/lib
/usr/local/lib
```

A frequent production error:

```text
error while loading shared libraries
```

Troubleshoot with:

```bash
ldd application
```

and package ownership tools.

---

# 52. System Information Commands

Hostname:

```bash
hostname
hostnamectl
```

OS:

```bash
cat /etc/os-release
```

CPU:

```bash
lscpu
```

Memory:

```bash
free -h
```

Storage:

```bash
lsblk
```

PCI devices:

```bash
lspci
```

USB:

```bash
lsusb
```

Uptime:

```bash
uptime
```

Date/time:

```bash
date
timedatectl
```

Architecture:

```bash
uname -m
```

---

# 53. File Descriptors and Open Files

Processes interact with files, sockets, pipes, etc. using file descriptors.

Standard:

```text
0 stdin
1 stdout
2 stderr
```

Inspect process file descriptors:

```bash
ls -l /proc/PID/fd
```

## lsof

Open files:

```bash
sudo lsof
```

Who uses port 8080:

```bash
sudo lsof -i :8080
```

Which process has file open:

```bash
sudo lsof /var/log/app.log
```

Deleted but still consuming disk:

```bash
sudo lsof +L1
```

This is a very useful production troubleshooting command.

---

# 54. Links: Hard Links and Symbolic Links

## Symbolic Link

Like a shortcut.

```bash
ln -s /opt/app/current /usr/local/app
```

View:

```bash
ls -l
```

If target disappears, symlink becomes broken.

## Hard Link

```bash
ln source.txt hardlink.txt
```

Both entries point to same inode data.

Check inode:

```bash
ls -li
```

Differences:

| Feature | Hard Link | Symlink |
|---|---|---|
| Same inode | Yes | No |
| Cross filesystem | No | Yes |
| Link directory | Usually no | Yes |
| Survives original filename deletion | Yes | No if target path gone |

---

# 55. Linux ACLs

Traditional permissions support one owner, one group, and others.

ACLs allow more granular rules.

Check:

```bash
getfacl file.txt
```

Give user access:

```bash
setfacl -m u:developer:rw file.txt
```

Directory access:

```bash
setfacl -m u:developer:rwx shared/
```

Default ACL:

```bash
setfacl -d -m g:developers:rwx shared/
```

Remove ACL:

```bash
setfacl -x u:developer file.txt
```

---

# 56. SSH Hardening

SSH configuration:

```text
/etc/ssh/sshd_config
```

Recommended ideas:

```text
Disable direct root login
Use SSH keys
Restrict users
Use firewall rules
Keep OpenSSH patched
Use MFA when available
Monitor failed logins
```

Examples:

```text
PermitRootLogin no
PasswordAuthentication no
AllowUsers deploy admin
```

Before disconnecting your active session:

1. keep another SSH session open
2. validate configuration
3. reload rather than blindly restart

Test:

```bash
sudo sshd -t
```

Reload:

```bash
sudo systemctl reload ssh
```

or:

```bash
sudo systemctl reload sshd
```

depending on distribution.

---

# 57. Linux Containers

Containers use Linux kernel features to isolate processes.

A container is not a full virtual machine.

VM:

```text
Hardware
Hypervisor
Guest OS
Application
```

Container:

```text
Hardware
Host Linux Kernel
Container Runtime
Isolated Application Processes
```

Containers use concepts including:

- namespaces
- cgroups
- capabilities
- layered filesystems

---

# 58. Docker Concepts for Linux Learners

Important commands:

```bash
docker ps
docker ps -a
docker images
docker logs container
docker exec -it container bash
docker inspect container
docker stats
```

Volumes:

```bash
docker volume ls
```

Networks:

```bash
docker network ls
```

Example:

```bash
docker run -d \
  --name nginx-test \
  -p 8080:80 \
  nginx
```

Access:

```bash
curl http://localhost:8080
```

Production troubleshooting:

```text
1. Is Docker running?
2. Is container running?
3. Check logs.
4. Check port mapping.
5. Check container listening port.
6. Check host firewall.
7. Check volume permissions.
8. Check container network/DNS.
```

---

# 59. Namespaces and cgroups

## Namespaces

Namespaces isolate resources.

Important namespace types:

```text
PID
NET
MNT
UTS
IPC
USER
```

Examples:

- PID namespace isolates process IDs.
- NET namespace isolates interfaces and routing.
- MNT namespace isolates mounts.

Inspect namespaces:

```bash
lsns
```

## cgroups

Control and account for resource usage:

- CPU
- memory
- I/O
- process count

systemd and container runtimes use cgroups heavily.

---

# 60. Linux for DevOps

A DevOps engineer should be comfortable with:

```text
Linux filesystem
Bash
SSH
systemd
Networking
DNS
HTTP
TLS
Processes
Logs
Package management
Storage
Permissions
Git
Docker
Kubernetes basics
Cloud VMs
Monitoring
Automation
Security
```

Typical daily activities:

```bash
ssh server
systemctl status app
journalctl -u app
ss -tulpn
curl localhost:8080/health
df -h
free -h
top
grep ERROR app.log
git pull
docker ps
```

---

# 61. Git on Linux

Configure:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Clone:

```bash
git clone repository-url
```

Status:

```bash
git status
```

Add:

```bash
git add .
```

Commit:

```bash
git commit -m "Add feature"
```

Pull:

```bash
git pull
```

Push:

```bash
git push
```

Branches:

```bash
git branch
git switch -c feature/login
```

Useful Linux + Git scenario:

```bash
git diff
grep -R "old_api_url" .
find . -name "*.env*"
```

Be careful not to commit secrets.

---

# 62. Production Troubleshooting Workflow

A good Linux engineer does not randomly run commands.

Use layers.

## Step 1: Define the Problem

Ask:

```text
What exactly is failing?
Who is affected?
When did it start?
Was anything changed?
Is it constant or intermittent?
```

## Step 2: Check System Health

```bash
uptime
free -h
df -h
df -i
top
```

## Step 3: Check Service

```bash
systemctl status application
```

## Step 4: Check Logs

```bash
journalctl -u application --since "30 minutes ago"
```

## Step 5: Check Listening Port

```bash
sudo ss -tulpn
```

## Step 6: Test Locally

```bash
curl http://127.0.0.1:8080/health
```

## Step 7: Test Network

```bash
ping gateway
dig app.example.com
curl -v https://app.example.com
```

## Step 8: Check Firewall

```bash
sudo ufw status
```

or:

```bash
sudo firewall-cmd --list-all
```

## Step 9: Check Dependencies

Examples:

```text
database
Redis
message queue
API
storage
DNS
certificate
```

## Step 10: Check Recent Changes

Examples:

```text
deployment
config update
package update
certificate renewal
DNS change
firewall change
disk growth
```

---

# 63. Common Real-World Scenarios

## Scenario 1: Website Is Down

Check Nginx:

```bash
systemctl status nginx
```

Logs:

```bash
journalctl -u nginx -n 100
```

Config:

```bash
nginx -t
```

Port:

```bash
sudo ss -tulpn | grep ':80\|:443'
```

Local:

```bash
curl -I http://127.0.0.1
```

Disk:

```bash
df -h
```

Then investigate upstream application.

---

## Scenario 2: Application Returns 502 Bad Gateway

For Nginx reverse proxy:

```text
Client -> Nginx -> Backend App
```

A 502 can mean Nginx cannot properly communicate with backend.

Check backend:

```bash
systemctl status myapp
```

Check port:

```bash
ss -ltnp | grep 3000
```

Test:

```bash
curl http://127.0.0.1:3000
```

Check Nginx error log:

```bash
tail -f /var/log/nginx/error.log
```

---

## Scenario 3: "No Space Left on Device"

Check disk:

```bash
df -h
```

Check inodes:

```bash
df -i
```

Large directories:

```bash
sudo du -xhd1 / | sort -h
```

Deleted open files:

```bash
sudo lsof +L1
```

---

## Scenario 4: CPU Is 100%

```bash
top
```

Then:

```bash
ps aux --sort=-%cpu | head
```

Inspect process:

```bash
ps -fp PID
```

Open files:

```bash
lsof -p PID | head
```

Do not kill a production process until you understand the impact.

---

## Scenario 5: Memory Is Exhausted

```bash
free -h
```

Top consumers:

```bash
ps aux --sort=-%mem | head
```

OOM:

```bash
journalctl -k | grep -i -E 'oom|out of memory'
```

Check application worker settings and memory limits.

---

## Scenario 6: Service Will Not Start

```bash
systemctl status myapp
```

Then:

```bash
journalctl -u myapp -n 100 --no-pager
```

Possible causes:

- config syntax
- permission denied
- missing file
- port already used
- invalid environment variable
- failed dependency
- missing library

---

## Scenario 7: Port Already in Use

Application error:

```text
Address already in use
```

Find owner:

```bash
sudo ss -ltnp | grep ':8080'
```

or:

```bash
sudo lsof -i :8080
```

---

## Scenario 8: Permission Denied

Check:

```bash
ls -l file
ls -ld parent_directory
id
```

Remember directory traversal requires execute permission.

Check ACL:

```bash
getfacl file
```

On SELinux systems:

```bash
ls -Z file
```

Do not blindly use:

```bash
chmod 777
```

---

## Scenario 9: DNS Problem

Test IP:

```bash
ping 8.8.8.8
```

Then hostname:

```bash
ping example.com
```

Inspect:

```bash
cat /etc/resolv.conf
```

Query:

```bash
dig example.com
```

---

## Scenario 10: Server Can Be Pinged but SSH Does Not Work

Check:

```bash
sudo ss -ltnp | grep :22
```

Service:

```bash
systemctl status ssh
```

or:

```bash
systemctl status sshd
```

Firewall:

```bash
sudo ufw status
```

Logs:

```bash
journalctl -u ssh -n 100
```

---

## Scenario 11: New Disk Added to Server

Inspect:

```bash
lsblk
```

Partition:

```bash
sudo fdisk /dev/sdb
```

Format:

```bash
sudo mkfs.ext4 /dev/sdb1
```

Mount:

```bash
sudo mkdir /data
sudo mount /dev/sdb1 /data
```

Persist by UUID:

```bash
sudo blkid /dev/sdb1
sudo nano /etc/fstab
sudo mount -a
```

---

## Scenario 12: Find Top 10 Largest Files

```bash
find /var -type f -printf '%s %p\n' 2>/dev/null \
  | sort -nr \
  | head -10
```

Human-friendly alternative:

```bash
sudo du -ah /var | sort -rh | head -20
```

---

## Scenario 13: Find Which User Logged In

```bash
who
```

History:

```bash
last
```

Last login:

```bash
lastlog
```

---

## Scenario 14: Check Reboot History

```bash
last reboot
```

Current boot:

```bash
uptime -s
```

---

## Scenario 15: Verify HTTPS Certificate from Linux

```bash
openssl s_client -connect example.com:443 -servername example.com
```

Certificate dates:

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null \
  | openssl x509 -noout -dates -issuer -subject
```

---

## Scenario 16: Debug Slow HTTP Request

```bash
curl -s -o /dev/null \
  -w 'dns=%{time_namelookup} connect=%{time_connect} tls=%{time_appconnect} firstbyte=%{time_starttransfer} total=%{time_total}\n' \
  https://example.com
```

This helps distinguish:

- DNS delay
- connection delay
- TLS delay
- backend delay

---

## Scenario 17: Process Keeps Restarting

Check systemd:

```bash
systemctl status app
```

Recent logs:

```bash
journalctl -u app -n 200
```

Unit:

```bash
systemctl cat app
```

Look for:

```text
Restart=always
Restart=on-failure
```

Then find the original crash reason.

---

## Scenario 18: Configuration Changed, Service Failed

Before change:

```bash
cp config.conf config.conf.bak
```

After edit:

```bash
nginx -t
```

or application-specific validation.

Then:

```bash
systemctl reload service
```

Prefer reload when supported and safe.

---

# 64. Important Configuration Files

| File | Purpose |
|---|---|
| `/etc/passwd` | Users |
| `/etc/shadow` | Password hashes and aging |
| `/etc/group` | Groups |
| `/etc/sudoers` | sudo policy |
| `/etc/hosts` | Local hostname mappings |
| `/etc/resolv.conf` | Resolver configuration |
| `/etc/fstab` | Persistent mounts |
| `/etc/ssh/sshd_config` | SSH server |
| `/etc/os-release` | Distribution information |
| `/etc/hostname` | Hostname |
| `/etc/sysctl.conf` | Kernel tuning |
| `/etc/systemd/system/` | Custom unit files |
| `/var/log/` | Logs |
| `/etc/nginx/` | Nginx |
| `/etc/apache2/` | Apache on Debian/Ubuntu |
| `/etc/httpd/` | Apache on RHEL-family |

---

# 65. Essential Command Cheat Sheet

## Navigation

```bash
pwd
ls
ls -lah
cd /path
cd ..
cd ~
```

## Files

```bash
touch
mkdir
mkdir -p
cp
cp -r
mv
rm
rm -r
```

## Read

```bash
cat
less
head
tail
tail -f
```

## Search

```bash
find
locate
grep
grep -R
```

## Text

```bash
sort
uniq
cut
tr
sed
awk
wc
```

## Permissions

```bash
chmod
chown
chgrp
getfacl
setfacl
```

## Users

```bash
whoami
id
who
last
useradd
usermod
passwd
```

## Processes

```bash
ps aux
top
htop
pgrep
kill
pkill
jobs
fg
bg
nohup
```

## Services

```bash
systemctl status
systemctl start
systemctl stop
systemctl restart
systemctl reload
systemctl enable
systemctl disable
```

## Logs

```bash
journalctl
journalctl -u service
journalctl -f
tail -f /var/log/file
```

## Networking

```bash
ip a
ip route
ping
ss -tulpn
curl
wget
dig
traceroute
mtr
```

## Disk

```bash
lsblk
df -h
df -i
du -sh
blkid
mount
umount
```

## Archives

```bash
tar
gzip
gunzip
zip
unzip
```

## System

```bash
uname -a
cat /etc/os-release
hostnamectl
timedatectl
lscpu
free -h
uptime
```

---

# 66. Linux Interview Topics

## What is Linux?

Linux is a Unix-like open-source kernel used as the foundation of many operating systems.

## Kernel vs Operating System

Kernel handles:

- CPU
- memory
- device
- process
- filesystem
- networking

Distribution includes kernel plus user-space tools.

## What is a Process?

A running instance of a program.

## What Is PID?

Unique process identifier.

PID 1 is commonly:

```text
systemd
```

## What Is a Daemon?

Background service process.

Examples:

```text
sshd
nginx
cron
```

## What Is a Zombie Process?

A finished child process whose exit status has not yet been collected by its parent.

Check:

```bash
ps aux | grep Z
```

## What Is an Orphan Process?

A process whose parent exits before the child. It is adopted by a system process/subreaper.

## Hard Link vs Symbolic Link

Hard link points to the same inode.

Symlink stores a path to another file.

## What Does chmod 755 Mean?

```text
owner rwx
group r-x
other r-x
```

## Difference Between df and du

`df` shows filesystem-level allocated usage.

`du` calculates usage by traversing files/directories.

They may differ when deleted files remain open.

## What Is Load Average?

Average runnable/uninterruptible workload over 1, 5, and 15 minutes.

Interpret relative to CPU capacity.

## What Is Swap?

Disk-backed space used as part of memory management.

## What Is `/proc`?

Virtual filesystem exposing process and kernel information.

## What Is `/sys`?

Virtual filesystem exposing kernel devices and subsystems.

## What Is `/dev`?

Device nodes.

## What Is systemd?

System and service manager used by many Linux distributions.

## What Is a Pipe?

Connects one program's output to another program's input.

```bash
ps aux | grep nginx
```

## What Are stdin, stdout, stderr?

```text
stdin  0
stdout 1
stderr 2
```

## What Is an Inode?

Filesystem metadata structure representing a file, excluding its filename.

Contains things such as:

- permissions
- owner
- timestamps
- size
- block references

## Why Can Disk Be "Full" When df Shows Space?

Possible inode exhaustion.

Check:

```bash
df -i
```

## Why Does df Show High Usage but du Does Not?

A deleted file may still be held open.

Check:

```bash
lsof +L1
```

## What Happens During Linux Boot?

```text
BIOS/UEFI
GRUB
Kernel
initramfs
systemd
services
login
```

## SIGTERM vs SIGKILL

SIGTERM allows graceful termination.

SIGKILL cannot be handled or ignored and stops process immediately.

## TCP vs UDP

TCP is reliable and connection-oriented.

UDP is connectionless and lower-overhead.

---

# 67. Hands-On Practice Labs

## Lab 1: Filesystem Practice

Create:

```text
~/linux-lab/
├── logs
├── scripts
├── backups
└── config
```

Commands:

```bash
mkdir -p ~/linux-lab/{logs,scripts,backups,config}
touch ~/linux-lab/logs/app.log
```

Practice:

- copy
- rename
- delete
- archive

---

## Lab 2: Permissions

Create users:

```text
developer1
developer2
```

Create group:

```text
projectteam
```

Goal:

- both users can edit shared files
- outsiders cannot

Try:

```bash
sudo groupadd projectteam
sudo usermod -aG projectteam developer1
sudo usermod -aG projectteam developer2

sudo mkdir /shared/project
sudo chown root:projectteam /shared/project
sudo chmod 2770 /shared/project
```

Understand why SGID helps.

---

## Lab 3: Log Analysis

Create sample file:

```text
192.168.1.10 GET / 200
192.168.1.11 GET /login 200
192.168.1.10 GET /api 500
192.168.1.12 GET / 200
192.168.1.10 GET /api 500
```

Find:

- count by IP
- number of 500 errors
- most frequent IP

Examples:

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr
grep -c ' 500$' access.log
```

---

## Lab 4: Build a Monitoring Script

Create script that checks:

- disk > 80%
- memory available
- Nginx running
- port 80 open

Output example:

```text
[OK] Disk: 45%
[OK] Nginx running
[OK] Port 80 listening
```

---

## Lab 5: Host a Static Website

Install Nginx.

Create:

```text
/var/www/linux-lab/index.html
```

Configure Nginx.

Test:

```bash
curl http://localhost
```

---

## Lab 6: Create a systemd Service

Write a script:

```bash
#!/usr/bin/env bash

while true; do
    echo "$(date) application alive" >> /tmp/myapp.log
    sleep 10
done
```

Create `myapp.service`.

Practice:

```bash
systemctl start myapp
systemctl status myapp
journalctl -u myapp
systemctl enable myapp
```

---

## Lab 7: Disk Mounting

Add a virtual disk.

Practice:

```text
lsblk
fdisk
mkfs
mount
blkid
fstab
mount -a
```

---

## Lab 8: SSH Key Authentication

Two Linux VMs:

```text
client
server
```

Set up key login without passwords.

Then disable password authentication only after confirming key access works.

---

## Lab 9: Network Troubleshooting

Intentionally stop Nginx.

Then investigate why:

```bash
curl http://server
```

fails.

Use:

```bash
ping
ss
systemctl
journalctl
curl
```

---

## Lab 10: Simulate Disk Full

Do this only on a disposable lab filesystem.

Learn to identify:

- high disk usage
- large files
- inode exhaustion
- deleted-open files

---

# 68. 30-Day Linux Learning Roadmap

## Days 1-3

Learn:

```text
Linux basics
filesystem
pwd
ls
cd
mkdir
cp
mv
rm
cat
less
```

## Days 4-6

Learn:

```text
grep
find
sort
uniq
cut
sed
awk
pipes
redirection
```

## Days 7-9

Learn:

```text
users
groups
permissions
chmod
chown
sudo
ACL
```

## Days 10-12

Learn:

```text
processes
ps
top
jobs
signals
systemctl
journalctl
```

## Days 13-15

Learn:

```text
apt
dnf
services
cron
environment variables
shell profiles
```

## Days 16-18

Learn Bash scripting:

```text
variables
conditions
loops
functions
arguments
exit codes
```

## Days 19-21

Learn storage:

```text
lsblk
df
du
mount
fstab
LVM
swap
RAID basics
```

## Days 22-24

Learn networking:

```text
IP
subnet
route
DNS
ports
SSH
ss
curl
dig
firewalls
```

## Days 25-26

Learn servers:

```text
Nginx
Apache
SSH hardening
TLS concepts
```

## Days 27-28

Learn:

```text
Docker
namespaces
cgroups
Git
```

## Days 29-30

Practice troubleshooting:

```text
CPU
memory
disk
network
service
permissions
DNS
ports
logs
```

Build a small project.

---

# 69. Common Mistakes to Avoid

## Mistake 1: Using chmod 777 for Every Permission Problem

Wrong approach:

```bash
chmod -R 777 /var/www
```

Understand:

- owner
- group
- directory traversal
- service user
- ACL
- SELinux/AppArmor

before changing permissions.

## Mistake 2: Using kill -9 First

Prefer graceful:

```bash
kill PID
```

Use `-9` only when needed.

## Mistake 3: Editing fstab and Rebooting Without Testing

Always:

```bash
mount -a
```

## Mistake 4: Restarting Services Without Reading Logs

Check:

```bash
systemctl status service
journalctl -u service
```

first.

## Mistake 5: Deleting Logs to Solve Disk Issues Without Understanding Cause

Investigate log rotation and application behavior.

## Mistake 6: Running Everything as Root

Use least privilege.

## Mistake 7: Copying Internet Commands Blindly

Understand each command before running it—especially anything involving:

```text
rm
dd
mkfs
fdisk
parted
chmod -R
chown -R
curl | sh
```

## Mistake 8: Ignoring Backups

Before dangerous changes:

- configuration backup
- database backup
- snapshot
- rollback plan

## Mistake 9: Treating Linux Commands as the Goal

The real goal is understanding systems:

```text
process
network
storage
permissions
service
logs
dependencies
```

Commands are tools for inspecting those systems.

---

# 70. Linux Mastery Checklist

You are becoming strong in Linux when you can confidently do the following without blindly copying commands.

## Fundamentals

- [ ] Explain Linux kernel vs distribution.
- [ ] Understand the shell.
- [ ] Navigate the filesystem.
- [ ] Explain `/etc`, `/var`, `/home`, `/proc`, `/sys`, `/dev`.

## Files

- [ ] Create/copy/move/delete files.
- [ ] Use `find`.
- [ ] Use `grep`.
- [ ] Read large logs.
- [ ] Use pipes and redirection.

## Text Processing

- [ ] Use `awk`.
- [ ] Use `sed`.
- [ ] Use `cut`.
- [ ] Use `sort`.
- [ ] Use `uniq`.

## Permissions

- [ ] Understand rwx.
- [ ] Understand numeric permissions.
- [ ] Use `chmod`.
- [ ] Use `chown`.
- [ ] Understand SUID/SGID/sticky bit.
- [ ] Use ACLs.

## Users

- [ ] Create users.
- [ ] Manage groups.
- [ ] Understand `/etc/passwd`.
- [ ] Understand sudo.

## Processes

- [ ] Use `ps`.
- [ ] Use `top`.
- [ ] Find PIDs.
- [ ] Understand signals.
- [ ] Handle background jobs.

## Services

- [ ] Start/stop/restart services.
- [ ] Enable services.
- [ ] Create custom systemd unit.
- [ ] Read journal logs.

## Storage

- [ ] Use `lsblk`.
- [ ] Use `df`.
- [ ] Use `du`.
- [ ] Mount filesystem.
- [ ] Configure `fstab`.
- [ ] Understand LVM.
- [ ] Understand swap.
- [ ] Understand RAID concepts.

## Networking

- [ ] Understand IP/subnet/gateway.
- [ ] Read routes.
- [ ] Test DNS.
- [ ] Inspect listening ports.
- [ ] Troubleshoot SSH.
- [ ] Use `curl`.
- [ ] Understand firewall basics.

## Automation

- [ ] Write Bash scripts.
- [ ] Use variables.
- [ ] Use loops.
- [ ] Use conditions.
- [ ] Use functions.
- [ ] Handle exit codes.
- [ ] Schedule cron jobs.
- [ ] Understand systemd timers.

## Security

- [ ] Use SSH keys.
- [ ] Harden SSH.
- [ ] Avoid unnecessary root access.
- [ ] Understand firewall policy.
- [ ] Understand SELinux/AppArmor conceptually.
- [ ] Monitor authentication logs.

## Troubleshooting

- [ ] Diagnose high CPU.
- [ ] Diagnose high memory.
- [ ] Diagnose full disk.
- [ ] Diagnose inode exhaustion.
- [ ] Diagnose service failures.
- [ ] Diagnose port conflicts.
- [ ] Diagnose DNS problems.
- [ ] Diagnose permission issues.
- [ ] Trace application dependencies.

## DevOps

- [ ] Use Git on Linux.
- [ ] Understand Docker.
- [ ] Understand containers vs VMs.
- [ ] Understand namespaces.
- [ ] Understand cgroups.
- [ ] Operate a basic web server.
- [ ] Read application/server logs.
- [ ] Work confidently over SSH.

---

# Final Learning Advice

Do not try to memorize every Linux command.

Instead memorize the **problem-solving model**:

```text
What is the system doing?
What should it be doing?
Which layer is failing?
What evidence do the logs and system state provide?
What is the safest fix?
How do I verify the fix?
How do I prevent recurrence?
```

For almost every production Linux issue, think in these layers:

```text
User
  |
DNS
  |
Network
  |
Firewall
  |
Listening Port
  |
Service
  |
Application
  |
Dependency
  |
Filesystem / Database
  |
Kernel / Hardware
```

A strong Linux engineer does not guess.

They inspect, measure, verify, change carefully, and validate the result.

---

# Bonus: Command Discovery Habits

When you forget syntax:

```bash
command --help
```

Use manual:

```bash
man command
```

Examples:

```bash
man find
man chmod
man systemctl
```

Find related manual pages:

```bash
apropos firewall
```

Check executable location:

```bash
which nginx
```

More reliable shell lookup:

```bash
type -a python
```

Find executable using PATH:

```bash
command -v python3
```

---

# Bonus: Build Your Personal Linux Notes

Create:

```text
linux-notes/
├── commands.md
├── networking.md
├── storage.md
├── systemd.md
├── bash.md
├── troubleshooting.md
└── production-incidents.md
```

Every time you solve a real Linux issue, record:

```text
Problem
Symptoms
Commands used
Root cause
Fix
Verification
Prevention
```

That habit will improve your Linux skills faster than memorizing hundreds of commands.

---

**End of Linux Mastery Handbook**
