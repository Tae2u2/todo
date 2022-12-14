## 🛫원티드 프리온보딩 프론트엔드


 - Todo앱 구현하기 + 리팩토링
 - React.js + typescript + recoil + scss

---

### 🖊️Writing

[타입스크립트 적용과정과 코드분리 과정 정리](https://velog.io/@tae2u2/series/TS-%EC%8B%A0%EC%83%9D%EC%95%84-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%81%EC%9A%A9%EA%B8%B0)

<br />

***

![1 main](https://user-images.githubusercontent.com/74426470/183235003-bb72bd89-5a00-409c-9264-4ec37fe28aed.png)
![5 edit](https://user-images.githubusercontent.com/74426470/183235493-0d970132-cd36-4ef3-962e-ecb89e65a273.png)
![4 detail](https://user-images.githubusercontent.com/74426470/183235388-bb9acde8-7ace-4064-ade8-706c015df797.png)
<br />

#### Todo/Detail 구현

***

 - 목록 / 상세 영역으로 나누어 구현해주세요<br />
   ✅ Todo 목록을 볼 수 있습니다.<br />
   ✅ Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.<br />
   ✅ Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.<br />
   ✅ Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.<br />
 - 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.<br />
   ✅ 새로고침을 했을 때 현재 상태가 유지되어야 합니다.<br />
   ✅ 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.<br />
 - 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요<br />
   ✅ 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다<br /><br />
 
 ***
 
![2 login](https://user-images.githubusercontent.com/74426470/183235006-c29d702c-f359-4c48-a0b9-1e900143c831.png)
- 
![3 token](https://user-images.githubusercontent.com/74426470/183235005-256f80f7-14ff-4f32-8fcb-c33090de78d9.png)

#### Login/SignUp 구현

***

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다<br />
  ✔️로그인, 회원가입을 별도의 경로로 분리해도 무방합니다<br />
  ✅최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요<br />
- 이메일과 비밀번호의 유효성을 확인합니다<br />
  ✅이메일 조건 : 최소 @, . 포함<br />
  ✅비밀번호 조건 : 8자 이상 입력<br />
  ✅이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요<br />
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요<br />
  ✅응답으로 받은 토큰은 로컬 스토리지에 저장해주세요<br />
  ✅다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요<br />
  ✅어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요<br />
  
