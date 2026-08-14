# Linux Ubuntu & Linux Mint — Master Learning Handbook

> **Purpose:** A single, practical, beginner-to-advanced handbook for learning Linux with **Ubuntu** and **Linux Mint**.
>
> **Audience:** Complete beginners, developers, system administrators, support engineers, DevOps learners, and Windows/macOS users moving to Linux.
>
> **Reference date:** 2026-08-13. Ubuntu 26.04 LTS and Linux Mint 22.3 "Zena" are used as the current reference points. Most commands are intentionally version-independent and apply across many Ubuntu- and Mint-based releases.
>
> **Important:** Linux is enormous. No single file can literally document every kernel API, package, command, or subsystem. This handbook covers the core concepts and practical skills that form a strong Linux foundation: desktop use, administration, development, networking, storage, security, automation, servers, recovery, and troubleshooting.

---

## Table of Contents

1. How to Use This Handbook
2. What Linux Actually Is
3. Ubuntu vs Linux Mint
4. Linux Architecture
5. Editions and Desktop Environments
6. Installation Concepts
7. Boot Process
8. Terminal, Shell, Console, TTY, and Prompt
9. Understanding Linux Commands
10. Linux Filesystem Hierarchy
11. Navigation and File Management
12. Viewing and Editing Text
13. Search and Text Processing
14. Redirection, Pipes, and Command Chaining
15. Globbing, Quoting, and Shell Expansion
16. Users, Groups, Root, and sudo
17. Linux Permissions
18. Advanced Permissions: umask, ACL, SUID, SGID, Sticky Bit
19. Package Management
20. Processes, Jobs, Signals, and Priorities
21. systemd and Service Management
22. Logging and journalctl
23. Environment Variables and Shell Configuration
24. Archives, Compression, and Checksums
25. Disks, Partitions, Filesystems, and Mounting
26. fstab and Persistent Mounts
27. Swap, LVM, RAID, and Storage Concepts
28. Disk Space and Filesystem Maintenance
29. Networking Fundamentals
30. NetworkManager, nmcli, and Netplan
31. DNS and Name Resolution
32. SSH, SCP, SFTP, and rsync
33. Firewalls: UFW and nftables
34. Linux Security Fundamentals
35. AppArmor
36. Cron, at, and systemd Timers
37. Bash Scripting Fundamentals
38. Bash Scripting — Intermediate and Production Patterns
39. Kernel, Modules, and Hardware
40. Drivers, Graphics, Wi-Fi, Bluetooth, Audio, and Printers
41. GNOME, Cinnamon, X11, Wayland, and Desktop Concepts
42. Remote Desktop
43. Linux for Developers
44. Web Server Scenario: Apache and Nginx
45. Database Administration Basics
46. Containers: Docker and Podman Concepts
47. Virtualization: KVM, QEMU, libvirt, and VirtualBox
48. Backups, Snapshots, and Recovery
49. Performance Monitoring
50. Troubleshooting Methodology
51. Common Troubleshooting Scenarios
52. Boot Repair and Rescue
53. Practical Administration Scenarios
54. Linux Security Hardening Checklist
55. Common Dangerous Commands
56. Beginner Labs
57. Intermediate Labs
58. Advanced Labs
59. Linux Interview and Revision Questions
60. Essential Command Cheat Sheet
61. Linux Troubleshooting Cheat Sheet
62. 90-Day Learning Roadmap
63. Glossary
64. Recommended Official References
65. Final Mastery Checklist
66. Closing Mental Model

---

# 1. How to Use This Handbook

Do not try to memorize Linux commands line by line. Build a mental model.

Use this learning cycle:

1. **Understand the concept.**
2. **Run the command yourself.**
3. **Change one parameter and observe the effect.**
4. **Create a small problem intentionally in a VM.**
5. **Diagnose it using evidence.**
6. **Fix it.**
7. **Write a short note explaining why the fix worked.**

## How to Read the Examples

- Uppercase words such as `SERVICE`, `PID`, `DEVICE`, `PORT`, `USER`, and `PATH` are placeholders. Replace them with values verified on your system.
- A successful Linux command often prints nothing. Verify meaningful changes with a separate read-only command such as `ls`, `systemctl status`, `findmnt`, or `ip address`.
- Example output varies by installed release, packages, hardware, locale, and system state.
- `sudo` grants delegated privilege to one command. Read the complete command and confirm every path or device before running it.
- `--` ends option parsing for many commands, which protects a path beginning with `-` from being mistaken for an option.

Use a normal account for daily work. Perform partitioning, filesystem creation, boot repair, recursive permission changes, and firewall experiments only in a recoverable lab until you can explain their impact and rollback path.

A strong Linux learner asks:

- What does this command do?
- Which user is executing it?
- Does it require root privileges?
- Which file, process, service, socket, or device is affected?
- Where are the logs?
- How can I verify the change?
- How can I safely undo it?

## Recommended practice environments

Safest choices:

- VirtualBox VM
- VMware VM
- KVM/QEMU VM
- Spare laptop
- Cloud VM for server practice
- Dual boot only after understanding partitions and bootloaders

For storage, firewall, network, kernel, and boot experiments, use a **VM snapshot** first.

---

# 2. What Linux Actually Is

People often use **Linux** to mean an entire operating system, but technically Linux is the **kernel**.

A usable Linux operating system normally combines:

- Linux kernel
- GNU and other user-space tools
- libraries
- package manager
- init/service manager
- bootloader
- desktop or server components
- installer
- distribution policies and repositories

This combination is called a **Linux distribution** or **distro**.

Examples:

- Ubuntu
- Linux Mint
- Debian
- Fedora
- Red Hat Enterprise Linux
- Rocky Linux
- AlmaLinux
- Arch Linux
- openSUSE

Ubuntu is Debian-based. Standard Linux Mint releases are Ubuntu-based, while **LMDE** means Linux Mint Debian Edition and is based directly on Debian.

## Why Linux matters

Linux is heavily used in:

- cloud servers
- web servers
- application servers
- databases
- Docker/container hosts
- Kubernetes nodes
- DevOps pipelines
- embedded devices
- networking appliances
- security tooling
- developer workstations
- supercomputing

Learning Linux is therefore useful even if your everyday laptop runs Windows.

---

# 3. Ubuntu vs Linux Mint

## Ubuntu

Ubuntu is maintained by Canonical and the Ubuntu community. It is widely used for:

- desktop workstations
- servers
- cloud VMs
- containers
- development
- DevOps
- enterprise workloads

Ubuntu has desktop, server, cloud, and other editions/flavors.

## Linux Mint

Linux Mint emphasizes desktop comfort and an easy migration path for users coming from Windows.

It is especially popular for:

- desktop/laptop use
- beginners
- traditional desktop workflows
- systems where a simple out-of-box desktop experience is preferred

Its flagship desktop environment is **Cinnamon**.

## Practical comparison

| Area | Ubuntu | Linux Mint |
|---|---|---|
| Main focus | Desktop, server, cloud | Desktop |
| Default flagship desktop | Ubuntu-customized GNOME | Cinnamon |
| Dedicated server edition | Yes | Not a primary Mint product |
| Beginner friendly | Yes | Very |
| Debian package format | Yes | Yes |
| APT package management | Yes | Yes |
| Server/enterprise documentation | Extensive | More desktop-focused |
| Traditional Windows-like layout | Less by default | Strong |

## What should you learn?

For command-line Linux fundamentals, either system is excellent.

For server, cloud, and DevOps skills, practice on **Ubuntu Server** as well.

For a comfortable desktop learning machine, Linux Mint Cinnamon is a strong choice.

---

# 4. Linux Architecture

Think in layers:

```text
+--------------------------------------+
| Applications                         |
| Firefox, VS Code, Apache, MySQL      |
+--------------------------------------+
| Shell / Desktop / System Services    |
| Bash, GNOME, Cinnamon, systemd       |
+--------------------------------------+
| Libraries                            |
| glibc, OpenSSL, etc.                 |
+--------------------------------------+
| Linux Kernel                         |
| CPU, memory, devices, networking     |
+--------------------------------------+
| Hardware                             |
| CPU, RAM, SSD, GPU, NIC              |
+--------------------------------------+
```

## Kernel responsibilities

The kernel manages:

- CPU scheduling
- processes and threads
- memory and virtual memory
- device drivers
- filesystems
- networking
- security primitives
- inter-process communication
- system calls

Applications normally do not talk directly to hardware. They request services from the kernel.

## User space vs kernel space

**Kernel space** has high privilege and direct control of hardware/resources.

**User space** contains normal programs and services. A crash in a user-space app is usually isolated; a serious kernel problem can affect the whole system.

---

# 5. Editions and Desktop Environments

## Ubuntu Desktop

Good for:

- general users
- developers
- desktop Linux learning
- workstations

## Ubuntu Server

Typically installed without a graphical desktop.

Good for:

- web servers
- database servers
- APIs
- Docker
- Kubernetes
- cloud VMs
- system administration

## Linux Mint Cinnamon

Good for:

- beginners
- Windows-style workflow
- general productivity
- desktop customization

## Linux Mint Xfce / MATE

Often chosen for:

- lower-resource systems
- older hardware
- users who prefer those desktop styles

## Desktop environment vs window manager

A full desktop environment usually contains:

- window manager/compositor
- panel
- app launcher
- settings tools
- file manager
- notifications
- session manager

Common desktop environments:

- GNOME
- Cinnamon
- KDE Plasma
- Xfce
- MATE

---

# 6. Installation Concepts

Before installing Linux, understand:

- BIOS vs UEFI
- MBR vs GPT
- partitions
- EFI System Partition
- filesystems
- root filesystem
- swap
- GRUB
- Secure Boot
- encryption
- dual boot

## BIOS vs UEFI

**BIOS** is the older firmware model.

**UEFI** is the modern firmware model used by most current PCs.

A common modern installation uses:

```text
UEFI + GPT + EFI System Partition
```

## MBR vs GPT

### MBR

Older partition scheme with historical limitations.

### GPT

Modern partitioning design that supports many partitions and large disks and is commonly paired with UEFI.

## Common partition layout

```text
EFI System Partition   /boot/efi   FAT32
Root                    /           ext4
Home                    /home       optional separate filesystem
Swap                    swap        partition or swapfile
```

Do not confuse:

- `/` = filesystem root
- `/root` = root user's home directory

## Live USB

A Live USB lets you:

- test hardware compatibility
- try Linux without installing
- access files on a broken system
- repair boot/configuration problems
- install Linux

## Dual-boot scenario

Suppose Windows is installed and you want Linux Mint.

Safe conceptual flow:

1. Back up important Windows data.
2. Understand BitLocker/device encryption status.
3. Shrink Windows using an appropriate disk tool.
4. Leave unallocated space.
5. Boot the Mint installer in UEFI mode.
6. Install Linux into the intended free space.
7. Preserve the required EFI partition.
8. Install/configure GRUB.
9. Verify both operating systems boot.

Never format a partition merely because its purpose is unclear.

## Full-disk encryption

Benefits:

- protects stored data if the laptop/drive is stolen

Tradeoff:

- losing the recovery key/password can mean losing access to the data

---

# 7. Boot Process

Simplified UEFI Linux boot path:

```text
Power on
  ↓
UEFI firmware
  ↓
Boot manager
  ↓
GRUB / bootloader
  ↓
Linux kernel + initramfs
  ↓
systemd (usually PID 1)
  ↓
Services / targets
  ↓
Display manager or login console
  ↓
Desktop/session or shell
```

## GRUB

Common configuration locations:

```text
/etc/default/grub
/etc/grub.d/
/boot/grub/
```

After changing `/etc/default/grub`:

```bash
sudo update-grub
```

Avoid editing generated GRUB files directly unless you understand why.

## Kernel

```bash
uname -r
uname -a
```

## initramfs

The initial RAM filesystem contains early-boot drivers/tools needed before the real root filesystem is mounted.

Regenerate when specifically required:

```bash
sudo update-initramfs -u
```

## PID 1

Check:

```bash
ps -p 1 -o pid,comm,args
```

On modern Ubuntu/Mint, this will normally show `systemd`.

---

# 8. Terminal, Shell, Console, TTY, and Prompt

These terms are related but are not identical.

## Terminal emulator

A graphical program that displays a terminal interface.

Examples:

- GNOME Terminal
- Xfce Terminal
- Konsole
- Tilix

## Shell

A command interpreter.

Common shells:

- Bash
- Zsh
- Fish
- Dash

Check configured login shell:

```bash
echo "$SHELL"
```

Check current shell process:

```bash
ps -p $$ -o comm=
```

## TTY / virtual console

Linux can provide text consoles independent of the desktop. On many systems, key combinations such as `Ctrl+Alt+F3` switch to a text TTY.

## Prompt

Example:

```text
shoeb@linuxbox:~$
```

Meaning:

```text
shoeb      username
linuxbox   hostname
~          home directory
$          normal user shell
#          commonly a root shell
```

---

# 9. Understanding Linux Commands

General pattern:

```bash
command [options] [arguments]
```

Example:

```bash
ls -lah /var/log
```

Breakdown:

```text
ls       command
-lah     options
/var/log argument
```

## Help system

Manual page:

```bash
man ls
```

Built-in help:

```bash
ls --help
```

Short description:

```bash
whatis ls
```

Search manuals:

```bash
apropos "copy files"
```

Find executable:

```bash
which python3
```

`which` is an external lookup utility on many systems and can miss shell built-ins, functions, or aliases. For shell-aware command discovery, prefer:

```bash
command -v python3
type -a python3
```

Shell-aware lookup:

```bash
type cd
type ls
```

## History

```bash
history
```

Repeat previous command:

```bash
!!
```

Interactive reverse search:

```text
Ctrl+R
```

Security note: commands can enter shell history. Avoid putting passwords or API tokens directly on command lines when safer alternatives exist.

---

# 10. Linux Filesystem Hierarchy

Linux uses one directory tree beginning at `/`.

## `/`

Top of the filesystem.

## `/home`

Normal user home directories:

```text
/home/alice
/home/bob
```

## `/root`

Root user's home directory.

## `/etc`

System configuration.

Examples:

```text
/etc/hosts
/etc/fstab
/etc/ssh/
/etc/systemd/
```

## `/var`

Variable data such as logs, caches, service state, queues, websites, and databases.

```text
/var/log
/var/lib
/var/cache
/var/www
```

## `/usr`

Large part of installed user-space software, libraries, and shared data.

```text
/usr/bin
/usr/sbin
/usr/lib
/usr/share
```

## `/bin` and `/sbin`

Historically essential binaries. On many modern distributions these are symlinked into `/usr`.

## `/tmp`

Temporary data.

## `/boot`

Kernel and bootloader-related files.

## `/dev`

Device nodes:

```text
/dev/sda
/dev/nvme0n1
/dev/null
/dev/tty
```

## `/proc`

Virtual process/kernel information:

```text
/proc/cpuinfo
/proc/meminfo
/proc/1234/
```

## `/sys`

Kernel/device model information.

## `/run`

Runtime state since boot.

## `/mnt`

Common location for manual/temporary mounts.

## `/media`

Common location for removable media mounted by desktop systems.

## `/opt`

Optional third-party software.

## `/srv`

Data served by services.

---

# 11. Navigation and File Management

## Current directory

```bash
pwd
```

## List

```bash
ls
ls -l
ls -a
ls -lh
ls -lah
```

## Change directory

```bash
cd /var/log
cd ~
cd ..
cd -
```

Special paths:

- `~` home
- `.` current directory
- `..` parent directory
- `-` previous directory

## Create directories

```bash
mkdir project
mkdir -p project/src/components
```

## Create/update empty file timestamp

```bash
touch notes.txt
```

## Copy

```bash
cp source.txt copy.txt
cp -r project project-backup
cp -a source-dir backup-dir
```

`cp -a` is useful when preserving metadata matters.

## Move or rename

```bash
mv old.txt new.txt
mv report.pdf ~/Documents/
```

## Remove

```bash
rm file.txt
rm -r old-directory
```

Interactive:

```bash
rm -i file.txt
```

Powerful/dangerous:

```bash
rm -rf directory
```

`rm` normally bypasses a desktop recycle bin.

Before recursive deletion, make the target explicit and preview exactly that target:

```bash
target="/path/to/lab-directory"
printf 'Target: <%s>\n' "$target"
find -- "$target" -maxdepth 2 -print
rm -ri -- "$target"
```

Never use an empty variable, unresolved wildcard, `/`, or a home directory as a recursive deletion target.

## Inspect a file

```bash
file image.png
stat image.png
```

## Symbolic link

```bash
ln -s /opt/myapp/bin/app ~/bin/myapp
```

Inspect:

```bash
ls -l
readlink myapp
readlink -f myapp
```

## Hard link

```bash
ln original.txt hardlink.txt
```

### Hard link vs symbolic link

| Feature | Hard link | Symbolic link |
|---|---|---|
| Points to | underlying inode/data | pathname |
| Cross filesystem | No | Yes |
| Usually link directory | No | Yes |
| Original deleted | data remains via hard link | symlink becomes broken |

---

# 12. Viewing and Editing Text

## cat

```bash
cat file.txt
```

Best for small files.

## less

```bash
less /var/log/syslog
```

Useful keys:

```text
Space     next page
b         previous page
/word     search
n         next match
q         quit
```

## head

```bash
head file.txt
head -n 20 file.txt
```

## tail

```bash
tail file.txt
tail -n 50 file.txt
tail -f /var/log/application.log
```

## nano

```bash
nano notes.txt
```

Common shortcuts:

```text
Ctrl+O  save
Ctrl+X  exit
Ctrl+W  search
```

## Vim survival basics

```bash
vim file.txt
```

```text
i        insert mode
Esc      normal mode
:w       save
:q       quit
:wq      save and quit
:q!      quit without saving
```

You do not need to master Vim before learning Linux administration, but knowing how to open/edit/save/quit is useful.

---

# 13. Search and Text Processing

These tools are among the most valuable Linux skills.

## grep

```bash
grep "error" app.log
grep -i "error" app.log
grep -n "failed" app.log
grep -R "database_url" .
grep -E "error|warning|critical" app.log
```

## find

By name:

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

Directories only:

```bash
find . -type d
```

Modified in last day:

```bash
find . -type f -mtime -1
```

Larger than 100 MB:

```bash
find / -type f -size +100M 2>/dev/null
```

## xargs

Convert input into command arguments.

Safe filename pattern:

```bash
find . -name "*.tmp" -print0 | xargs -0 rm
```

Without matches, some `xargs` implementations can still invoke the command with no file arguments. GNU `xargs -r` avoids that, but `find ... -exec rm -- {} +` below is more portable and keeps discovery and action in one tool. Preview with `-print` before deleting.

Often `find -exec` is even clearer:

```bash
find . -name "*.tmp" -exec rm -- {} +
```

## wc

```bash
wc file.txt
wc -l file.txt
wc -w file.txt
```

## sort and uniq

```bash
sort names.txt
sort -n numbers.txt
sort -r names.txt
sort names.txt | uniq
sort names.txt | uniq -c
```

## cut

```bash
cut -d: -f1 /etc/passwd
```

## tr

```bash
echo "hello" | tr 'a-z' 'A-Z'
```

## sed

Stream replacement:

```bash
sed 's/dev/prod/' config.txt
```

Global per line:

```bash
sed 's/foo/bar/g' file.txt
```

Edit with backup:

```bash
sed -i.bak 's/foo/bar/g' file.txt
```

## awk

First field:

```bash
awk '{print $1}' file.txt
```

Colon-delimited:

```bash
awk -F: '{print $1, $7}' /etc/passwd
```

Conditional:

```bash
awk '$3 > 1000 {print $1, $3}' data.txt
```

## Practical log scenario

Find the most frequent client IPs in a basic web access log:

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head
```

Mental model:

```text
extract IP → sort → count duplicates → rank by count → show top results
```

---

# 14. Redirection, Pipes, and Command Chaining

## Standard streams

A typical process has:

```text
0 stdin
1 stdout
2 stderr
```

## stdout to file

Overwrite:

```bash
echo "hello" > output.txt
```

Append:

```bash
echo "world" >> output.txt
```

## stderr

```bash
command 2> errors.txt
```

## stdout + stderr

```bash
command > all.log 2>&1
```

Bash shorthand:

```bash
command &> all.log
```

## Discard output

```bash
command > /dev/null 2>&1
```

## Pipe

```bash
ps aux | grep nginx
```

A pipe connects stdout of the left command to stdin of the right command.

## tee

Show and save:

```bash
ip addr | tee network-info.txt
```

Append:

```bash
echo "line" | tee -a notes.txt
```

Write to root-owned file:

```bash
echo "example" | sudo tee /etc/example.conf
```

Why this may fail:

```bash
sudo echo "example" > /etc/example.conf
```

The shell performs `>` redirection before `sudo` applies to `echo`.

## Chaining

Second runs only if first succeeds:

```bash
sudo apt update && sudo apt upgrade
```

Second runs only if first fails:

```bash
ping -c 1 server || echo "Server unreachable"
```

Always sequential:

```bash
command1 ; command2
```

---

# 15. Globbing, Quoting, and Shell Expansion

## Wildcards

```text
*       any number of characters
?       exactly one character
[abc]   one listed character
[0-9]   one digit
```

Examples:

```bash
ls *.log
ls file?.txt
ls image[0-9].png
```

## Single quotes

Prevent most expansion:

```bash
echo '$HOME'
```

Output:

```text
$HOME
```

## Double quotes

Allow variables/command substitution while preserving spaces:

```bash
echo "$HOME"
```

Quote variables containing paths or user-controlled values:

```bash
rm -- "$filename"
```

## Command substitution

```bash
today=$(date +%F)
echo "$today"
```

## Arithmetic

```bash
echo $((5 + 3))
```

## Brace expansion

```bash
mkdir -p project/{src,tests,docs}
```

---

# 16. Users, Groups, Root, and sudo

Linux is multi-user.

## Identity

```bash
whoami
id
```

Logged-in users:

```bash
who
w
```

## User database

```bash
cat /etc/passwd
```

Protected password-related data is normally stored in:

```text
/etc/shadow
```

## Add user

Friendly Ubuntu/Mint command:

```bash
sudo adduser alice
```

Lower-level command:

```bash
sudo useradd -m -s /bin/bash alice
```

## Set password

```bash
sudo passwd alice
```

## Add to group

```bash
sudo usermod -aG sudo alice
```

Important: `-aG` means **append** supplementary groups. Omitting `-a` in the wrong context can remove other supplementary memberships.

## List groups

```bash
groups alice
id alice
```

## Delete user

```bash
sudo deluser alice
sudo deluser --remove-home alice
```

## root

Root has UID 0 and almost unrestricted authority.

Run one privileged command:

```bash
sudo command
```

Open root login shell only when truly needed:

```bash
sudo -i
```

Exit:

```bash
exit
```

## sudo configuration

Main configuration:

```text
/etc/sudoers
```

Always edit with:

```bash
sudo visudo
```

Custom rules are often placed in:

```text
/etc/sudoers.d/
```

Scenario: allow support staff to restart only Nginx. A tightly scoped rule is safer than granting unrestricted sudo.

---

# 17. Linux Permissions

Example:

```bash
ls -l deploy.sh
```

Possible output:

```text
-rwxr-x--- 1 alice developers 1200 Aug 13 10:00 deploy.sh
```

Meaning:

```text
-          regular file
rwx        owner permissions
r-x        group permissions
---        others permissions
alice      owner
developers group
```

## File types

First character:

```text
- regular file
d directory
l symbolic link
c character device
b block device
p named pipe
s socket
```

## Numeric values

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
0 = ---
```

## chmod

```bash
chmod 644 notes.txt
chmod 755 script.sh
chmod 600 private.key
chmod 700 private-directory
```

Typical meanings:

```text
644 owner rw, group/others r
755 owner rwx, group/others rx
600 owner rw only
700 owner rwx only
```

Symbolic form:

```bash
chmod u+x script.sh
chmod g+w shared.txt
chmod o-r secret.txt
chmod a+r README.md
```

## Ownership

```bash
sudo chown alice file.txt
sudo chown alice:developers file.txt
sudo chgrp developers file.txt
```

Recursive:

```bash
sudo chown -R alice:developers /srv/project
```

Recursive ownership and permissions can affect thousands of files. Verify the path first.

## Directory permissions

For directories:

- `r` = list names
- `w` = create/delete entries
- `x` = traverse/access entries

This is why a file can have readable permissions but still be inaccessible if a parent directory lacks execute/traverse permission.

---

# 18. Advanced Permissions: umask, ACL, SUID, SGID, Sticky Bit

## umask

```bash
umask
```

Common value:

```text
0022
```

Conceptual starting permissions:

```text
files       666
directories 777
```

With umask `022`, common resulting permissions are:

```text
file      644
directory 755
```

This is a bit-clearing model, not ordinary decimal subtraction. Applications request an initial mode and the umask removes selected permission bits; an application can request stricter permissions, and ACLs or other security controls can further limit access.

## ACL

ACL gives more flexible permissions beyond owner/group/others.

Install tooling if needed:

```bash
sudo apt install acl
```

View:

```bash
getfacl shared.txt
```

Grant Bob read/write:

```bash
setfacl -m u:bob:rw shared.txt
```

Remove Bob's ACL:

```bash
setfacl -x u:bob shared.txt
```

Default ACL on a directory:

```bash
setfacl -m d:g:developers:rwx /srv/project
```

## Sticky bit

Common on `/tmp`:

```bash
ls -ld /tmp
```

Typical end permission character:

```text
t
```

Set:

```bash
chmod +t shared-dir
```

It helps prevent users from deleting each other's files in a shared writable directory.

## SGID directory

```bash
chmod g+s /srv/project
```

New entries normally inherit the directory's group, useful for shared team directories.

Numeric form:

```bash
chmod 2770 /srv/project
```

## SUID

SUID executables can run with the effective UID of their owner.

Audit examples:

```bash
find / -perm -4000 -type f 2>/dev/null
```

SUID is security-sensitive. Do not add it to arbitrary scripts/binaries.

---

# 19. Package Management

Ubuntu and Ubuntu-based Mint use Debian package technology.

Key concepts:

- `.deb`
- `dpkg`
- APT
- repositories
- dependencies
- package metadata
- signing keys
- PPAs
- Snap
- Flatpak

## Refresh package indexes

```bash
sudo apt update
```

This normally refreshes repository metadata; it does not itself install all upgrades.

## Upgrade

```bash
sudo apt upgrade
```

## Install

```bash
sudo apt install curl
```

## Remove

Keep package configuration:

```bash
sudo apt remove nginx
```

Remove package configuration too:

```bash
sudo apt purge nginx
```

Remove now-unused dependencies:

```bash
sudo apt autoremove
```

## Search and inspect

```bash
apt search nginx
apt show nginx
apt list --installed
```

## Local .deb

Prefer APT when possible because it can resolve dependencies:

```bash
sudo apt install ./package.deb
```

## dpkg inspection

Files installed by a package:

```bash
dpkg -L curl
```

Which installed package owns a path:

```bash
dpkg -S /usr/bin/curl
```

## Repository configuration

Common locations:

```text
/etc/apt/sources.list
/etc/apt/sources.list.d/
```

Modern releases may use deb822-style `.sources` files.

## PPAs / third-party repositories

Do not add random repositories merely because a tutorial says so. Repository packages can execute with system privileges during installation and updates.

## Snap

```bash
snap list
sudo snap install PACKAGE
sudo snap remove PACKAGE
```

## Flatpak

```bash
sudo apt install flatpak
flatpak list
```

Application packaging differs between Ubuntu and Mint. When debugging an application, first determine whether it came from APT, Snap, Flatpak, AppImage, a vendor `.deb`, or source code.

## Scenario: APT database locked

Do **not** immediately delete lock files.

First inspect package processes:

```bash
ps aux | grep -E 'apt|dpkg'
```

If an updater is running normally, let it finish.

If no package process is active, inspect system update services and logs before recovery:

```bash
systemctl status apt-daily.service apt-daily-upgrade.service
journalctl -u apt-daily.service -u apt-daily-upgrade.service -b
sudo dpkg --audit
```

Deleting lock files does not repair an interrupted package transaction and can permit concurrent writers. If a process was interrupted, use the errors from `dpkg --audit`, `sudo dpkg --configure -a`, or `sudo apt --fix-broken install` to guide recovery.


---

# 20. Processes, Jobs, Signals, and Priorities

A **program** is executable code stored somewhere. A **process** is a running instance of a program.

A single program can have many processes.

## List processes

```bash
ps
ps aux
ps -ef
```

Tree view:

```bash
pstree
```

Live monitoring:

```bash
top
```

If installed:

```bash
htop
```

## Process IDs

Current shell PID:

```bash
echo $$
```

Find by name:

```bash
pgrep nginx
pgrep -af python
```

Inspect a PID:

```bash
ps -p 1234 -o pid,ppid,user,%cpu,%mem,etime,cmd
```

## Parent and child processes

Processes form a hierarchy.

Useful fields:

- PID = process ID
- PPID = parent process ID
- UID/user = owner
- state = running/sleeping/etc.

## Signals

Signals notify/control processes.

Common signals:

```text
SIGTERM  15  request graceful termination
SIGKILL   9  kernel-enforced immediate kill
SIGHUP    1  hangup; often used as reload convention
SIGINT    2  interrupt, commonly Ctrl+C
SIGSTOP  19  stop process
SIGCONT  18  continue process
```

Normal termination:

```bash
kill PID
```

Specific signal:

```bash
kill -TERM PID
```

Force only when necessary:

```bash
kill -9 PID
```

By name:

```bash
pkill process-name
```

Why avoid `kill -9` as the first choice?

A process receiving SIGKILL cannot normally:

- flush buffers
- close files cleanly
- remove temporary files
- complete transactions
- run application cleanup code

## Foreground and background jobs

Run:

```bash
sleep 300
```

Suspend:

```text
Ctrl+Z
```

List jobs:

```bash
jobs
```

Continue in background:

```bash
bg %1
```

Bring to foreground:

```bash
fg %1
```

Start directly in background:

```bash
long-command &
```

## nohup

Keep a command alive after terminal disconnect:

```bash
nohup ./job.sh > job.log 2>&1 &
```

For production daemons, prefer a proper systemd service.

## nice and renice

Start with lower CPU scheduling priority:

```bash
nice -n 10 command
```

Change existing process:

```bash
renice 10 -p PID
```

Lower nice value means higher CPU scheduling priority. Raising priority may require privileges.

---

# 21. systemd and Service Management

Most modern Ubuntu and Mint systems use **systemd**.

systemd handles much more than services. It can manage:

- service lifecycle
- dependencies
- mounts
- sockets
- timers
- boot targets
- logging integration
- sessions and more

## systemctl basics

Status:

```bash
systemctl status ssh
```

Start now:

```bash
sudo systemctl start ssh
```

Stop:

```bash
sudo systemctl stop ssh
```

Restart:

```bash
sudo systemctl restart ssh
```

Reload config without full restart when service supports it:

```bash
sudo systemctl reload nginx
```

Enable at boot:

```bash
sudo systemctl enable ssh
```

Disable at boot:

```bash
sudo systemctl disable ssh
```

Enable and start now:

```bash
sudo systemctl enable --now ssh
```

Check whether enabled:

```bash
systemctl is-enabled ssh
```

Check whether active:

```bash
systemctl is-active ssh
```

## Important distinction: start vs enable

`start` affects the current runtime.

`enable` configures startup behavior for future boots.

A service can be:

- active but disabled
- enabled but currently stopped

## Failed units

```bash
systemctl --failed
```

## Unit types

Examples:

```text
.service
.socket
.timer
.mount
.target
.path
```

## Unit file locations

Common locations include:

```text
/etc/systemd/system/
/usr/lib/systemd/system/
/lib/systemd/system/
```

Administrator-created custom units should usually go under:

```text
/etc/systemd/system/
```

## View complete effective unit

```bash
systemctl cat nginx
```

## Custom service example

Create:

```text
/etc/systemd/system/myapp.service
```

```ini
[Unit]
Description=My Example Application
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=myapp
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Reload systemd configuration:

```bash
sudo systemctl daemon-reload
```

Enable/start:

```bash
sudo systemctl enable --now myapp
```

Check:

```bash
systemctl status myapp
journalctl -u myapp
```

## Targets

Targets represent groups/states of units.

Examples:

```text
multi-user.target
graphical.target
rescue.target
emergency.target
```

Default target:

```bash
systemctl get-default
```

Set default graphical target:

```bash
sudo systemctl set-default graphical.target
```

Do not change boot targets casually on a remote server.

---

# 22. Logging and journalctl

Troubleshooting without logs is often guessing.

## journalctl

All accessible journal entries:

```bash
journalctl
```

Current boot:

```bash
journalctl -b
```

Previous boot:

```bash
journalctl -b -1
```

Specific service:

```bash
journalctl -u ssh
```

Current boot for service:

```bash
journalctl -u nginx -b
```

Follow new entries:

```bash
journalctl -f
```

Since time:

```bash
journalctl --since "1 hour ago"
journalctl --since "2026-08-13 09:00"
```

Errors:

```bash
journalctl -p err
```

Kernel messages:

```bash
journalctl -k
```

Newest first:

```bash
journalctl -r
```

## Traditional logs

Common root directory:

```text
/var/log/
```

Depending on configuration you may see:

```text
/var/log/syslog
/var/log/auth.log
/var/log/kern.log
/var/log/apt/
/var/log/nginx/
/var/log/apache2/
```

Not every installation has every file because logging configuration differs.

## dmesg

Kernel ring buffer:

```bash
dmesg
```

Human-readable time where supported:

```bash
sudo dmesg -T
```

Recent kernel messages:

```bash
sudo dmesg -T | tail -100
```

## Scenario: service failed after reboot

```bash
systemctl status myapp
journalctl -u myapp -b
systemctl cat myapp
```

Look for:

- missing file
- permissions
- invalid environment variable
- incorrect working directory
- dependency unavailable
- port already used
- configuration syntax error

---

# 23. Environment Variables and Shell Configuration

## View environment

```bash
env
```

Specific variables:

```bash
echo "$PATH"
echo "$HOME"
echo "$USER"
```

## Shell variable

```bash
name="Shoeb"
echo "$name"
```

## Export

```bash
export APP_ENV=production
```

Exported variables are inherited by child processes.

## PATH

`PATH` is a colon-separated list of directories searched for executable commands.

```bash
echo "$PATH"
```

Temporarily add custom bin directory:

```bash
export PATH="$HOME/bin:$PATH"
```

If a command exists in `~/bin` but `~/bin` is not in `PATH`, typing only the command name may fail.

## Bash startup files

Common files:

```text
~/.bashrc
~/.profile
/etc/profile
/etc/bash.bashrc
```

Which file loads depends on whether the shell is login, interactive, non-interactive, etc.

## Alias

```bash
alias ll='ls -lah'
alias update='sudo apt update && sudo apt upgrade'
```

Check alias:

```bash
alias ll
```

Remove current-session alias:

```bash
unalias ll
```

Persistent aliases can be placed in `~/.bashrc` or a sourced alias file.

Reload:

```bash
source ~/.bashrc
```

## Shell functions

```bash
mkcd() {
    mkdir -p -- "$1" && cd -- "$1"
}
```

Functions are more flexible than aliases for logic and arguments.

## Secrets in environment variables

Environment variables are convenient but are not automatically secure. For production secrets consider:

- dedicated secret managers
- protected config files
- service credential mechanisms
- restrictive permissions
- avoiding shell history and process arguments

---

# 24. Archives, Compression, and Checksums

## tar

Create uncompressed archive:

```bash
tar -cf archive.tar directory/
```

Extract:

```bash
tar -xf archive.tar
```

Gzip compressed:

```bash
tar -czf backup.tar.gz directory/
```

Extract gzip tarball:

```bash
tar -xzf backup.tar.gz
```

List contents:

```bash
tar -tf backup.tar.gz
```

Bzip2:

```bash
tar -cjf archive.tar.bz2 directory/
```

XZ:

```bash
tar -cJf archive.tar.xz directory/
```

## gzip

```bash
gzip file.log
gunzip file.log.gz
```

## zip

```bash
zip -r archive.zip directory/
unzip archive.zip
```

Install tools if needed:

```bash
sudo apt install zip unzip
```

## Checksums

SHA-256:

```bash
sha256sum ubuntu.iso
```

MD5 exists but should not be chosen for modern integrity/security verification when a stronger official checksum is available.

## ISO verification scenario

1. Download ISO.
2. Download/check the official checksum information from the distribution.
3. Run:

```bash
sha256sum downloaded.iso
```

4. Compare exact values.
5. If the publisher provides cryptographic signature verification, use that too when appropriate.

A checksum is only trustworthy if the expected checksum came from a trusted source.

---

# 25. Disks, Partitions, Filesystems, and Mounting

Storage commands can destroy data. Practice on a VM disk.

## List block devices

```bash
lsblk
```

Filesystem details:

```bash
lsblk -f
```

Useful custom view:

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,FSVER,LABEL,UUID,MOUNTPOINTS
```

## Filesystem identifiers

```bash
sudo blkid
```

## Partition tables

```bash
sudo fdisk -l
sudo parted -l
```

## Common device names

SATA/SCSI-style:

```text
/dev/sda
/dev/sda1
/dev/sdb
```

NVMe:

```text
/dev/nvme0n1
/dev/nvme0n1p1
```

## Partition vs filesystem

A **partition** is a defined region of a storage device.

A **filesystem** is the data structure placed on a partition/logical volume/device so files can be stored.

Example:

```text
/dev/sdb1        partition
ext4             filesystem on it
/mnt/data        directory where it is mounted
```

## Common filesystems

- ext4
- XFS
- Btrfs
- FAT32
- exFAT
- NTFS

## Creating a filesystem

**Destructive to existing filesystem data on the target.**

```bash
sudo mkfs.ext4 /dev/sdb1
```

Always confirm device identity with `lsblk` first.

## Mounting

Create mount point:

```bash
sudo mkdir -p /mnt/data
```

Mount:

```bash
sudo mount /dev/sdb1 /mnt/data
```

Check:

```bash
findmnt /mnt/data
```

Unmount:

```bash
sudo umount /mnt/data
```

Note spelling: command is `umount`, not `unmount`.

## Target is busy

Investigate:

```bash
findmnt /mnt/data
sudo lsof +f -- /mnt/data
```

A shell whose current working directory is inside the mount can also keep it busy.

---

# 26. fstab and Persistent Mounts

`/etc/fstab` describes filesystems that should be mounted persistently or with defined options.

View:

```bash
cat /etc/fstab
```

## Prefer UUIDs

Device names such as `/dev/sdb1` can change. UUIDs are more stable.

Find UUID:

```bash
blkid
```

Example:

```text
UUID=1234-ABCD  /mnt/data  ext4  defaults  0  2
```

## Safe workflow

Backup:

```bash
sudo cp /etc/fstab /etc/fstab.bak
```

Edit:

```bash
sudo nano /etc/fstab
```

Validate mounting without rebooting:

```bash
sudo mount -a
```

Check:

```bash
findmnt
```

A malformed fstab entry can slow or break boot.

## Common mount option concepts

```text
defaults
ro
rw
noexec
nosuid
nodev
nofail
```

Do not add security-related mount flags without understanding application requirements.

Example for optional external/archive disk:

```text
UUID=... /mnt/archive ext4 defaults,nofail 0 2
```

---

# 27. Swap, LVM, RAID, and Storage Concepts

## Swap

Swap is disk-backed memory space the kernel can use under memory pressure and for certain hibernation configurations.

Check:

```bash
swapon --show
free -h
```

### Swapfile example

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Persistent fstab entry:

```text
/swapfile none swap sw 0 0
```

A large swapfile does not fix a memory leak or make slow storage equivalent to RAM.

## LVM

Logical Volume Manager adds an abstraction layer.

The following creation commands overwrite LVM or filesystem metadata. Use a blank, verified VM disk, capture `lsblk -f` first, and keep backups. LVM makes allocation and growth more flexible; it does not provide a backup.

```text
Physical device/partition
       ↓
Physical Volume (PV)
       ↓
Volume Group (VG)
       ↓
Logical Volume (LV)
       ↓
Filesystem
       ↓
Mount point
```

Inspect:

```bash
sudo pvs
sudo vgs
sudo lvs
```

Conceptual creation:

```bash
sudo pvcreate /dev/sdb
sudo vgcreate vgdata /dev/sdb
sudo lvcreate -L 20G -n lvapp vgdata
sudo mkfs.ext4 /dev/vgdata/lvapp
```

Extend LV:

```bash
sudo lvextend -L +10G /dev/vgdata/lvapp
```

Then grow the filesystem using the correct filesystem-specific tool.

For ext4:

```bash
sudo resize2fs /dev/vgdata/lvapp
```

Many LVM commands support `-r` to resize filesystem together, but verify compatibility and backups first.

## RAID

RAID combines multiple disks.

```text
RAID 0   striping; performance/capacity, no redundancy
RAID 1   mirroring
RAID 5   single parity; minimum 3 devices
RAID 6   dual parity; minimum 4 devices
RAID 10  mirrored pairs + striping
```

**RAID is not a backup.**

RAID does not inherently protect against:

- accidental deletion
- ransomware
- application corruption
- administrator mistakes
- data overwritten by software
- site disaster

---

# 28. Disk Space and Filesystem Maintenance

## Filesystem free space

```bash
df -h
```

Inode usage:

```bash
df -i
```

A filesystem can have free bytes but no free inodes if it contains huge numbers of small files.

## Directory sizes

```bash
du -sh /var/log
sudo du -h --max-depth=1 /var
```

Sort large items:

```bash
sudo du -xah /var | sort -h | tail -30
```

For an entire root filesystem this can be slow.

## Deleted but still open files

Scenario:

1. 20 GB log is deleted.
2. `df` still shows disk full.
3. A process still has the deleted inode open.

Find:

```bash
sudo lsof +L1
```

Properly restart/reload/rotate the responsible service so it releases the file.

## Filesystem check

Example:

```bash
sudo fsck /dev/sdb1
```

Filesystem checks/repairs generally need the target filesystem unmounted. Never casually run repair operations on a mounted production filesystem.

## Log rotation

Linux commonly uses `logrotate` for traditional log files.

Configuration examples:

```text
/etc/logrotate.conf
/etc/logrotate.d/
```

If logs grow forever, fix the rotation/application logging policy instead of repeatedly deleting them manually.

---

# 29. Networking Fundamentals

Core terms:

- network interface/NIC
- MAC address
- IP address
- subnet
- prefix/CIDR
- default gateway
- route
- DNS
- DHCP
- TCP
- UDP
- port
- socket
- loopback
- NAT

## Interfaces

```bash
ip link
ip addr
ip -br addr
```

## Routes

```bash
ip route
```

Typical default route:

```text
default via 192.168.1.1 dev enp3s0
```

## Loopback

```text
127.0.0.1
::1
```

Usually associated with `localhost`.

## Layered connectivity tests

Local TCP/IP:

```bash
ping -c 4 127.0.0.1
```

Gateway:

```bash
ping -c 4 192.168.1.1
```

External IP:

```bash
ping -c 4 1.1.1.1
```

DNS name:

```bash
ping -c 4 example.com
```

Interpretation example:

- gateway fails → local link/IP/routing problem
- external IP works, hostname fails → likely DNS issue
- DNS works but application port fails → service/firewall/port issue

Note: some hosts block ICMP ping, so ping is evidence, not absolute proof of service health.

## Listening ports

```bash
ss -tulpn
```

TCP listeners:

```bash
ss -ltnp
```

## Test a port

If `nc` is installed:

```bash
nc -vz server.example.com 443
```

HTTP/TLS test:

```bash
curl -I https://example.com
```

## Private IPv4 ranges

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

## CIDR

```text
192.168.1.10/24
```

`/24` means 24 network-prefix bits, commonly corresponding to:

```text
255.255.255.0
```

---

# 30. NetworkManager, nmcli, and Netplan

Ubuntu Desktop and Linux Mint commonly use **NetworkManager**.

## nmcli status

```bash
nmcli general status
nmcli device status
nmcli connection show
```

## Wi-Fi

Scan:

```bash
nmcli device wifi list
```

Connect example:

```bash
nmcli device wifi connect "SSID" password "PASSWORD"
```

Be mindful that secrets typed directly can appear in shell history/process information.

## Static IPv4 with nmcli

First identify connection name:

```bash
nmcli connection show
```

Conceptual example:

```bash
sudo nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses 192.168.1.50/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns "1.1.1.1 8.8.8.8"
```

Activate:

```bash
sudo nmcli connection up "Wired connection 1"
```

Adapt all values to the actual network.

## DHCP

Switch a connection back to DHCP conceptually:

```bash
sudo nmcli connection modify "Wired connection 1" ipv4.method auto
sudo nmcli connection up "Wired connection 1"
```

## Netplan

Ubuntu Server commonly uses Netplan YAML as a network configuration layer.

Files often live under:

```text
/etc/netplan/*.yaml
```

Example static concept:

```yaml
network:
  version: 2
  ethernets:
    enp1s0:
      dhcp4: false
      addresses:
        - 192.168.1.50/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses:
          - 1.1.1.1
          - 8.8.8.8
```

Remote-server warning: a bad networking change can immediately cut off SSH. Ensure console/out-of-band access or a safe test path before applying changes.

---

# 31. DNS and Name Resolution

DNS maps names to addresses.

Example:

```text
example.com → IP address(es)
```

## getent

Uses system name-resolution configuration:

```bash
getent hosts example.com
```

This is often more representative of what normal applications see than querying a DNS server directly.

## dig / host

If installed:

```bash
dig example.com
host example.com
```

Query a specific resolver:

```bash
dig @1.1.1.1 example.com
```

## /etc/hosts

Local static names:

```text
127.0.0.1 localhost
192.168.1.20 app.internal
```

Good for:

- local development
- temporary testing
- simple fixed local mapping

Not a scalable DNS replacement.

## /etc/resolv.conf

```bash
cat /etc/resolv.conf
```

On modern desktops/servers this may be generated/managed by NetworkManager or systemd-resolved.

Do not edit generated files permanently unless you understand the manager.

## systemd-resolved

Where used:

```bash
resolvectl status
resolvectl query example.com
```

## DNS troubleshooting order

```text
1. Check interface/IP.
2. Check route/default gateway.
3. Test external IP connectivity.
4. Query with getent.
5. Inspect configured resolvers.
6. Query resolver directly.
7. Check VPN/firewall/split-DNS rules.
8. Check authoritative DNS if you own the domain.
```

---

# 32. SSH, SCP, SFTP, and rsync

SSH is a core Linux administration skill.

## Install OpenSSH server

```bash
sudo apt update
sudo apt install openssh-server
```

Check:

```bash
systemctl status ssh
```

## Connect

```bash
ssh user@server
```

Specific port:

```bash
ssh -p 2222 user@server
```

Verbose debugging:

```bash
ssh -vvv user@server
```

## SSH key pair

Generate Ed25519 key:

```bash
ssh-keygen -t ed25519
```

Copy public key:

```bash
ssh-copy-id user@server
```

Then:

```bash
ssh user@server
```

## Important files

Client:

```text
~/.ssh/config
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
~/.ssh/known_hosts
```

Server:

```text
/etc/ssh/sshd_config
/etc/ssh/sshd_config.d/
```

## Permissions

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 600 ~/.ssh/authorized_keys
```

Public keys are not secret, but private keys must be protected.

## SSH client config

```sshconfig
Host prod-api
    HostName 203.0.113.10
    User deploy
    Port 22
    IdentityFile ~/.ssh/prod_ed25519
```

Connect:

```bash
ssh prod-api
```

## SCP

Local to remote:

```bash
scp report.txt user@server:/tmp/
```

Remote to local:

```bash
scp user@server:/var/log/app.log .
```

## SFTP

```bash
sftp user@server
```

Useful interactive commands include:

```text
ls
cd
lcd
get
put
mkdir
exit
```

## rsync

Local sync:

```bash
rsync -av source/ destination/
```

Over SSH:

```bash
rsync -avz -e ssh ./site/ user@server:/var/www/site/
```

Preview first:

```bash
rsync -av --dry-run source/ destination/
```

## Trailing slash behavior

```bash
rsync -av source/ destination/
```

means copy **contents of source** into destination.

```bash
rsync -av source destination/
```

means copy the **source directory itself** under destination.

## SSH local tunnel

```bash
ssh -L 8080:127.0.0.1:80 user@server
```

Concept:

```text
your localhost:8080
      ↓ encrypted SSH tunnel
remote side 127.0.0.1:80
```

Useful for securely reaching internal services.

## SSH security workflow before remote config change

1. Keep existing SSH session open.
2. Backup config.
3. Edit carefully.
4. Validate:

```bash
sudo sshd -t
```

5. Reload:

```bash
sudo systemctl reload ssh
```

6. Open a second connection and confirm it works.
7. Only then close the first session.

---

# 33. Firewalls: UFW and nftables

Ubuntu commonly provides **UFW** as a convenient firewall frontend.

## Status

```bash
sudo ufw status verbose
```

## Remote server safety

Before enabling UFW over SSH, first allow SSH:

```bash
sudo ufw allow OpenSSH
```

or explicitly:

```bash
sudo ufw allow 22/tcp
```

Use the actual configured SSH port and, when possible, restrict it to the trusted management source. Keep the current session open and ensure console/recovery access exists.

Then:

```bash
sudo ufw enable
```

Open a second SSH connection and recheck `sudo ufw status verbose` before closing the original session.

## Web ports

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Deny

```bash
sudo ufw deny 23/tcp
```

## Rules by number

```bash
sudo ufw status numbered
```

Delete:

```bash
sudo ufw delete RULE_NUMBER
```

## Restrict SSH source

Example management network:

```bash
sudo ufw allow from 192.168.10.0/24 to any port 22 proto tcp
```

## nftables

nftables is the modern Linux packet-filtering framework.

Inspect current ruleset:

```bash
sudo nft list ruleset
```

A distribution may use higher-level tooling that ultimately programs kernel filtering. Do not blindly mix raw nftables rules, UFW, container firewall rules, and other managers without understanding interactions.

---

# 34. Linux Security Fundamentals

Linux security is layered.

## Principles

- least privilege
- supported software
- timely patching
- minimum exposed services
- strong authentication
- key management
- firewalling
- segmentation
- secure configuration
- logging and monitoring
- backups
- recovery testing
- change management

## Patch

```bash
sudo apt update
sudo apt upgrade
```

## Review listeners

```bash
sudo ss -lntup
```

For every network listener ask:

- What process owns it?
- Does it need to run?
- Does it need to listen on all interfaces?
- Is authentication enabled?
- Should firewall access be restricted?

## Account status

```bash
sudo passwd -S username
```

Lock:

```bash
sudo passwd -l username
```

Unlock:

```bash
sudo passwd -u username
```

## World-writable audit

Example scoped path:

```bash
find /srv -type f -perm -0002 -ls
```

## SUID audit

```bash
sudo find / -xdev -perm -4000 -type f -ls
```

An audit result is not proof of compromise. Understand why the permission exists before changing it.

## SSH hardening ideas

- use keys
- restrict root login
- restrict users/groups
- firewall management access
- use MFA/central identity where architecture supports it
- review authentication logs
- rate-limit abusive attempts
- keep OpenSSH patched

## Principle of least privilege

Bad design:

```text
web application runs as root
```

Better:

```text
web application runs as dedicated non-login user
only owns files it needs
only accesses required ports/files
```

## Secrets

Do not:

- commit passwords to Git
- paste production secrets into chat/tickets unnecessarily
- store private keys with world-readable permissions
- share one root account across a team

---

# 35. AppArmor

Ubuntu and standard Ubuntu-based Linux Mint installations use **AppArmor** for mandatory access control.

Status:

```bash
sudo aa-status
```

Important concepts:

- profile
- policy
- enforce mode
- complain mode
- denied operation

Search logs:

```bash
journalctl | grep -i apparmor
```

If an app is blocked, do not disable AppArmor globally as the first fix.

Better approach:

1. Confirm AppArmor generated the denial.
2. Identify the exact profile and operation.
3. Determine whether the app should legitimately have that access.
4. Adjust policy narrowly if required.
5. Retest.

---

# 36. Cron, at, and systemd Timers

## cron

Edit current user's crontab:

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

Example: 02:30 every day:

```cron
30 2 * * * /home/alice/backup.sh
```

Log output:

```cron
30 2 * * * /home/alice/backup.sh >> /home/alice/backup.log 2>&1
```

Common expressions:

```text
*/5 * * * *   every 5 minutes
0 * * * *     hourly
0 0 * * *     daily at midnight
0 9 * * 1     Monday at 09:00
```

## Cron environment gotchas

Cron usually has a smaller environment than your interactive shell.

Use:

- absolute paths
- explicit environment variables
- explicit working directories
- output logging

A script that works manually but fails in cron may have a PATH/environment problem.

## at

One-time scheduling.

Install if needed:

```bash
sudo apt install at
```

Example:

```bash
echo "/home/alice/job.sh" | at 23:00
```

## systemd timers

Timers integrate well with services and journal logs.

Example service:

```ini
[Unit]
Description=Backup job

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/backup-app
```

Example timer:

```ini
[Unit]
Description=Run backup daily

[Timer]
OnCalendar=*-*-* 02:30:00
Persistent=true

[Install]
WantedBy=timers.target
```

List timers:

```bash
systemctl list-timers
```

Enable timer:

```bash
sudo systemctl enable --now backup.timer
```

---

# 37. Bash Scripting Fundamentals

A shell script automates shell commands and logic.

## First script

```bash
#!/usr/bin/env bash

echo "Hello, Linux"
```

Save as:

```text
hello.sh
```

Make executable:

```bash
chmod +x hello.sh
```

Run:

```bash
./hello.sh
```

## Shebang

```bash
#!/usr/bin/env bash
```

Tells the kernel which interpreter should run the script when executed directly.

## Variables

```bash
name="Shoeb"
echo "$name"
```

No spaces around `=`.

Wrong:

```bash
name = "Shoeb"
```

## Read input

```bash
read -r -p "Enter your name: " name
echo "Hello, $name"
```

## Script arguments

```bash
echo "Script: $0"
echo "First: $1"
echo "Second: $2"
echo "Argument count: $#"
printf 'All: <%s>\n' "$@"
```

`"$@"` is usually the correct way to forward arguments while preserving their boundaries.

## if

```bash
if [[ -f /etc/hosts ]]; then
    echo "File exists"
else
    echo "File missing"
fi
```

## File tests

```text
-f file   regular file
-d dir    directory
-e path   path exists
-r file   readable
-w file   writable
-x file   executable
-z str    string empty
-n str    string non-empty
```

## Numeric comparison

```bash
if (( count > 10 )); then
    echo "Large"
fi
```

## String comparison

```bash
if [[ "$env" == "prod" ]]; then
    echo "Production"
fi
```

## case

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
        echo "Usage: $0 {start|stop|restart}" >&2
        exit 2
        ;;
esac
```

## for loop

```bash
for file in *.log; do
    echo "$file"
done
```

## while loop

```bash
count=1
while (( count <= 5 )); do
    echo "$count"
    ((++count))
done
```

The prefix form is friendly to strict mode: arithmetic commands return failure when their expression evaluates to zero, so `((count++))` can unexpectedly terminate a script running with `set -e` when the old value is zero.

## Functions

```bash
log() {
    printf '[%s] %s\n' "$(date '+%F %T')" "$*"
}

log "Application started"
```

## Exit status

Convention:

```text
0      success
nonzero failure/special condition
```

Previous exit status:

```bash
echo $?
```

Conditional execution:

```bash
if command; then
    echo "Success"
else
    echo "Failed"
fi
```

---

# 38. Bash Scripting — Intermediate and Production Patterns

## Strict-style options

Common pattern:

```bash
set -Eeuo pipefail
```

Broad meaning:

- `-e`: exit on many unhandled command failures
- `-u`: error on unset variables
- `pipefail`: pipeline failure reflects failing component
- `-E`: helps ERR traps propagate in more contexts

These options have edge cases. Learn their behavior instead of treating them as magic.

## Temporary files

```bash
tmpfile=$(mktemp)
```

Cleanup:

```bash
cleanup() {
    rm -f -- "$tmpfile"
}
trap cleanup EXIT
```

## Argument validation

```bash
if (( $# != 1 )); then
    echo "Usage: $0 DIRECTORY" >&2
    exit 2
fi
```

## Validate path

```bash
dir=$1

if [[ ! -d "$dir" ]]; then
    echo "Not a directory: $dir" >&2
    exit 1
fi
```

## Safe line reading

```bash
while IFS= read -r line; do
    printf '%s\n' "$line"
done < input.txt
```

Avoid:

```bash
for line in $(cat input.txt); do
    printf '%s\n' "$line"
done
```

because shell word splitting and globbing can corrupt the intended lines.

## Here document

```bash
cat <<'CONFIG' > app.conf
server=localhost
port=8080
CONFIG
```

Quoted delimiter prevents shell expansion inside the block.

The current shell performs `> app.conf`, so this form cannot write a root-owned destination merely by adding `sudo` before `cat`. For an administrative file, validate the content and use `sudo tee /etc/path/file >/dev/null <<'CONFIG'`; remember that `tee` will replace the destination unless `-a` is used.

## Backup script example

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

source_dir="/srv/app"
backup_dir="/backup"
timestamp=$(date '+%Y%m%d_%H%M%S')
archive="$backup_dir/app_$timestamp.tar.gz"

mkdir -p -- "$backup_dir"
tar -czf "$archive" "$source_dir"
sha256sum "$archive" > "$archive.sha256"
printf 'Created: %s\n' "$archive"
```

Because `source_dir` is absolute, GNU `tar` normally reports that it is removing the leading `/` and stores a relative member path; this is intentional and safer for restoration. The checksum detects later byte changes but does not prove who created the archive. Verify with `sha256sum -c "$archive.sha256"` and perform a test extraction into an empty directory.

Production improvements:

- check free space
- retention policy
- offsite copy
- error alerting
- encryption
- database-consistent backups
- restore test
- prevent concurrent execution

## flock

Prevent overlap:

```bash
flock -n /run/myjob.lock /usr/local/bin/myjob.sh
```

## Logging function

```bash
log() {
    local level=$1
    shift
    printf '%s [%s] %s\n' "$(date '+%F %T')" "$level" "$*"
}
```

## getopts

Useful for command-line flags:

```bash
while getopts ":f:v" opt; do
    case "$opt" in
        f) file=$OPTARG ;;
        v) verbose=1 ;;
        *) exit 2 ;;
    esac
done
```

## ShellCheck

When available, ShellCheck can identify many shell scripting bugs and quoting problems.

```bash
shellcheck script.sh
```

---

# 39. Kernel, Modules, and Hardware

## Kernel version

```bash
uname -r
```

More detail:

```bash
uname -a
```

## Distribution release

```bash
cat /etc/os-release
```

If installed:

```bash
lsb_release -a
```

## CPU

```bash
lscpu
cat /proc/cpuinfo
```

## Memory

```bash
free -h
cat /proc/meminfo
```

## PCI devices

```bash
lspci
```

Network hardware:

```bash
lspci | grep -i -E 'network|ethernet'
```

Graphics:

```bash
lspci | grep -i -E 'vga|3d|display'
```

## USB devices

```bash
lsusb
```

## Hardware inventory

```bash
sudo lshw -short
```

## Kernel modules

List loaded modules:

```bash
lsmod
```

Module details:

```bash
modinfo MODULE
```

Load:

```bash
sudo modprobe MODULE
```

Unload:

```bash
sudo modprobe -r MODULE
```

## dmesg for hardware

Example filters:

```bash
sudo dmesg -T | grep -i firmware
sudo dmesg -T | grep -i usb
sudo dmesg -T | grep -i nvme
```

## sysfs and procfs

Kernel/device information is exposed through virtual filesystems such as:

```text
/proc
/sys
```

Do not think of every file under these locations as data stored on disk. Much of it is generated dynamically by the kernel.


---

# 40. Drivers, Graphics, Wi-Fi, Bluetooth, Audio, and Printers

Linux hardware troubleshooting should be evidence-driven.

## General driver troubleshooting workflow

1. Identify the hardware.
2. Identify the kernel driver/module.
3. Check whether the device appears to the kernel.
4. Check kernel logs.
5. Check firmware packages.
6. Check service/desktop layer.
7. Check distribution-supported driver tools.
8. Test known-supported kernel/driver versions if needed.
9. Avoid random third-party driver installers unless necessary.

## Identify driver in use

For PCI devices:

```bash
lspci -k
```

Look for:

```text
Kernel driver in use:
Kernel modules:
```

## Ubuntu additional drivers

Ubuntu provides distribution-supported driver discovery.

```bash
ubuntu-drivers devices
```

Where appropriate:

```bash
sudo ubuntu-drivers install
```

Review recommendations before applying them, especially on production/workstation systems with NVIDIA graphics.

## Graphics troubleshooting

Identify GPU:

```bash
lspci -k | grep -A3 -i -E 'vga|3d|display'
```

Session type:

```bash
echo "$XDG_SESSION_TYPE"
```

Check kernel messages:

```bash
journalctl -k -b | grep -i -E 'drm|gpu|nvidia|amdgpu|i915'
```

Possible layers involved:

- firmware
- kernel driver
- Mesa/proprietary driver
- Xorg/Wayland
- compositor
- desktop environment
- application acceleration

## Wi-Fi

Interface state:

```bash
nmcli device status
```

Scan:

```bash
nmcli device wifi list
```

Radio block:

```bash
rfkill list
```

Unblock Wi-Fi:

```bash
sudo rfkill unblock wifi
```

Hardware details:

```bash
lspci -k | grep -A3 -i network
```

USB Wi-Fi:

```bash
lsusb
```

Kernel/firmware messages:

```bash
journalctl -k -b | grep -i -E 'wifi|wlan|firmware|80211'
```

## Wi-Fi scenario: adapter visible but no networks

Check:

```bash
nmcli radio
rfkill list
nmcli device status
ip link
journalctl -u NetworkManager -b
```

Potential causes:

- airplane mode/rfkill
- driver/firmware issue
- NetworkManager state
- regulatory-domain issue
- hardware switch
- failing adapter

## Bluetooth

```bash
rfkill list bluetooth
systemctl status bluetooth
bluetoothctl
```

Inside `bluetoothctl`, common workflow:

```text
power on
scan on
devices
pair MAC
trust MAC
connect MAC
```

## Audio

Modern Ubuntu/Mint desktop audio commonly involves PipeWire and related session management.

Inspect:

```bash
wpctl status
```

Where compatibility tooling exists:

```bash
pactl info
pactl list short sinks
pactl list short sources
```

Troubleshooting questions:

- correct output device?
- muted?
- correct profile?
- HDMI output selected accidentally?
- Bluetooth codec/profile?
- application-specific device selection?
- PipeWire/session manager running?

## Printing

Linux printing commonly uses CUPS.

```bash
systemctl status cups
```

Printers:

```bash
lpstat -p -d
```

Print file:

```bash
lp file.pdf
```

Queue:

```bash
lpq
```

Cancel job:

```bash
cancel JOB_ID
```

CUPS web interface, when enabled/configured:

```text
http://localhost:631/
```

---

# 41. GNOME, Cinnamon, X11, Wayland, and Desktop Concepts

A Linux desktop is a stack rather than one monolithic program.

## Typical graphical stack

```text
Application
   ↓
GUI toolkit (GTK/Qt/etc.)
   ↓
Desktop environment / compositor
   ↓
Wayland or X11 architecture
   ↓
Graphics libraries/drivers
   ↓
Kernel DRM/input drivers
   ↓
Hardware
```

## X11 / Xorg

X11 is the traditional Unix/Linux display system. Xorg is a common implementation.

Strengths:

- mature ecosystem
- broad compatibility
- historical remote-display capabilities

Weaknesses include older security/design assumptions.

## Wayland

Wayland is the modern display protocol/architecture adopted increasingly by Linux desktops.

Goals include:

- cleaner graphics stack
- stronger application isolation model
- smoother modern display handling
- reduced historical X11 complexity

## Check your session

```bash
echo "$XDG_SESSION_TYPE"
```

Possible output:

```text
wayland
x11
```

## GNOME

Ubuntu Desktop uses a customized GNOME experience.

Common components/concepts:

- GNOME Shell
- Mutter compositor
- Settings
- Files/Nautilus
- extensions

## Cinnamon

Linux Mint's flagship desktop uses a traditional layout and its own Cinnamon ecosystem.

Common concepts:

- Cinnamon panel
- applets
- desklets
- themes
- Nemo file manager
- Cinnamon settings

## Display manager

The graphical login screen is managed by a display manager.

Examples:

- GDM
- LightDM
- SDDM

## XDG directories

Common user configuration/data locations:

```text
~/.config
~/.local/share
~/.cache
```

Environment variables may include:

```bash
echo "$XDG_CONFIG_HOME"
echo "$XDG_DATA_HOME"
```

If unset, applications often use XDG defaults.

## Desktop autostart

User autostart entries can commonly live under:

```text
~/.config/autostart/
```

## `.desktop` files

Desktop application launchers use files ending in `.desktop`.

Example concept:

```ini
[Desktop Entry]
Name=My App
Exec=/opt/myapp/myapp
Type=Application
Terminal=false
```

System-wide application launchers commonly appear under:

```text
/usr/share/applications/
```

User-specific launchers:

```text
~/.local/share/applications/
```

---

# 42. Remote Desktop

Remote desktop controls a graphical session over a network.

Possible technologies:

- GNOME Remote Desktop
- RDP
- xrdp
- VNC implementations
- commercial remote-access products
- SSH X forwarding for individual graphical applications

## xrdp example

Install:

```bash
sudo apt install xrdp
```

Enable/start:

```bash
sudo systemctl enable --now xrdp
```

Check:

```bash
systemctl status xrdp
ss -ltnp | grep 3389
```

Firewall example:

```bash
sudo ufw allow 3389/tcp
```

That rule allows every source that can reach the host. Prefer the actual trusted subnet, for example `sudo ufw allow from 192.168.10.0/24 to any port 3389 proto tcp`, or keep RDP behind a VPN/private network.

## Security architecture

Avoid exposing remote desktop directly to the entire public internet.

Prefer one or more of:

- VPN
- private network
- firewall source restriction
- zero-trust access layer
- secure gateway
- SSH tunnel where compatible

## Troubleshooting RDP

Check layers:

```bash
systemctl status xrdp
journalctl -u xrdp -b
ss -ltnp
sudo ufw status
ip addr
```

Also consider:

- desktop session compatibility
- Xorg/Wayland behavior
- user permissions
- authentication
- display manager
- NAT/router rules
- cloud security groups

## Connection refused vs timeout

**Connection refused:** remote host is reachable but nothing accepts the connection, or an active reject occurs.

**Timeout:** traffic may be dropped by firewall/router/security group, routed incorrectly, or host is unreachable.

This distinction is useful for both RDP and SSH troubleshooting.

---

# 43. Linux for Developers

Linux provides an excellent development environment because build tools, shells, containers, runtimes, and automation integrate naturally.

## Base build tools

```bash
sudo apt install build-essential
```

Typically gives core C/C++ compilation tooling such as GCC, G++, make, and development utilities.

## Git

```bash
sudo apt install git
git --version
```

Configure identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Useful:

```bash
git config --list --show-origin
```

## Python

Check:

```bash
python3 --version
```

Virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install packages inside environment:

```bash
python -m pip install requests
```

Leave:

```bash
deactivate
```

Do not make `sudo pip install ...` your default approach for project dependencies. It can conflict with distribution-managed Python packages.

## Node.js

Projects often need specific Node versions. A version manager can be preferable to forcing one global system version.

Understand:

```text
Node runtime
npm/pnpm/yarn
package.json
lock file
node_modules
project Node version
```

Avoid running package managers as root merely to solve permission errors; fix the ownership/version-manager setup.

## Java

Example:

```bash
sudo apt install default-jdk
java -version
javac -version
```

Production projects may require a specific JDK release rather than `default-jdk`.

## PHP

```bash
php -v
```

Common architecture:

```text
Nginx/Apache → PHP-FPM or Apache PHP integration → application
```

Exact packages/modules depend on release and project requirements.

## C example

`hello.c`:

```c
#include <stdio.h>

int main(void) {
    puts("Hello Linux");
    return 0;
}
```

Compile:

```bash
gcc hello.c -o hello
./hello
```

`gcc` compiles `hello.c` and writes an executable named `hello` because `-o hello` supplies the output name. `./hello` runs that file from the current directory and prints:

```text
Hello Linux
```

A useful warning-enabled build for small C exercises is `gcc -Wall -Wextra -Wpedantic hello.c -o hello`. Compilation success does not guarantee the program is free of runtime or logic errors.

## Environment files

Projects often use:

```text
.env
```

Never assume `.env` is safe simply because it is hidden. Add sensitive environment files to `.gitignore` and use production secret-management practices.

## Useful development commands

```bash
command -v python3
command -v node
command -v php
ldd /path/to/binary
strace command
```

`strace` can be extremely helpful for advanced debugging of system calls, missing files, permission problems, and network behavior.

---

# 44. Web Server Scenario: Apache and Nginx

## Apache

Install:

```bash
sudo apt install apache2
```

Status:

```bash
systemctl status apache2
```

Default web root commonly:

```text
/var/www/html
```

Logs commonly:

```text
/var/log/apache2/
```

Config syntax check:

```bash
sudo apache2ctl configtest
```

Reload safely after a successful config check:

```bash
sudo systemctl reload apache2
```

## Apache concepts

- virtual hosts
- document root
- modules
- access log
- error log
- HTTP/HTTPS listeners
- reverse proxy
- TLS certificates

Common site config directories:

```text
/etc/apache2/sites-available/
/etc/apache2/sites-enabled/
```

Enable a site:

```bash
sudo a2ensite example.conf
```

Disable:

```bash
sudo a2dissite example.conf
```

## Nginx

Install:

```bash
sudo apt install nginx
```

Status:

```bash
systemctl status nginx
```

Validate config:

```bash
sudo nginx -t
```

Reload:

```bash
sudo systemctl reload nginx
```

Logs commonly:

```text
/var/log/nginx/access.log
/var/log/nginx/error.log
```

Common site configuration model on Ubuntu:

```text
/etc/nginx/sites-available/
/etc/nginx/sites-enabled/
```

## Static site example concept

```nginx
server {
    listen 80;
    server_name example.test;
    root /var/www/example;
    index index.html;
}
```

Validate before reload:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## Reverse proxy concept

```text
Internet client
      ↓
Nginx :443
      ↓
application on 127.0.0.1:8080
```

Example concept:

```nginx
location / {
    proxy_pass http://127.0.0.1:8080;
}
```

## Scenario: connection refused

Check:

```bash
systemctl status nginx
ss -ltnp | grep ':80'
sudo ufw status
curl -I http://127.0.0.1
```

Interpretation:

- Nginx stopped → service issue
- localhost works, remote fails → firewall/network/listen issue
- no listener → service/config failed
- listener only on loopback → remote clients cannot reach it

## Scenario: 502 Bad Gateway

Usually reverse proxy is reachable but upstream/backend failed.

Check:

```bash
sudo nginx -t
journalctl -u nginx -b
tail -f /var/log/nginx/error.log
ss -ltnp
systemctl status BACKEND_SERVICE
```

## TLS

For production HTTPS, use a trusted certificate and automate renewals using supported tooling. Always understand:

- private key location/permissions
- full certificate chain
- certificate expiration
- DNS ownership
- port 443 firewalling
- redirect behavior
- renewal mechanism

---

# 45. Database Administration Basics

Common Linux-hosted databases include:

- MySQL
- MariaDB
- PostgreSQL
- Redis

This handbook focuses on Linux-side administration concepts rather than SQL language mastery.

## Generic troubleshooting model

Ask:

1. Is the database service running?
2. Is it listening on the expected socket/port?
3. Which address is it bound to?
4. Is local connection working?
5. Are credentials/auth rules correct?
6. Does firewall allow the client network?
7. Is disk space healthy?
8. Is memory healthy?
9. What do database logs say?
10. Was configuration changed recently?

## MySQL/MariaDB service example

```bash
systemctl status mysql
ss -ltnp | grep ':3306'
```

## PostgreSQL example

```bash
systemctl status postgresql
ss -ltnp | grep ':5432'
```

## Bind address

A database bound to:

```text
127.0.0.1
```

accepts local IPv4 connections only.

Binding to all interfaces can expose it much more widely, so pair any required remote access with:

- authentication
- firewall/network segmentation
- TLS where appropriate
- private networking
- least privilege

## Never solve connectivity by opening database globally

Bad response to an application problem:

```text
Allow 0.0.0.0/0 to database port
```

Better:

- identify exact application source network
- use private network
- restrict firewall/security group
- configure database user scope
- use encrypted transport if needed

## Backups

A live database needs a consistency-aware backup method.

Possible approaches:

- logical dump
- database-native backup
- filesystem snapshot coordinated with database
- replication backup
- managed-service snapshot

Most important rule:

**Test restoration.**

A successful backup command does not prove the backup is restorable.

---

# 46. Containers: Docker and Podman Concepts

Containers are isolated processes sharing the host Linux kernel.

Core Linux mechanisms include:

- namespaces
- cgroups
- capabilities
- layered filesystems
- networking primitives

## Container vs VM

Container:

```text
host kernel shared
process isolation
fast startup
smaller overhead
```

VM:

```text
virtual hardware
separate guest kernel
full guest OS
stronger OS boundary for many use cases
```

## Docker vocabulary

- image
- container
- registry
- Dockerfile
- layer
- volume
- bind mount
- bridge network
- port mapping
- Compose

## Image vs container

**Image** = immutable-ish template/build artifact.

**Container** = runtime instance of an image plus writable runtime state.

## Simple Dockerfile

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

`FROM` selects a base image and `COPY` adds the build context's files to the image. Add a `.dockerignore` so secrets, Git metadata, dependencies, and unrelated large files are not sent to the builder. In production, pin a reviewed image version or digest rather than relying on a moving tag.

Build:

```bash
docker build -t mysite .
```

Run:

```bash
docker run -d --name mysite -p 8080:80 mysite
```

`-d` detaches, `--name` creates a stable container name, and `-p 8080:80` publishes container TCP port 80 on host port 8080. Unless a host address is specified, the published port may listen on all host interfaces; confirm with `ss -ltnp` and firewall it appropriately.

List:

```bash
docker ps
```

Logs:

```bash
docker logs mysite
```

Shell:

```bash
docker exec -it mysite sh
```

Stop/remove:

```bash
docker stop mysite
docker rm mysite
```

## Port mapping

```text
-p 8080:80
```

means conceptually:

```text
host TCP 8080 → container TCP 80
```

## Volumes

Persistent data should not rely solely on a disposable container's writable layer.

Named volume:

```bash
docker volume create appdata
```

## Bind mount

Maps host path into container.

Example concept:

```bash
docker run -v /srv/data:/data IMAGE
```

Host permissions matter.

## Compose

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
```

Start:

```bash
docker compose up -d
```

Stop/remove stack:

```bash
docker compose down
```

## Security basics

- avoid privileged containers unless necessary
- do not mount Docker socket casually
- run as non-root inside container where practical
- keep base images patched
- scan images/dependencies
- do not bake secrets into images
- restrict published ports
- use read-only filesystems/capability drops where appropriate

## Podman

Podman is another container engine with strong rootless support. Many Docker concepts carry over even if exact command behavior differs.

---

# 47. Virtualization: KVM, QEMU, libvirt, and VirtualBox

Virtualization is one of the safest ways to learn Linux administration.

## KVM

KVM provides Linux kernel virtualization support on compatible CPUs.

Check virtualization feature:

```bash
lscpu | grep -i virtualization
```

Common ecosystem:

- KVM
- QEMU
- libvirt
- `virsh`
- virt-manager

## libvirt concepts

- domains = VMs
- storage pools
- virtual networks
- snapshots
- XML definitions

List VMs:

```bash
virsh list --all
```

## VirtualBox

Desktop-friendly VM platform.

Excellent lab uses:

- snapshot before dangerous command
- attach extra disks for LVM practice
- NAT network for basic internet
- host-only/internal networks for server labs
- clone VMs
- test boot recovery

## Suggested Linux lab topology

```text
VM1: client-desktop     192.168.56.10
VM2: web-server         192.168.56.20
VM3: database-server    192.168.56.30
```

Practice:

- SSH
- DNS/hosts
- firewalls
- Nginx reverse proxy
- database connectivity
- backups
- routing

---

# 48. Backups, Snapshots, and Recovery

Backups are part of administration, not an optional afterthought.

## What needs backup?

Depending on the system:

- user files
- application source/assets
- databases
- `/etc` configuration
- TLS keys/certificates
- SSH keys where policy allows backup
- secrets
- service data under `/var/lib`
- package/application configuration
- deployment manifests
- recovery documentation

## 3-2-1 guideline

Classic design idea:

- 3 copies
- 2 different storage/media forms
- 1 offsite

Modern architectures may extend this with immutable/offline copies.

## rsync backup

```bash
rsync -aHAX --dry-run /home/alice/ /backup/alice/
```

This previews an archive-style copy that preserves common metadata where supported. Review source, destination, privileges, filesystem capabilities, and trailing slashes, then remove `--dry-run`:

```bash
rsync -aHAX /home/alice/ /backup/alice/
```

Mirror with deletion:

```bash
rsync -aHAX --delete --dry-run /home/alice/ /backup/alice/
```

`--delete` is powerful. If source/destination are reversed, you can destroy the good copy.

Only after verifying the preview, run:

```bash
rsync -aHAX --delete /home/alice/ /backup/alice/
```

## tar configuration backup

```bash
sudo tar -czf etc-backup.tar.gz /etc
```

## Timeshift

Linux Mint integrates Timeshift strongly as a system snapshot/recovery tool.

Important distinction:

**System snapshots are not automatically complete personal-data backups.**

Keep dedicated backup copies of:

- documents
- photos
- repositories
- database exports
- project data

## Snapshot vs backup

Snapshot often:

- lives on same storage system or snapshot-aware storage
- is fast
- tracks a point in time

Backup ideally:

- exists independently
- can survive loss of original host/storage
- has retention
- is restorable elsewhere

## Restore testing

Test different restore levels:

- one file
- one directory
- application config
- database
- full VM/system

Measure:

- RPO: how much data you can afford to lose
- RTO: how long recovery can take

---

# 49. Performance Monitoring

Performance troubleshooting means separating CPU, memory, disk, I/O, and network pressure.

## CPU/process view

```bash
top
```

If installed:

```bash
htop
```

Sorted process list:

```bash
ps aux --sort=-%cpu | head
```

## Load average

```bash
uptime
```

Load averages represent roughly 1, 5, and 15 minute system load.

Interpretation must consider:

- CPU core count
- runnable processes
- uninterruptible I/O waits

A load of 4 means something different on a 2-core and 32-core system.

## Memory

```bash
free -h
```

Do not panic just because `free` memory looks small. Linux aggressively uses memory for cache.

Focus on:

- `available`
- swap activity
- process memory
- OOM events
- sustained memory pressure

## vmstat

```bash
vmstat 1
```

Useful columns help expose:

- runnable tasks
- swapping
- I/O
- user/system CPU
- idle CPU
- I/O wait

## I/O

Install tools if needed:

```bash
sudo apt install sysstat
```

Then:

```bash
iostat -xz 1
```

Look for sustained latency/utilization rather than one isolated sample.

## Disk

```bash
df -h
sudo du -xhd1 /var
```

## Network

```bash
ip -s link
ss -s
```

## OOM killer

```bash
journalctl -k | grep -i -E 'oom|out of memory|killed process'
```

## Scenario: server is slow

Start broad:

```bash
uptime
free -h
df -h
top
vmstat 1
iostat -xz 1
journalctl -p err -b
```

Then narrow to the subsystem showing evidence of pressure.

---

# 50. Troubleshooting Methodology

The best Linux skill is not memorizing fixes; it is troubleshooting systematically.

## Step 1: Define the symptom precisely

Bad:

> Linux is broken.

Good:

> Nginx service is active, but TCP 443 is not listening after today's certificate change.

## Step 2: Determine scope

Ask:

- one user or all users?
- one server or several?
- one application or whole system?
- only remote access or local too?
- after reboot?
- after package update?
- after deployment/config change?

## Step 3: Collect evidence

Common first tools:

```bash
systemctl status SERVICE
journalctl -u SERVICE -b
ss -lntup
df -h
free -h
ip -br addr
ip route
```

## Step 4: Check recent changes

Examples:

- package/kernel update
- deployment
- firewall change
- DNS change
- certificate renewal
- permission/ownership change
- disk addition
- password/key rotation

## Step 5: Build a hypothesis

Example:

> Nginx is failing config validation because the configured TLS private key path no longer exists.

## Step 6: Run the smallest safe test

```bash
sudo nginx -t
```

Do not reinstall the OS before validating a configuration file.

## Step 7: Fix root cause

Avoid temporary workarounds that hide the real problem.

## Step 8: Verify from multiple levels

Example web service:

```text
service active?
port listening?
localhost HTTP works?
firewall correct?
remote client works?
logs clean?
```

## Step 9: Document

Record:

- symptom
- impact
- root cause
- evidence
- fix
- verification
- prevention

---

# 51. Common Troubleshooting Scenarios

## Scenario 1: command not found

```text
curl: command not found
```

Check:

```bash
command -v curl
apt search curl
```

Install:

```bash
sudo apt update
sudo apt install curl
```

Could also be a PATH issue rather than missing package.

## Scenario 2: permission denied

Check:

```bash
ls -l /path/to/file
namei -l /full/path/to/file
id
```

Questions:

- execute bit missing?
- wrong owner/group?
- parent directory not traversable?
- filesystem mounted `noexec`?
- AppArmor denial?
- wrong interpreter?

## Scenario 3: service will not start

```bash
systemctl status SERVICE
journalctl -u SERVICE -b
```

Then config validation when available:

```bash
sudo nginx -t
sudo apache2ctl configtest
sudo sshd -t
```

## Scenario 4: disk full

```bash
df -h
df -i
sudo du -xhd1 /var
sudo lsof +L1
```

Common sources:

- logs
- container images/layers
- package caches
- uploads
- database growth
- backup recursion
- deleted-open files
- inode exhaustion

Do not delete unknown files from `/var/lib` just to free space.

## Scenario 5: DNS not resolving

```bash
ip -br addr
ip route
ping -c 2 1.1.1.1
getent hosts example.com
cat /etc/resolv.conf
resolvectl status
```

## Scenario 6: SSH connection refused

Server:

```bash
systemctl status ssh
ss -ltnp | grep ':22'
sudo ufw status
```

Client:

```bash
ssh -vvv user@server
```

## Scenario 7: SSH authentication denied

Check:

```bash
id USER
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
journalctl -u ssh -b
```

Possible causes:

- wrong username
- wrong key
- permissions
- account locked
- server policy
- key not in `authorized_keys`

## Scenario 8: APT broken dependencies

```bash
sudo apt update
sudo apt --fix-broken install
dpkg --audit
apt-mark showhold
```

Investigate third-party repositories and partially configured packages.

## Scenario 9: GUI application fails silently

Launch from terminal:

```bash
application-name
```

Then check:

```bash
journalctl --user -b
```

Possible output may reveal:

- missing library
- bad config
- display problem
- permission issue
- plugin crash

## Scenario 10: system suddenly slow

```bash
uptime
top
free -h
vmstat 1
iostat -xz 1
df -h
journalctl -p err -b
```

## Scenario 11: process consumes 100% CPU

```bash
ps -p PID -o pid,ppid,user,%cpu,%mem,etime,cmd
```

Before killing it:

- inspect logs
- identify workload
- determine whether high CPU is expected
- see whether child processes are responsible

## Scenario 12: website works locally but not remotely

```bash
curl -I http://127.0.0.1:8080
ss -ltnp | grep 8080
sudo ufw status
ip addr
```

If bound only to:

```text
127.0.0.1:8080
```

remote clients cannot connect directly.

## Scenario 13: filesystem says read-only

Check:

```bash
findmnt -o TARGET,SOURCE,FSTYPE,OPTIONS /
journalctl -k -b | tail -100
```

A filesystem may be remounted read-only after serious I/O/filesystem errors. Do not simply force it back to writable without investigating disk/filesystem health.

## Scenario 14: reboot required after updates?

Some updates, especially kernels and core libraries/services, may require reboot/service restart to fully activate.

Useful package when installed:

```bash
needrestart
```

Also inspect:

```text
/var/run/reboot-required
```

if present on the system.

---

# 52. Boot Repair and Rescue

Boot repair is high-risk because mistakes can make a recoverable system harder to recover. Use backups and record device layout first.

## If GRUB appears but normal boot fails

Try:

- advanced options
- older kernel
- recovery mode
- boot log inspection

After booting an older working kernel:

```bash
journalctl -b -1
```

## systemd emergency mode

Common causes:

- invalid `/etc/fstab`
- failed filesystem mount
- filesystem corruption
- unavailable required device
- critical service/dependency failure

Inspect:

```bash
systemctl --failed
journalctl -xb
cat /etc/fstab
```

## Live USB rescue workflow

High-level:

1. Boot Ubuntu/Mint Live USB.
2. Identify root partition.
3. Mount root.
4. Mount EFI system partition if required.
5. Bind `/dev`, `/proc`, `/sys`, `/run`.
6. Enter `chroot`.
7. Repair packages/initramfs/GRUB/config.
8. Exit and unmount cleanly.
9. Reboot.

Example **only if these are your actual partitions**:

```bash
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi

for i in /dev /dev/pts /proc /sys /run; do
    sudo mount --bind "$i" "/mnt$i"
done

sudo chroot /mnt
```

Possible repair operations:

```bash
update-initramfs -u
update-grub
```

Do not blindly run a GRUB installation command until you know:

- UEFI vs legacy BIOS
- root partition
- EFI partition
- target disk
- encryption/LVM layout
- whether `/boot` is separate

## Broken kernel package scenario

From a working older kernel/recovery environment:

```bash
sudo apt update
sudo apt --fix-broken install
sudo dpkg --configure -a
sudo update-initramfs -u -k all
sudo update-grub
```

Only remove kernel packages after confirming a known-good kernel remains installed.

## Bad fstab scenario

From emergency shell or Live environment:

1. backup/edit `/etc/fstab`
2. comment/fix bad line
3. test:

```bash
sudo mount -a
```

4. inspect errors before reboot

---

# 53. Practical Administration Scenarios

These scenarios combine several chapters into real workflows.

## Scenario A: Create a developer account

```bash
sudo adduser developer
sudo usermod -aG sudo developer
sudo mkdir -p /srv/project
sudo chown developer:developer /srv/project
```

Verify:

```bash
id developer
ls -ld /srv/project
```

For production, decide whether the developer really needs unrestricted sudo.

## Scenario B: Shared team directory

Requirement:

- group `developers`
- alice and bob are members
- `/srv/team` writable by team
- new files inherit `developers` group

```bash
sudo groupadd developers
sudo usermod -aG developers alice
sudo usermod -aG developers bob
sudo mkdir -p /srv/team
sudo chown root:developers /srv/team
sudo chmod 2770 /srv/team
```

Users may need a new login session for group changes to apply.

## Scenario C: Deploy static website

```bash
sudo apt update
sudo apt install nginx
sudo mkdir -p /var/www/example
sudo chown -R "$USER":"$USER" /var/www/example
```

Create site config, then:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Firewall:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

Verify:

```bash
curl -I http://127.0.0.1
```

## Scenario D: Run an application as systemd service

Create dedicated account:

```bash
sudo useradd --system --home /opt/myapi --shell /usr/sbin/nologin myapi
```

Ownership:

```bash
sudo chown -R myapi:myapi /opt/myapi
```

Service should define:

- `User=myapi`
- correct `WorkingDirectory`
- exact `ExecStart`
- restart policy
- environment/config

Activate:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now myapi
journalctl -u myapi -f
```

## Scenario E: Find what uses port 8080

```bash
sudo ss -ltnp | grep ':8080'
```

Alternative:

```bash
sudo lsof -iTCP:8080 -sTCP:LISTEN
```

Then inspect the PID rather than killing an unknown process.

## Scenario F: Find huge logs

```bash
sudo find /var/log -type f -size +100M -ls
```

Then inspect:

- owning service
- logrotate configuration
- application logging level
- repeated errors causing log flood

## Scenario G: Copy a large data tree

Preview:

```bash
rsync -aHAX --dry-run /source/ /destination/
```

Transfer:

```bash
rsync -aHAX --info=progress2 /source/ /destination/
```

Remote:

```bash
rsync -aHAX --info=progress2 -e ssh /source/ user@server:/destination/
```

## Scenario H: Service works locally but not remotely

```bash
curl http://127.0.0.1:8080
ss -ltnp | grep 8080
ip -br addr
sudo ufw status
```

Possible causes:

- app bound to loopback only
- firewall
- cloud security group
- NAT/router
- wrong IP
- service bound only to IPv6 or IPv4

## Scenario I: Automatically restart an app

Use systemd:

```ini
[Service]
Restart=on-failure
RestartSec=5
```

This is generally more manageable than an infinite shell loop.

## Scenario J: Collect a diagnostic report

```bash
{
    echo "=== DATE ==="
    date
    echo "=== OS ==="
    cat /etc/os-release
    echo "=== KERNEL ==="
    uname -a
    echo "=== UPTIME ==="
    uptime
    echo "=== MEMORY ==="
    free -h
    echo "=== DISK ==="
    df -h
    echo "=== NETWORK ==="
    ip -br addr
    echo "=== ROUTES ==="
    ip route
    echo "=== FAILED SERVICES ==="
    systemctl --failed
} > diagnostics.txt 2>&1
```

Review diagnostics before sharing because they can expose hostnames, usernames, IPs, mount paths, and other internal information.

## Scenario K: Add a persistent data disk

1. Detect:

```bash
lsblk -f
```

2. Partition if required.
3. Create filesystem if required.
4. Mount manually.
5. Verify content/access.
6. Get UUID:

```bash
blkid
```

7. Add fstab entry.
8. Test:

```bash
sudo mount -a
```

9. Reboot only after successful validation.

## Scenario L: Nightly backup

Create script under:

```text
/usr/local/sbin/backup-app
```

Run using:

- systemd service + timer, or
- cron

Production requirements:

- logs
- retention
- backup destination monitoring
- failure alert
- encryption where needed
- restore test

## Scenario M: Find recently changed deployment files

Last 10 minutes:

```bash
find /var/www -type f -mmin -10 -ls
```

## Scenario N: Compare configurations

```bash
diff -u nginx.conf.old nginx.conf.new
```

Directories:

```bash
diff -ruN old-config/ new-config/
```

## Scenario O: Verify ISO

```bash
sha256sum linux.iso
```

Compare exact checksum with the distribution's official value.

## Scenario P: Find failed login activity

Start with authentication logs/journal appropriate to the system:

```bash
journalctl -u ssh --since today
```

If traditional auth log exists:

```bash
sudo grep -i 'failed' /var/log/auth.log
```

Investigate patterns; do not assume every failed login means compromise.

## Scenario Q: Restrict service to local system

If an internal API should only be used through local Nginx, bind it to loopback:

```text
127.0.0.1:8080
```

Then expose only Nginx ports 80/443 through firewall. This reduces unnecessary network exposure.

## Scenario R: Application cannot write upload directory

Do not immediately use `chmod 777`.

Inspect:

```bash
ps -o user,group,cmd -C APPLICATION
ls -ld /srv/app/uploads
namei -l /srv/app/uploads
```

Then assign correct owner/group/ACL rather than world-writable access.

## Scenario S: Server time incorrect

Check:

```bash
timedatectl
```

Time synchronization status depends on the configured time service. Correct time is important for:

- TLS certificates
- authentication
- logs
- distributed systems
- scheduled jobs

## Scenario T: Need exact command run by a service

```bash
systemctl cat SERVICE
systemctl show SERVICE
ps -ef | grep PROCESS
```

Do not assume the service uses the same environment/path as your interactive shell.


---

# 54. Linux Security Hardening Checklist

This is a practical baseline, not a replacement for an organization-specific security standard or compliance benchmark.

## OS and patching

- [ ] Use a supported Ubuntu/Mint release.
- [ ] Apply package/security updates regularly.
- [ ] Remove obsolete third-party repositories.
- [ ] Reboot when required for a new kernel or other critical update.
- [ ] Keep firmware updated where appropriate.

## Accounts and privilege

- [ ] Give each administrator an individual account.
- [ ] Avoid shared root credentials.
- [ ] Review membership of `sudo` and other privileged groups.
- [ ] Lock/remove accounts for departed users.
- [ ] Use service accounts for applications.
- [ ] Give service accounts non-login shells where interactive login is not needed.
- [ ] Avoid running applications as root.
- [ ] Use least-privilege sudo rules where appropriate.

## SSH

- [ ] Prefer public-key authentication for administrators.
- [ ] Protect private keys.
- [ ] Restrict root SSH login according to policy.
- [ ] Restrict allowed users/groups when useful.
- [ ] Firewall SSH to management networks when possible.
- [ ] Validate SSH configuration before reload.
- [ ] Monitor failed authentication attempts.

## Network

- [ ] Review listening ports with `ss -lntup`.
- [ ] Disable unused services.
- [ ] Configure UFW/nftables or the organization's firewall standard.
- [ ] Do not expose databases unnecessarily.
- [ ] Bind internal-only applications to loopback/private interfaces.
- [ ] Use TLS for sensitive network traffic.
- [ ] Segment production, management, and user networks where possible.

## Files and secrets

- [ ] Protect `/etc` and application configuration appropriately.
- [ ] Set private keys to restrictive permissions.
- [ ] Avoid world-writable application directories.
- [ ] Keep secrets out of Git repositories.
- [ ] Use a secret-management solution for production credentials where available.
- [ ] Review SUID/SGID files periodically.
- [ ] Use ACLs intentionally and document them.

## Mandatory access control

- [ ] Keep AppArmor enabled unless there is a justified exception.
- [ ] Investigate policy denials rather than disabling enforcement globally.

## Backups and recovery

- [ ] Back up critical data.
- [ ] Maintain an off-machine/offsite copy.
- [ ] Protect backup credentials.
- [ ] Encrypt backups when needed.
- [ ] Define retention.
- [ ] Test restore procedures.
- [ ] Document RPO/RTO.

## Logging and monitoring

- [ ] Review `systemctl --failed`.
- [ ] Review security/authentication logs.
- [ ] Monitor disk capacity and inode usage.
- [ ] Monitor certificate expiry.
- [ ] Alert on backup failures.
- [ ] Centralize logs for important production systems where appropriate.

---

# 55. Common Dangerous Commands

Linux gives administrators enormous control. The goal is not to fear these commands; it is to understand them.

## `rm -rf`

```bash
rm -rf PATH
```

Risks:

- recursive deletion
- no normal recycle bin
- typo/empty variable can target wrong location

Before destructive deletion:

```bash
printf 'Target: <%s>\n' "$path"
ls -ld -- "$path"
```

Use `--` before paths that may begin with `-`:

```bash
rm -- "$file"
```

## Recursive `chmod` / `chown`

```bash
chmod -R ...
chown -R ...
```

Can:

- break application ownership
- expose secrets
- prevent system services from starting

Always verify path and intended permission model.

## `dd`

Example ISO-writing pattern:

```bash
sudo dd if=image.iso of=/dev/sdX bs=4M status=progress conv=fsync
```

A wrong `of=` disk can overwrite an entire drive.

Before using it:

```bash
lsblk -o NAME,SIZE,MODEL,SERIAL,TYPE,MOUNTPOINTS
```

## `mkfs`

```bash
sudo mkfs.ext4 /dev/DEVICE
```

Creates a filesystem and destroys existing filesystem metadata/data on the target.

## `fdisk`, `parted`, `wipefs`

Partition table/filesystem signature changes can make data inaccessible.

## `curl | sudo bash`

Avoid blindly executing downloaded code:

```bash
curl URL | sudo bash
```

Safer principle:

1. download from official source
2. inspect
3. verify signature/checksum where offered
4. understand what it changes
5. execute intentionally

## `chmod 777`

```bash
chmod -R 777 /some/path
```

Usually not a real fix. Determine which user/group needs which access.

## `kill -9`

```bash
kill -9 PID
```

Use when graceful termination fails, not as first choice.

## Writing directly to block devices

Commands that target `/dev/sdX`, `/dev/nvme...`, or raw logical volumes can destroy data instantly.

## Editing remotely critical configuration

Examples:

```text
/etc/ssh/sshd_config
/etc/netplan/*.yaml
/etc/fstab
firewall rules
```

A mistake can lock you out. Keep console/recovery access and validate before disconnecting.

---

# 56. Beginner Labs

Do these in a VM. Try each task before looking at command hints.

## Lab 1: Build a directory tree

Create:

```text
~/linux-lab/
├── docs/
├── scripts/
├── logs/
└── backup/
```

Tasks:

- create 5 files
- copy 2 files
- move 1 file
- rename 1 file
- create a symbolic link
- delete one test file safely

Commands to practice:

```text
pwd ls cd mkdir touch cp mv ln rm stat file
```

## Lab 2: Text processing

Create `employees.txt` containing names, departments, and scores.

Tasks:

- count lines
- find all "IT" rows
- sort by name
- extract one field
- count repeated departments

Tools:

```text
cat less grep sort uniq wc cut awk
```

## Lab 3: Permissions

Create:

```bash
echo '#!/usr/bin/env bash' > hello.sh
echo 'echo hello' >> hello.sh
```

Try:

```bash
./hello.sh
```

Inspect:

```bash
ls -l hello.sh
```

Fix:

```bash
chmod u+x hello.sh
```

Explain why the execute bit matters.

## Lab 4: Users and groups

In a disposable VM:

- create `alice`
- create `bob`
- create `developers` group
- add both users
- create `/srv/devteam`
- set SGID
- prove both can collaborate

## Lab 5: APT

Install:

```text
tree
curl
htop
```

Then:

- locate executable
- inspect package details
- list files from package
- remove one package
- reinstall it

## Lab 6: Process control

Run:

```bash
sleep 1000
```

Tasks:

- identify PID
- suspend with Ctrl+Z
- send to background
- bring to foreground
- terminate with SIGTERM

## Lab 7: Logs

Generate a few commands with errors and then explore:

```bash
journalctl -b
journalctl -p err
```

Learn that not every application writes to the system journal.

## Lab 8: Archives

Create a project directory and:

- tar it
- gzip tar it
- list archive contents
- extract into a new directory
- compute SHA-256 checksum

---

# 57. Intermediate Labs

## Lab 1: Nginx website

Requirements:

- install Nginx
- create custom document root
- create custom page
- configure site
- validate config
- enable at boot
- add firewall rule
- verify with `curl`

## Lab 2: SSH between two VMs

Requirements:

- server VM runs OpenSSH
- client connects by password first
- create Ed25519 key
- copy key
- verify key login
- create `~/.ssh/config` alias
- copy a file using SCP
- sync directory using rsync

## Lab 3: systemd service

Write a script that logs date/time every 30 seconds.

Create a service with:

- dedicated working directory
- restart behavior
- log inspection through `journalctl`

Practice:

```text
start stop restart enable disable status
```

## Lab 4: systemd timer

Create a oneshot service that records disk usage.

Create a timer that runs every 15 minutes.

Verify:

```bash
systemctl list-timers
journalctl -u YOUR_SERVICE
```

## Lab 5: Persistent storage

Attach a second virtual disk.

Tasks:

- identify correct disk
- create partition
- format ext4
- mount at `/srv/data`
- use UUID in fstab
- test `mount -a`
- reboot
- verify

## Lab 6: Backup

Backup a project using rsync.

Requirements:

- dry run first
- exclude `node_modules`
- log output
- use checksum on critical archive/file
- delete original test copy
- restore it

## Lab 7: Firewall

On a server VM:

- allow SSH
- enable UFW
- allow Nginx
- deny an unused test port
- verify from another VM

Never perform this lab on a remote machine unless you have recovery access.

## Lab 8: DNS troubleshooting

Break DNS on a VM intentionally while retaining IP connectivity.

Prove:

```text
ping external IP works
hostname lookup fails
```

Then diagnose and restore resolver configuration.

---

# 58. Advanced Labs

## Lab 1: Three-tier application

Build:

```text
Client
  ↓
Nginx reverse proxy
  ↓
Application systemd service
  ↓
Database
```

Requirements:

- application runs as dedicated non-root user
- backend listens only on loopback/private address as appropriate
- Nginx exposes required HTTP/HTTPS ports
- firewall allows minimum ports
- logs are readable
- backup is scheduled
- restore is documented

## Lab 2: SSH hardening

Disposable VM only.

Tasks:

- create admin account
- configure key login
- verify sudo
- restrict direct root login
- validate `sshd` configuration
- restrict firewall source
- test second SSH session before closing first

## Lab 3: Recovery from bad fstab

In a VM snapshot:

- create a deliberately bad non-critical fstab entry
- reboot
- observe emergency/recovery behavior
- inspect journal
- fix fstab
- use `mount -a`
- verify normal boot

## Lab 4: LVM expansion

Attach second virtual disk.

Build:

```text
PV → VG → LV → ext4 → /srv/appdata
```

Then extend the LV and filesystem.

Document every command and verification output.

## Lab 5: Performance incident

Generate controlled load in a disposable VM and distinguish:

- CPU saturation
- memory pressure
- I/O pressure

Use:

```text
top free vmstat iostat journalctl
```

## Lab 6: Containerized web service

Create:

- Dockerfile
- image
- container
- port mapping
- named volume
- Compose file

Observe:

```bash
docker ps
docker inspect CONTAINER
ss -ltnp
```

Explain how host and container networking differ.

## Lab 7: Failure-only troubleshooting

Create a systemd service with one hidden mistake such as:

- bad working directory
- nonexistent executable
- wrong user permissions
- occupied port

Have another learner diagnose it only using:

```text
systemctl status
journalctl
ss
ls/namei
```

## Lab 8: Backup disaster drill

Create a sample application containing:

- config
- uploaded files
- database dump

Simulate deletion and restore the entire app into a fresh VM.

Document recovery time.

---

# 59. Linux Interview and Revision Questions

Use these for self-testing. Do not memorize one-line answers; explain each concept in your own words.

The concise answer key below makes the section useful without requiring navigation elsewhere. Each answer gives the minimum complete idea; in an interview, add a safe command or practical example when relevant.

## Fundamentals

1. What is Linux?
2. Kernel vs distribution?
3. Ubuntu vs Linux Mint?
4. What is a shell?
5. Bash vs terminal emulator?
6. What is PID 1?
7. What is a daemon/service?
8. User space vs kernel space?
9. What is a system call?
10. What is a package repository?

## Filesystem

11. What is `/`?
12. Difference between `/` and `/root`?
13. Purpose of `/etc`?
14. Purpose of `/var`?
15. Purpose of `/proc`?
16. Purpose of `/dev`?
17. Absolute vs relative path?
18. Hard link vs symlink?
19. Partition vs filesystem?
20. What does mounting mean?

## Permissions

21. Explain owner/group/others.
22. What does `chmod 755` mean?
23. `chmod 644`?
24. `chmod 600`?
25. Directory `x` permission?
26. What does `chown` do?
27. What is umask?
28. What is an ACL?
29. What is sticky bit?
30. Why use SGID on team directories?
31. What is SUID and why is it security-sensitive?

## Packages

32. `apt update` vs `apt upgrade`?
33. APT vs dpkg?
34. Why are random PPAs risky?
35. What is a `.deb`?
36. APT vs Snap vs Flatpak at a high level?

## Processes/systemd

37. Program vs process?
38. PID vs PPID?
39. SIGTERM vs SIGKILL?
40. Foreground vs background job?
41. `systemctl start` vs `enable`?
42. `restart` vs `reload`?
43. What is a systemd unit?
44. Service vs timer unit?
45. How do you find failed services?
46. How do you inspect a service's logs?

## Storage

47. GPT vs MBR?
48. UEFI vs BIOS?
49. What is the EFI System Partition?
50. What is `/etc/fstab`?
51. Why mount by UUID?
52. `df` vs `du`?
53. What are inodes?
54. What is swap?
55. What is LVM?
56. Explain PV/VG/LV.
57. Why is RAID not backup?

## Networking

58. IP vs MAC?
59. What is a subnet?
60. What is CIDR `/24`?
61. What is a default gateway?
62. What is DNS?
63. What is DHCP?
64. TCP vs UDP?
65. What is a port?
66. What is a listening socket?
67. How do you list IP addresses?
68. How do you list routes?
69. How do you list listening TCP ports?
70. How can you separate DNS failure from internet failure?

## SSH/security

71. What is SSH?
72. Public key vs private key?
73. What does `known_hosts` do?
74. SCP vs SFTP vs rsync?
75. What is SSH port forwarding?
76. What is least privilege?
77. Why avoid root application processes?
78. What does a firewall protect?
79. What is AppArmor?
80. Why test `sshd -t` before reload?

## Advanced

81. Explain Linux boot sequence.
82. What is initramfs?
83. What is GRUB?
84. What are kernel modules?
85. What are namespaces?
86. What are cgroups?
87. Container vs VM?
88. What causes a 502 from a reverse proxy?
89. Why can `df` show full space after a large file was deleted?
90. Why might a cron job fail while the command works manually?
91. Why might an app work on localhost but not remotely?
92. What is load average?
93. How do you diagnose OOM kills?
94. Snapshot vs backup?
95. RPO vs RTO?

## Concise Answer Key

### Fundamentals

1. Linux is the kernel; in everyday speech it also means a distribution built around that kernel.
2. The kernel manages hardware and system resources. A distribution combines it with user-space tools, packages, defaults, repositories, and a support lifecycle.
3. Ubuntu targets desktop, server, cloud, and enterprise uses; Mint is Ubuntu-based and desktop-focused, with Cinnamon as its flagship experience.
4. A shell is a command interpreter and scripting environment.
5. Bash interprets commands; a terminal emulator is the window or interface carrying text input/output to a shell.
6. PID 1 is the first user-space process and service reaper/manager; on these systems it is normally systemd.
7. A daemon is a background process; a service is the managed function or unit that commonly runs one or more processes.
8. Kernel space executes privileged kernel code; user space contains applications and services with isolation and limited privilege.
9. A system call is a controlled request from user space to the kernel, such as opening a file or creating a process.
10. A repository distributes packages plus metadata and signatures for a package manager.

### Filesystem

11. `/` is the top of the single filesystem tree and the root filesystem's mount point.
12. `/` is filesystem root; `/root` is the UID 0 user's home directory.
13. `/etc` contains host and application configuration.
14. `/var` contains changing data such as logs, caches, queues, databases, and service state.
15. `/proc` is a virtual interface exposing process and kernel state.
16. `/dev` contains device nodes and special interfaces such as `/dev/null`.
17. An absolute path begins at `/`; a relative path is resolved from the current working directory.
18. A hard link is another name for the same inode on one filesystem; a symlink stores a path and can cross filesystems.
19. A partition is a disk region; a filesystem is the structure placed on storage to organize files.
20. Mounting attaches a filesystem to a directory in the existing tree.

### Permissions

21. Owner, group, and others are the three basic access classes evaluated against `r`, `w`, and `x` mode bits.
22. `755` means owner `rwx`, group `r-x`, others `r-x`.
23. `644` means owner `rw-`, group `r--`, others `r--`.
24. `600` means owner read/write only.
25. Directory `x` permits traversal and access to known entries; without it, a readable child file may still be inaccessible.
26. `chown` changes a file or directory's owner and optionally group.
27. A umask clears permission bits from the initial mode requested for newly created entries.
28. An ACL adds named user/group permissions beyond one owner, one group, and others; its mask can limit effective rights.
29. On a shared writable directory, the sticky bit normally limits removal/renaming to an entry's owner, directory owner, or privileged user.
30. Directory SGID makes new entries inherit the directory's group, simplifying team collaboration.
31. SUID can make an executable run with its owner's effective UID, so flaws may become privilege-escalation paths.

### Packages

32. `apt update` refreshes repository indexes; `apt upgrade` installs available upgrades allowed by its dependency rules.
33. APT resolves dependencies and repositories; `dpkg` is the lower-level DEB database/install tool.
34. A PPA is a third-party trust and update source whose packages can replace system components and run privileged maintainer scripts.
35. A `.deb` is a Debian-family binary package archive plus metadata and installation scripts.
36. APT manages distribution DEBs; Snap and Flatpak bundle applications with different sandboxing, runtime, and update models.

### Processes and systemd

37. A program is stored executable code; a process is one running instance with a PID and resources.
38. PID identifies a process; PPID identifies its parent.
39. SIGTERM requests graceful shutdown and can be handled; SIGKILL stops a process immediately and cannot be handled.
40. A foreground job owns the terminal interaction; a background job runs without controlling the prompt, though it may still use the terminal's streams.
41. `start` activates now; `enable` configures activation at future boots or dependency events.
42. `restart` stops and starts; `reload` asks a supporting service to reread configuration without a full stop.
43. A systemd unit is a managed resource definition such as a service, socket, timer, mount, or target.
44. A service unit describes work to run; a timer unit schedules activation, usually of a service.
45. Use `systemctl --failed`.
46. Use `journalctl -u SERVICE`, optionally with `-b`, time filters, or `-f`.

### Storage

47. MBR is the older partition-table format with legacy limitations; GPT is modern, redundant, and supports large disks/many entries.
48. BIOS is legacy firmware; UEFI is the modern firmware interface that commonly boots from an EFI System Partition.
49. The ESP is a small FAT filesystem holding UEFI boot executables and related files.
50. `/etc/fstab` declares filesystem sources, mount points, types, options, and boot/check behavior.
51. UUIDs are stable filesystem identifiers, unlike device names that can change with discovery order.
52. `df` reports filesystem allocation; `du` totals reachable directory entries, so deleted-open files can make them differ.
53. Inodes hold filesystem metadata and block references; directories map names to inode numbers.
54. Swap is disk-backed memory used by the kernel under pressure and for some hibernation designs; it is slower than RAM.
55. LVM is a flexible storage abstraction that allocates logical volumes from pooled physical storage.
56. A PV is LVM-backed storage, a VG pools PVs, and an LV is allocated from a VG for a filesystem or other consumer.
57. RAID may improve availability or performance, but it does not protect against deletion, corruption, ransomware, or site loss.

### Networking

58. An IP address identifies a network-layer endpoint; a MAC address identifies a link-layer interface on a local segment.
59. A subnet is a range sharing a network prefix and local routing boundary.
60. `/24` means the first 24 IPv4 bits are the network prefix, equivalent to mask `255.255.255.0`.
61. The default gateway is the next-hop router used when no more-specific route matches.
62. DNS maps names to records such as addresses, mail exchangers, and service data.
63. DHCP supplies configuration such as address, prefix, gateway, DNS, and lease time.
64. TCP is connection-oriented and provides ordered reliable delivery; UDP sends independent datagrams with lower protocol overhead and no delivery guarantee.
65. A port is a 16-bit TCP/UDP endpoint number used with an address and protocol.
66. A listening socket waits for incoming connection requests or datagrams on a local address/port.
67. Use `ip -br address` or `ip address`.
68. Use `ip route`.
69. Use `ss -ltnp`; process details may require privilege.
70. Test an external IP first, then compare `getent hosts NAME` or `dig NAME`; IP success with name failure points toward DNS.

### SSH and security

71. SSH is an encrypted protocol for remote login, command execution, forwarding, and file-transfer subsystems.
72. The public key can be installed on servers; the private key proves identity and must remain secret.
73. `known_hosts` records server host keys so SSH can detect unexpected identity changes.
74. SCP copies paths, SFTP offers an interactive file protocol, and rsync efficiently synchronizes trees and changed data.
75. Port forwarding carries another TCP connection through an encrypted SSH session, locally, remotely, or dynamically.
76. Least privilege grants only the access needed for a task and no more.
77. A root application turns many application flaws into complete host compromise; a dedicated account limits impact.
78. A host firewall permits, rejects, or drops network traffic according to address, protocol, port, state, and policy; it does not secure an unsafe application by itself.
79. AppArmor is path/profile-based mandatory access control that limits what confined programs may do beyond Unix mode permissions.
80. `sshd -t` detects configuration syntax/semantic errors before a reload can lock out remote access.

### Advanced

81. Typical boot is firmware → bootloader → kernel/initramfs → real root filesystem → systemd/PID 1 → services/login.
82. initramfs is an early temporary userspace containing drivers and tools needed to reach the real root filesystem.
83. GRUB is a bootloader that selects and loads a kernel/initramfs and passes the kernel command line.
84. Kernel modules are loadable kernel components, commonly drivers or filesystem/network features.
85. Namespaces give processes isolated views of resources such as PIDs, mounts, networks, users, IPC, and hostnames.
86. Cgroups group processes to account for and control CPU, memory, I/O, and process resources.
87. Containers share the host kernel while isolating processes; VMs emulate/virtualize hardware and run separate guest kernels.
88. A 502 commonly means the reverse proxy could not obtain a valid response from its configured upstream because of service, address, port, protocol, timeout, or permission issues.
89. A deleted file's blocks remain allocated while a process keeps its inode open; find such files with `sudo lsof +L1`.
90. Cron has a minimal environment, different working directory, noninteractive input, and schedule/time context; use absolute paths and capture output.
91. The app may bind only to loopback, or a firewall, route, NAT, security group, or address-family mismatch may block remote access.
92. Load average summarizes runnable and uninterruptible tasks over roughly 1, 5, and 15 minutes; interpret it with CPU count and I/O state.
93. Search the kernel journal for OOM records, identify the killed process and memory pressure source, then fix limits, leaks, sizing, or workload—not just the symptom.
94. A snapshot is usually a fast point-in-time state tied to its storage; a backup is an independent retained copy designed for restoration after original-system loss.
95. RPO is the acceptable data-loss window; RTO is the acceptable recovery-duration target.

---

# 60. Essential Command Cheat Sheet

## System identity

```bash
hostname
hostnamectl
uname -a
cat /etc/os-release
uptime
date
timedatectl
```

## Navigation

```bash
pwd
ls
ls -lah
cd PATH
cd ..
cd ~
cd -
```

## Files

```bash
touch FILE
mkdir DIR
mkdir -p A/B/C
cp SRC DST
cp -a SRC DST
mv SRC DST
rm FILE
rm -r DIR
ln -s TARGET LINK
stat FILE
file FILE
```

## Text

```bash
cat FILE
less FILE
head FILE
tail FILE
tail -f FILE
nano FILE
vim FILE
```

## Search/process text

```bash
grep PATTERN FILE
grep -R PATTERN DIR
find DIR -name PATTERN
sort FILE
uniq
wc
cut
tr
sed
awk
```

## Streams

```bash
command > out.txt
command >> out.txt
command 2> error.txt
command > all.txt 2>&1
command1 | command2
command | tee file.txt
```

## Users/groups

```bash
whoami
id
who
w
sudo adduser USER
sudo passwd USER
sudo usermod -aG GROUP USER
groups USER
```

## Permissions

```bash
ls -l
chmod MODE FILE
chown USER:GROUP FILE
chgrp GROUP FILE
umask
getfacl FILE
setfacl ...
```

## Packages

```bash
sudo apt update
sudo apt upgrade
sudo apt install PACKAGE
sudo apt remove PACKAGE
sudo apt purge PACKAGE
sudo apt autoremove
apt search PACKAGE
apt show PACKAGE
dpkg -L PACKAGE
dpkg -S PATH
```

## Processes

```bash
ps aux
pgrep -af NAME
top
htop
kill PID
pkill NAME
jobs
bg
fg
nice
renice
```

## systemd

```bash
systemctl status SERVICE
sudo systemctl start SERVICE
sudo systemctl stop SERVICE
sudo systemctl restart SERVICE
sudo systemctl reload SERVICE
sudo systemctl enable SERVICE
sudo systemctl disable SERVICE
systemctl --failed
systemctl cat SERVICE
```

## Logs

```bash
journalctl
journalctl -b
journalctl -b -1
journalctl -u SERVICE
journalctl -f
journalctl -p err
journalctl -k
dmesg
```

## Storage

```bash
lsblk
lsblk -f
blkid
df -h
df -i
du -sh PATH
findmnt
mount
umount
sudo fdisk -l
sudo parted -l
swapon --show
sudo pvs
sudo vgs
sudo lvs
```

## Networking

```bash
ip addr
ip -br addr
ip link
ip route
ping HOST
ss -lntup
nmcli device
nmcli connection show
getent hosts NAME
dig NAME
curl URL
wget URL
```

## SSH/filesync

```bash
ssh USER@HOST
ssh -vvv USER@HOST
ssh-keygen -t ed25519
ssh-copy-id USER@HOST
scp FILE USER@HOST:/PATH/
sftp USER@HOST
rsync -av SOURCE DEST
```

## Firewall

```bash
sudo ufw status verbose
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo nft list ruleset
```

## Archives/checksums

```bash
tar -czf ARCHIVE.tar.gz DIR
tar -xzf ARCHIVE.tar.gz
zip -r ARCHIVE.zip DIR
unzip ARCHIVE.zip
sha256sum FILE
```

## Hardware

```bash
lscpu
free -h
lspci
lspci -k
lsusb
lsmod
modinfo MODULE
sudo lshw -short
rfkill list
```

## Developer/debug

```bash
command -v COMMAND
type COMMAND
ldd BINARY
strace COMMAND
git --version
python3 --version
gcc --version
```

---

# 61. Linux Troubleshooting Cheat Sheet

## Service down

```bash
systemctl status SERVICE
journalctl -u SERVICE -b
systemctl cat SERVICE
```

## Config validation

```bash
sudo nginx -t
sudo apache2ctl configtest
sudo sshd -t
```

Use the tool appropriate to your service.

## Port problem

```bash
ss -ltnp
sudo lsof -iTCP:PORT -sTCP:LISTEN
```

## Disk full

```bash
df -h
df -i
sudo du -xhd1 /var
sudo lsof +L1
```

## Memory

```bash
free -h
top
vmstat 1
journalctl -k | grep -i oom
```

## CPU

```bash
uptime
top
ps aux --sort=-%cpu | head
```

## I/O

```bash
iostat -xz 1
vmstat 1
```

## Network

```bash
ip -br addr
ip route
ping GATEWAY
ping 1.1.1.1
getent hosts example.com
ss -s
```

## DNS

```bash
getent hosts example.com
dig example.com
cat /etc/resolv.conf
resolvectl status
```

## SSH server

```bash
systemctl status ssh
ss -ltnp | grep ':22'
sudo ufw status
journalctl -u ssh
```

Client:

```bash
ssh -vvv user@host
```

## Boot

```bash
systemctl --failed
journalctl -xb
journalctl -b -1
dmesg -T
cat /etc/fstab
```

## Packages

```bash
sudo apt update
sudo apt --fix-broken install
sudo dpkg --configure -a
dpkg --audit
apt-mark showhold
```

## Permissions

```bash
id
ls -l PATH
namei -l /full/path
getfacl PATH
```

## Hardware

```bash
lspci -k
lsusb
rfkill list
journalctl -k -b
```

## Decision tree: website unavailable

```text
Can DNS resolve the hostname?
  ├─ No → DNS investigation
  └─ Yes
      ↓
Can client reach TCP 80/443?
  ├─ No → routing/firewall/listener
  └─ Yes
      ↓
Does web server return HTTP response?
  ├─ No → service/config/TLS
  └─ Yes
      ↓
Is response 502/503?
  ├─ Yes → backend/upstream
  └─ No → application/content issue
```

## Decision tree: no internet

```text
Interface up/address present?
  ├─ No → link/driver/DHCP
  └─ Yes
      ↓
Default route exists?
  ├─ No → gateway/routing
  └─ Yes
      ↓
Gateway reachable?
  ├─ No → LAN/VLAN/Wi-Fi/router
  └─ Yes
      ↓
External IP reachable?
  ├─ No → upstream/NAT/firewall
  └─ Yes
      ↓
Hostname resolves?
  ├─ No → DNS
  └─ Yes → investigate application/proxy/VPN
```

---

# 62. 90-Day Learning Roadmap

## Days 1-7 — Linux fundamentals

Learn:

- kernel vs distro
- Ubuntu vs Mint
- terminal and shell
- paths
- filesystem hierarchy
- manual/help system

Practice daily:

```text
pwd ls cd mkdir touch cp mv rm cat less man
```

## Days 8-14 — Text processing

Learn:

```text
grep find sort uniq wc cut tr sed awk
```

Mini-project:

Analyze a sample web log and answer:

- top IPs
- count errors
- matching URLs
- number of requests

## Days 15-21 — Permissions and identities

Learn:

- users/groups
- UID/GID
- sudo
- chmod
- chown
- umask
- ACL
- SGID/sticky bit

Project:

Build a secure shared team directory.

## Days 22-30 — Packages/processes/systemd

Learn:

- APT/dpkg
- processes
- signals
- jobs
- services
- journal

Project:

Install Nginx and manage it entirely from terminal.

## Days 31-40 — Networking

Learn:

- IP
- subnet
- gateway
- routing
- DNS
- TCP/UDP
- ports
- NetworkManager
- Netplan concepts

Project:

Create a two-VM client/server lab.

## Days 41-50 — SSH and remote administration

Learn:

- SSH keys
- config aliases
- SCP
- SFTP
- rsync
- tunneling

Project:

Administer a VM only over SSH.

## Days 51-60 — Storage

Learn:

- partitions
- filesystems
- mount
- fstab
- swap
- LVM
- disk/inode monitoring

Project:

Add and expand a virtual data disk.

## Days 61-70 — Bash automation

Learn:

- variables
- arguments
- conditionals
- loops
- functions
- exit codes
- traps
- `set` options
- cron/systemd timers

Project:

Write a health-check + backup script.

## Days 71-80 — Security and troubleshooting

Learn:

- UFW
- SSH hardening
- AppArmor
- least privilege
- log-based diagnosis
- backup/recovery

Project:

Harden a disposable Ubuntu Server VM.

## Days 81-90 — Server/DevOps foundation

Learn:

- Nginx/Apache
- database service basics
- Docker/container concepts
- performance analysis
- systemd deployment
- recovery drills

Final project:

```text
Ubuntu Server VM
  ├── hardened SSH
  ├── UFW
  ├── Nginx
  ├── non-root application service
  ├── private database
  ├── automated backup
  ├── systemd timer
  ├── diagnostic script
  └── recovery runbook
```

## After 90 days

Choose a specialization:

### Linux System Administration

Go deeper into:

- filesystems
- LVM/RAID
- identity
- PAM
- advanced systemd
- NFS/Samba
- DNS/DHCP
- enterprise patching
- monitoring

### DevOps/SRE

Go deeper into:

- Git
- CI/CD
- Docker
- Kubernetes
- Terraform
- Ansible
- cloud Linux
- observability
- incident management

### Security

Go deeper into:

- hardening
- auditd
- AppArmor
- network security
- cryptography/TLS
- vulnerability management
- forensics
- secure baselines

### Development

Go deeper into:

- compilers/toolchains
- debugging
- processes/IPC
- sockets
- containers
- system calls
- performance profiling

---

# 63. Glossary

**ACL** — Access Control List; additional per-user/group permissions beyond basic owner/group/others.

**APT** — High-level package management used by Ubuntu and Ubuntu-based Mint.

**AppArmor** — Mandatory access-control framework used prominently on Ubuntu.

**Bash** — Common shell and scripting language.

**BIOS** — Older PC firmware model.

**Bootloader** — Software that loads the operating-system kernel.

**Cgroup** — Kernel feature for accounting/controlling resources of process groups.

**Cinnamon** — Linux Mint's flagship desktop environment.

**CLI** — Command-Line Interface.

**Container** — Isolated process environment that shares the host kernel.

**Daemon** — Background service process.

**Deb / `.deb`** — Debian package format used by Ubuntu/Mint.

**Desktop Environment** — Integrated graphical desktop including compositor/window manager, panel, settings, etc.

**Device node** — Special filesystem entry, commonly under `/dev`, representing a kernel/device interface.

**DHCP** — Protocol that automatically supplies network configuration such as IP, gateway, and DNS.

**DNS** — Domain Name System; resolves names to IP addresses and stores other domain records.

**Environment variable** — Named value inherited by child processes.

**ext4** — Common Linux filesystem.

**Filesystem** — Data structure used to store/organize files and directories.

**Flatpak** — Desktop-focused application packaging/distribution technology.

**FQDN** — Fully Qualified Domain Name.

**Gateway** — Router used to reach other networks.

**GID** — Group identifier.

**GNOME** — Desktop environment forming the basis of Ubuntu Desktop's default experience.

**GPT** — GUID Partition Table; modern partition table format.

**GRUB** — Common Linux bootloader.

**GUI** — Graphical User Interface.

**Hard link** — Another directory entry referring to the same filesystem inode.

**Initramfs** — Initial RAM filesystem used during early boot.

**Inode** — Filesystem object storing metadata/pointers for a file; directory names reference inodes.

**IP address** — Network-layer address for an interface/host.

**Kernel** — Core operating-system component managing hardware/resources.

**LTS** — Long Term Support release.

**LVM** — Logical Volume Manager.

**MAC address** — Link-layer network-interface address.

**Mount** — Attach a filesystem to a directory in the Linux filesystem tree.

**Namespace** — Kernel isolation mechanism used heavily by containers.

**NAT** — Network Address Translation.

**Package repository** — Server/source from which package manager retrieves signed packages and metadata.

**PID** — Process ID.

**Pipe** — Connect stdout of one command to stdin of another.

**Port** — TCP/UDP number identifying a network service endpoint.

**Process** — Running program instance.

**RAID** — Technique combining multiple disks for capacity/performance/redundancy.

**Root** — Depending on context, the UID 0 superuser or the `/` filesystem root.

**Shell** — Command interpreter such as Bash.

**Snap** — Application packaging/distribution system used prominently by Ubuntu.

**Socket** — OS object used for communication, often network or Unix-domain IPC.

**SSH** — Secure Shell protocol for encrypted remote administration and tunneling.

**sudo** — Execute an authorized command as another user, commonly root.

**Symbolic link** — Special file containing a path reference to another path.

**systemd** — Init/service management suite used by modern Ubuntu and Mint.

**TCP** — Reliable connection-oriented transport protocol.

**TTY** — Terminal device/virtual console concept.

**UDP** — Connectionless transport protocol.

**UEFI** — Modern firmware interface replacing legacy BIOS on most PCs.

**UFW** — Uncomplicated Firewall; convenient Ubuntu firewall frontend.

**UID** — User identifier.

**VM** — Virtual Machine with virtual hardware and its own guest kernel.

**Wayland** — Modern Linux desktop display protocol/architecture.

**X11/Xorg** — Traditional Unix/Linux graphical display system.

---

# 64. Recommended Official References

This handbook is designed to teach concepts. For release-specific, security-sensitive, or destructive operations, always check the official documentation for your installed release.

## Ubuntu

- [Ubuntu Documentation](https://documentation.ubuntu.com/)
- [Ubuntu Server Documentation](https://documentation.ubuntu.com/server/)
- [Ubuntu Security Documentation](https://documentation.ubuntu.com/security/)
- [Ubuntu release cycle](https://ubuntu.com/about/release-cycle)
- [Ubuntu release notes](https://documentation.ubuntu.com/release-notes/)
- [Ubuntu packages](https://packages.ubuntu.com/)

## Linux Mint

- [Linux Mint](https://linuxmint.com/)
- [Linux Mint Documentation](https://linuxmint.com/documentation.php)
- [Installation Guide](https://linuxmint-installation-guide.readthedocs.io/)
- [User Guide](https://linuxmint-user-guide.readthedocs.io/)
- [Troubleshooting Guide](https://linuxmint-troubleshooting-guide.readthedocs.io/)
- [Linux Mint Forums](https://forums.linuxmint.com/)

## Local documentation on your own machine

Your installed system contains documentation that exactly matches many installed commands:

```bash
man COMMAND
COMMAND --help
info COMMAND
apropos KEYWORD
```

Excellent manual pages to study:

```bash
man bash
man systemctl
man systemd.service
man systemd.timer
man journalctl
man fstab
man mount
man ssh
man ssh_config
man sshd_config
man sudoers
man chmod
man find
man grep
man rsync
```

---

# Final Mastery Checklist

You are becoming comfortable with Ubuntu/Linux Mint when you can do the following without blindly copying commands:

- [ ] Explain kernel vs distro vs shell.
- [ ] Install Linux safely in a VM.
- [ ] Explain UEFI, GPT, partitions, root filesystem, and swap.
- [ ] Navigate the filesystem confidently.
- [ ] Explain important directories under `/`.
- [ ] Create, copy, move, link, and safely delete files.
- [ ] Use `grep`, `find`, `sed`, and `awk` for real work.
- [ ] Use pipes and redirection correctly.
- [ ] Create/manage users and groups.
- [ ] Explain `755`, `644`, `600`, and directory permissions.
- [ ] Use SGID/ACL for shared directories.
- [ ] Install/remove/debug packages with APT.
- [ ] Find and manage processes and signals.
- [ ] Create/manage systemd services.
- [ ] Read journal/service logs.
- [ ] Configure environment variables and PATH.
- [ ] Create/extract archives and verify checksums.
- [ ] Identify disks, partitions, and filesystems.
- [ ] Mount filesystems manually and through fstab.
- [ ] Explain swap, LVM, and RAID.
- [ ] Diagnose disk-full and inode-full problems.
- [ ] Explain IP, subnet, gateway, DNS, TCP, UDP, and ports.
- [ ] Diagnose network connectivity layer by layer.
- [ ] Use NetworkManager/nmcli.
- [ ] Understand Netplan on Ubuntu Server.
- [ ] Use SSH keys, SCP, SFTP, and rsync.
- [ ] Configure basic UFW rules safely.
- [ ] Explain least privilege and basic hardening.
- [ ] Understand AppArmor's purpose.
- [ ] Create cron jobs or systemd timers.
- [ ] Write Bash scripts with arguments, conditions, loops, functions, traps, and exit codes.
- [ ] Identify hardware and kernel modules.
- [ ] Troubleshoot Wi-Fi/audio/drivers methodically.
- [ ] Explain X11 vs Wayland at a high level.
- [ ] Configure and diagnose a web server.
- [ ] Understand Linux database-service basics.
- [ ] Explain containers vs VMs.
- [ ] Design and restore backups.
- [ ] Read CPU, memory, disk, I/O, and network performance indicators.
- [ ] Recover a broken VM using logs/recovery/live media.
- [ ] Document root cause and prevention after an incident.

---

# Closing Mental Model

Linux mastery does not mean knowing every command.

It means understanding how the major pieces relate:

```text
User
  ↓
Shell / GUI
  ↓
Processes and services
  ↓
Files + permissions + configuration
  ↓
Libraries and system calls
  ↓
Kernel
  ↓
CPU / memory / disks / devices / network
```

And using a repeatable troubleshooting loop:

```text
Observe
  ↓
Define the symptom
  ↓
Collect evidence
  ↓
Form a hypothesis
  ↓
Run the smallest safe test
  ↓
Fix the root cause
  ↓
Verify
  ↓
Document
```

When you do not know a command, do not guess blindly. Ask the system:

```bash
man command
command --help
apropos topic
```

Then test in a safe environment.

The strongest Linux administrators are not those who memorize the most commands. They understand **files, permissions, processes, services, storage, networking, logs, security, and the relationships between them**.
