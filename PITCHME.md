---

# How to read a piece of code

---
```
lisp

(println "Hello world!")
```
---
```
python

print "Hello world!"
```
---
```
ruby

puts "Hello world!"
```
---
```
javascript

document.write("Hello world!");
```
---
```
java

public class HelloWorld
{
 public static void main(String[] args)
 {
  System.out.println("Hello world!");
 }
}
```
---
```
c

#include<stdio.h>
 
int main()
{
  printf("\nHello world!");
  return 0;
}
```
---
```
cpp

#include <iostream>
 
int main () {
  std::cout << "Hello world!" << std::endl;
}
```
---
```
c#

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello world!");
        }
    }
}
```
---
People that have a favorite language will criticize another person's choice with the fierce religiosity of those who are convinced that they are completely rational.

(*) "Geek sublime", Vikram Chandra
---
If you think of each line of code as a *component* like a brick in a building, software systems are the most complicated things that humans have ever built: Windows 7 for example, has some 40 million lines of code (LoC).

No temple, no cathedral, no bridge or palace has ever contained as many invidual components.

Software is in many ways the craft of manageing complexity.
---
Software is compliticated because it tries to model the irreducible complexity of the world.
---
[Information is Beautiful - Sizes of Code Bases](https://informationisbeautiful.net/visualizations/million-lines-of-code/)

---
Electronics have become largely generic, software is what makes a generic piece of hardware perform one function or another.

Think for example or your iPhone, it's a phone but it also is a calculator, a web browser and as many other things as there are apps for it.
---
That software algorithms are now running our whole world means that software faults or errors can send us down the wrong highway, injure or kill people and cause disasters.
---
### Cory Doctorow: "The Coming Civil War over General-purpose Computing"

![Cory Doctorow: "The Coming Civil War over General-purpose Computing"](https://www.youtube.com/watch?v=gbYXBJOFgeI)
---
### The Stack: Benjamin H. Bratton
![The Stack](https://vimeo.com/117036240)

Benjamin Bratton /// The Stack We Have and The Stack To Come: Designing Sovereignty and the Geopolitics of Computation
---
## See Automation Paradox

![automation paradox](https://www.youtube.com/watch?v=oMTb7u93mSI)
---
- [99% invisible - part 1 "Children of the Magenta"](https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/)
- [99% invisible - part 2 "Johnycab"](https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/)
---
Software is hard. It’s harder than anything else I’ve ever had to do.

- Donald Knuth, on writing TeX
---
## HTML is not a programming language

HTML stands for *Hyper Text Markup Language* it is therefore a *markup language* not a programming language.
---
## Markup?

Markup tags are used to annotate fragments of a document and give them a special context, for example, if we want to make a specific text in our HTML document into a link, we can use the `<a>` markup tag.

The `<a>` HTML tag marks the beginning of the text we want to highlight as a link, and it's counterpart the closing `</a>` tag specifies where the text to highlight as a link end.

So for example:
```
html

<a href="http://www.myhomepage.info">my home page</a>
``` 

Will create a link with the text `my home page` that points to the URL `http://www.myhomepage.info`.
---
HTML allows us to build documents were fragments are marked-up for the purposes of giving the text context and a visual style.
---
If you want to have full control over how your HTML documents look like, you must write HTML and CSS.
---
## CSS is not a programming language

CSS stands for Cascading Style Sheets, it is a way of declaring visual styles to be applied in an HTML document.
---
Doing HTML & CSS is not programming, people that do HTML and CSS are concerning themselves with a document, how to present that information and how it is visually styled.
---
Making a document in HTML/CSS is not so different from creating a document in PDF or PostScript (both of which are also markup languages) or even Word.
---
Javascript however is a programming language. You can write Javascript without HTML and you can write HTML without Javascript. However in the *frontend* development world you will mostly see them in tandem.
---
## Programming languages
- have functional purposes such as processing data or making decisions
- they have statements to control flow
	- do *this* when *that* happens
	- do *this* and then do *that*
	- do this *x* number of times
	- do this *when that* happens
- can deal with data as input and output
- can handle events and carry out tasks
- can evaluate expressions and do mathematical operations
- allow you to define temporary storage (variables)
---
All computer programs are writen to accomplish some kind of task.
---
when confronted a piece of code the primary question is always the same: "what does it do?"
---
## reading a program

- what language is it written on?
- what platform is it written for?
- where does the program begin?
- does the program end? (ending isn't really a requirement for a program)
	- if so: under which conditions does the program end
- does the program have a UI?
	- how does the program respond to UI events?
---
A traditional computer program consists of a plain-text file containing program code.
---
Every programming language is a *formal language* with explicit and precise rules for its syntax and semantics.
---
When you are writing code, you write code for another human, not for machines. 
---
The real audience of your code, its readers, are the humans that will help you add features, maintain and ship your product. Be aware of this when you are writing code.
---
Sometimes that other human is in fact the future you. Coming back to a piece of code that you wrote three months ago will require an effort from you to understand it again. How you write your code today will have an impact in your future work as well.
---
"Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaning to human beings what we want the computer to do"

(*) Literate Programming, 1984, Donald Knuth [more info](http://www.literateprogramming.com/)
---
There is a paradox in the field of computer programming: modern high-level programming languages and community library repositories such as `npm` hide the internal structures of computers from programmers. Therefore actually very few professional programmers actually know how computers work.

---
[...] hardware would become so cheap that 'almost everyone who uses a pencil will use a computer,' and that these users would be able to use 'realiable software components' to put together complex programs.

(*) Journal of Software Practice and Experience, 1972, Butler W. Lampson
---

[Programming languages family tree](https://exploringdata.github.io/vis/programming-languages-influence-network/)

[History of programming for two voices](https://www.youtube.com/watch?v=J3C79CDqeW4)

[Languages for knitting](https://www.youtube.com/watch?v=02h74L1PmaU)

[Simple made easy](https://www.infoq.com/presentations/Simple-Made-Easy)

[Learnable Programming](http://worrydream.com/LearnableProgramming/)

[What screens want](https://www.frankchimero.com/writing/what-screens-want/)

