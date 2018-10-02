---

# How to Read Code

---

[...] hardware would become so cheap that 'almost everyone who uses a pencil will use a computer,' and that these users would be able to use 'realiable software components' to put together complex programs.

(*) Journal of Software Practice and Experience, 1972, B. W. Lampson

---

What are software developers doing when they are writing software? What is their primary task?

NOTE: probably many more things that what we can list together, but primarily they are reading. Software developers spend substantial amounts of their time reading, reading documentation, reading logs, reading API documentation, reading functional specifications, reading other people's code as well as reading their own.

---

Most programming manuals begin with sample code for what is now generally accepted as a universal first program, the infamous "Hello World". Let's look at how the code for "Hello World" looks in different languages.

NOTE: as I show you  these examples try to find out where these programs begin and where they halt (or terminate).

---

Lisp

```lisp

(println "Hello world!")
```

---

Python

```python

print "Hello world!"
```

---

Ruby

```ruby

puts "Hello world!"
```

---

Javascript

```javascript

document.write("Hello world!");
```

---

Java

```java

public class HelloWorld
{
 public static void main(String[] args)
 {
  System.out.println("Hello world!");
 }
}
```

---

C

```c

#include <stdio.h>
 
int main()
{
  printf("Hello world!\n");
  return 0;
}
```

---

C++

```cpp

#include <iostream>
 
int main () {
  std::cout << "Hello world!" << std::endl;
}
```

(this is the same language you use in Arduino projects, though the Arduino integrated development environment or IDE, likes to conceal this fact from us and give us a more accessible starting point)

---

C#

```c#

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

#### Have you noticed any language missing here?

---

## HTML is not a programming language

HTML stands for *Hyper Text Markup Language* it is therefore a *markup language* not a programming language.

---

## Markup?

Markup tags are used to annotate fragments of a document and give them a special context, for example, if we want to make a specific text in our HTML document into a link, we can use the `<a>` markup tag.

The `<a>` HTML tag marks the beginning of the text we want to highlight as a link, and it's counterpart the closing `</a>` tag specifies where the text to highlight as a link end.

So for example:
```html

<a href="http://www.myhomepage.info">my home page</a>
``` 

Will create a link with the text `my home page` that points to the URL `http://www.myhomepage.info`.

---

HTML allows us to build documents were fragments are marked-up for the purposes of giving the text context and a visual style.

---

If you want to have full control over how your HTML documents look like, you must write HTML and CSS.

---

## CSS is not a programming language

CSS stands for *Cascading Style Sheets*, it is a way of declaring visual styles to be applied to a HTML document.

---

Doing HTML & CSS is not programming, people that do HTML and CSS are concerning themselves with a document, how to present that information and how it is visually styled.

---

*A little detour...*

---

In 2017 Tony Beltramelli [introduced the pix2code paper](https://arxiv.org/abs/1705.07962) that presented research that will eventually make the job of the frontend programmer and possibly even the UI designer obsolete. Shortly after Airbnb [launched sketch2code](https://airbnb.design/sketching-interfaces/).

---

*"The time required to test an idea should be zero."* Benjamin Wilkins, Airbnb

---

*"As it stands now, every step in the design process and every artifact produced is a dead end. Work stops whenever one discipline finishes a portion of the project and passes responsibility to another discipline. Projects progress from stakeholder meetings to design to engineering; requirements become explorations, explorations become mockups and prototypes, and these are handed off to developers to become final products. But each of these cumbersome steps is, at its core, a translation of shared meaning to a different medium in progression toward a common goal, with skilled experts in each domain acting as translators."* Benjamin Wilkins, Airbnb.

---

You might have seen this already, since it has been doing the rounds in social media over the last week.  Romanian company TeleportHQ has been working on a *code generation* system they call [Think to Code](https://twitter.com/TeleportHQio/status/1043245039261044736)

---

For those of you inclined to *build your own* neural net to churn out designs, [you can start here](https://blog.floydhub.com/turning-design-mockups-into-code-with-deep-learning/)

---

Another initiative in attaining similar goals [The Grid](https://thegrid.io/), the premise is simple, you upload the content and a Machine Learning algorithm "designs" a responsive template for you to best present that content. 

---

Does this impact your profession, if so, how?

---

*Back to today's subject....*

---

Making a document in HTML/CSS is not so different from creating a document in PDF or PostScript (both of which are also markup languages) or even Word.

---

Javascript however is a programming language. You can write Javascript without HTML and you can write HTML without Javascript. However in the *frontend development* world you will mostly see them in tandem.

---

In most modern web applications the HTML serves as a kind of UI and the Javascript carries out the interaction logic (and thanks to nodejs even the backend).

*Frontend? Backend?*

---

## Programming languages
- have functional purposes such as processing data or making decisions
- they have statements to control execution flow
	- do *this* when *that* happens
	- do *this* and then do *that*
	- do *this* *x* number of times
	- do *this* *when that* happens

---

## Programming languages (cont.)
- can deal with data as input and output
- can handle events and carry out tasks
- can evaluate expressions and do mathematical operations
- allow you to define temporary storage (variables)

---

There are literally hundreds of programming languages

---

A traditional computer program consists of a plain-text file containing program code. So to program all you need is a text editor capable of saving plain-text files. Well, that's one of the primary tools at least.

---

Every programming language is a *formal language* with explicit and precise rules for its syntax, grammar and semantics.

---

This program prints "Goodbye, World!" as is written in a language called *Brainfuck*.

```
++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++
++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>
>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.
<+++++++.--------.<<<<<+.<+++.---.
```

[See it at work](https://repl.it/repls/MadeupDramaticReference) using a REPL (Read-Evaluate-Print Loop)

---

This is the "Hello World" program in a language called *Go*.

```go

package main
 
import "fmt"
 
func main() { fmt.Println("Hello world!") }
```

---

This is the "Hello World" program in a language called *Assembly*:
```asm
section .data
msg     db      'Hello world!', 0AH
len     equ     $-msg
 
section .text
global  _start
_start: mov     edx, len
        mov     ecx, msg
        mov     ebx, 1
        mov     eax, 4
        int     80h
 
        mov     ebx, 0
        mov     eax, 1
        int     80h
```

---

People that have a favorite language will criticize another person's choice with the fierce religiosity of those who are convinced that they are completely rational.

(*) "Geek sublime", Vikram Chandra


---

All computer programs are written to accomplish some kind of task.


When confronted a new piece of code the primary question is always the same: "what does it do?"

---

## tips to read a program

- what language is it written on?
- what platform is it written for?
- is this program using any frameworks?
  - what do I know about that framework?
- where does the program begin?

---

## tips to read a program (cont.)

- does the program end? (ending isn't really a requirement for a program)
	- if so: under which conditions does the program end
- does the program have a UI?
	- how does the program respond to UI events?

---

#### Frameworks and platforms do matter

A C++ program in the Arduino framework:

```cpp
void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(A0, INPUT);
}

void loop() {
  int threshold;

  // read our sensors
  threshold = analogRead(A0);

  // we print the output, as comman separated values
  Serial.println(threshold);
  
  delay(100); // we do this 10 times per second
}
```

---

An another C++ program using the STL:

```cpp
#include <iostream>
#include <string>
#include <list>
#include <algorithm>
#include <iterator>
 
using namespace std;
 
template<typename OutIt>
void sierpinski(int n, OutIt result)
{
    if( n == 0 )
    {
        *result++ = "*";
    }
    else
    {
        list<string> prev;
        sierpinski(n-1, back_inserter(prev));
 
        string sp(1 << (n-1), ' ');
        result = transform(prev.begin(), prev.end(),
            result,
            [sp](const string& x) { return sp + x + sp; });
        transform(prev.begin(), prev.end(),
            result,
            [sp](const string& x) { return x + " " + x; });
    }
}
 
int main()
{
    sierpinski(4, ostream_iterator<string>(cout, "\n"));
    return 0;
}
```

---

## reading a program

use comments and [pseudocode](https://en.wikipedia.org/wiki/Pseudocode) to make things clear for yourself

Always try to bring the program closer to your language, without getting away from the code, try and rewrite parts of it in a language closer to plain english, or whatever natural language you are more comfortable with.


```javascript
function fib(n) {
  var a = 0, b = 1, t;
  while (n-- > 0) { 
  	// do the following block as many times as specified in parameter 'n'
    t = a;
    a = b;
    b += t; // calculate the sum for 'n-th element'
    console.log(a); // print intermediate value
  }
  return a; // return last result
}

fib(30); // calculate the fibonacci sequence for parameter
```

---

## reading a program

- start from the more abstract and work your way to the concrete
- ask yourself first WHAT it does before you dig into HOW it does it
- use comments next to the code you are reading to slowly bring it closer to your domain of understanding

---

Calculating a Fibonacci series in *python*:

```python
def fib(n,x=[0,1]):
   for i in range(abs(n)-1): x=[x[1],sum(x)]
   return x[1]*pow(-1,abs(n)-1) if n<0 else x[1] if n else 0
 
for i in range(0, 30): print fib(i),
```

---

Calculating a Fibonacci series in *javascript*:

```javascript
function fib(n) {
  var a = 0, b = 1, t;
  while (n-- > 0) {
    t = a;
    a = b;
    b += t;
    console.log(a);
  }
  return a;
}

fib(30);
```

---

Calculating a Fibonacci series in *ruby*:


```ruby
def fib(n, sequence=[1])
  n.times do
    current_number, last_number = sequence.last(2)
    sequence << current_number + (last_number or 0)
  end
 
  sequence.last
end

fib(30)
```
---

## reading a program

- does the program keep a state?
- does it's behaviour change according to the state

---

[All examples from Rosetta Code](http://rosettacode.org/wiki/Fibonacci_sequence)

---

#### Code is supposed to be WRITTEN and READ

When you are writing code, you write code for another human, not for machines. Machines cannot understand code the same way we type it.

---

The real audience of your code, its readers, are the humans that will help you add features, maintain and ship your product. Be aware of this when you are writing code.

---

Sometimes that other human is in fact the future you. Coming back to a piece of code that you wrote three months ago will require an effort from you to understand it again even thought you wrote it yourself.

---

"Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, **let us concentrate rather on explaning to human beings what we want the computer to do**"

(*) Literate Programming, 1984, Donald Knuth [more info](http://www.literateprogramming.com/)

NOTE: you never do your thinking in front of code

---

Exercise: "**let us concentrate rather on explaning to human beings what we want the computer to do**"

---

There is a paradox in the field of computer programming: modern high-level programming languages and community library repositories such as `npm` hide the internal structures of computers from programmers. Therefore actually very few professional programmers actually know how computers work.

---

If you think of each line of code as a *component* like a brick in a building, software systems are the most complicated things that humans have ever built: Windows 7 for example, has some 40 million lines of code (LoC). Each of these lines of code interacts with other lines of code in ways that are difficult to predict.

No temple, no cathedral, no bridge or palace has ever contained as many interacting components.

Software is in many ways the craft of managing complexity.

---

Software is compliticated because it tries to model the irreducible complexity of the world.

---

[Information is Beautiful - Sizes of Code Bases](https://informationisbeautiful.net/visualizations/million-lines-of-code/)

---

Electronics have become largely generic, software is what makes a generic piece of hardware perform one function or another.

Think for example or your iPhone, it's a phone but it also is a calculator, a web browser and as many other things as there are apps for it.

READ: [Why Software is Eating the World by Marc Andreessen](https://a16z.com/2016/08/20/why-software-is-eating-the-world/)

---

##### Cory Doctorow: "The Coming Civil War over General-purpose Computing"

![Cory Doctorow: "The Coming Civil War over General-purpose Computing"](https://www.youtube.com/embed/gbYXBJOFgeI)

---

##### The Stack: Benjamin H. Bratton
![The Stack](https://player.vimeo.com/video/117036240)

Benjamin Bratton /// The Stack We Have and The Stack To Come: Designing Sovereignty and the Geopolitics of Computation

---

That software algorithms are now running our whole world means that software faults or errors can send us down the wrong highway, injure or kill people and cause disasters.

---

#### See Automation Paradox

![automation paradox](https://www.youtube.com/embed/oMTb7u93mSI)

---

- [99% invisible - part 1 "Children of the Magenta"](https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/)
- [99% invisible - part 2 "Johnycab"](https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/)

---

*"Software is hard. It's harder than anything else I've ever had to do."*

Donald Knuth, The Art of Computer Programming on writing TeX

---

Rich Hickey, designer of programming language Clujore, emphasizes simplicity’s virtues over easiness’, showing that while many choose easiness they may end up with complexity, and the better way is to choose easiness along the simplicity path.

[Simple made easy](https://www.infoq.com/presentations/Simple-Made-Easy)

---

Bret Victor's essay on making programming more accessible

[Learnable Programming](http://worrydream.com/LearnableProgramming/)

---

What does it mean to design for a screen?

[What screens want](https://www.frankchimero.com/writing/what-screens-want/)

---

[Programming languages family tree](https://exploringdata.github.io/vis/programming-languages-influence-network/)

---

[History of programming for two voices](https://www.youtube.com/embed/J3C79CDqeW4)

---

[Languages for knitting](https://www.youtube.com/embed/02h74L1PmaU)

