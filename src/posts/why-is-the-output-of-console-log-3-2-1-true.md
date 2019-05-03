---
title: Why is the output of console.log(3<2<1) true?
date: 2019-05-03T17:38:50.315Z
description: >-
  Logically, the answer should be False, but JavaScript has a different point of
  view and says it's true! 
slug: Why is the output of console.log(3<2<1) true?
---
If someone asks you what the answer of `console.log(3<2<1)` is, you will properly think it's extremely easy and it does not take 10 seconds to solve it, right? 👀 

However, it's harder than you expect!

If we try to find the output of `console.log(3<2<1)` logically, the output should be **True** as 3 is less than 2 and 2 is less than 1. 

But things run a little bit differently in JavaScript as the output is **False** even though logically it is **True**! 😅

WHY IS THAT HAPPENING? Is JS a stupid language? Well, short answer is no because of the term **Coercion.**

**Coercion** is the process of converting value from one type to another such as a number to Boolean. 

Let's break it to smaller bits to find why the output is True. 

Is 3 less than 2? the answer is **False**. Now JavaScript takes **False** and tries to compare it with 1 but since they are different data types, the Coercion process happens and converts False to 0 as the value of False is 0 in JavaScript. 

Now, is 0 less than 1? the answer is **True**. So even though it should be logically False, JavaScript still finds it as True!

This question is quite tricky and many interviewers love to ask it. Make sure to check the following link to grasp what **Coercion** is and nail questions like this! Good Luck 💓

https://bit.ly/2Rofwsa



- - -
