# NamasteReact

## Read About NPM.

- Setup npm into our project using cmd npm init.

## Read About Bundler.

- Setup parcel into our project using cmd npm install -D parcel

## Read the difference btw package.json vs package.lock.json.

## Read about the Transitive Dependency.

## Read the difference btw ^caret vs ~tilde in package.json.

### node_modules is a collection of packages.

- Ignite our app by hitting cmd: npx parcel index.html

- we don't push those files/folders onto github which can be easily regenerated.

## npm vs npx

- npm: used to install a package
- npx: used to execute a package

## Install React & ReactDOM packages into our project

- npm install react
- npm install react-dom

### remove cdn links of react & react-dom from index.html file.

## These are all the things that parcel is doing for us:

- Making Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Alog (Written in C++)
- Caching (Faster builds)
- Image Optimization
- Minification
- Bundling
- Compressing Files (Like removing white spaces etc)
- Consistent Hashing
- Code Spliting
- Differential Bundling (To support multiple types of browsers)
- Diagnostic
- Error Handling
- Tree Shaking (Remove unused code)
- https
- Different dev & prod bundles

# EP 3

## Read about JSX

## Read about Babel

## React Components

- Class-based components : Old way of writing code, used rarely in the industry
- Functional components : New way of writing code, most commonly used

## React Functional Components

- It's just a javascript function that returns some JSX or a react element.
- Always write React Functional Component with Caps letters otherwise you'll be confuse it with normal function.

## What is Component Composition

- A Component inside a component
- Calling a component inside another component is component composition

## Two types of Export/Import

### Default Export

- export default component;
- import component from path;

### Named Export

- export const component;
- import {component} from path;

## React Hooks

(Normal JS utility functions)

- useState()
- useEffect()
