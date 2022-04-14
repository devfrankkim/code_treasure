- https://www.robinwieruch.de/react-router-private-routes/#:~:text=Private%20Routes%20in%20React%20Router,page%2C%20they%20cannot%20access%20it.

```js
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};
```

```js
const App = () => {
  ...

  return (
    <>
      ...

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        ...
      </Routes>
    </>
  );
};

const Home = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};
```

```js
const ProtectedRoute = ({ user, redirectPath = "/landing" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};


const App = () => {
  ...

  return (
    <>
      ...

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="analytics" element={<Analytics />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};
```
