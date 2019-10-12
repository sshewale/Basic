### Unit Testing documentation

### Jest Documentation:

https://jestjs.io/docs/en/getting-started

### Enzyme Ducumentation:

https://airbnb.io/enzyme/

### Useful Links:

https://www.youtube.com/watch?v=f6Uk0qS_Lho
https://create-react-app.dev/docs/running-tests
https://circleci.com/blog/continuously-testing-react-applications-with-jest-and-enzyme/

### Mocking canvas to resolve test issue with jsPDf

https://github.com/facebook/create-react-app/issues/6020

### Snapshot testing

Use of snapshot testing to track changes to components. This technique enables taking snapshots of our components, and when the component’s rendered output changes, it helps us to easily detect the changes made.
The snapshots are also readable, so it’s an easier way of verifying that components render the expected output.
Install the enzyme-to-json package to convert our React components to a snapshot during testing.
need to configure jest to use this package as the snapshot serializer. We’ll configure this in package.json by adding:

"jest": {
"snapshotSerializers": [
"enzyme-to-json/serializer"
]
}

# Note : Updating snapshot to make sure snapshot has latest content

Reference Link :
https://jestjs.io/docs/en/snapshot-testing
https://circleci.com/blog/continuously-testing-react-applications-with-jest-and-enzyme/
