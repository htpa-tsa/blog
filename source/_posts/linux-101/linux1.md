---
title: "Linux 101.1: About Linux"
date: 2022-09-08 10:00:00
categories:
- linux-101
permalink: /linux-101/01/
cover_image: /asset/linux-101/thumbnail-1.png
---

### What is Linux?

Linux is a family of **Unix-like operating systems** (essentially derived off of the “OG” Unix).  
Just for fun, here is a “family tree” of all the operating systems that have derived off of Unix:

![Linux family tree](/asset/linux-101/tree.png)

Linux is considered a family of operating systems because there are so many different **distros** (distributions, sometimes called “flavors”) of Linux. Each flavor has its own purpose and specialties, and almost all of them are derived from previous distros. The name of the distro we will be using is called **Kali**, and is a **downstream** distro of [Debian](https://www.debian.org/). Kali focuses on **digital forensics** and **penetration testing** (shortened to pen-testing for obvious reasons), which are two different disciplines of cybersecurity. There are hundreds of pre-installed software downloaded on Kali images, including but not limited to:

* **Nmap**: a network and port scanner
* **Wireshark**: network packet analyzer
* **John the Ripper**: password brute forcer
* **Metasploit**: vulns and pentesting
* **Burp Suite**: Security tests for web applications

Other distros of Linux include but are not limited to:

* Debian
* Ubuntu
* Arch
* Mint

### The Command-line Interface and Shell

![Kali's Terminal](/asset/linux-101/terminal.png)

<p align="center">
<sub>Kali's Terminal</sub>
</p>

The terminal is a **command-line interface** (in contrast to a graphical user interface, or GUI) that takes the user input and runs it through a **shell**. A shell is a software which allows both human users and other programs to interact with OS services. It is essentially the most important software in a UNIX-style OS. In most Linux flavors the default shell is titled **bash**, which is the most popular. However, the newer versions of Kali use **z-shell**, typically shortened to **zsh**. Think of this terminal as a line-by-line version of a file navigation/explorer:

![windows Explorer](/asset/linux-101/windows-explorer.png)

![Linux `ls` command](/asset/linux-101/linux-ls.png)

<p align="center">
<sub>Windows GUI File Explorer vs. Webshell CLI <code>ls -al</code> command</sub>
</p>

***

### Check-Up

1. Why is Linux considered a “family” of operating systems?
1. What are “flavors” of Linux?
1. Why is Kali considered a “downstream distro”?
1. What is a command-line interface, and what is the difference between a CLI and GUI?
1. What is a terminal?
1. What is a shell, and what are the differences between the terminal and shell?
1. What is a flavor? What thing do they all have in common?
1. BONUS: Is there a difference between a console and a terminal?
