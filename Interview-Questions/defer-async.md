### defer vs async

- defer -> HTML parsing을 막지 않는다. HTML parsing이 되면서, 같이 네트워크에서 스크립트를 fetching 해온다. 스크립트 순서대로 실행된다. (만약 dependent한 관계라면, defer를 사용하는 것이 좋다.)

- async -> 왜? HTMl parsing을 하고 script를 fetching 해오고, 다운로드가 되면, 실행시킨다. HTML parsing에 영향을 준다. (구글 애널리스틱, 방문자 수 등 independent 한 요소는 async를 사용하는 것이 좋다.)
