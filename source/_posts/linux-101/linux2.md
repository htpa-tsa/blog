---
title: "Linux 101.2: The Terminal"
date: 2022-09-25 10:00:01
categories:
- linux-101
permalink: /linux-101/02/
cover_image: /asset/linux-101/thumbnail-2.jpg
---

Always remember: Although the terminal of a completely foreign operating system may sound really intimidating at first, there are only a couple commands that you need to fully memorize!

### Getting a Shell

To start, let's get a shell running on your computer.

For Windows users, you can do this with "Windows Subsystem for Linux". Download [Ubuntu](https://apps.microsoft.com/store/detail/ubuntu/9PDXGNCFSCZV) from the Microsoft Store. Once installed, you can open it like any other app through the Start menu by typing "Ubuntu".

On your first open of Ubuntu, you will be prompted to create a username and password. This is the same as creating a new account on your computer. Once you have created your account, you will be taken to a shell prompt:

<figure>
    <img src="/asset/linux-101/ubuntu.png" alt="WSL Session">
    <figcaption>WSL Session</figcaption>
</figure>

(Optional) Once you've installed Ubuntu, download the [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) app (which is also available in the Microsoft Store). This is a much more powerful terminal app that allows you to run multiple shells at once. To run it, open the Start menu and type "Terminal". Then, hover over the dropdown menu next to the "New Tab" button and select "Ubuntu":

<figure>
    <img src="/asset/linux-101/new-terminal.png" alt="Opening Ubuntu Session">
    <figcaption>Opening Ubuntu Session</figcaption>
</figure>

If you want to set Ubuntu as your default shell, you can press <kbd>Ctrl</kbd> + <kbd>,</kbd> to open the Settings tab. Scroll over to "Startup" and select "Ubuntu" from the dropdown menu for "Default profile":

<figure>
    <img src="/asset/linux-101/default-profile.png" alt="Setting Ubuntu as Default Shell">
    <figcaption>Setting Ubuntu as Default Shell</figcaption>
</figure>

You should be getting an odd textbox that looks like this:

```bash
user@host:~$ █
```

All this gibberish is called a **prompt**. Let's break this down:

- `user`: Indicates the user you logged in with.
- `host`: The name of your Linux system (or computer on WSL).
- `~`: Indicates the **home directory**, which is the default **present working directory** of Linux distros (we'll talk about this shortly). This will change depending on your PWD (ex. `/home`).
- `$`: Indicates user type. Regular users are indicated with a dollar sign (`$`), whilst an administrator/superuser is indicated with a hash (`#`).

Note: Not all distros have this format. Some are formatted like `[user@host ~]$` or `(user@host)-[~]$`, and some could just be a `user$`.

### Your First Command

Let’s run our first command:

```bash
user@host:~$ pwd
/home/yourusername
```

The `pwd` command stands for “present working directory”, and it's basically asking the system: "where the hell am I?". The **directory** is simply the path of files and folders. In this case, the system is telling us that we are in the `/home/yourusername` directory.

Let's break down `/home/yourusername`:

- `/`: This is the **root directory**. It's the top-most directory of the file system, and where all of the important files are stored. It's like the "root" of a tree (in Windows terms, it's like `C:\`).
- `home`: This is the **home directory**. It's where all user accounts are stored.
- `yourusername`: This is your **user directory**. It's where all your personal files are stored, like the `Desktop/` and `Downloads/` folder.

If a command has finished running, it will create a newline and the prompt will come back:

```bash
user@host:~$ pwd
/home/yourusername
user@host:~$ █
```

This is perfectly normal. However, sometimes a command will do this:

```bash
user@host:~$ nc 10.0.0.1
‎
‎
‎
```

This state is called a "hung" or "frozen" terminal. To interrupt or exit the operation, press `Ctrl + C` or `Delete`.

Note that although your commands may run, they may not always return an output. For example, creating a file with `touch` executes perfectly fine, but doesn't tell the user that it has succeeded; it will only return **errors**. 

Always be careful when executing code. **Never paste code you don't understand into the terminal.**

### The Anatomy of a Command

A single command will usually look like this:

```bash
command [FLAGS] [ARGUMENTS]
```

If you want to run a command with an argument, just add a space after the command name and type the argument. For example, to create a file called `test.txt`, you can run:

```bash
user@host:~$ touch test.txt
```

There are two types of commands:

1. **Built-in commands**: A name which is associated with a software pre-installed into your environment.
2. **External commands**: The command is either a pre-defined name by the operating system, or a custom one installed by other software. When you want your terminal to run custom software like `nmap`, you could type `nmap` to run it, which wouldn’t be possible without it installed.

### Flags

**Flags** are additional user-inputted parameters which explain to the system how you want the program to run.

If you want to run a command with both an argument and a flag, just add a space after the command name and type the flag. For example, to create a file called `test.txt` and make it hidden, you can run:

```bash
user@host:~$ touch -h test.txt
```

Be careful when typing flags, as there is a difference between a single dash and double dash! A single dash means the flag is **single-character**, while a double dash means the flag is **multi-character**. If you typed `-flag` instead of `--flag` the terminal would read it as `-f -l -a -g`, which probably isn't good.

Note that single-letter flags are often shorthand for longer ones. For example, `ls -a` is the same thing as `ls --all`.

***

### Check-up

1. Where are all your personal files located?
2. What is Linux’s root directory? What's stored in there?
3. What is stored in the `/home` directory?
4. What is an argument?
5. What do flags do, and what is the difference between a single-dash and double-dash flag?
6. BONUS: What would happen if I tried to run the command  wireshark without the software “Wireshark” installed?
