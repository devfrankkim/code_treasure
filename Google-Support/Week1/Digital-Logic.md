## Digital Logic

tip: https://www.convertbinary.com/to-text/

### Computer Language

- A computer is a device that stores and processes data by performing calculations?
- A computer simply compares 1s and 0s, but millions or billions of times per second. 

### Binary System (0 and 1) - We group binary into 8 numbers or bits.

The first three letters -> 010 is UPPERCASE     
The first three letters -> 011 is lowercase     


- The communication that a computer uses is referred to as binary system, also known as base-2 numeral system.
- This means that it only talks in 1s and 0s

- Bits: Technically, a bit is a binary digit.
- Historically, we used 8 bits because in the early days of computing, hardware utilized the base-2 numeral system to move bits around.

8 bits(numbers) -> 1 byte(group)

- `You should know that a group of 8 bits is referred to as a byte.`
- `Each byte can store one character`
- We can have 256 possible values, thanks to the base-2 system, 
- 2 to the 8th. 
- In computer talk, this byte could mean something like the letter C.


### Character Encoding
- Character encoding is used to assign our binary values to characters so that we as humans can read them


- byte can store only zeros and ones.
- 256 possible values.
- You can think of character encoding as a dictionary.
- It's a way for your computers to look up which human characters should be represented by a given binary value.
- The oldest character encoding standard used this ASCII.
- Need to use only 127 values out of 256 which wasn't enough


### UTF-8 (numbers, letters, emojis, punctuation marks)

- The most prevalent encoding standard used today. 
- Along with having the same ASCII table, it also lets us use a variable number of bytes. 
- What do I mean by that? Think of any emoji. 
- It's not possible to make emojis with a single byte, so as we can only store one character in a byte, instead UTF 8 allows us to store a character in more than one byte, which means endless emoji fun. 

### How about color? -> RGB(Red, Green, Blue) model



### How do we get ones and zeros then? (On and Off)

Hole -> Read 1
No Hole -> Read 0

In punch card systems, a hole represents the number "1"

### Logic Gates

[Logic Gate - wiki](https://simple.wikipedia.org/wiki/Logic_gate)

- Logic gates allow our transistors to do more complex tasks, like decide where to send electrical signals depending on logical conditions.

- There are lots of different types of logic gates.
- Now we know how our computer gets its ones and zeros to calculate into meaningful instructions. 
- We'll be able to talk about how we're able to turn human-readable instructions into zeros and ones that computer understands through a compilers.

human ->  through complier -> (0 | 1) computer

- That's one of the very basic building blocks of programming that's led to the creation of our favorite social media sites, video games, and just about everything else. 



### How to Count in Binary

- Binary is the fundamental communication block of computers.
- but it's used to represent more than just text and images. 
- It's used in many aspects of computing like computer networking,
- It's important that you understand how computers count in binary

- When you were a child, you may have counted using ten fingers on your hand. That innate counting system is called the decimal form or base-10 system. 

**Base-10 System or  decimal form ex) 4,000 / 2/ 30, 500,000** 
- 10 Possible numbers I can use ranging from zero to nine.
- we convert it to a system that we can understand, decimal.
- We use the decimal system to help us figure out what bits our computer can use. 
- We can represent any number in existence just by using bits. 


128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
- We thought we could have 256 values for a byte.
- The zero is counted as a value.
- so the maximum decimal number you can have is 255.

```
128   64  32   16    8    4    2    1
  0    0   0    0    1    0    1    0    => 10(decimal value)
```

### Quize

- How many possible values can we have with 8 bits?
- Why did UTF-8 replace the ASCII character-encoding standard?



