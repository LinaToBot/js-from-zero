# Programming languages

The main difference between a compiled language and an interpreted language is that the COMPILED LANGUAGE
requires an additional step before being executed, compilation, which converts the code you write into
machine language (executable file, we don't need to have the source code present). Errors are caught
during the compilation phase, and the code generally runs more efficiently.

Examples of compiled languages: C, C++, Rust, Fortran, etc.

An INTERPRETED LANGUAGE, on the other hand, is converted to machine language as it is executed. Which is a
program that reads and executes the code line by line at run time. A stand-alone executable file is not
produced; instead, the interpreter executes the code directly from the source code. Errors can be caught
during execution, and the code is often more portable across platforms as the interpreter can adapt to
different environments.

Examples of interpreted languages: Python, JavaScript, Ruby, PHP, etc..

It is important to note that this distinction between compiled and interpreted languages is not always
strict. Some languages, such as Java, combine both techniques.

Java uses a hybrid approach where the source code is compiled to an intermediate format (bytecode) which
is then executed in a virtual machine (JVM) using an interpreter. This approach provides some advantages
of both worlds, such as portability and performance.

COMPILED LANGUAGE → static checking data types
INTERPRETED LANGUAGE → dynamic checking data types

Coercion (implicit) → is the automatic conversion of data types that occurs during the execution of a program.
Casting (explicit) → is a conversion from one data type to another performed by the programmer.
