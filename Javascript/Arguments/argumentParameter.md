# The difference between Argument and Parameter

```
함수에서 변수로 받는 것은 Parameter
함수 호출을 직접 하는 것은 Argument

You can think of the parameter as a parking space and the argument as a car."

You can think of the parameter as companies and the argument is yourself when applying for jobs.

Argument is the value/variable/reference being passed in, Parameter is the receiving variable used w/in the function/block.

argument is calling the fight
and
parameter is answering the fight


In Russian "parameters" are called "formal parameters", while "arguments" are called "actual parameters".

종종 매개변수(parameter)와 전달인자(argument)는 적당히 섞어서 쓰이기도 하는데, 이 경우 문맥에 따라 의미를 달리해서 해석되기도 한다. 하지만 엄밀히 말해서 매개변수는 함수의 정의부분에 나열되어 있는 변수들을 의미하며, 전달인자는 함수를 호출할때 전달되는 실제 값을 의미한다. 이같은 의미를 명확히 하기 위해 매개변수(Parameter는 변수(variable)로, 전달인자(Argument)는 값(value)으로 보는 것이 일반적이다.

매개변수는 함수의 정의 부분에서 볼 수 있으며, 전달인자는 함수를 호출하는 부분에서 볼 수 있다.

f(x) = x*x와 같은 함수 정의 부분에서 변수 ‘x’가 매개변수가 되며,
f(2)와 같은 함수 호출 부분에서 값 ‘2’ 가 함수의 전달인자가 된다.

각각의 매개변수는 함수의 정의 부분에 포함되어 있는 고유한 특성이다. 예를 들어, (대다수의 언어에서는) 입력으로 들어온 2개의 정수를 더해서 합을 계산해 주는 함수의 경우 정수 형태의 매개변수 2개가 필요하다. 일반적으로 함수는 몇개의 매개변수를 가지든 상관없으며, 매개변수가 하나도 없을 수도 있다. 만약 함수가 매개변수를 가질 경우, 각각의 매개변수에 대한 정의를 나열해 놓은 것을 매개변수 목록(parameter list) 이라고 한다.

반면 전달인자는 함수가 호출될때 제공되는 값들을 말하며, 함수 정의의 한 부분으로 바뀌지 않는 매개변수와는 달리 호출 할 때마다 값이 바뀔 수 있다. 함수를 호출하는 부분에서 전달인자를 나열해 놓을 것을 전달인자 목록(argument list) 이라고 한다.

```
