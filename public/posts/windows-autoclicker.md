---
title: "Windows Autoclicker Project"
excerpt: "In order to satisfy my need of getting things done, I recently got hooked on autogrinding games, in which they are specifically designed for you NOT to do anything, and so I developed this autoclicker for Windows platforms."
coverImage: "../../src/assets/windows-autoclicker/cover.jpg"
date: "2024-07-30"
author:
  name: Stuart
  picture: "../../src/assets/authors/self2.jpg"
ogImage:
  url: "../../src/assets/windows-autoclicker/cover.jpg"
---

## [__Click here for GitHub Repo.__](https://github.com/rileystuartmyers/Windows-Autoclicker-and-Shutdown)

In order to satisfy my need of getting things done, I recently got hooked on autogrinding games, in which they are specifically designed for you NOT to do anything, and so I developed this autoclicker for Windows platforms. 

I wrote it in C# with Visual Studio, making use of 'Windows Forms' to create a simple yet intuitive GUI. Not too many functions are provided, but not too many are needed in the first place.\
The program sends keyboard events to the system with functions found in the 'Windows.h' header file, in which it writes a given key/mouse click to memory, updates the system key_event flags, and then wipes used memory.

I added an ***Include Keystrokes*** checkbox as an anti-afk countermeasure, as many current multiplayer games check for player movement every so often and this program can produce ***WASD*** keystrokes at random intervals and for random periods of time.

Another large portion of the programs utility is the ***Schedule A Shutdown*** feature, in which users can input a given time frame for their computer to automatically shut off! This is especially useful for when you're wanting
to leave the program running overnight, but not particularly throughout the entire day. It helps reduce energy consumption and wear on your components when you're only looking to leave it on for a couple of hours at a time :\)

Thanks for reading!

\- Stuart
