### URLSearchParams

1. pages/Listing.jsx: `<Link to={`/contact/${listing.userRef}?listingName=${listing.name}`} />`
2. src/App.jsx: `/contact/:landlordId`
3. pages/Contact.jsx: `?Subject=${searchParams.get("listingName")}`

```js
// pages/Listing.jsx
{
  auth.currentUser?.uid !== listing.userRef && (
    <Link
      to={`/contact/${listing.userRef}?listingName=${listing.name}`}
      className="primaryButton"
    >
      Contact Landlord
    </Link>
  );
}
```

```js
// src/App.js
<Route path="/contact/:landlordId" element={<Contact />} />
```

```js
// pages/Contact.jsx => params.landlordId (useParams())
import { useParams, useSearchParams } from "react-router-dom";
const params = useParams();

useEffect(() => {
  const getLandlord = async () => {
    const docRef = doc(db, "users", params.landlordId);

    if (docSnap.exists()) {
      setLandlord(docSnap.data());
    }
  };

  getLandlord();
}, [params.landlordId]);
```

```js
// pages/Contact.jsx => searchParams.get("listingName")
<a
  href={`mailto:${landlord.email}
  ?Subject=${searchParams.get("listingName")}
  &body=${message}`}
>
  <button type="button" className="primaryButton">
    Send Message
  </button>
</a>
```
