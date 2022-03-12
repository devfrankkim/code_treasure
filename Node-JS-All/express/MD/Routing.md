- MVC: 사용자 -> 액션 취하면 -> 컨트롤러가 일을 시작해 -> 모델로 가는 라우팅을 설정해줘 -> (우리는 여기서 server에 라우팅 config 설정 해줘야한다.)

```js
// routes/api/employees
// ================== before MVC  ==================
// router
//   .route("/")
//   .get((req, res) => {
//     res.json(data.employees);
//   })
//   .post((req, res) => {
//     // getting params coming in to the request
//     // refer to those params with req.body
//     // post new employees
//     res.json({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//     });
//   })
//   .put((req, res) => {
//     res.json({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//     });
//   })
//   .delete((req, res) => {
//     res.json({ id: req.body.id });
//   });

// // We could have a param directly in the URL
// // Get request that has a parameter inside of URL
// router.route("/:id").get((req, res) => {
//   // Pulling the parameters directly out of URL
//   res.json({ id: req.params.id });
// });

// module.exports = router;
```
