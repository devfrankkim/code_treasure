# What is Props?
```
Props are ways to provide input to components

Name Age Location

    PERSON

we can use props to give that person name, age and location
we don't have to store this data inside of the components
This way, we can have dynamic components
We can pass this information in only when we have to

if we have particular name, age, location.
We can display this with our PERSON components by passing in the property now you can do it individually like this or you cam imply spread over all of the properties
```
```js
<Person name={name} age={age} location={location} />
```

```js
const Person = props => (
    <h1>{props.name}, {props.age}</h1>
    <h2>{props.location}</h2>
)
``
```
