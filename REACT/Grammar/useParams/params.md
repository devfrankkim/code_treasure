### useParams

1. `<Slider />` : DB 에서 불러온 데이터 값을 스테이트로 저장해둔다.
2. `<Slider />` : 데이터 & 페이지 이동을 위해 URL로 특정 데이터 키값을 넘긴다. `/category/${data.type}/${id}`
3. `<App />` : 페이지/컴포넌트에서 보낸`id`값을 `:listingId`로 명시한다. `/category/:categoryName/:listingId`
4. `<App />` : App 통신선에서, 키값(`listingId`)을 `가지고 특정 페이지/컴포넌트로 이동`하라고 명령한다.
5. `<Listing />` : 특정 페이지/컴포넌트로 이동하고 템플릿을 만든다.
6. `<Listing />` : 특정 페이지/컴포넌트에서 URL로 데이터 키 값을 받는다. `params = useParams()` => `params.listingId`
7. `<Listing />` : 해당 키 값의 전체 데이터를 불러온다. `(useEffect)` => `doc(db, 'listings', params.listingId)`
8. `<Listing />` : 해당 전체 데이터를 스테이트에 담는다. ` setListing(docSnap.data())`
9. `<Listing />` : 데이터를 이용하여 템플릿을 완성한다.

```js
// (1) 구조: components/Slider.jsx
 const navigate = useNavigate()

<SwiperSlide
  key={id}
  onClick={() => navigate(`/category/${data.type}/${id}`)}
/>

// (2) 구조: src/App.js
<Router>
  <Routes>
    <Route
      path='/category/:categoryName/:listingId'
      element={<Listing />}
    />
  </Routes>
</Router>

// (3) 구조: pages/Listing.jsx
  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      }
    }

    fetchListing()
  }, [params.listingId])
```
