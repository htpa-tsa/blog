---
title: "Linux 101.1: About Linux"
date: 2022-09-25 10:00:00
categories:
- blog
- linux-101
permalink: /blog/linux-101/01/
cover_image: /asset/linux-101/thumbnail-1.jpg
---

### What is Linux?

Linux is a family of **Unix-like operating systems** (essentially derived off of the “OG” Unix).  
Just for fun, here is a “family tree” of all the operating systems that have derived off of Unix:

![Linux family tree](/asset/linux-101/tree.png)

Linux is considered a family of operating systems because there are so many different **distros** (distributions, sometimes called “flavors”) of Linux. Each flavor has its own purpose and specialties, and almost all of them are derived from previous distros. 

Here are some examples of distributions:

* [Debian](https://www.debian.org/)
* [Ubuntu](https://ubuntu.com/)
* [Arch](https://archlinux.org/)
* [Mint](https://linuxmint.com/)

### The Command-line Interface and Shell

<figure>
    <img src="/asset/linux-101/terminal.png" alt="Ubuntu in Windows">
    <figcaption>Ubuntu in Windows</figcaption>
</figure>

The terminal is a **command-line interface** (in contrast to a graphical user interface, or GUI) that takes the user input and runs it through a **shell**. A shell is a software which allows both human users and other programs to interact with OS services. It is essentially the most important software in a UNIX-style OS. In most Linux flavors the default shell is called **bash** (Bourne-Again Shell), which is by the most popular shell. 

Think of a terminal as a line-by-line version of a file navigation/explorer. Here is an example of a GUI:

<figure>
    <img src="/asset/linux-101/windows-explorer.png" alt="Windows Explorer">
    <figcaption>Windows File Explorer</figcaption>
</figure>

Meanwhile, here is an example of a terminal session:

<figure>
    <img src="/asset/linux-101/linux-ls.png" alt="Linux ls command">
    <figcaption>Ubuntu Linux Session</figcaption>
</figure>

As you can see, both the GUI and the terminal are used to navigate files and folders. While you can point and click with a GUI, the terminal is command-based.

Although the terminal seems initially difficult, with use it can become much more powerful than a GUI. For example, you can use the terminal to run programs, install software, and even automate processes. For example, if you wanted to make a folder in a GUI, you would have to right-click on the parent folder, click “New”, and then click “Folder”. In the terminal, you can just type `mkdir foldername` and press enter:

<figure>
    <img src="/asset/linux-101/mkdir.png" alt="Linux mkdir command">
    <figcaption>Linux <code>mkdir</code> command</figcaption>
</figure>

***

### Check-Up

1. Why is Linux considered a “family” of operating systems?
2. What are “flavors” of Linux? What do they all have in common?
3. What is a command-line interface, and what is the difference between a CLI and GUI?
4. What is a terminal?
5. What is a shell, and what are the differences between the terminal and shell?
