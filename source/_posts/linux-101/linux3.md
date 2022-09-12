---
title: "Linux 101.3: Command Cheatsheet"
date: 2022-09-08 10:00:02
categories:
- linux-101
permalink: /linux-101/03/
cover_image: /asset/linux-101/thumbnail-3.jpg
---

**Always remember**: If you have no idea how to use a command type either:

{% ccb lang:bash %}
man your_command # RUNS THE MAN COMMAND
your_command --help # RUNS THE COMMAND WITH A HELP FLAG
{% endccb %}

### Essential Commands

Here are the most common and important commands that you should memorize if you want to use terminal and access the shell:

---

`echo` - When used alone, this command will repeat your argument, which could be a string or an environmental variable (i.e. `$USER`. You can also echo "into" files with the `>` operator, which will write your string into the file argued after the operator:

{% ccb lang:bash %}
user@host:~$ echo "Hello" # ECHOES STRING
Hello
{% endccb %}

{% ccb lang:bash %}
user@host:~$ touch hello.txt # CREATES FILE
user@host:~$ echo "Hello" > hello.txt
user@host:~$ cat hello.txt # READS FILE
Hello
{% endccb %}

{% ccb lang:bash %}
user@host:~$ echo $USER # ECHOES ENVIRONMENTAL VARIABLE
user
{% endccb %}

**Important**: Mind that `>` and `>>` are two different terminal operators. Using only `>` can remove all code/text from a file and replace it with your string. On the other hand, using `>>` can add whatever phrase you’ve inputted and still keep the code/text within your file.

---

`ls` - lists the files within the current directory. To make ls more useful, refer to the `man` page and add the necessary flags.

{% ccb lang:bash %}
user@host:~$ ls -al # USES -A and -L FLAGS
total 28
drwxr-xr-x 6 user user  199 Feb  7 22:44 .
drwxr-xr-x 3 root root   30 Jul 21  2021 ..
-rw------- 1 user user 3315 Feb 11 18:43 .bash_history
-rw-r--r-- 1 user user  220 Jul 21  2021 .bash_logout
-rw-r--r-- 1 user user 3771 Jul 21  2021 .bashrc
drwxrwxr-x 3 user user   21 Jul 21  2021 .config
drwxrwxr-x 4 user user   31 Jul 21  2021 .gem
drwxrwxr-x 3 user user   19 Feb  7 22:44 .local
-rw-rw-r-- 1 user user    0 Feb  6 03:12 .ltdis.x86_64.txt
-rw-r--r-- 1 user user  807 Jul 21  2021 .profile
-rw-rw-r-- 1 user user  215 Feb 11 18:28 .wget-hsts
-rw-r--r-- 1 root root 4448 Feb 15 01:58 README.txt
{% endccb %}

Don't worry about the `drwxrwxr-x` gibberish; we'll go through that very soon!

---

`cat` - cat is a command that allows you to view the contents of a file through the terminal.

{% ccb lang:bash %}
user@host:~$ cat hello.txt
Hello # ASSUMING hello.txt HAS "Hello"
{% endccb %}

**Important**: Note that you would have to specify the file extension (.txt, .py, etc.) in order to open the file in some graphical text editors/applications.

---

`touch` - allows you to create files within the current directory.

{% ccb lang:bash %}
user@host:~/test$ touch hello.txt
user@host:~/test$ ls -al
hello.txt
{% endccb %}

**Important**: Note that you would have to specify the file extension (.txt, .py, etc.) in order to open the file in some graphical text editors/applications.

---

`cd` - stands for “change directory”. This is the primary means of navigation through directories in the terminal.

{% ccb lang:bash %}
user@host:~$ cd test # ENTER TEST SUBDIRECTORY
user@host:~/test$ cd .. # ENTER PARENT FOLDER (~)
user@host:~$ cd .. # ENTER PARENT FOLDER (/home)
user@host:/home$ cd .. # ENTER PARENT FOLDER (/)
user@host:/$ cd ~ # ENTER DEFAULT FOLDER (~)
user@host:~$ cd /bin # ENTER BIN, ROOT FOLDER (/bin)
user@host:/bin$ █
{% endccb %}

If you’re having trouble visualizing the process, imagine this directory:

{% ccb lang:text %}
/home/user/Desktop/test
{% endccb %}

If you wanted to move "forwards" (towards the right) with `user` as your PWD, run `cd Desktop`.  
If you wanted to move "backwards" (towards the left) with `user` as your PWD, run `cd /home`.

---

`mkdir` - (shorthand for “make directory”) allows you to create a directory folder. To avoid issues, don’t create a directory beginning with /, or one that includes spaces. Stick to alphanumeric characters!

{% ccb lang:bash %}
user@host:~$ mkdir test
user@host:~$ cd test
user@host:~/test$ █
{% endccb %}

---

`rm` - (shorthand for “remove”) permanently deletes files from your computer. It doesn’t move them to the recycling bin, it just obliterates them. `rmdir` functions exactly the same, except with directories.

{% ccb lang:bash %}
user@host:~$ rm [FILE]
user@host:~$ rmdir [DIRECTORY]
{% endccb %}

---

`mv` - (shorthand for “move”) serves two distinct purposes.  

Moving files:

{% ccb lang:bash %}
user@host:~/test$ mkdir test2 test3
user@host:~/test$ ls
test2   test3
user@host:~/test$ mv test2 test3 # MOVES TEST2 INTO TEST3
user@host:~/test$ cd test3
user@host:~/test3$ ls
test2
{% endccb %}

Renaming files:

{% ccb lang:bash %}
user@host:~$ mv file1.txt file2.txt # file2.txt DOES NOT EXIST
user@host:~$ cat file1.txt
cat: file1.txt: No such file or directory
{% endccb %}

---

### Challenge I

* Through the command line, create a file named “my_first_creation.txt” in the Desktop folder. Add “hello!” to the file as text and read the file afterwards.

* After this, add additional text that says “how are you doing?” to it, without removing the original “hello”. Read the file again.

* BONUS: Make a directory called “Creations” and move your file into it.

---

### Advanced Terminal Operators

`&&` -  allows you to execute another command after the first is executed successfully.

{% ccb lang:bash %}
user@host:~$ echo "Hello" && echo "Hi"
Hello
Hi
{% endccb %}

---

`$` -  allows you to use and set environment variables. Some variables such as `$USER`, `$PWD`, `$HOME`, `$UID`, `$HOSTNAME`, `$SHELL` are already set. You can change and create custom environmental variables by using the syntax:

{% ccb lang:bash %}
user@host:~$ export MY_DIRECTORY = /home/user/test
user@host:~$ echo $MY_DIRECTORY
/home/user/test
{% endccb %}

**Important**: Do not declare a new environmental variable with $ in it.

---

`|` - referred to as a “pipe”. The pipe allows you to use the output of one command as input for another command.

{% ccb lang:bash %}
user@host:~$ ls -al | grep "txt"
{% endccb %}

 The command above lists the current directory, and then uses the output of that command for a command named `grep`. `grep` allows us to filter and reveal files with the string `"txt"` within their name.

### Permission-Based Commands

`chown` - (short for “change owner”) allows you to change the owner of a file or directory.

{% ccb lang:bash %}
user@host:~$ chown [USER]:[GROUP] [FILE] # GROUP IS OPTIONAL
{% endccb %}

---

`chmod` - (shorthand for “change mode”) changes the file permissions on a file or folder.

Permissions for a user are defined by a **permission flag**. This flag shows who can read, write and/or execute the code. When you list files using `ls -al` you get outputs like these:

{% ccb lang:text %}
-rwxrw-r--
{% endccb %}

Let's analyze this:

* `-`: Indicates this entry is a file. If this character is `d`, the entry is a directory.
* `rwx`: The first group of three characters belong to the superuser. This means that the superuser (root) can read, write _and_ execute this file.
* `rw-`: The second group of three characters belongs to your user's group. This means that everyone in your group can read and write this file, but _cannot_ execute it, as indicated with the `-`.
* `r--`: The final group of three characters belongs to the user itself. You can only read this file, but cannot write to it or execute it.

Another example: a `-rwxrwxrwx` flag means that everyone on the system can read, write and execute the file.

Here is the syntax for `chmod`:

{% ccb lang:bash %}
user@host:~$ chmod [FLAGS] [USERTYPE][-+=][PERMISSIONS] [FILE]
{% endccb %}

`[USERTYPE]` can be:

* `u`: The file owner.
* `g`: Users within the group.
* `o`: All other users.
* `a`: All users, equivalent to `ugo`.
* Empty, which defaults to `a`.

 `[-+=]` can be:

* `-`: Removes `[PERMISSIONS]`.
* `+`: Adds `[PERMISSIONS]`.
* `=`: Replaces to `[PERMISSIONS]`.
  * If `[PERMISSIONS]` is empty after `=`, it will remove all permissions.
  
`[PERMISSIONS]` can be:

* `r`: Read permission
* `w`: Write permission
* `x`: Execute permission

Example usages:

{% ccb lang:bash %}
chmod g=r myfile.sh # GROUPS CAN ONLY READ
chmod a+rx myfile.sh # EVERYONE CAN READ AND EXECUTE
chmod -w myfile.sh # EVERYONE CAN NO LONGER WRITE
chmod u+rwx,g-x myfile.sh # OWNER CAN READ, WRITE AND EXECUTE WHILST GROUPS CAN NO LONGER EXECUTE
{% endccb %}

---

### Challenge II

* Find the permission flag of the file you made in Challenge 1. Then, make it so that all users can read, write and execute the file in the simplest way possible.
