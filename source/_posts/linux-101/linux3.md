---
title: "Linux 101.3: Command Cheatsheet"
date: 2022-09-25 10:00:02
categories:
- linux-101
permalink: /linux-101/03/
cover_image: /asset/linux-101/thumbnail-3.png
---

**Always remember**: If you have no idea how to use a command type either:

```bash
man command
command --help
```

### Essential Commands

Here are the most common and important commands that you should memorize if you want to use terminal and access the shell:

### echo

When used alone, this command will repeat your argument. 

```bash
user@host:~$ echo "Hello"
Hello
```

You can also `echo` variables:

```bash
user@host:~$ echo $USER
user
```

You can also `echo` "into" files with the `>` (redirect) operator, which will write your string into the file argued after the operator. Here, we'll create a file called `hello.txt`, write "Hello" into it, and then print the contents of the file with `cat`:

```bash
user@host:~$ echo "Hello" > hello.txt
user@host:~$ cat hello.txt
Hello
```

**Important**: Mind that `>` and `>>` are two different terminal operators. Using only `>` can remove all code/text from a file and replace it with your string. On the other hand, using `>>` appends your string to the end of the file.

---

### ls

`ls` lists the files within the current directory. To make ls more useful, refer to the `man` page and add the necessary flags. We'll use `-al` (a combination of `--all` and `-l`) to display all files (including hidden ones) and list them in a long format:

```bash
user@host:/$ ls -al
total 620
drwxr-xr-x  1 root root    512 Sep 24 22:39 .
drwxr-xr-x  1 root root    512 Sep 24 22:39 ..
lrwxrwxrwx  1 root root      7 Aug  9 23:56 bin -> usr/bin
drwxr-xr-x  1 root root    512 Aug 10 00:02 boot
drwxr-xr-x  1 root root    512 Sep 25 11:34 dev
drwxr-xr-x  1 root root    512 Sep 25 10:57 etc
drwxr-xr-x  1 root root    512 Sep 24 22:39 home
-rwxr-xr-x  1 root root 632096 Apr 14 19:15 init
lrwxrwxrwx  1 root root      7 Aug  9 23:56 lib -> usr/lib
lrwxrwxrwx  1 root root      9 Aug  9 23:56 lib32 -> usr/lib32
lrwxrwxrwx  1 root root      9 Aug  9 23:56 lib64 -> usr/lib64
lrwxrwxrwx  1 root root     10 Aug  9 23:56 libx32 -> usr/libx32
drwxr-xr-x  1 root root    512 Aug  9 23:56 media
drwxr-xr-x  1 root root    512 Sep 24 22:39 mnt
drwxr-xr-x  1 root root    512 Aug  9 23:56 opt
dr-xr-xr-x 11 root root      0 Sep 25 10:57 proc
drwx------  1 root root    512 Aug  9 23:57 root
drwxr-xr-x  1 root root    512 Sep 25 10:57 run
lrwxrwxrwx  1 root root      8 Aug  9 23:56 sbin -> usr/sbin
drwxr-xr-x  1 root root    512 Aug  9 23:57 snap
drwxr-xr-x  1 root root    512 Aug  9 23:56 srv
dr-xr-xr-x 12 root root      0 Sep 25 10:57 sys
drwxrwxrwt  1 root root    512 Aug  9 23:57 tmp
drwxr-xr-x  1 root root    512 Aug  9 23:56 usr
drwxr-xr-x  1 root root    512 Aug  9 23:57 var
```

Here's what it would have looked like if we didn't use the `-al` flags:

```bash
user@host:/$ ls
bin   dev  home  lib    lib64   media  opt   root  sbin  srv  tmp  var
boot  etc  init  lib32  libx32  mnt    proc  run   snap  sys  usr
```

Don't worry about the `drwxrwxr-x` gibberish; we'll go through that very soon!

---

### cat

`cat` is a command that allows you to view the contents of a file through the terminal. In this example, `hello.txt` will contain the string "Hello":

```bash
user@host:~$ cat hello.txt
Hello
```

---

### touch

`touch` allows you to create files within the current directory.

```bash
user@host:~/test$ touch hello.txt
user@host:~/test$ ls
hello.txt
```

---

### cd

`cd` stands for “change directory”. This is the primary means of navigation through directories in the terminal.
    
Let's say we have a directory called `test/` that contains a file called `hello.txt`. We can navigate to the `test/` directory by using `cd`:

```bash
user@host:~$ cd test
user@host:~/test$ ls
hello.txt
```

There are three relative paths that you should know: `.`, `..` and the tilde (`~`).

You typically only use the `.` if you're running an executable file, like Firefox or a script:

```bash
user@host:~$ ./executable
```

`..` is used to navigate to the parent directory:

```bash
user@host:~/test$ cd ..
user@host:~$ ls
test
```

`..` can also be used to access items in your parent directory. Let's say you wanted to enter a `test2/` folder in your parent directory. You wouldn't be able to `cd test2` because it's not in your current directory. Instead, you would use `cd ../test2`:

```bash
user@host:~/test$ cd ../test2
user@host:~/test2$ █
```

Let's say you wanted to go into your parent's parent's folder - you would use `cd ../../`. If you were in `test/`, you would be moved into `~/`, your user directory. Then, you'd be moved even further back into `/home`, the parent of your user directory (`~/`):

```bash
user@host:~/test$ cd ../../
user@host:/home$ █
```

The last relative path is the tilde (`~`), which is used to navigate to your home directory, and can be used similarly to `..`:

```bash
user@host:~/test$ cd ~
user@host:~$ ls
test
user@host:~$ cd ~/test
user@host:~/test$ █
```

If you want to navigate to any directory in your system you can use the absolute path, which starts at your root directory (`/`). This requires you type out the complete path to your destination. For example, if you were currently in your root directory and wanted to access `test/` in your user directory (`~/`), you would run this:

```bash
user@host:/$ cd /home/user/test
user@host:~/test$ █
```

---

### mkdir

`mkdir` (shorthand for “make directory”) allows you to create a directory folder. To avoid issues, don’t create a directory beginning with `/`, or one that includes spaces. Stick to alphanumeric characters and dashes/underscores!

```bash
user@host:~$ mkdir test
user@host:~$ cd test
user@host:~/test$ █
```

---

### rm

`rm` (shorthand for “remove”) permanently deletes files from your computer. It doesn’t move them to the recycling bin, it just obliterates them. `rmdir` functions exactly the same, except with directories.

```bash
user@host:~$ rm [FILE]
user@host:~$ rmdir [DIRECTORY]
```

---

### mv

`mv` (shorthand for “move”) serves two distinct purposes.  

Moving files:

```bash
user@host:~$ mkdir test1 test2
user@host:~$ ls
test1   test2
user@host:~$ mv test1 test2
user@host:~$ cd test2
user@host:~/test2$ ls
test1
```

Renaming files:

```bash
user@host:~$ ls
file1.txt
user@host:~$ mv file1.txt file2.txt
user@host:~$ ls
file2.txt
```

---

### Challenge I

* Through the command line, create a file named `hello.txt` in the `Desktop/` folder. Add "hello!” to the file as text and read the file afterwards.

* After this, add additional text that says “how are you doing?” to it, without removing the original “hello”. Read the file again.

* BONUS: Make a directory called `test/` and move your file into it.

---

### Permission-Based Commands

These commands allow you to change the permissions of files and directories, or escalate to administrative privileges.

### sudo

`sudo` (shorthand for “superuser do”) allows you to run commands as the root user. This is useful for installing software, changing system settings, and other administrative tasks. You will be prompted to enter your password before the command is executed.

```bash
user@host:~$ sudo [COMMAND]
```

`sudo su` allows you to switch to the root user. This is useful if you want to run a command as the root user without having to type `sudo` before every command. You will be prompted to enter your password before the command is executed.

```bash
user@host:~$ sudo su
root@host:~# █
```

IMPORTANT: Be careful when using `sudo su`! If you make a mistake, you could accidentally delete important files or change system settings. It's best to use `sudo` before every command.

---

### chown

`chown` (shorthand for “change owner”) allows you to change the owner of a file or directory.

Let's say I had a folder called `test/` that's currently owned by the user `user`. I want to change the owner to `root`:

```bash
user@host:~$ ls -al
total 0
drwxr-xr-x 2 user user 512 Jan  1 00:00 test
user@host:~$ sudo chown root test
user@host:~$ ls -al
total 0
drwxr-xr-x 2 root user 512 Jan  1 00:00 test
```

As you can see, root now owns the `test/` directory.

---

### chmod

`chmod` (shorthand for “change mode”) changes the file permissions on a file or folder.

Permissions for a user are defined by a **permission flag**. This flag shows who can read, write and/or execute the code. When you list files using `ls -al` you get outputs like these:

```text
-rwxrw-r--
```

Let's analyze this:

* `-`: Indicates this entry is a file. If this character is `d`, the entry is a directory.
* `rwx`: The first group of three characters belong to the superuser. This means that the superuser (root) can read (`r`), write (`w`) and execute (`x`) this file.
* `rw-`: The second group of three characters belongs to your user's group. This means that everyone in your group can read and write this file, but cannot execute it, as indicated with the `-`.
* `r--`: The final group of three characters belongs to the user itself. You can only read this file, but cannot write to it or execute it.

Another example: a `-rwxrwxrwx` flag means that everyone on the system can read, write and execute the file.

Here is the syntax for `chmod`:

```bash
chmod [FLAGS] [USERTYPE][-+=][PERMISSIONS] [FILE]
```

`[USERTYPE]` can be:

* `u`: The file owner.
* `g`: Users within the group.
* `o`: All other users.
* `a`: All users, equivalent to `ugo`.
* Empty, which defaults to `a`.

 `[-+=]` can be:

* `-`: Removes `[PERMISSIONS]`.
* `+`: Adds `[PERMISSIONS]`.
* `=`: Replaces `[PERMISSIONS]`. If `[PERMISSIONS]` is empty after `=`, it will remove all permissions.
  
`[PERMISSIONS]` can be:

* `r`: Read permission
* `w`: Write permission
* `x`: Execute permission

Example usages:

* `chmod g=r hello.txt`: Sets the group permissions to read-only.
* `chmod a+rx hello.txt`: Adds read and execute permissions to all users.
* `chmod -w hello.txt`: Removes write permissions from all users.
* `chmod u+rwx,g-x hello.txt`: Adds read, write and execute permissions to the user, and removes execute permissions from the group.

---

### Advanced Terminal Operators

Here are some symbols that you can use alongside your commands to make life easier.

### >

`>` redirects the output of a command to a file. For example, if you wanted to redirect the output of `ls` to a file called `output.txt`, you would run this:

```bash
user@host:~$ ls > output.txt
```

---

### && and ||

`&&` allows you to execute another command after the first is executed successfully.

```bash
user@host:~$ echo "Hello" && echo "Hi"
Hello
Hi
```

You can use also use a separate `||` operator, which will execute the second command if the first one fails.

---

### |

`|` is referred to as a “pipe”. The pipe allows you to use the output of one command as input for another command.

```bash
user@host:~$ ls -al | grep "txt"
```

The command above lists the current directory, and then uses the output of that command for a command named `grep`. `grep` allows us to filter and reveal files with the string `"txt"` within their name.

---

### Challenge II

* Find the permission flag of the file you made in Challenge 1. Then, make it so that all users can read, write and execute the file.
