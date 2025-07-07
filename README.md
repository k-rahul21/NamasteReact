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

# useEffect()

- if there is no dependency array then it'll call on every render
- if there's an empty dependency array then it'll call only once on initial render of the component
- if there's dependency then it'll call whenever the dependency value changes + on initial render of the component

# React Router Dom

- To do the routing we need createBrowserRouter, RouterProvider from 'react-router-dom" library;
- createBrowserRouter: use to create route for different paths.
- eg: const appRouter = createBrowserRouter([{path: "/", element: <Home/>, errorElement: "here you can put error page"}, {path: "/about", element: <About/>}])
- RouterProvider: use to render CreateBrowserRouter by passing it in the RouterProvider component.
- eg: root.render(<RouterProvider  router={appRouter}/>)

## useRouterError

- Give you more details about error

## use the Outlet component from react-router-dom to render children path

## use the children key to define children path

## use the Link component from the react-router-dom to navigate btw other components

- use this component into the header file

## Anchor tag

- don't use the anchor tag to navigate btw other components because this will leads to reload our whole website again which will lead to performance issue.
- use the Link component

## Two types of Routing in web apps

- server side routing
- client side routing

## why react known as single page application?

- Because it's the one page and when we go on different route on the app then only components got interchange through client side routing.

## useParams hook

- to read the params from the url
