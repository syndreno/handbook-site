# Linux Master Handbook
## Red Hat Enterprise Linux (RHEL) + Linux Mint
### Beginner → Intermediate → Advanced → System Administration → DevOps → Troubleshooting

> **Purpose:** A single master handbook for learning Linux from the ground up, with practical examples, real-world scenarios, command references, administration concepts, troubleshooting workflows, and distro-specific notes for **Red Hat Enterprise Linux (RHEL)** and **Linux Mint**.
>
> **Current reference point:** August 2026. Examples focus on modern systemd-based Linux. At the time this handbook was prepared, Red Hat publishes RHEL 10 documentation and Linux Mint 22.3 "Zena" is the current Mint 22.x release. Always verify version-specific behavior before production changes.
>
> **How to use this handbook**
>
> 1. If you are new, study Parts 1–8 in order.
> 2. Run every command in a VM or lab machine.
> 3. Do the scenario labs instead of only reading commands.
> 4. Use the distro comparison sections to learn RHEL and Mint together.
> 5. Before production work, read `man`, `--help`, vendor documentation, and your organization's change procedure.
> 6. Never run destructive commands just because they appear in an example. Understand the target device/path first.

---

# Table of Contents

1. Linux and GNU/Linux Fundamentals
2. RHEL vs Linux Mint
3. Installing and Building a Safe Lab
4. Linux Boot Process
5. Terminal and Shell Fundamentals
6. Linux Filesystem Hierarchy
7. Navigation and File Management
8. Viewing and Editing Text
9. Searching, Filtering, and Text Processing
10. Links, Inodes, and File Metadata
11. Users, Groups, and Identity
12. Linux Permissions
13. ACLs, umask, sudo, and Privilege Management
14. Environment Variables and Shell Configuration
15. Processes, Jobs, Signals, and Priorities
16. systemd and Service Management
17. Logs, journalctl, rsyslog, and logrotate
18. Package Management
19. Software Repositories and Packages
20. Disks, Partitions, Filesystems, and Mounting
21. LVM
22. Swap, RAID, and Storage Reliability
23. Networking Fundamentals
24. NetworkManager and nmcli
25. DNS, Hostnames, Time, and Connectivity Tools
26. SSH and Remote Administration
27. File Transfer and Synchronization
28. Firewalls
29. SELinux on RHEL
30. AppArmor on Linux Mint
31. Linux Security and Hardening
32. Scheduling with cron, at, and systemd timers
33. Bash Scripting
34. Regular Expressions, grep, sed, and awk
35. Archives, Compression, Backup, and Restore
36. Web, File, and Network Services
37. Kernel, Modules, Drivers, and DKMS
38. Performance Monitoring and Tuning
39. `/proc`, `/sys`, sysctl, cgroups, and namespaces
40. Containers: Podman and Docker Concepts
41. Virtualization with KVM/libvirt
42. RHEL-Specific Administration
43. Linux Mint-Specific Administration
44. Troubleshooting Methodology
45. Real-World Troubleshooting Scenarios
46. Linux for Developers and DevOps Engineers
47. Git, CI/CD, Cloud, and Kubernetes Linux Skills
48. Production Administration Practices
49. Disaster Recovery and Rescue
50. Practice Labs and Projects
51. Interview Questions and Answers
52. Command Cheat Sheet
53. Learning Roadmap
54. Glossary
55. Same Task, Different Distro Reference
56. Administration Checklists
57. Common Dangerous Commands and Safer Habits
58. Linux Mental Models That Make You Better
59. Suggested 12-Week Study Plan
60. Capstone Projects
61. Final Advice
62. Official References
63. Appendix A — Quick Diagnostic Bundles
64. Appendix B — Command Discovery
65. Appendix C — Distro Detection in Bash
66. Appendix D — Package Installation Function Example
67. Appendix E — What to Learn Next

---

# Part 1 — Linux Foundations

# 1. Linux and GNU/Linux Fundamentals

## 1.1 What is Linux?

Strictly speaking, **Linux is the kernel**. The kernel is the core part of the operating system that communicates with hardware and manages resources such as:

- CPU
- memory
- disks
- filesystems
- network interfaces
- devices
- processes
- permissions
- system calls

A complete Linux operating system usually combines:

- Linux kernel
- GNU utilities
- shell
- init system
- package manager
- system libraries
- desktop environment or server tools
- distribution-specific configuration

Examples of Linux distributions:

- Red Hat Enterprise Linux
- Fedora
- Rocky Linux
- AlmaLinux
- CentOS Stream
- Ubuntu
- Debian
- Linux Mint
- Arch Linux
- openSUSE

## 1.2 Distribution vs kernel

A **distribution** packages the Linux kernel with software, tools, repositories, update policies, defaults, and support.

You can check your kernel:

```bash
uname -r
```

Detailed kernel/system information:

```bash
uname -a
```

Distribution information:

```bash
cat /etc/os-release
```

Example:

```text
NAME="Red Hat Enterprise Linux"
VERSION="10.x"
```

or:

```text
NAME="Linux Mint"
VERSION="22.3 (Zena)"
```

## 1.3 Why Linux is important

Linux is widely used for:

- web servers
- cloud workloads
- Kubernetes nodes
- containers
- databases
- networking
- cybersecurity
- embedded systems
- supercomputing
- DevOps pipelines
- developer workstations
- desktops

If you want to work in:

- DevOps
- SRE
- cloud engineering
- backend engineering
- platform engineering
- cybersecurity
- system administration

Linux knowledge is foundational.

## 1.4 Kernel space vs user space

**Kernel space** runs the kernel and privileged kernel code.

**User space** contains normal applications and services.

Applications interact with the kernel through **system calls**.

Conceptual flow:

```text
Application
    ↓
Library
    ↓
System Call
    ↓
Linux Kernel
    ↓
Hardware
```

## 1.5 Linux is case-sensitive

These are different:

```text
file.txt
File.txt
FILE.txt
```

Commands are also case-sensitive:

```bash
ls
```

works, but:

```bash
LS
```

normally does not.

## 1.6 Everything is represented through files

Linux exposes many resources using files or file-like interfaces.

Examples:

```text
/dev/sda
/proc/cpuinfo
/sys/class/net/
/etc/hosts
```

This does **not** literally mean every kernel object is an ordinary disk file, but the file abstraction is central to Unix/Linux design.

---

# 2. RHEL vs Linux Mint

## 2.1 Red Hat Enterprise Linux

RHEL is an enterprise-focused Linux distribution.

Common use cases:

- production servers
- enterprise applications
- SAP environments
- databases
- web/API servers
- VM hosts
- containers
- regulated environments
- corporate infrastructure

Important RHEL tools/concepts:

- RPM
- DNF
- `subscription-manager`
- SELinux
- `firewalld`
- NetworkManager
- Cockpit
- Podman
- systemd
- XFS
- LVM
- RHEL System Roles

## 2.2 Linux Mint

Linux Mint is a desktop-oriented Linux distribution based primarily on Ubuntu LTS packages.

Common use cases:

- personal desktop
- development workstation
- Windows replacement
- programming
- learning Linux
- office/media use
- lightweight local server labs

Important Mint tools/concepts:

- APT
- dpkg
- Update Manager
- Driver Manager
- Timeshift
- UFW
- AppArmor
- Cinnamon desktop
- Ubuntu-compatible repositories/packages

## 2.3 RHEL vs Mint quick comparison

| Task | RHEL | Linux Mint |
|---|---|---|
| Package format | RPM | DEB |
| High-level package manager | DNF | APT |
| Low-level package tool | rpm | dpkg |
| Main security MAC | SELinux | AppArmor |
| Common firewall frontend | firewalld | UFW |
| Service manager | systemd | systemd |
| Networking | NetworkManager | NetworkManager |
| Default desktop emphasis | GNOME/server use | Cinnamon desktop |
| Enterprise subscription | Yes | No |
| Common container tool | Podman | Docker/Podman possible |
| Typical server filesystem | XFS | ext4 often used on desktop |

## 2.4 Same Linux concepts, different tools

Example: install Nginx.

RHEL:

```bash
sudo dnf install nginx
```

Mint:

```bash
sudo apt update
sudo apt install nginx
```

Start it on either:

```bash
sudo systemctl enable --now nginx
```

The package manager differs, but **systemd service administration is almost identical**.

---

# 3. Installing and Building a Safe Lab

## 3.1 Best learning setup

Use virtualization so mistakes do not damage your main machine.

Good choices:

- VMware Workstation
- VirtualBox
- Hyper-V
- KVM/libvirt
- Proxmox
- cloud VM

Recommended lab:

```text
VM 1: RHEL
VM 2: Linux Mint
VM 3: optional second RHEL server
```

Suggested VM resources:

```text
2–4 vCPU
4–8 GB RAM
40–80 GB disk
NAT networking
```

## 3.2 Why snapshots matter

Before risky practice:

- snapshot VM
- perform lab
- break system
- troubleshoot
- restore only if necessary

This is an excellent way to learn.

## 3.3 Verify installation media

Always verify ISO checksum/signature when possible.

Typical checksum:

```bash
sha256sum filename.iso
```

Compare the result with the official published checksum.

## 3.4 BIOS vs UEFI

Modern systems normally use UEFI.

Useful command:

```bash
ls /sys/firmware/efi
```

If the path exists, you likely booted using UEFI.

## 3.5 Partition ideas for a lab

Simple beginner setup:

```text
EFI System Partition
/
swap
```

Optional:

```text
/home
/var
/tmp
```

Enterprise servers often use LVM because it provides flexible volume management.

---

# 4. Linux Boot Process

Understanding boot is essential for troubleshooting.

## 4.1 Simplified boot sequence

```text
Power On
  ↓
BIOS / UEFI
  ↓
Bootloader (GRUB)
  ↓
Linux Kernel
  ↓
initramfs
  ↓
systemd PID 1
  ↓
system services
  ↓
login / graphical desktop
```

## 4.2 GRUB

GRUB is the common bootloader.

Useful files vary by distribution, but commands include:

RHEL:

```bash
grubby --default-kernel
grubby --info=ALL
```

General:

```bash
cat /proc/cmdline
```

## 4.3 initramfs

The initial RAM filesystem provides early userspace tools needed to mount the real root filesystem.

RHEL commonly uses:

```bash
dracut
```

Inspect:

```bash
lsinitrd
```

## 4.4 systemd as PID 1

Check:

```bash
ps -p 1 -o pid,comm,args
```

Typical output:

```text
1 systemd /sbin/init
```

## 4.5 Boot troubleshooting

List current boot errors:

```bash
journalctl -b -p err
```

Previous boot:

```bash
journalctl -b -1
```

Boot timing:

```bash
systemd-analyze
systemd-analyze blame
systemd-analyze critical-chain
```

---

# Part 2 — Command Line and Filesystem

# 5. Terminal and Shell Fundamentals

## 5.1 Terminal vs shell

A **terminal emulator** is the application window.

A **shell** is the command interpreter.

Common shells:

- bash
- zsh
- fish
- sh

Check current shell:

```bash
echo "$SHELL"
```

Process shell:

```bash
ps -p $$ -o comm=
```

## 5.2 Command structure

Typical format:

```text
command option argument
```

Example:

```bash
ls -lah /var/log
```

Where:

- `ls` = command
- `-lah` = options
- `/var/log` = argument

## 5.3 Getting help

```bash
man ls
ls --help
info coreutils
apropos network
whatis chmod
```

Inside `man`:

```text
/word      search
n          next match
N          previous match
q          quit
```

## 5.4 Command history

```bash
history
```

Search history interactively:

```text
Ctrl + R
```

Run command number:

```bash
!123
```

Last command:

```bash
!!
```

Use carefully with `sudo !!`.

## 5.5 Useful keyboard shortcuts

| Shortcut | Purpose |
|---|---|
| Ctrl+C | Interrupt foreground process |
| Ctrl+D | EOF/logout |
| Ctrl+Z | Suspend process |
| Ctrl+L | Clear screen |
| Ctrl+A | Start of line |
| Ctrl+E | End of line |
| Ctrl+U | Delete before cursor |
| Ctrl+K | Delete after cursor |
| Ctrl+R | Reverse history search |

## 5.6 Quoting

Single quotes prevent most expansion:

```bash
echo '$HOME'
```

Output:

```text
$HOME
```

Double quotes allow variable expansion:

```bash
echo "$HOME"
```

## 5.7 Command substitution

```bash
today=$(date +%F)
echo "$today"
```

Old style:

```bash
today=`date +%F`
```

Prefer `$()`.

## 5.8 Pipes

Pass stdout of one command to stdin of another:

```bash
ps aux | grep nginx
```

Better:

```bash
pgrep -a nginx
```

## 5.9 Redirection

Overwrite:

```bash
echo "hello" > file.txt
```

Append:

```bash
echo "world" >> file.txt
```

stderr:

```bash
command 2> error.log
```

stdout + stderr:

```bash
command > output.log 2>&1
```

Bash shorthand:

```bash
command &> output.log
```

## 5.10 `/dev/null`

Discard output:

```bash
command > /dev/null 2>&1
```

Use it only when you intentionally do not need diagnostics.

---

# 6. Linux Filesystem Hierarchy

Important directories:

| Directory | Purpose |
|---|---|
| `/` | Root of filesystem hierarchy |
| `/bin` | Essential commands; often symlinked into `/usr` |
| `/sbin` | System/admin commands; often merged into `/usr` |
| `/boot` | Kernel, initramfs, bootloader files |
| `/dev` | Device nodes |
| `/etc` | System configuration |
| `/home` | Normal users' home directories |
| `/root` | Root user's home |
| `/lib`, `/lib64` | Libraries; often merged with `/usr` |
| `/media` | Removable media |
| `/mnt` | Temporary/manual mount points |
| `/opt` | Optional third-party software |
| `/proc` | Process/kernel virtual filesystem |
| `/run` | Runtime state |
| `/srv` | Service data |
| `/sys` | Kernel/device virtual filesystem |
| `/tmp` | Temporary files |
| `/usr` | Userland software, libraries, docs |
| `/var` | Variable data: logs, cache, spool, databases |

## 6.1 Important files

```text
/etc/passwd
/etc/shadow
/etc/group
/etc/fstab
/etc/hosts
/etc/resolv.conf
/etc/ssh/sshd_config
/etc/sudoers
/etc/os-release
```

Do not directly modify sensitive files unless you understand the tool designed to manage them.

Example:

Use:

```bash
sudo visudo
```

instead of casually editing `/etc/sudoers`.

---

# 7. Navigation and File Management

## 7.1 pwd

```bash
pwd
```

Shows current directory.

## 7.2 ls

```bash
ls
ls -l
ls -a
ls -lah
ls -lt
ls -lhS
```

Useful meanings:

```text
-a  all, including hidden files
-l  long format
-h  human readable
-t  sort by modification time
-S  sort by size
```

## 7.3 cd

```bash
cd /var/log
cd ..
cd ~
cd -
```

`cd -` returns to the previous directory.

## 7.4 mkdir

```bash
mkdir project
mkdir -p app/{src,logs,config}
```

## 7.5 touch

```bash
touch file.txt
```

Creates an empty file if it does not exist or updates timestamps.

## 7.6 cp

```bash
cp source.txt destination.txt
cp -r src/ backup/
cp -a app/ app-backup/
```

`-a` preserves attributes and recursively copies.

## 7.7 mv

```bash
mv old.txt new.txt
mv file.txt /tmp/
```

## 7.8 rm

```bash
rm file.txt
rm -r directory
rm -rf directory
```

### Danger

`rm -rf` recursively and forcibly removes files.

Before deleting:

```bash
pwd
ls
find target -maxdepth 2 -print
```

Do not use destructive wildcard commands until you know exactly what expands.

The preview and deletion must use the same exact target. Prefer an explicit variable and an interactive first run:

```bash
target="/path/to/lab-directory"
printf 'Target: <%s>\n' "$target"
find -- "$target" -maxdepth 2 -print
rm -ri -- "$target"
```

Never use an empty variable, unresolved wildcard, `/`, or a home directory as a recursive deletion target.

## 7.9 File

Identify file type:

```bash
file example
```

## 7.10 stat

```bash
stat file.txt
```

Shows:

- size
- inode
- mode
- owner
- timestamps

---

# 8. Viewing and Editing Text

## 8.1 cat

```bash
cat file.txt
```

Useful for small files.

## 8.2 less

```bash
less /var/log/messages
```

or Mint:

```bash
less /var/log/syslog
```

Search in `less`:

```text
/error
```

## 8.3 head and tail

```bash
head file.txt
tail file.txt
tail -n 50 file.txt
tail -f logfile
```

Follow systemd logs more effectively with:

```bash
journalctl -f
```

## 8.4 nl

```bash
nl file.txt
```

Adds line numbers.

## 8.5 nano

```bash
nano file.txt
```

Good for beginners.

## 8.6 vim

```bash
vim file.txt
```

Core modes:

```text
Normal
Insert
Visual
Command
```

Essential commands:

```text
i       insert
Esc     normal mode
:w      save
:q      quit
:wq     save and quit
:q!     quit without saving
dd      delete line
yy      copy line
p       paste
u       undo
/word   search
```

---

# 9. Searching, Filtering, and Text Processing

## 9.1 find

Find by name:

```bash
find /var/log -name "*.log"
```

Case-insensitive:

```bash
find . -iname "*.jpg"
```

Files only:

```bash
find . -type f
```

Directories:

```bash
find . -type d
```

Files larger than 100 MB:

```bash
find /var -type f -size +100M
```

Modified in last day:

```bash
find . -type f -mtime -1
```

## 9.2 locate

```bash
locate nginx.conf
```

Database may need updating:

```bash
sudo updatedb
```

Package availability varies.

## 9.3 grep

```bash
grep "ERROR" app.log
grep -i "error" app.log
grep -n "error" app.log
grep -R "database" /etc/myapp/
```

Extended regex:

```bash
grep -E 'error|failed|critical' app.log
```

## 9.4 sort and uniq

```bash
sort names.txt
sort names.txt | uniq
sort names.txt | uniq -c
sort names.txt | uniq -c | sort -nr
```

## 9.5 cut

```bash
cut -d: -f1 /etc/passwd
```

## 9.6 tr

```bash
echo "HELLO" | tr 'A-Z' 'a-z'
```

## 9.7 wc

```bash
wc -l file.txt
wc -w file.txt
```

## 9.8 tee

Write output while also seeing it:

```bash
echo "value" | sudo tee /etc/example.conf
```

Append:

```bash
echo "value" | sudo tee -a /etc/example.conf
```

## 9.9 xargs

```bash
find . -name "*.tmp" -print0 | xargs -0 rm
```

Safer for filenames containing spaces.

In many cases `find -exec` is even clearer:

```bash
find . -name "*.tmp" -exec rm -- {} +
```

---

# 10. Links, Inodes, and File Metadata

## 10.1 Inode

An inode stores filesystem metadata such as:

- permissions
- ownership
- size
- timestamps
- block locations
- link count

View inode:

```bash
ls -li
```

## 10.2 Hard link

```bash
ln original.txt hardlink.txt
```

Both directory entries reference the same inode.

Limitations:

- normally cannot hard-link directories
- cannot cross filesystems

## 10.3 Symbolic link

```bash
ln -s /opt/app/current app-current
```

A symlink stores a path reference.

Use case:

```text
/opt/myapp/releases/v1
/opt/myapp/releases/v2
/opt/myapp/current -> /opt/myapp/releases/v2
```

This makes application switching easy.

## 10.4 Timestamps

Common timestamps:

- atime: access time
- mtime: content modification time
- ctime: inode metadata change time

Check:

```bash
stat file.txt
```

---

# Part 3 — Identity and Permissions

# 11. Users, Groups, and Identity

## 11.1 Root

Root typically has UID 0 and extremely broad privilege.

Check:

```bash
id root
```

Do not work permanently as root.

Prefer:

```bash
sudo command
```

## 11.2 Current identity

```bash
whoami
id
groups
```

## 11.3 `/etc/passwd`

Format:

```text
username:x:UID:GID:comment:home:shell
```

Example:

```text
alice:x:1001:1001:Alice:/home/alice:/bin/bash
```

## 11.4 `/etc/shadow`

Contains password hashes and password-aging data.

Should normally be readable only by privileged users.

## 11.5 Create user

RHEL:

```bash
sudo useradd alice
sudo passwd alice
```

Mint commonly:

```bash
sudo adduser alice
```

`useradd` also exists on Mint.

## 11.6 Delete user

```bash
sudo userdel alice
```

Delete home too:

```bash
sudo userdel -r alice
```

Verify before using `-r`.

## 11.7 Modify user

```bash
sudo usermod -aG developers alice
```

Important:

`-aG` means append supplementary groups.

Using only `-G` can replace existing supplementary group memberships.

## 11.8 Groups

```bash
sudo groupadd developers
getent group developers
```

Add user:

```bash
sudo usermod -aG developers alice
```

## 11.9 Account information

```bash
getent passwd alice
getent group developers
```

`getent` works with configured NSS sources, not only local files.

---

# 12. Linux Permissions

## 12.1 Permission model

Three classes:

```text
user
group
other
```

Three basic permissions:

```text
r = read
w = write
x = execute
```

Example:

```text
-rwxr-x---
```

Breakdown:

```text
-      regular file
rwx    owner
r-x    group
---    others
```

## 12.2 Numeric permissions

Values:

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

So:

```bash
chmod 750 script.sh
```

means:

```text
owner = rwx
group = r-x
other = ---
```

## 12.3 Symbolic permissions

```bash
chmod u+x script.sh
chmod g-w file.txt
chmod o-r secret.txt
```

## 12.4 Ownership

```bash
sudo chown alice file.txt
sudo chown alice:developers file.txt
sudo chgrp developers file.txt
```

## 12.5 Directory permissions behave differently

For directories:

- `r`: list names
- `w`: create/delete entries
- `x`: traverse/access entries

To access `/data/project/file.txt`, execute permission is needed on relevant parent directories.

## 12.6 SUID

SUID on executable:

```bash
chmod u+s executable
```

Numeric leading bit:

```bash
chmod 4755 executable
```

Use with extreme caution because it can change privilege behavior.

## 12.7 SGID

On directories, SGID can make new files inherit the directory group:

```bash
sudo chmod 2775 /shared
```

Useful for team directories.

## 12.8 Sticky bit

Common on `/tmp`.

```bash
ls -ld /tmp
```

Typically:

```text
drwxrwxrwt
```

The sticky bit prevents users from deleting other users' files in a shared writable directory.

---

# 13. ACLs, umask, sudo, and Privilege Management

## 13.1 ACL

Traditional permissions allow only one owner, one group, and others.

ACLs provide more granular access.

View:

```bash
getfacl report.txt
```

Grant user:

```bash
setfacl -m u:alice:rw report.txt
```

Grant group:

```bash
setfacl -m g:auditors:r report.txt
```

Remove:

```bash
setfacl -x u:alice report.txt
```

Default ACL on directory:

```bash
setfacl -m d:g:developers:rwx /shared/project
```

## 13.2 umask

View:

```bash
umask
```

Common:

```text
0022
```

Typical effect:

```text
files: 666 - 022 = 644
dirs:  777 - 022 = 755
```

This is a convenient result illustration, not ordinary decimal subtraction. A umask clears permission bits from the application's requested mode. Applications may request more restrictive modes, and ACLs or mount/security policy can further affect access.

## 13.3 sudo

Run privileged command:

```bash
sudo systemctl restart nginx
```

Edit sudo policy safely:

```bash
sudo visudo
```

Recommended approach:

```text
/etc/sudoers.d/team
```

Example:

```text
%webadmins ALL=(root) /usr/bin/systemctl restart nginx
```

Follow least privilege.

## 13.4 `su` vs `sudo`

Switch user:

```bash
su - alice
```

Root login shell:

```bash
sudo -i
```

Current user's login shell as another account:

```bash
sudo -u appuser -i
```

This requests `appuser`'s login environment and configured shell; it can intentionally fail for a service account that uses `nologin` or `false`. To run one non-interactive command as that account, use `sudo -u appuser -- COMMAND`.

---

# 14. Environment Variables and Shell Configuration

## 14.1 View variables

```bash
env
printenv
```

Specific:

```bash
echo "$PATH"
echo "$HOME"
echo "$USER"
```

## 14.2 Shell variable

```bash
name="Linux"
echo "$name"
```

Export:

```bash
export APP_ENV=production
```

## 14.3 PATH

```bash
echo "$PATH"
```

Add directory for current session:

```bash
export PATH="$HOME/bin:$PATH"
```

## 14.4 Bash startup files

Common:

```text
/etc/profile
~/.bash_profile
~/.profile
~/.bashrc
/etc/bashrc or /etc/bash.bashrc depending on distro
```

Do not blindly put everything into every startup file.

## 14.5 Aliases

```bash
alias ll='ls -lah'
```

List:

```bash
alias
```

Remove:

```bash
unalias ll
```

## 14.6 Shell expansion

Brace:

```bash
mkdir file{1..5}
```

Glob:

```bash
ls *.log
```

Home:

```bash
cd ~
```

Variable:

```bash
echo "$HOME"
```

Command substitution:

```bash
echo "Today is $(date +%F)"
```

---

# Part 4 — Processes, Services, and Logs

# 15. Processes, Jobs, Signals, and Priorities

## 15.1 Process

A process is a running program instance.

View:

```bash
ps
ps aux
ps -ef
```

Tree:

```bash
pstree
ps -ef --forest
```

## 15.2 PID and PPID

```bash
ps -o pid,ppid,user,stat,cmd -p $$
```

## 15.3 Find process

```bash
pgrep nginx
pgrep -a nginx
```

## 15.4 Foreground and background

Run in background:

```bash
long_command &
```

List shell jobs:

```bash
jobs
```

Foreground:

```bash
fg %1
```

Background suspended job:

```bash
bg %1
```

## 15.5 nohup

```bash
nohup ./job.sh > job.log 2>&1 &
```

For robust production tasks, prefer systemd services/timers or a scheduler rather than unmanaged background jobs.

## 15.6 Signals

List:

```bash
kill -l
```

Common signals:

```text
SIGTERM  15  graceful termination request
SIGKILL   9  immediate kill
SIGHUP    1  often reload
SIGINT    2  Ctrl+C
SIGSTOP  19  stop
SIGCONT  18  continue
```

Graceful first:

```bash
kill PID
```

Only if necessary:

```bash
kill -9 PID
```

## 15.7 killall and pkill

```bash
pkill nginx
pkill -HUP nginx
killall nginx
```

Both tools match by process name, but their exact matching and platform behavior differ. Preview with `pgrep -a nginx`, prefer a specific PID when precision matters, and do not assume `SIGHUP` means reload unless that application documents it.

## 15.8 nice and renice

Start lower priority:

```bash
nice -n 10 command
```

Change:

```bash
sudo renice 5 -p PID
```

Lower numeric nice value means higher CPU scheduling priority.

---

# 16. systemd and Service Management

## 16.1 systemd concepts

systemd manages units such as:

- service
- socket
- target
- timer
- mount
- automount
- path

## 16.2 Service status

```bash
systemctl status sshd
```

On Mint the SSH service may appear as:

```bash
systemctl status ssh
```

Check exact unit:

```bash
systemctl list-unit-files | grep -i ssh
```

## 16.3 Start/stop/restart

```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
```

## 16.4 Enable at boot

```bash
sudo systemctl enable nginx
```

Enable and start:

```bash
sudo systemctl enable --now nginx
```

Disable:

```bash
sudo systemctl disable nginx
```

## 16.5 Mask

Prevent service activation:

```bash
sudo systemctl mask service
```

Undo:

```bash
sudo systemctl unmask service
```

## 16.6 Unit files

Show:

```bash
systemctl cat nginx
```

Properties:

```bash
systemctl show nginx
```

## 16.7 Editing service overrides

Do not edit vendor unit files unless appropriate.

Use:

```bash
sudo systemctl edit nginx
```

Example override:

```ini
[Service]
Restart=on-failure
RestartSec=5s
```

Then:

```bash
sudo systemctl daemon-reload
sudo systemctl restart nginx
```

## 16.8 Targets

View default:

```bash
systemctl get-default
```

Typical:

```text
multi-user.target
graphical.target
```

Change:

```bash
sudo systemctl set-default multi-user.target
```

## 16.9 Failed units

```bash
systemctl --failed
```

---

# 17. Logs, journalctl, rsyslog, and logrotate

## 17.1 journalctl

Current boot:

```bash
journalctl -b
```

Service:

```bash
journalctl -u nginx
```

Follow:

```bash
journalctl -u nginx -f
```

Since date/time:

```bash
journalctl --since "2026-08-13 09:00"
```

Last hour:

```bash
journalctl --since "1 hour ago"
```

Errors:

```bash
journalctl -p err
```

Kernel:

```bash
journalctl -k
```

## 17.2 Common log files

RHEL often:

```text
/var/log/messages
/var/log/secure
```

Mint/Ubuntu often:

```text
/var/log/syslog
/var/log/auth.log
```

Applications may log elsewhere.

## 17.3 rsyslog

Check:

```bash
systemctl status rsyslog
```

Main configuration often:

```text
/etc/rsyslog.conf
/etc/rsyslog.d/
```

## 17.4 logrotate

Logs cannot grow forever.

Configuration:

```text
/etc/logrotate.conf
/etc/logrotate.d/
```

Test:

```bash
sudo logrotate -d /etc/logrotate.conf
```

Force only when appropriate:

```bash
sudo logrotate -f /etc/logrotate.conf
```

---

# Part 5 — Software Management

# 18. Package Management

## 18.1 RHEL: DNF

Refresh metadata:

```bash
sudo dnf makecache
```

Search:

```bash
dnf search nginx
```

Info:

```bash
dnf info nginx
```

Install:

```bash
sudo dnf install nginx
```

Remove:

```bash
sudo dnf remove nginx
```

Upgrade:

```bash
sudo dnf upgrade
```

List installed:

```bash
dnf list --installed
```

Find package providing a file:

```bash
dnf provides '*/semanage'
```

History:

```bash
dnf history
```

## 18.2 RHEL: RPM

Query installed:

```bash
rpm -q bash
```

Details:

```bash
rpm -qi bash
```

Files:

```bash
rpm -ql bash
```

Which package owns a file:

```bash
rpm -qf /usr/bin/bash
```

Install local RPM:

```bash
sudo dnf install ./package.rpm
```

Prefer DNF because it resolves dependencies.

## 18.3 Linux Mint: APT

Update package index:

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

Remove including package config:

```bash
sudo apt purge nginx
```

Cleanup:

```bash
sudo apt autoremove
```

Search:

```bash
apt search nginx
```

Package info:

```bash
apt show nginx
```

## 18.4 Linux Mint: dpkg

Installed package query:

```bash
dpkg -l
```

Package details:

```bash
dpkg -s bash
```

Which package owns file:

```bash
dpkg -S /bin/bash
```

Install local DEB:

```bash
sudo apt install ./package.deb
```

Prefer APT where possible for dependency resolution.

## 18.5 Package manager comparison

| Goal | RHEL | Mint |
|---|---|---|
| Update metadata | `dnf makecache` | `apt update` |
| Install | `dnf install pkg` | `apt install pkg` |
| Upgrade | `dnf upgrade` | `apt upgrade` |
| Remove | `dnf remove pkg` | `apt remove pkg` |
| Search | `dnf search pkg` | `apt search pkg` |
| Low-level query | `rpm` | `dpkg` |

---

# 19. Software Repositories and Packages

## 19.1 Repository concept

A repository contains:

- packages
- metadata
- signatures
- dependency information
- updates

Avoid random package sources on production systems.

## 19.2 RHEL subscription management

Common commands:

```bash
sudo subscription-manager status
sudo subscription-manager repos --list-enabled
```

Repository files:

```text
/etc/yum.repos.d/
```

List:

```bash
dnf repolist
```

## 19.3 Linux Mint repository configuration

APT source configuration may be represented through:

```text
/etc/apt/sources.list
/etc/apt/sources.list.d/
```

Mint also has GUI tools for Software Sources.

List configured entries:

```bash
grep -RhvE '^[[:space:]]*(#|$)' /etc/apt/sources.list /etc/apt/sources.list.d/ 2>/dev/null
```

This prints nonblank, noncomment lines from traditional source-list files. Modern APT can also use deb822 `.sources` files, whose entries span multiple lines; inspect those files directly rather than assuming every repository fits the one-line format.

## 19.4 PPAs

PPAs are commonly used in Ubuntu-based distributions, but they increase supply-chain and compatibility risk.

Rule:

> Use official distro repositories whenever possible. Add third-party repositories only when you trust the source and understand update ownership.

## 19.5 GPG signatures

Package signatures help verify authenticity.

Do not solve signature failures by blindly disabling verification.

---

# Part 6 — Storage

# 20. Disks, Partitions, Filesystems, and Mounting

## 20.1 Identify storage

```bash
lsblk
lsblk -f
blkid
df -h
df -Th
```

Disk usage per directory:

```bash
du -sh /var/*
```

Top-level large directories:

```bash
sudo du -xhd1 / | sort -h
```

## 20.2 Device naming

Examples:

```text
/dev/sda
/dev/sda1
/dev/nvme0n1
/dev/nvme0n1p1
```

Never assume a disk name. Verify it.

## 20.3 Partition tools

```bash
fdisk -l
parted -l
```

Interactive:

```bash
sudo fdisk /dev/sdb
```

or:

```bash
sudo parted /dev/sdb
```

Creating partitions is destructive if the wrong disk is selected.

## 20.4 Filesystems

Common:

- ext4
- XFS
- Btrfs
- FAT32
- exFAT
- NTFS

RHEL commonly uses XFS for local enterprise filesystems.

Mint commonly uses ext4 for normal desktop installations.

## 20.5 Create filesystem

ext4:

```bash
sudo mkfs.ext4 /dev/sdb1
```

XFS:

```bash
sudo mkfs.xfs /dev/sdb1
```

**This destroys existing data on the target partition.**

## 20.6 Mount

```bash
sudo mkdir -p /data
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

## 20.7 Persistent mounts

Use `/etc/fstab`.

Get UUID:

```bash
blkid /dev/sdb1
```

Example:

```text
UUID=xxxx-xxxx /data ext4 defaults 0 2
```

Test before reboot:

```bash
sudo mount -a
```

Then:

```bash
findmnt /data
```

An invalid `fstab` entry can cause boot problems, so test it.

## 20.8 Why UUID is preferred

Device names can change.

UUIDs provide more stable identification.

---

# 21. LVM

LVM = Logical Volume Manager.

The creation commands in this chapter write storage metadata or filesystems. Use only an empty, verified lab device, record `lsblk -f` output first, and keep backups. LVM improves allocation flexibility but is not a backup.

Concept:

```text
Physical Disk/Partition
      ↓
Physical Volume (PV)
      ↓
Volume Group (VG)
      ↓
Logical Volume (LV)
      ↓
Filesystem
```

## 21.1 Create PV

```bash
sudo pvcreate /dev/sdb
```

## 21.2 Create VG

```bash
sudo vgcreate vgdata /dev/sdb
```

## 21.3 Create LV

```bash
sudo lvcreate -L 10G -n lvapp vgdata
```

Device may appear as:

```text
/dev/vgdata/lvapp
```

## 21.4 Create filesystem

```bash
sudo mkfs.xfs /dev/vgdata/lvapp
```

or:

```bash
sudo mkfs.ext4 /dev/vgdata/lvapp
```

## 21.5 Extend volume

```bash
sudo lvextend -L +5G /dev/vgdata/lvapp
```

Resize filesystem.

XFS:

```bash
sudo xfs_growfs /mountpoint
```

ext4:

```bash
sudo resize2fs /dev/vgdata/lvapp
```

Convenient LVM option:

```bash
sudo lvextend -r -L +5G /dev/vgdata/lvapp
```

`-r` requests filesystem resize too when supported.

## 21.6 Inspect

```bash
pvs
vgs
lvs
```

Detailed:

```bash
pvdisplay
vgdisplay
lvdisplay
```

## Scenario: `/var` is full

Suppose `/var` is an LVM logical volume and VG has free space.

1. Verify:

```bash
df -h /var
lvs
vgs
```

2. Extend:

```bash
sudo lvextend -r -L +5G /dev/mapper/vgname-var
```

3. Verify:

```bash
df -h /var
```

Do not run the command until you identify the exact LV.

---

# 22. Swap, RAID, and Storage Reliability

## 22.1 Swap

View:

```bash
swapon --show
free -h
```

Create swap file example:

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Persistent `/etc/fstab` entry:

```text
/swapfile none swap sw 0 0
```

## 22.2 RAID concepts

Common RAID levels:

| RAID | Concept |
|---|---|
| RAID 0 | Striping, speed, no redundancy |
| RAID 1 | Mirroring |
| RAID 5 | Single parity |
| RAID 6 | Dual parity |
| RAID 10 | Mirrors + striping |

RAID is **not a backup**.

## 22.3 mdadm

Software RAID is often administered with `mdadm`.

Example inspection:

```bash
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

Creation/destruction commands should be practiced only on disposable lab disks.

## 22.4 SMART

Storage health:

```bash
sudo smartctl -a /dev/sda
```

Requires `smartmontools`.

---

# Part 7 — Networking

# 23. Networking Fundamentals

## 23.1 Key concepts

Learn:

- MAC address
- IP address
- subnet mask/prefix
- default gateway
- DNS
- route
- port
- TCP
- UDP
- socket
- DHCP
- NAT

## 23.2 IPv4 example

```text
IP:      192.168.1.20
Prefix:  /24
Network: 192.168.1.0
Gateway: 192.168.1.1
```

## 23.3 View addresses

```bash
ip addr
ip -br addr
```

## 23.4 Routes

```bash
ip route
```

## 23.5 Interfaces

```bash
ip link
```

## 23.6 Listening ports

```bash
ss -tulpn
```

TCP listening:

```bash
ss -ltnp
```

## 23.7 Connection troubleshooting model

When an application is unreachable, check in this order:

```text
1. Is the process running?
2. Is it listening?
3. Is it listening on correct IP?
4. Is local firewall allowing it?
5. Is network route valid?
6. Is upstream firewall/security group allowing it?
7. Is DNS resolving correctly?
8. Is SELinux/AppArmor blocking it?
9. Is reverse proxy/load balancer configured?
10. Are application logs reporting an error?
```

---

# 24. NetworkManager and nmcli

Modern RHEL and Mint commonly use NetworkManager.

## 24.1 Device status

```bash
nmcli device status
```

## 24.2 Connections

```bash
nmcli connection show
```

## 24.3 Detailed device info

```bash
nmcli device show
```

## 24.4 Bring connection up/down

```bash
sudo nmcli connection up "Wired connection 1"
sudo nmcli connection down "Wired connection 1"
```

## 24.5 Static IPv4 example

First identify connection:

```bash
nmcli con show
```

Configure:

```bash
sudo nmcli con mod "System eth0" \
  ipv4.addresses 192.168.10.20/24 \
  ipv4.gateway 192.168.10.1 \
  ipv4.dns "1.1.1.1 8.8.8.8" \
  ipv4.method manual
```

Activate:

```bash
sudo nmcli con up "System eth0"
```

Names differ between systems. Never copy a connection name blindly.

## 24.6 DHCP

```bash
sudo nmcli con mod "System eth0" ipv4.method auto
sudo nmcli con up "System eth0"
```

## 24.7 NetworkManager TUI

```bash
nmtui
```

Useful on servers when available.

---

# 25. DNS, Hostnames, Time, and Connectivity Tools

## 25.1 Hostname

```bash
hostname
hostnamectl
```

Set:

```bash
sudo hostnamectl set-hostname server01.example.com
```

## 25.2 `/etc/hosts`

Example:

```text
192.168.10.20 app01.example.com app01
```

Do not use `/etc/hosts` as a replacement for scalable DNS.

## 25.3 DNS resolution

```bash
getent hosts example.com
```

With tools installed:

```bash
dig example.com
nslookup example.com
```

## 25.4 Ping

```bash
ping -c 4 8.8.8.8
```

Note: blocked ICMP does not necessarily mean the host/service is down.

## 25.5 curl

HTTP test:

```bash
curl -I https://example.com
```

Verbose:

```bash
curl -v https://example.com
```

Local service:

```bash
curl -v http://127.0.0.1:8080/
```

## 25.6 traceroute / tracepath

```bash
tracepath example.com
```

or:

```bash
traceroute example.com
```

## 25.7 Port testing

If `nc` is installed:

```bash
nc -vz server.example.com 443
```

## 25.8 Time

```bash
timedatectl
```

RHEL commonly uses chrony:

```bash
systemctl status chronyd
chronyc sources -v
```

Mint may also use systemd/chrony depending on configuration.

Correct time is critical for:

- TLS
- Kerberos
- logs
- authentication
- databases
- distributed systems

---

# 26. SSH and Remote Administration

## 26.1 SSH client

```bash
ssh user@server
```

Custom port:

```bash
ssh -p 2222 user@server
```

## 26.2 SSH keys

Generate:

```bash
ssh-keygen -t ed25519
```

Copy:

```bash
ssh-copy-id user@server
```

Then:

```bash
ssh user@server
```

## 26.3 Permissions

Typical client permissions:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_ed25519
```

## 26.4 Server configuration

Often:

```text
/etc/ssh/sshd_config
```

Check config:

```bash
sudo sshd -t
```

RHEL restart/reload:

```bash
sudo systemctl reload sshd
```

Mint:

```bash
sudo systemctl reload ssh
```

## 26.5 Safer hardening sequence

Before disabling password authentication:

1. Create a second admin session.
2. Confirm key login works.
3. Validate config with `sshd -t`.
4. Keep current session open.
5. Reload SSH.
6. Test a new login.
7. Only then close the old session.

This prevents remote lockout.

## 26.6 SSH config file

Client:

```text
~/.ssh/config
```

Example:

```text
Host app01
    HostName 192.168.10.20
    User devops
    IdentityFile ~/.ssh/id_ed25519
```

Then:

```bash
ssh app01
```

---

# 27. File Transfer and Synchronization

## 27.1 scp

```bash
scp file.txt user@server:/tmp/
scp user@server:/var/log/app.log .
```

## 27.2 sftp

```bash
sftp user@server
```

## 27.3 rsync

Local:

```bash
rsync -av source/ destination/
```

Remote:

```bash
rsync -avz source/ user@server:/backup/source/
```

Delete target files not in source:

```bash
rsync -av --delete --dry-run source/ destination/
```

Review the preview, including the source/destination and trailing slashes. Then run:

```bash
rsync -av --delete source/ destination/
```

**Use `--delete` carefully.** It removes destination entries missing from the source, and reversing the paths can destroy the good copy.

Without deletion, a normal archive-style sync is:

```bash
rsync -av source/ destination/
```

## Scenario: deploy static website

```bash
rsync -avz --delete --dry-run ./dist/ web01:/var/www/site/
```

Review.

Then:

```bash
rsync -avz --delete ./dist/ web01:/var/www/site/
```

---

# Part 8 — Firewalls and Mandatory Access Control

# 28. Firewalls

## 28.1 RHEL firewalld

Status:

```bash
sudo firewall-cmd --state
```

Zones:

```bash
sudo firewall-cmd --get-active-zones
```

List:

```bash
sudo firewall-cmd --list-all
```

Allow service permanently:

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

Allow port:

```bash
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
```

Remove:

```bash
sudo firewall-cmd --permanent --remove-port=8080/tcp
sudo firewall-cmd --reload
```

## 28.2 Runtime vs permanent

A runtime rule changes the active firewall immediately and is normally lost after reload/reboot. A permanent rule is saved for future reloads but does not change the active rules until you reload or add the matching runtime rule.

Check both:

```bash
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --list-all
```

## 28.3 Mint UFW

Status:

```bash
sudo ufw status verbose
```

Enable:

```bash
sudo ufw enable
```

If the Mint system is administered remotely, allow the **actual** SSH port/source first, keep the current session open, and test a second session after enabling. `OpenSSH` refers to an application profile and is appropriate only when that profile exists and matches the configured port.

Allow SSH:

```bash
sudo ufw allow OpenSSH
```

Allow port:

```bash
sudo ufw allow 8080/tcp
```

Delete rule:

```bash
sudo ufw delete allow 8080/tcp
```

## 28.4 nftables

Modern Linux packet filtering uses nftables in many distributions.

Inspect:

```bash
sudo nft list ruleset
```

Do not mix firewall management frameworks carelessly.

---

# 29. SELinux on RHEL

SELinux is one of the most important RHEL concepts.

## 29.1 What SELinux does

Traditional Unix permissions answer:

> Does this user/group have permission?

SELinux adds policy-based mandatory access control:

> Is this process, running in this domain, allowed by policy to access this object type?

## 29.2 Modes

```text
Enforcing
Permissive
Disabled
```

Check:

```bash
getenforce
sestatus
```

Temporary permissive:

```bash
sudo setenforce 0
```

Return enforcing:

```bash
sudo setenforce 1
```

Do not use `setenforce 0` as a permanent "solution."

## 29.3 Context

View:

```bash
ls -Z /var/www/html
ps -eZ | grep httpd
```

Typical context structure:

```text
user:role:type:level
```

For troubleshooting, **type** is frequently the most important field.

## 29.4 Restore correct labels

```bash
sudo restorecon -Rv /var/www/html
```

## 29.5 semanage fcontext

If web content lives in a custom directory:

```bash
sudo semanage fcontext -a -t httpd_sys_content_t "/srv/web(/.*)?"
sudo restorecon -Rv /srv/web
```

`semanage` may come from an additional SELinux policy-management package. The `-a` action adds a persistent file-context rule; if an equivalent rule already exists, inspect with `semanage fcontext -l` and modify the correct entry rather than stacking conflicting rules.

## 29.6 SELinux booleans

List relevant:

```bash
getsebool -a | grep httpd
```

Example concept:

```bash
sudo setsebool -P httpd_can_network_connect on
```

Only enable a boolean when the application truly requires that permission.

## 29.7 AVC denials

Search:

```bash
sudo ausearch -m AVC -ts recent
```

Or inspect logs/journal.

If installed:

```bash
sudo sealert -a /var/log/audit/audit.log
```

## 29.8 Non-standard port

If a web server must listen on a non-standard port, firewall permission alone may not be enough. SELinux may require assigning the port to the appropriate SELinux port type.

Inspect:

```bash
sudo semanage port -l | grep http_port_t
```

Then add only when appropriate:

```bash
sudo semanage port -a -t http_port_t -p tcp 8088
```

## Scenario: Apache works when SELinux is permissive

Bad fix:

```bash
setenforce 0
```

Correct workflow:

```text
1. Return to enforcing.
2. Reproduce the problem.
3. Examine AVC denial.
4. Identify incorrect file label, boolean, port label, or policy requirement.
5. Make the minimal policy/configuration change.
6. Retest.
```

---

# 30. AppArmor on Linux Mint

AppArmor is commonly used on Ubuntu-family systems including Mint.

## 30.1 Status

```bash
sudo aa-status
```

## 30.2 Concept

AppArmor uses profiles to restrict programs by paths and capabilities.

Possible profile states include:

- enforce
- complain
- unconfined

## 30.3 Troubleshooting

Look for kernel/journal messages:

```bash
journalctl -k | grep -i apparmor
```

or:

```bash
dmesg | grep -i apparmor
```

Do not disable AppArmor globally to fix one application.

Instead:

1. identify denial
2. identify profile
3. understand application need
4. update policy minimally
5. test

---

# Part 9 — Security

# 31. Linux Security and Hardening

## 31.1 Security layers

Think in layers:

```text
Physical security
Firmware/UEFI
Boot security
Disk encryption
User authentication
sudo
File permissions/ACL
SELinux/AppArmor
Firewall
Application configuration
Patch management
Logging/auditing
Backups
Network controls
Monitoring
```

## 31.2 Patch management

RHEL:

```bash
sudo dnf upgrade
```

Mint:

```bash
sudo apt update
sudo apt upgrade
```

Linux Mint also provides graphical Update Manager and `mintupdate-cli`.

## 31.3 Avoid direct root SSH login

A common secure pattern:

```text
admin user
↓
SSH key
↓
sudo
```

## 31.4 Password policy

Explore:

```text
/etc/login.defs
/etc/pam.d/
```

In enterprise environments, policies may come from:

- PAM
- SSSD
- FreeIPA/IdM
- Active Directory
- security baselines

## 31.5 Auditd

RHEL commonly uses the Linux Audit system.

Status:

```bash
systemctl status auditd
```

Search:

```bash
ausearch
aureport
```

## 31.6 File integrity

Possible approaches:

- AIDE
- package verification
- configuration management
- EDR/security tooling

RHEL RPM verification example:

```bash
rpm -V package_name
```

## 31.7 Open ports

```bash
ss -lntup
```

Ask for every listener:

```text
What process owns it?
Is it required?
Which interface is it bound to?
Who should reach it?
Does firewall policy match?
```

## 31.8 Principle of least privilege

Give only:

- required user privileges
- required sudo commands
- required ports
- required file permissions
- required SELinux/AppArmor access
- required network routes

## 31.9 Secrets

Avoid:

```text
passwords in scripts
API keys in shell history
world-readable private keys
secrets committed to Git
```

Prefer:

- secret manager
- protected environment/config
- file permissions
- systemd credential mechanisms where appropriate
- CI/CD secret variables

---

# Part 10 — Scheduling and Automation

# 32. cron, at, and systemd timers

## 32.1 cron

Edit user crontab:

```bash
crontab -e
```

List:

```bash
crontab -l
```

Format:

```text
minute hour day-of-month month day-of-week command
```

Example every day at 02:30:

```cron
30 2 * * * /usr/local/bin/backup.sh
```

## 32.2 Cron pitfalls

Cron has a minimal environment.

Use absolute paths:

```cron
30 2 * * * /usr/bin/bash /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1
```

Do not assume interactive `PATH`.

## 32.3 at

Run once:

```bash
echo "/usr/local/bin/report.sh" | at 22:00
```

List:

```bash
atq
```

Remove:

```bash
atrm JOB_ID
```

## 32.4 systemd timer

Service:

```ini
# /etc/systemd/system/mybackup.service
[Unit]
Description=Run backup

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh
```

Timer:

```ini
# /etc/systemd/system/mybackup.timer
[Unit]
Description=Nightly backup

[Timer]
OnCalendar=*-*-* 02:30:00
Persistent=true

[Install]
WantedBy=timers.target
```

Enable:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now mybackup.timer
```

List timers:

```bash
systemctl list-timers
```

Validate and test the service independently before trusting the schedule:

```bash
sudo systemd-analyze verify /etc/systemd/system/mybackup.service /etc/systemd/system/mybackup.timer
sudo systemctl start mybackup.service
journalctl -u mybackup.service --no-pager
systemctl list-timers mybackup.timer
```

The service's `ExecStart` path must exist and be executable. `Persistent=true` catches up a missed calendar run after downtime; it does not retry every failed execution.

Why timers are useful:

- integrated logs
- dependency support
- missed-run persistence
- service isolation
- standardized management

---

# Part 11 — Bash Scripting

# 33. Bash Scripting

## 33.1 First script

```bash
#!/usr/bin/env bash

echo "Hello Linux"
```

Make executable:

```bash
chmod +x hello.sh
./hello.sh
```

## 33.2 Safe starter template

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

main() {
    echo "Starting"
}

main "$@"
```

Meaning:

- `-e`: exit on many unhandled failures
- `-u`: error on unset variables
- `-o pipefail`: pipeline fails if a component fails
- `-E`: ERR traps propagate more consistently

These are useful but not magic. Understand command-specific behavior.

## 33.3 Variables

```bash
name="Shoeb"
echo "$name"
```

Always quote expansions unless you intentionally need word splitting/globbing:

```bash
cp -- "$source" "$destination"
```

## 33.4 Arguments

```bash
echo "$0"
echo "$1"
echo "$2"
echo "$#"
echo "$@"
```

## 33.5 Condition

```bash
if [[ -f "/etc/os-release" ]]; then
    echo "Found"
else
    echo "Missing"
fi
```

## 33.6 String comparison

```bash
if [[ "$env" == "prod" ]]; then
    echo "Production"
fi
```

## 33.7 Numeric comparison

```bash
if (( count > 10 )); then
    echo "More than ten"
fi
```

## 33.8 Loop

```bash
for host in web01 web02 web03; do
    echo "$host"
done
```

## 33.9 While

```bash
count=1

while (( count <= 5 )); do
    echo "$count"
    ((++count))
done
```

The prefix increment is friendly to `set -e`: `((count++))` evaluates to the old value and can return status 1 when that value is zero, which may terminate a strict-mode script unexpectedly.

## 33.10 Functions

```bash
backup_file() {
    local file="$1"
    cp -- "$file" "${file}.bak"
}
```

## 33.11 Case

```bash
case "$1" in
    start)
        echo "Starting"
        ;;
    stop)
        echo "Stopping"
        ;;
    *)
        echo "Usage: $0 {start|stop}"
        exit 1
        ;;
esac
```

## 33.12 Read input

```bash
read -r -p "Enter username: " username
echo "User: $username"
```

## 33.13 Exit status

```bash
command
echo "$?"
```

Convention:

```text
0 = success
non-zero = failure
```

## 33.14 Trap

```bash
cleanup() {
    rm -f -- "$lockfile"
}

lockfile=$(mktemp /tmp/myapp.lock.XXXXXX)
trap cleanup EXIT
```

`mktemp` creates a unique file securely and returns its path. A fixed predictable path in a world-writable directory can collide with another process or enable unsafe link attacks.

## 33.15 Logging function

```bash
log() {
    printf '%s %s\n' "$(date '+%F %T')" "$*"
}
```

## 33.16 Example: disk usage alert

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

threshold=80

df -P | awk 'NR>1 {gsub("%","",$5); print $5, $6}' |
while read -r usage mountpoint; do
    if (( usage >= threshold )); then
        printf 'WARNING: %s is %s%% full\n' "$mountpoint" "$usage"
    fi
done
```

## 33.17 ShellCheck

Use ShellCheck where available to identify common Bash mistakes.

---

# 34. Regular Expressions, grep, sed, and awk

## 34.1 Regex basics

| Pattern | Meaning |
|---|---|
| `^` | beginning |
| `$` | end |
| `.` | any char |
| `*` | zero or more |
| `+` | one or more in extended regex |
| `?` | zero or one in extended regex |
| `[abc]` | one character from set |
| `[^abc]` | not one of set |
| `[0-9]` | digit |
| `()` | group in extended regex |
| `a|b` | alternative in extended regex |

## 34.2 grep examples

IP-like lines:

```bash
grep -E '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+' file
```

Configuration lines excluding comments:

```bash
grep -Ev '^[[:space:]]*(#|$)' file.conf
```

## 34.3 sed

Replace first occurrence per line:

```bash
sed 's/old/new/' file.txt
```

Global:

```bash
sed 's/old/new/g' file.txt
```

In-place with backup:

```bash
sed -i.bak 's/old/new/g' file.txt
```

## 34.4 awk

Print fields:

```bash
awk '{print $1}' file.txt
```

Colon-delimited:

```bash
awk -F: '{print $1, $7}' /etc/passwd
```

Disk example:

```bash
df -P | awk 'NR>1 {print $5, $6}'
```

## 34.5 Pipeline example

Top client IPs from an access log:

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head
```

---

# Part 12 — Backup, Services, Kernel, and Performance

# 35. Archives, Compression, Backup, and Restore

## 35.1 tar

Create gzip archive:

```bash
tar -czf backup.tar.gz directory/
```

List:

```bash
tar -tzf backup.tar.gz
```

Extract:

```bash
tar -xzf backup.tar.gz
```

## 35.2 gzip

```bash
gzip file.log
gunzip file.log.gz
```

## 35.3 zip

```bash
zip -r archive.zip directory/
unzip archive.zip
```

## 35.4 Backup principles

A backup strategy should answer:

- What is backed up?
- How often?
- Where?
- How long retained?
- Is it encrypted?
- Is it offsite?
- How do we restore?
- When was restore last tested?
- What is RPO?
- What is RTO?

## 35.5 3-2-1 idea

A common strategy:

- 3 copies of data
- 2 different media/storage types
- 1 offsite copy

Modern environments may extend this with immutable/offline copies.

## 35.6 rsync backup example

Dry run:

```bash
rsync -aHAX --delete --dry-run /srv/data/ /backup/data/
```

Then actual:

```bash
rsync -aHAX --delete /srv/data/ /backup/data/
```

Whether `-A`, `-X`, or `-H` are appropriate depends on filesystem and requirements.

---

# 36. Web, File, and Network Services

## 36.1 Web server troubleshooting model

For Apache/Nginx:

```text
Package installed?
Service running?
Configuration valid?
Process listening?
Correct port?
Firewall open?
SELinux/AppArmor permit?
File permissions correct?
DNS correct?
TLS certificate valid?
Application upstream healthy?
```

## 36.2 Apache names

RHEL package/service commonly:

```text
httpd
```

Mint/Ubuntu:

```text
apache2
```

RHEL:

```bash
sudo systemctl status httpd
```

Mint:

```bash
sudo systemctl status apache2
```

## 36.3 Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 36.4 NFS concepts

NFS is commonly used for Unix/Linux shared filesystems.

Server concepts:

```text
/etc/exports
exportfs
nfs-server
```

Client:

```bash
mount -t nfs server:/export /mnt/share
```

Exact package/service names vary.

## 36.5 Samba

Samba implements SMB/CIFS interoperability.

Useful for:

- Linux ↔ Windows file sharing
- NAS-like shares
- corporate file access

Main configuration often:

```text
/etc/samba/smb.conf
```

## 36.6 Database services

Linux often hosts:

- PostgreSQL
- MariaDB/MySQL
- Redis
- MongoDB
- enterprise databases

The Linux admin must understand:

- service startup
- disks
- memory
- file descriptors
- networking
- backups
- logs
- system limits
- SELinux/AppArmor
- firewall
- time synchronization

---

# 37. Kernel, Modules, Drivers, and DKMS

## 37.1 Kernel version

```bash
uname -r
```

## 37.2 Boot command line

```bash
cat /proc/cmdline
```

## 37.3 Loaded modules

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

## 37.4 Hardware

PCI:

```bash
lspci
lspci -k
```

USB:

```bash
lsusb
```

CPU:

```bash
lscpu
```

Memory:

```bash
free -h
```

Detailed memory:

```bash
cat /proc/meminfo
```

## 37.5 DKMS

DKMS rebuilds out-of-tree kernel modules against installed kernels.

Useful for proprietary or third-party drivers.

Check:

```bash
dkms status
```

This is particularly relevant on Mint when using proprietary graphics/Wi-Fi drivers.

## 37.6 Kernel update troubleshooting

If a new kernel causes failure:

1. Boot an older kernel from GRUB.
2. Confirm the issue disappears.
3. Check DKMS status/drivers.
4. Review boot/kernel logs.
5. Keep the known-good kernel until fixed.
6. Avoid removing the running kernel.

Linux Mint's Update Manager supports managing installed kernels.

---

# 38. Performance Monitoring and Tuning

## 38.1 Start with symptoms

Ask:

```text
Is it CPU?
Memory?
Disk I/O?
Network?
Lock contention?
Application latency?
Database?
External dependency?
```

## 38.2 top

```bash
top
```

Optional:

```bash
htop
```

## 38.3 uptime and load average

```bash
uptime
```

Example:

```text
load average: 1.20, 0.95, 0.80
```

Load average is not simply CPU percentage. It relates to runnable/uninterruptible tasks.

## 38.4 Memory

```bash
free -h
```

Do not interpret "used" memory like Windows without understanding page cache.

## 38.5 Disk

```bash
df -h
du -sh /var/*
```

Inodes:

```bash
df -i
```

A filesystem can fail to create new files because **inodes** are exhausted even when space remains.

## 38.6 vmstat

```bash
vmstat 1
```

Observe:

- runnable processes
- memory
- swap
- I/O
- system
- CPU

## 38.7 iostat

If sysstat installed:

```bash
iostat -xz 1
```

Useful for disk latency/utilization.

## 38.8 sar

```bash
sar
sar -u 1 5
sar -r 1 5
sar -n DEV 1 5
```

Historical data depends on sysstat collection configuration.

## 38.9 I/O processes

If installed:

```bash
sudo iotop
```

## 38.10 Open files

```bash
lsof
```

Specific port:

```bash
sudo lsof -i :8080
```

## 38.11 Process details

```bash
pidstat 1
```

## 38.12 strace

Trace system calls:

```bash
strace command
```

Attach:

```bash
sudo strace -p PID
```

Use carefully in production because tracing can alter performance/timing.

## 38.13 RHEL tuning

RHEL may use `tuned`.

Check:

```bash
tuned-adm active
tuned-adm recommend
```

Choose profiles based on workload and policy, not guesswork.

---

# 39. `/proc`, `/sys`, sysctl, cgroups, and namespaces

## 39.1 `/proc`

Virtual filesystem exposing process/kernel data.

Examples:

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/uptime
ls /proc/$$
```

## 39.2 `/sys`

Exposes device/kernel objects.

Examples:

```bash
ls /sys/class/net/
ls /sys/block/
```

## 39.3 sysctl

View:

```bash
sysctl -a
```

Specific:

```bash
sysctl net.ipv4.ip_forward
```

Temporary:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

Persistent configuration commonly goes under:

```text
/etc/sysctl.conf
/etc/sysctl.d/
```

Apply:

```bash
sudo sysctl --system
```

## 39.4 File descriptors

Check shell limit:

```bash
ulimit -n
```

Process limits:

```bash
cat /proc/PID/limits
```

systemd services may also have unit-specific limits.

## 39.5 cgroups

Control groups manage and account resources such as:

- CPU
- memory
- I/O
- process groups

systemd uses cgroups heavily.

View:

```bash
systemd-cgls
```

## 39.6 namespaces

Namespaces isolate resources:

- PID
- mount
- network
- user
- IPC
- UTS
- cgroup

Namespaces + cgroups are foundational to Linux containers.

---

# Part 13 — Containers and Virtualization

# 40. Containers: Podman and Docker Concepts

## 40.1 Container vs VM

VM:

```text
Hardware
Hypervisor
Guest Kernel
Guest OS
App
```

Container:

```text
Hardware
Host Kernel
Container Runtime
Isolated Processes
App
```

Containers share the host kernel.

## 40.2 Image vs container

```text
Image = immutable-ish template
Container = running/stopped instance
```

## 40.3 RHEL and Podman

RHEL strongly integrates Podman and related container tools.

Check:

```bash
podman --version
```

Run:

```bash
podman run --rm hello-world
```

List:

```bash
podman ps
podman ps -a
```

Images:

```bash
podman images
```

Pull:

```bash
podman pull registry.access.redhat.com/ubi10/ubi
```

Inspect:

```bash
podman inspect container_name
```

Logs:

```bash
podman logs container_name
```

Exec:

```bash
podman exec -it container_name bash
```

Stop/remove:

```bash
podman stop container_name
podman rm container_name
```

## 40.4 Rootless containers

Podman supports rootless operation.

Benefits include reduced host privilege exposure.

However:

> Rootless does not mean risk-free. Images, mounts, capabilities, secrets, and network exposure still require security discipline.

## 40.5 Volumes

Bind mount example:

```bash
podman run --rm -v /srv/data:/data:Z IMAGE
```

On SELinux systems, labels matter. `:Z` or `:z` can adjust labeling semantics for container mounts; use the correct option for your sharing scenario.

## 40.6 Port publishing

```bash
podman run -d -p 8080:80 nginx
```

Then:

```bash
curl http://localhost:8080
```

## 40.7 Docker on Mint

Linux Mint can run Docker when installed using supported repository/instructions appropriate for the underlying Ubuntu base.

Core commands:

```bash
docker ps
docker images
docker run
docker logs
docker exec
```

The conceptual model is similar to Podman.

## 40.8 Container troubleshooting

```text
Image pulls?
Container starts?
Exit code?
Logs?
Entrypoint?
Environment variables?
Volume permissions?
Port mapping?
Firewall?
SELinux/AppArmor?
DNS?
Resource limit?
Application health?
```

---

# 41. Virtualization with KVM/libvirt

## 41.1 Check CPU virtualization

```bash
lscpu | grep -i virtualization
```

## 41.2 KVM

KVM turns the Linux kernel into a hypervisor.

Common stack:

```text
KVM
QEMU
libvirt
virsh
virt-install
virt-manager
```

## 41.3 virsh

List:

```bash
virsh list --all
```

Start:

```bash
virsh start vmname
```

Shutdown:

```bash
virsh shutdown vmname
```

Console:

```bash
virsh console vmname
```

## 41.4 Networking

Common modes:

- NAT
- bridged
- isolated

Choose based on whether guests need:

- outbound-only access
- LAN presence
- isolated lab networking

---

# Part 14 — RHEL Deep Dive

# 42. RHEL-Specific Administration

## 42.1 RHEL philosophy

RHEL emphasizes:

- stability
- enterprise lifecycle
- vendor support
- certified ecosystems
- security
- predictable change
- automation
- compatibility

## 42.2 Essential RHEL commands

```bash
cat /etc/redhat-release
dnf repolist
rpm -qa
subscription-manager status
sestatus
firewall-cmd --state
nmcli
systemctl --failed
journalctl -p err -b
```

## 42.3 SELinux

Learn thoroughly:

```text
contexts
types
booleans
port labels
restorecon
semanage
audit logs
custom policy only when truly needed
```

## 42.4 firewalld

Learn:

```text
zones
services
ports
runtime configuration
permanent configuration
interfaces/sources
rich rules when needed
nftables relationship
```

## 42.5 Cockpit

RHEL includes a web-based administration experience called Cockpit.

Typical uses include:

- service status
- logs
- storage
- networking
- updates
- performance
- accounts

CLI skills remain essential because:

- automation needs CLI/API
- rescue environments may lack GUI
- logs/config are easier to inspect directly
- remote/server work frequently uses SSH

## 42.6 RHEL System Roles

RHEL System Roles provide supported Ansible-based automation patterns for system configuration.

Useful areas can include:

- networking
- storage
- SELinux
- firewall
- time sync
- logging
- Podman
- SSH
- certificates

The key lesson:

> Learn manual administration first, then automate repeatable configuration.

## 42.7 sosreport

For RHEL support diagnostics, `sos report`/sos tooling collects system information.

Use based on organization/privacy rules because support bundles may include sensitive configuration details.

## 42.8 Image Builder

RHEL supports building customized system images for repeatable deployments.

This becomes relevant for:

- cloud images
- edge
- standardized enterprise builds
- golden images

## 42.9 Identity Management

Enterprise RHEL environments may use:

- SSSD
- FreeIPA/Red Hat IdM
- Active Directory integration
- Kerberos
- LDAP

Important commands:

```bash
getent passwd user
id user
sssctl
```

Exact setup depends on identity architecture.

## 42.10 Enterprise troubleshooting mindset

On RHEL, avoid immediately editing random files.

First identify:

```text
Supported configuration method?
systemd unit?
NetworkManager profile?
SELinux policy?
firewalld?
vendor repository?
documented RHEL procedure?
configuration management ownership?
```

---

# Part 15 — Linux Mint Deep Dive

# 43. Linux Mint-Specific Administration

## 43.1 Cinnamon

Cinnamon is the flagship Linux Mint desktop environment.

Key concepts:

- panel
- applets
- desklets
- themes
- workspaces
- keyboard shortcuts
- system settings

## 43.2 Update Manager

Linux Mint provides graphical update management and the command-line utility:

```bash
mintupdate-cli
```

List:

```bash
mintupdate-cli list
```

Security updates:

```bash
mintupdate-cli list -s
```

Use the GUI when learning kernel management because it makes installed kernels easier to understand.

## 43.3 Timeshift

Timeshift creates system snapshots.

It is especially useful before:

- major updates
- kernel changes
- driver changes
- risky configuration changes

Important:

> Timeshift is primarily a system snapshot/recovery tool, not a complete substitute for backing up personal files.

Keep separate backups of important documents.

## 43.4 Driver Manager

Linux Mint provides Driver Manager for supported proprietary drivers.

Relevant hardware:

- NVIDIA GPUs
- some Broadcom Wi-Fi adapters
- other proprietary components

After kernel changes, check:

```bash
dkms status
```

## 43.5 Kernel management

Current kernel:

```bash
uname -a
```

Linux Mint can keep multiple kernels installed.

If a new kernel causes regression:

1. open GRUB advanced options
2. boot prior kernel
3. confirm hardware works
4. review DKMS
5. remove problematic kernel using Update Manager when appropriate

## 43.6 UFW

Desktop users should understand that enabling a firewall changes inbound connectivity.

Before enabling on a remote system, ensure SSH will remain allowed.

```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

## 43.7 AppArmor

Check:

```bash
sudo aa-status
```

Do not globally disable security profiles for convenience.

## 43.8 Multimedia and codecs

Linux Mint provides tools/options to install multimedia codecs.

Use official Mint mechanisms rather than downloading random codec packages.

## 43.9 Desktop troubleshooting information

Useful:

```bash
inxi -Fxxxz
```

If installed, `inxi` provides a convenient system summary.

Linux Mint also provides graphical system information/reporting tools.

## 43.10 Display/graphics troubleshooting

If desktop fails after GPU/kernel update:

```text
1. Try older kernel from GRUB.
2. Check DKMS.
3. Check Driver Manager.
4. Review journal/kernel messages.
5. Check whether proprietary driver module loaded.
6. Avoid repeatedly installing conflicting driver packages from random sources.
```

---

# Part 16 — Troubleshooting

# 44. Troubleshooting Methodology

Great Linux administrators do not memorize only fixes. They follow a process.

## 44.1 The troubleshooting cycle

```text
1. Define symptom precisely
2. Determine scope
3. Identify what changed
4. Gather evidence
5. Form hypothesis
6. Test safely
7. Change one variable
8. Verify result
9. Check side effects
10. Document root cause and prevention
```

## 44.2 Always capture basics

```bash
date
hostnamectl
uptime
cat /etc/os-release
uname -r
whoami
id
df -h
free -h
ip -br addr
ip route
systemctl --failed
journalctl -p err -b
```

## 44.3 Ask "what changed?"

Common causes:

- update
- reboot
- package change
- certificate renewal failure
- DNS change
- firewall rule
- expired password
- disk full
- permission change
- SELinux label
- kernel update
- driver change
- application deploy
- database migration
- external service outage

## 44.4 Use layers

Example web application:

```text
Client
↓
DNS
↓
Network
↓
Firewall
↓
Reverse proxy
↓
TLS
↓
Application service
↓
Database/cache
↓
Storage
```

Test each layer separately.

---

# 45. Real-World Troubleshooting Scenarios

## Scenario 1: "Website is down"

Check process:

```bash
systemctl status nginx
```

Logs:

```bash
journalctl -u nginx -n 100 --no-pager
```

Config:

```bash
nginx -t
```

Port:

```bash
ss -ltnp | grep ':80\|:443'
```

Local test:

```bash
curl -vk https://127.0.0.1/
```

Firewall:

RHEL:

```bash
firewall-cmd --list-all
```

Mint:

```bash
ufw status verbose
```

RHEL SELinux:

```bash
ausearch -m AVC -ts recent
```

Then test DNS/external path.

---

## Scenario 2: Disk is 100% full

```bash
df -h
df -i
```

Find large top-level directories:

```bash
sudo du -xhd1 / | sort -h
```

Then descend.

Find large files:

```bash
sudo find / -xdev -type f -size +1G -printf '%s %p\n' 2>/dev/null | sort -n
```

Check deleted-but-open files:

```bash
sudo lsof +L1
```

Possible causes:

- logs
- core dumps
- Docker/Podman images
- database
- package cache
- temporary files
- deleted file still held open
- inode exhaustion

Do not blindly delete logs/databases.

---

## Scenario 3: Service will not start

```bash
systemctl status app.service
journalctl -u app.service -b
systemctl cat app.service
```

Check:

```text
ExecStart path
permissions
user/group
environment file
working directory
port conflict
config syntax
dependency
SELinux/AppArmor
missing mount
secret/certificate
```

---

## Scenario 4: Port is already in use

```bash
sudo ss -ltnp | grep ':8080'
```

or:

```bash
sudo lsof -i :8080
```

Identify process before killing anything.

---

## Scenario 5: SSH stopped working after hardening

From console or existing session:

```bash
sudo sshd -t
sudo journalctl -u sshd -n 100
```

Mint service:

```bash
sudo journalctl -u ssh -n 100
```

Check:

- syntax
- firewall
- port
- key permissions
- user allowed
- SELinux on RHEL
- `AllowUsers`/`AllowGroups`
- `PasswordAuthentication`
- `PubkeyAuthentication`

---

## Scenario 6: "Permission denied" even with chmod 777

Do **not** jump to `chmod 777`.

Check:

```bash
namei -l /path/to/file
ls -l /path/to/file
getfacl /path/to/file
```

RHEL:

```bash
ls -Z /path/to/file
ausearch -m AVC -ts recent
```

Mint:

```bash
journalctl -k | grep -i apparmor
```

Also check:

- filesystem mounted read-only?
- application user?
- parent directory execute permission?
- ACL mask?
- SELinux/AppArmor?
- NFS root squash?
- container user mapping?

---

## Scenario 7: Server is slow

Start:

```bash
uptime
top
free -h
vmstat 1
```

Disk:

```bash
iostat -xz 1
```

Network:

```bash
sar -n DEV 1
ss -s
```

Disk capacity:

```bash
df -h
df -i
```

Find offending process:

```bash
pidstat 1
```

Then application/database logs.

---

## Scenario 8: DNS problem

Check IP connectivity:

```bash
ping -c 2 1.1.1.1
```

Resolve:

```bash
getent hosts example.com
```

Inspect resolver:

```bash
cat /etc/resolv.conf
```

NetworkManager DNS:

```bash
nmcli dev show | grep -i dns
```

Query:

```bash
dig example.com
```

If IP works but name fails, investigate DNS path.

---

## Scenario 9: Filesystem became read-only

Check:

```bash
mount | grep ' ro[,)]'
journalctl -k -p warning
dmesg | tail -100
```

Potential causes:

- filesystem errors
- storage errors
- underlying device failure
- deliberate mount option

Do not immediately remount read-write without understanding why it became read-only.

---

## Scenario 10: New kernel caused Wi-Fi/GPU failure on Mint

```bash
uname -r
dkms status
lspci -k
journalctl -k
```

Boot prior kernel from GRUB.

If prior kernel works, investigate driver compatibility and Driver Manager.

---

## Scenario 11: RHEL Apache cannot access custom directory

Check Unix permissions:

```bash
namei -l /srv/web/index.html
```

Check context:

```bash
ls -Zd /srv/web
ls -Z /srv/web/index.html
```

Assign supported SELinux context:

```bash
sudo semanage fcontext -a -t httpd_sys_content_t "/srv/web(/.*)?"
sudo restorecon -Rv /srv/web
```

Retest.

Do not disable SELinux.

---

## Scenario 12: App listens locally but not remotely

```bash
ss -ltnp | grep ':8080'
```

If output shows:

```text
127.0.0.1:8080
```

the application is bound only to loopback.

If appropriate, configure application to bind to:

```text
0.0.0.0:8080
```

or a specific server IP.

Then also verify firewall and security policy.

---

## Scenario 13: Command not found

```bash
type command
command -v command
echo "$PATH"
```

RHEL:

```bash
dnf provides '*/command'
```

Mint:

```bash
apt-file search bin/command
```

`apt-file` may need installation/index setup.

---

## Scenario 14: "No space left on device" but df shows free space

Check inodes:

```bash
df -i
```

Also check:

- quotas
- reserved space
- thin-pool capacity
- container storage
- filesystem limits

---

## Scenario 15: Reboot hangs because mount is unavailable

Inspect:

```bash
cat /etc/fstab
systemctl --failed
journalctl -b
```

For non-critical network/removable mounts, appropriate options such as `nofail` or systemd automount may be useful, but choose them according to service dependencies.

---

# Part 17 — Linux for Developers and DevOps

# 46. Linux for Developers and DevOps Engineers

## 46.1 Skills you should master

```text
Shell
SSH
systemd
logs
permissions
networking
package management
processes
filesystems
Bash
Git
containers
TLS
DNS
reverse proxy
CI/CD runners
cloud VM administration
Kubernetes node basics
```

## 46.2 Application deployment directory idea

Example:

```text
/opt/myapp/
├── releases/
│   ├── 20260813-001/
│   └── 20260813-002/
├── current -> releases/20260813-002
├── shared/
│   ├── config/
│   └── logs/
```

## 46.3 Dedicated application user

```bash
sudo useradd --system --home /opt/myapp --shell /sbin/nologin myapp
```

Shell path varies. Confirm using:

```bash
cat /etc/shells
```

## 46.4 systemd service example

```ini
[Unit]
Description=My API
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=myapp
Group=myapp
WorkingDirectory=/opt/myapp/current
EnvironmentFile=/etc/myapp/myapp.env
ExecStart=/opt/myapp/current/bin/server
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Then:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now myapp
```

## 46.5 Reverse proxy architecture

```text
Internet
   ↓
Firewall / Load Balancer
   ↓
Nginx / Apache
   ↓
Node / Python / Java / PHP / .NET application
   ↓
Database / Cache
```

## 46.6 Environment separation

Do not hardcode production secrets.

Separate:

```text
code
configuration
secrets
data
logs
```

---

# 47. Git, CI/CD, Cloud, and Kubernetes Linux Skills

## 47.1 Git

Linux skills used by Git:

- SSH keys
- permissions
- environment variables
- file ownership
- line endings
- automation scripts

## 47.2 CI/CD runners

A CI/CD runner is still a Linux process.

Troubleshoot:

```text
runner service
runner user
working directory
network
DNS
TLS
proxy
disk space
permissions
container runtime
environment variables
secret access
```

## 47.3 Cloud Linux

On AWS/Azure/GCP you still need:

```text
SSH
systemd
network interfaces
routes
firewall/security groups
disks
LVM
filesystem growth
cloud-init
logs
package updates
identity
```

Cloud does not remove Linux administration.

## 47.4 Kubernetes

Kubernetes worker nodes depend on Linux concepts:

- namespaces
- cgroups
- networking
- iptables/nftables
- filesystem mounts
- processes
- container runtime
- systemd
- kernel parameters

Examples:

```bash
systemctl status kubelet
journalctl -u kubelet
```

## 47.5 Containers and permissions

A container may use UID 1001 internally.

If host-mounted directory is owned by a different UID, the application can receive permission errors.

Always inspect:

```bash
podman inspect
ls -ln /host/path
```

On RHEL, also inspect SELinux labels.

---

# Part 18 — Production Operations

# 48. Production Administration Practices

## 48.1 Before a change

Document:

```text
Reason
Scope
Risk
Backup/snapshot
Dependencies
Implementation steps
Validation
Rollback
Owner
Maintenance window
```

## 48.2 Configuration backup

Before editing:

```bash
sudo cp -a /etc/nginx/nginx.conf /etc/nginx/nginx.conf.$(date +%F-%H%M%S).bak
```

Better still, keep infrastructure configuration in version control where appropriate.

## 48.3 Validate before reload

Nginx:

```bash
sudo nginx -t
```

SSH:

```bash
sudo sshd -t
```

systemd:

```bash
sudo systemd-analyze verify /etc/systemd/system/myapp.service
```

## 48.4 Change one thing at a time

Bad:

```text
Update packages
change firewall
change DNS
change application
reboot
```

Then when it fails, root cause is unclear.

Prefer controlled changes with validation.

## 48.5 Monitoring basics

Monitor at least:

- CPU
- memory
- disk capacity
- inode capacity
- disk latency
- service availability
- certificate expiry
- network
- application errors
- backups
- security events

## 48.6 Documentation

Document:

- hostname
- role
- IP
- OS
- owner
- application
- ports
- dependencies
- backup
- monitoring
- recovery process
- maintenance procedure

---

# 49. Disaster Recovery and Rescue

## 49.1 Recovery mindset

Before modifying:

```text
Can data be copied?
Is backup available?
Can filesystem be mounted read-only?
Is disk failing?
Will reboot make it worse?
Can VM snapshot help?
```

## 49.2 Emergency mode

systemd can boot into emergency/rescue modes.

Examples:

```bash
systemctl rescue
systemctl emergency
```

Do not trigger these remotely without understanding consequences.

## 49.3 Broken fstab

Symptoms:

- boot emergency mode
- mount failures

Check:

```bash
cat /etc/fstab
blkid
lsblk -f
mount -a
```

Correct UUID/device/filesystem/options.

## 49.4 Forgotten password

Recovery methods depend on:

- distro
- bootloader access
- disk encryption
- organization security

Disk encryption intentionally changes what can be recovered without credentials.

## 49.5 GRUB problems

Use live/rescue media when necessary.

Before repair, identify:

```text
UEFI or BIOS?
root filesystem?
EFI System Partition?
separate /boot?
LVM?
encryption?
```

## 49.6 Filesystem repair

ext family:

```bash
fsck
```

XFS:

```bash
xfs_repair
```

Filesystem repair generally must be performed on an unmounted filesystem and carries risk. Follow filesystem-specific documentation and ensure backups when possible.

---

# Part 19 — Hands-On Practice

# 50. Practice Labs and Projects

## Lab 1: Navigation

Tasks:

1. Create:

```text
~/linux-lab/
├── docs/
├── logs/
├── scripts/
└── backup/
```

2. Create five text files.
3. Copy files to backup.
4. Rename one.
5. Use `find` to locate it.
6. Use `stat`.

Success criteria:

- no GUI file manager
- only terminal commands

---

## Lab 2: Permissions

Create users:

```text
alice
bob
```

Group:

```text
project
```

Goal:

- both can edit `/shared/project`
- other users cannot
- new files inherit project group

Use:

```text
groupadd
usermod
chown
chmod
SGID
umask or default ACL
```

---

## Lab 3: Service

Create a small HTTP service or script.

Build a systemd unit that:

- runs as non-root
- starts at boot
- restarts on failure
- writes logs to journal

Test:

```bash
systemctl status
journalctl -u
```

---

## Lab 4: Disk

Add a virtual disk.

Tasks:

1. identify disk
2. create partition
3. create filesystem
4. mount `/data`
5. persist through `/etc/fstab`
6. reboot
7. verify

---

## Lab 5: LVM

Add two lab disks.

Build:

```text
PV → VG → LV → filesystem
```

Then grow LV while data remains available.

---

## Lab 6: Networking

Set up two VMs.

Test:

```text
ping
SSH
DNS/hosts
static IP
firewall
HTTP
```

Break one layer and diagnose it.

---

## Lab 7: Firewall

RHEL:

- run web server on 8080
- verify blocked
- allow port
- verify access

Mint:

- enable UFW safely
- allow SSH
- allow 8080
- verify

---

## Lab 8: SELinux

RHEL only.

1. install web server
2. use `/srv/web`
3. intentionally observe SELinux denial
4. inspect AVC
5. apply correct context
6. keep enforcing

Goal:

> Solve without disabling SELinux.

---

## Lab 9: Bash backup

Create script that:

- accepts source path
- validates directory exists
- creates timestamped archive
- logs result
- returns non-zero on failure

Schedule with systemd timer.

---

## Lab 10: Log analysis

Given access log, calculate:

- top 10 IP addresses
- status code counts
- top requested URLs
- number of 5xx responses

Use:

```text
awk
sort
uniq
grep
head
```

---

## Lab 11: Container

RHEL:

```bash
podman run
```

Mint:

Docker or Podman.

Tasks:

- run Nginx
- publish port 8080
- inspect
- view logs
- exec into container
- mount content
- stop/remove

---

## Lab 12: Broken server challenge

Intentionally create one issue at a time:

- wrong file permission
- closed firewall port
- stopped service
- wrong DNS
- full filesystem
- bad config
- wrong SELinux label
- app bound to loopback

Diagnose without being told which issue exists.

---

# 51. Interview Questions and Answers

## Q1. What is the Linux kernel?

The kernel is the core of Linux. It manages CPU, memory, devices, processes, filesystems, networking, security mechanisms, and system calls.

## Q2. What is the difference between RHEL and Linux Mint?

RHEL is enterprise-oriented and commonly used for supported production servers. Linux Mint is desktop-focused and based primarily on Ubuntu LTS packages. RHEL uses RPM/DNF and SELinux/firewalld heavily; Mint uses DEB/APT with AppArmor/UFW commonly.

## Q3. What is PID 1?

On modern RHEL and Mint, PID 1 is normally systemd, which initializes userspace and manages system services/units.

## Q4. Hard link vs symlink?

Hard link references the same inode and normally cannot cross filesystems. Symlink stores a path reference and can cross filesystems.

## Q5. chmod 755 means?

```text
owner: rwx
group: r-x
other: r-x
```

## Q6. Difference between `df` and `du`?

- `df`: filesystem allocation/free space
- `du`: space reachable through directory/file traversal

They can differ, for example when a large deleted file is still open.

## Q7. How do you find a deleted file still consuming disk?

```bash
sudo lsof +L1
```

## Q8. What is load average?

A measure related to work waiting/running, traditionally including runnable tasks and tasks in uninterruptible sleep. Interpret relative to CPU count and workload behavior.

## Q9. What does `kill -9` do?

Sends SIGKILL, which the target cannot handle or ignore. Use it only when graceful termination fails or is inappropriate.

## Q10. What is SELinux?

A mandatory access control system used heavily on RHEL. It applies security policy based on labels/domains/types in addition to Unix permissions.

## Q11. Why not disable SELinux?

Because doing so removes a security layer. Correct the label, boolean, port type, or policy instead.

## Q12. What is AppArmor?

A Linux security module using profiles, commonly used on Ubuntu-family systems including Linux Mint.

## Q13. How do you identify a listening service?

```bash
ss -ltnp
```

## Q14. How do you make a service start at boot?

```bash
sudo systemctl enable service
```

Start now too:

```bash
sudo systemctl enable --now service
```

## Q15. What is LVM?

A storage abstraction using PVs, VGs, and LVs to make disk allocation and resizing more flexible.

## Q16. RAID vs backup?

RAID provides availability/redundancy depending on level. It does not protect against deletion, ransomware, application corruption, or many disaster scenarios. You still need backups.

## Q17. What is an inode?

Filesystem metadata structure that describes a file's attributes and storage references. A directory maps names to inode numbers.

## Q18. What is a zombie process?

A terminated process whose parent has not yet collected its exit status.

View states:

```bash
ps -el
```

## Q19. What is an orphan process?

A child whose original parent exited. It becomes adopted by an appropriate reaper process, often PID 1 or a subreaper.

## Q20. What is a file descriptor?

A process-local integer handle for an open file/socket/pipe/device.

## Q21. What is `/proc`?

A virtual filesystem exposing process and kernel information.

## Q22. What is a systemd target?

A unit used to group/synchronize system states and dependencies, broadly replacing the role of traditional runlevels.

## Q23. What is a package repository?

A managed source of signed packages and metadata used by package managers.

## Q24. `rpm` vs `dnf`?

RPM is a low-level package format/tool. DNF resolves dependencies and works with repositories.

## Q25. `dpkg` vs `apt`?

dpkg is a lower-level DEB package tool. APT handles repositories and dependency resolution.

## Q26. Why can chmod 777 still fail?

Possible causes:

- SELinux
- AppArmor
- ACL
- read-only filesystem
- wrong parent directory access
- NFS behavior
- container mapping
- application-specific restrictions

## Q27. How do you troubleshoot a service?

```text
status → logs → config validation → process → port → permissions → firewall → MAC security → dependencies
```

## Q28. What is `nice`?

A scheduling priority hint for normal CPU scheduling.

## Q29. What is cgroup?

A kernel mechanism for grouping processes and controlling/accounting resources.

## Q30. What is a namespace?

A kernel isolation mechanism that gives processes separate views of system resources.

## Q31. Why are cgroups and namespaces important?

They are core primitives behind Linux containers.

## Q32. What is `fstab`?

`/etc/fstab` defines filesystems and mount behavior used by boot/system services and manual mounting tools.

## Q33. How do you safely edit sudo rules?

```bash
visudo
```

or a file under `/etc/sudoers.d/` validated appropriately.

## Q34. How do you see previous boot logs?

```bash
journalctl -b -1
```

## Q35. How do you detect inode exhaustion?

```bash
df -i
```

## Q36. How do you see the process using port 443?

```bash
sudo ss -ltnp | grep ':443'
```

## Q37. What is the difference between bind 127.0.0.1 and 0.0.0.0?

`127.0.0.1` listens only on loopback. `0.0.0.0` means all IPv4 interfaces, subject to firewall and application behavior.

## Q38. What is a default gateway?

The router used for traffic whose destination is not reached by a more specific local route.

## Q39. Why is DNS important to Linux administration?

Applications frequently depend on names, certificates, service discovery, repositories, APIs, authentication, and remote systems. DNS failure can look like an application failure.

## Q40. Why is time synchronization important?

Authentication, TLS, logs, distributed systems, databases, and audit trails all depend on accurate time.

---

# 52. Command Cheat Sheet

## System

```bash
cat /etc/os-release
uname -a
hostnamectl
timedatectl
uptime
```

## Files

```bash
pwd
ls -lah
cd
cp
mv
rm
mkdir
touch
stat
file
```

## Search

```bash
find
grep
locate
which
type
command -v
```

## Text

```bash
cat
less
head
tail
sort
uniq
cut
tr
wc
tee
sed
awk
```

## Permissions

```bash
chmod
chown
chgrp
getfacl
setfacl
umask
```

## Users

```bash
id
whoami
getent
useradd
usermod
userdel
groupadd
passwd
```

## Processes

```bash
ps aux
top
pgrep
pkill
kill
jobs
fg
bg
nice
renice
```

## systemd

```bash
systemctl status
systemctl start
systemctl stop
systemctl restart
systemctl reload
systemctl enable
systemctl disable
systemctl --failed
```

## Logs

```bash
journalctl
journalctl -b
journalctl -u SERVICE
journalctl -f
journalctl -p err
```

## Disk

```bash
lsblk
blkid
df -h
df -i
du -sh
findmnt
mount
umount
```

## LVM

```bash
pvs
vgs
lvs
pvcreate
vgcreate
lvcreate
lvextend
```

## Network

```bash
ip -br addr
ip route
ip link
ss -ltnp
nmcli
ping
curl
dig
getent hosts
tracepath
```

## SSH

```bash
ssh
ssh-keygen
ssh-copy-id
scp
sftp
rsync
```

## RHEL packages

```bash
dnf search
dnf info
dnf install
dnf upgrade
dnf remove
rpm -q
rpm -qi
rpm -ql
rpm -qf
```

## Mint packages

```bash
apt update
apt upgrade
apt install
apt remove
apt purge
apt autoremove
apt search
dpkg -l
dpkg -S
```

## RHEL firewall

```bash
firewall-cmd --state
firewall-cmd --list-all
firewall-cmd --permanent --add-service=http
firewall-cmd --reload
```

## Mint firewall

```bash
ufw status
ufw allow OpenSSH
ufw allow 8080/tcp
```

## RHEL SELinux

```bash
getenforce
sestatus
ls -Z
ps -eZ
restorecon
semanage
getsebool
setsebool
ausearch
```

## Mint AppArmor

```bash
aa-status
journalctl -k | grep -i apparmor
```

## Performance

```bash
top
free -h
vmstat 1
iostat -xz 1
sar
pidstat 1
lsof
strace
```

## Containers

```bash
podman ps
podman images
podman run
podman logs
podman exec
podman inspect
podman stop
podman rm
```

---

# 53. Learning Roadmap

## Stage 1 — Linux Beginner

Master:

- terminal
- paths
- filesystem hierarchy
- files/directories
- permissions
- users/groups
- editors
- package installation
- basic processes

Practice daily.

## Stage 2 — Linux Intermediate

Master:

- systemd
- logs
- networking
- SSH
- firewall
- disks/mounts
- Bash
- grep/sed/awk
- cron/timers
- troubleshooting

## Stage 3 — RHEL Administrator

Master:

- DNF/RPM
- RHEL repos/subscription
- LVM
- XFS
- NetworkManager
- firewalld
- SELinux
- Cockpit
- RHEL System Roles
- performance
- support diagnostics

## Stage 4 — Linux Mint Power User

Master:

- APT/dpkg
- Update Manager
- kernel management
- Timeshift
- Driver Manager
- DKMS
- UFW
- AppArmor
- Cinnamon troubleshooting
- desktop hardware diagnostics

## Stage 5 — Advanced Linux

Master:

- systemd units/timers
- PAM
- SSSD
- DNS
- web services
- NFS/Samba
- kernel/sysctl
- cgroups
- namespaces
- performance analysis
- storage troubleshooting
- security hardening

## Stage 6 — DevOps Linux

Master:

- Bash automation
- Git
- SSH automation
- CI/CD runners
- Docker/Podman
- cloud Linux
- Nginx
- TLS
- Ansible
- Kubernetes node concepts
- observability

## Stage 7 — Production Engineer

Practice:

- change management
- root cause analysis
- incident handling
- backup/restore tests
- patching
- capacity planning
- hardening
- automation
- documentation
- disaster recovery

---

# 54. Glossary

**APT**  
High-level package management system commonly used by Debian/Ubuntu-family distributions.

**AppArmor**  
Linux security module that restricts applications using profiles.

**Bash**  
A common Unix shell and scripting language.

**Block device**  
Storage device presented as fixed-size blocks, such as disks and partitions.

**cgroup**  
Kernel mechanism for grouping processes and managing resource usage.

**CIDR**  
IP prefix notation such as `/24`.

**Cron**  
Traditional recurring job scheduler.

**Daemon**  
Long-running background service.

**DEB**  
Debian package format.

**DNF**  
Package manager used by modern RHEL-family systems.

**DNS**  
Domain Name System; maps names to records such as IP addresses.

**Filesystem**  
Structure used to organize and store files on a block device or other backing store.

**firewalld**  
Dynamic firewall management service commonly used on RHEL.

**GRUB**  
Common Linux bootloader.

**inode**  
Filesystem metadata object describing a file.

**initramfs**  
Early boot filesystem used before mounting the actual root filesystem.

**journalctl**  
CLI for querying the systemd journal.

**Kernel**  
Core component controlling hardware/resources and providing system calls.

**LVM**  
Logical Volume Manager.

**MAC**  
Mandatory Access Control in security context; can also mean Media Access Control in networking. Context matters.

**Namespace**  
Kernel isolation mechanism.

**NetworkManager**  
Linux network configuration/management service.

**NFS**  
Network File System.

**nftables**  
Modern Linux packet filtering framework.

**PID**  
Process ID.

**Podman**  
Daemonless container engine widely integrated into RHEL.

**PPA**  
Personal Package Archive used in Ubuntu-family ecosystems.

**RHEL**  
Red Hat Enterprise Linux.

**RPM**  
RPM package format and package query/install tool.

**SELinux**  
Security-Enhanced Linux mandatory access control system.

**Shell**  
Command interpreter.

**SSH**  
Secure Shell protocol for remote login and administration.

**sudo**  
Tool for executing commands under delegated privileges.

**systemd**  
Init and service management suite used by modern RHEL and Mint.

**UFW**  
Uncomplicated Firewall, commonly used on Ubuntu-family desktops/servers.

**UUID**  
Stable unique identifier often used for filesystems.

**XFS**  
High-performance journaling filesystem commonly used by RHEL.

---

# 55. "Same Task, Different Distro" Reference

## Install package

RHEL:

```bash
sudo dnf install git
```

Mint:

```bash
sudo apt update
sudo apt install git
```

## Upgrade system packages

RHEL:

```bash
sudo dnf upgrade
```

Mint:

```bash
sudo apt update
sudo apt upgrade
```

## Web server

RHEL Apache:

```bash
sudo dnf install httpd
sudo systemctl enable --now httpd
```

Mint Apache:

```bash
sudo apt install apache2
sudo systemctl enable --now apache2
```

## SSH server

RHEL:

```bash
sudo dnf install openssh-server
sudo systemctl enable --now sshd
```

Mint:

```bash
sudo apt install openssh-server
sudo systemctl enable --now ssh
```

## Firewall open HTTP

RHEL:

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

Mint:

```bash
sudo ufw allow 80/tcp
```

## Security MAC status

RHEL:

```bash
getenforce
sestatus
```

Mint:

```bash
sudo aa-status
```

## Package ownership of file

RHEL:

```bash
rpm -qf /usr/bin/ssh
```

Mint:

```bash
dpkg -S /usr/bin/ssh
```

---

# 56. Administration Checklists

## New Linux server checklist

- [ ] Record hostname, role, owner, environment.
- [ ] Confirm OS and kernel.
- [ ] Apply approved updates.
- [ ] Configure time synchronization.
- [ ] Configure DNS/hostname.
- [ ] Configure admin SSH access.
- [ ] Disable unnecessary services.
- [ ] Configure firewall.
- [ ] Confirm SELinux/AppArmor status.
- [ ] Configure disks/mounts.
- [ ] Configure monitoring.
- [ ] Configure log retention.
- [ ] Configure backups.
- [ ] Test restore procedure.
- [ ] Configure application service.
- [ ] Document ports and dependencies.
- [ ] Confirm vulnerability/patch process.
- [ ] Test reboot.
- [ ] Verify services after reboot.

## Before reboot checklist

- [ ] Check users/maintenance window.
- [ ] Check pending application work.
- [ ] Confirm backup/snapshot when required.
- [ ] Validate `/etc/fstab`.
- [ ] Check failed services.
- [ ] Check disk space.
- [ ] Record current state.
- [ ] Confirm console/out-of-band access for critical server.
- [ ] Reboot.
- [ ] Verify network, mounts, services, application, logs.

## Before deleting files

- [ ] Confirm hostname.
- [ ] Confirm current directory.
- [ ] Confirm exact target.
- [ ] Use `find`/`ls` first.
- [ ] Confirm backup/retention requirements.
- [ ] Check whether file is in active use.
- [ ] Avoid dangerous wildcard expansion.
- [ ] Delete only after verification.

## Production incident checklist

- [ ] Record start time.
- [ ] Define impact.
- [ ] Identify affected scope.
- [ ] Check monitoring.
- [ ] Check recent changes.
- [ ] Capture evidence before destructive recovery.
- [ ] Restore service using lowest-risk action.
- [ ] Verify downstream/upstream dependencies.
- [ ] Monitor after recovery.
- [ ] Write root cause and corrective actions.

---

# 57. Common Dangerous Commands and Safer Habits

## `rm -rf`

Danger:

```bash
rm -rf path
```

Safer habit:

```bash
pwd
find path -maxdepth 2 -print
```

Then delete only if correct.

## `chmod -R 777`

Usually indicates permissions were not understood.

Instead determine:

```bash
namei -l path
ls -l
getfacl
```

RHEL:

```bash
ls -Z
```

## `kill -9`

Use graceful termination first:

```bash
kill PID
```

## Disabling SELinux/AppArmor

Do not disable the entire security system to solve one denial.

Find the actual policy issue.

## Editing firewall remotely

Before changing SSH-related firewall rules:

- keep current session open
- ensure target rule exists
- test from second session

## `dd`

`dd` can overwrite raw disks.

Before using any raw disk command:

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS,MODEL
```

Confirm the exact source and destination multiple times.

---

# 58. Linux Mental Models That Make You Better

## Mental model 1: A service is a process with dependencies

When service fails, think:

```text
Executable
Config
User
Files
Ports
Network
Security policy
Dependencies
Resources
Logs
```

## Mental model 2: A file access decision has layers

```text
Does path exist?
Can process traverse parent directories?
Unix owner/group/mode?
ACL?
Filesystem read-only?
SELinux/AppArmor?
Container mount/user mapping?
Remote filesystem rules?
```

## Mental model 3: Connectivity is layered

```text
Application
Socket
Host firewall
Local route
Network
Remote firewall
Remote listener
Remote application
```

## Mental model 4: "Server is slow" is not a diagnosis

Break into:

```text
CPU
memory
swap
disk I/O
filesystem
network
database
locks
application
external dependency
```

## Mental model 5: Automation should be idempotent

Running automation twice should ideally leave the system in the same desired state rather than duplicating resources or corrupting configuration.

This is a major reason tools such as Ansible are valuable.

---

# 59. Suggested 12-Week Study Plan

## Week 1

- Linux basics
- terminal
- filesystem
- files/directories

## Week 2

- permissions
- users/groups
- sudo
- ACL

## Week 3

- processes
- systemd
- logs

## Week 4

- networking
- SSH
- DNS
- curl
- firewall

## Week 5

- package management
- repositories
- updates
- RHEL vs Mint comparison

## Week 6

- partitions
- filesystems
- fstab
- LVM
- swap

## Week 7

- Bash
- grep
- sed
- awk
- cron/systemd timers

## Week 8

- SELinux
- AppArmor
- security
- auditing

## Week 9

- web services
- reverse proxy
- NFS/Samba
- TLS concepts

## Week 10

- performance
- `/proc`
- sysctl
- kernel/modules
- troubleshooting

## Week 11

- containers
- Podman
- Docker
- virtualization

## Week 12

- production labs
- incident scenarios
- automation
- interview revision

---

# 60. Capstone Projects

## Project A — Secure RHEL web server

Build:

```text
RHEL VM
Nginx/Apache
Custom web root
SELinux enforcing
firewalld
SSH key authentication
non-root admin
systemd
log monitoring
backup
```

Deliverables:

- architecture diagram
- installation commands
- firewall rules
- SELinux reasoning
- recovery procedure

## Project B — Linux Mint developer workstation

Configure:

```text
Mint Cinnamon
updates
Timeshift
Driver Manager
Git
SSH
VS Code/editor
Docker/Podman
local web stack
UFW
backup
```

Document:

- installed packages
- system snapshot process
- developer environment
- driver/kernel recovery process

## Project C — Two-server application

```text
Server 1: reverse proxy
Server 2: application
```

Use:

- static IP
- DNS or `/etc/hosts` in lab
- SSH
- firewall
- systemd
- logs
- rsync deployment
- health endpoint
- backup

Then intentionally break:

- DNS
- firewall
- service
- permissions
- application port

Troubleshoot each.

## Project D — Operations automation

Write Bash/Ansible automation to collect:

```text
hostname
OS
kernel
uptime
CPU
RAM
disk
IP
route
failed services
listening ports
SELinux/AppArmor status
firewall status
```

Output a human-readable report.

---

# 61. Final Advice

Do not try to memorize thousands of Linux commands.

Instead master:

1. **How Linux is structured**
2. **How to discover information**
3. **How to read logs**
4. **How permissions and security layers interact**
5. **How processes/services work**
6. **How networking works**
7. **How storage works**
8. **How to troubleshoot scientifically**
9. **How RHEL and Mint differ**
10. **How to automate repeatable work safely**

The most valuable Linux skill is not knowing every command from memory.

It is being able to look at an unfamiliar Linux system, gather evidence, understand the layers involved, make a safe change, and verify the result.

---

# 62. Official References

Use these as primary references for version-specific behavior.

## Red Hat Enterprise Linux

- [Red Hat Enterprise Linux documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/)
- [RHEL 10 documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10)
- Red Hat product documentation includes dedicated guides for:
  - system administration
  - DNF
  - networking
  - SELinux
  - systemd
  - performance
  - containers
  - upgrades
  - Image Builder
  - RHEL System Roles

## Linux Mint

- [Linux Mint](https://linuxmint.com/)
- [Linux Mint Installation Guide](https://linuxmint-installation-guide.readthedocs.io/)
- [Linux Mint User Guide](https://linuxmint-user-guide.readthedocs.io/)
- [Update Manager guide](https://linuxmint-user-guide.readthedocs.io/en/latest/mintupdate.html)

## Built-in Linux documentation

Never forget the documentation already installed on your machine:

```bash
man command
command --help
info command
apropos keyword
```

For systemd:

```bash
man systemctl
man systemd.unit
man systemd.service
man systemd.timer
```

For Bash:

```bash
man bash
help if
help for
help read
```

For networking:

```bash
man ip
man ss
man nmcli
```

For RHEL security:

```bash
man selinux
man semanage
man restorecon
man firewall-cmd
```

---

# Appendix A — Quick Diagnostic Bundles

These bundles collect read-only state; they do not diagnose the cause automatically. Run only the commands relevant to the incident and review output before sharing it because it can contain hostnames, IP addresses, usernames, mount paths, repository details, and application configuration clues.

## General

```bash
echo "=== OS ==="
cat /etc/os-release

echo "=== KERNEL ==="
uname -a

echo "=== UPTIME ==="
uptime

echo "=== DISK ==="
df -h
df -i

echo "=== MEMORY ==="
free -h

echo "=== NETWORK ==="
ip -br addr
ip route

echo "=== FAILED SERVICES ==="
systemctl --failed

echo "=== ERRORS THIS BOOT ==="
journalctl -p err -b --no-pager
```

## Web service

```bash
systemctl status nginx --no-pager
journalctl -u nginx -n 100 --no-pager
ss -ltnp
curl -v http://127.0.0.1/
```

RHEL extras:

```bash
sudo firewall-cmd --list-all
getenforce
sudo ausearch -m AVC -ts recent
```

Mint extras:

```bash
sudo ufw status verbose
sudo aa-status
```

## Disk

```bash
lsblk -f
df -h
df -i
findmnt
sudo du -xhd1 / 2>/dev/null | sort -h
sudo lsof +L1
```

## Network

```bash
ip -br addr
ip route
nmcli device status
ss -ltnp
getent hosts example.com
curl -I https://example.com
```

---

# Appendix B — Command Discovery

If you forget a command, use Linux itself.

What is this?

```bash
whatis tar
```

Search manuals:

```bash
apropos archive
```

Find executable:

```bash
command -v tar
```

Identify shell behavior:

```bash
type cd
```

Help for Bash builtin:

```bash
help cd
```

Package owning command:

RHEL:

```bash
rpm -qf "$(command -v ssh)"
```

Mint:

```bash
dpkg -S "$(command -v ssh)"
```

---

# Appendix C — Distro Detection in Bash

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

source /etc/os-release

echo "ID=$ID"
echo "NAME=$NAME"
echo "VERSION_ID=${VERSION_ID:-unknown}"

case "$ID" in
    rhel)
        echo "RHEL-family workflow"
        ;;
    linuxmint)
        echo "Linux Mint workflow"
        ;;
    *)
        echo "Other Linux distribution"
        ;;
esac
```

Be aware that compatible/derived distributions can use different IDs.

---

# Appendix D — Package Installation Function Example

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

source /etc/os-release

install_package() {
    if (( $# != 1 )); then
        echo "Usage: install_package PACKAGE" >&2
        return 2
    fi

    local package="$1"

    case "$ID" in
        rhel)
            sudo dnf install -y "$package"
            ;;
        linuxmint|ubuntu|debian)
            sudo apt update
            sudo apt install -y "$package"
            ;;
        *)
            echo "Unsupported distro: $ID" >&2
            return 1
            ;;
    esac
}

install_package git
```

Production automation should avoid unnecessary `apt update` on every function call and should follow your configuration-management standards.

This function returns the selected package manager's exit status. It does not make installation idempotent across repositories, pin a version, verify an allowed package name, or roll back a partial transaction; production automation needs policy for those concerns.

---

# Appendix E — What to Learn Next

After this handbook, strong next subjects are:

- Ansible
- Docker/Podman
- Kubernetes
- Nginx/Apache
- Git
- CI/CD
- Terraform/OpenTofu
- AWS/Azure/GCP
- Prometheus/Grafana
- ELK/OpenSearch
- Python automation
- security hardening
- Red Hat certification objectives
- networking fundamentals
- databases
- distributed systems

Linux is not a separate skill from DevOps, cloud, containers, or backend operations—it is the operating foundation underneath them.

---

**End of Linux Red Hat + Linux Mint Master Handbook**
