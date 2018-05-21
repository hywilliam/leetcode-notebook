
Bitwise shift operators
Operations to shift all bits of the operand.
<<
Bitwise left shift operator.
>>
Bitwise right shift operator.
>>>
Bitwise unsigned right shift operator.
Binary bitwise operators
Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.
&
Bitwise AND.
|
Bitwise OR.
^
Bitwise XOR.
~
Bitwise NOT.


& 二进制‘与'
a	b	a AND b
0	0	0
0	1	0
1	0	0
1	1	1
任何数和0与均返回0，任何数和-1与均返回自身。

| 二进制’或‘
a	b	a OR b
0	0	0
0	1	1
1	0	1
1	1	1
任何数和0或均返回自身，任何数和-1或均返回-1。

^二进制’异或‘
a	b	a XOR b
0	0	0
0	1	1
1	0	1
1	1	0
ab不同返回1，相同返回0.
任何数和0异或返回自身。和-1异或返回~x。

~二进制’非‘
a	NOT a
0	1
1	0
任何数的二进制非运算返回-(x+1), eg. ~-5 === 4