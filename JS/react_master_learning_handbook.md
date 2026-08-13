# React Master Learning Handbook

> **A single-file beginner-to-advanced guide for learning modern React**
>
> **Coverage:** React fundamentals, modern Hooks, React 19.x concepts, forms, effects, state architecture, routing, TypeScript, testing, performance, accessibility, security, SSR, Server Components, production practices, design patterns, real-world scenarios, interview revision, and project roadmap.
>
> **Current baseline:** Written for the React 19.2 era. Version-sensitive APIs should always be checked against the official documentation when starting or upgrading a production project.

---

# Table of Contents

1. [How to Use This Handbook](#1-how-to-use-this-handbook)
2. [What React Is](#2-what-react-is)
3. [React Mental Model](#3-react-mental-model)
4. [JavaScript Prerequisites](#4-javascript-prerequisites)
5. [Creating a React Project](#5-creating-a-react-project)
6. [Project Structure](#6-project-structure)
7. [JSX](#7-jsx)
8. [Components](#8-components)
9. [Props](#9-props)
10. [`children` and Composition](#10-children-and-composition)
11. [Conditional Rendering](#11-conditional-rendering)
12. [Lists and Keys](#12-lists-and-keys)
13. [Events](#13-events)
14. [`useState`](#14-usestate)
15. [State Snapshots and Batching](#15-state-snapshots-and-batching)
16. [Objects and Arrays in State](#16-objects-and-arrays-in-state)
17. [Forms](#17-forms)
18. [Controlled vs Uncontrolled Components](#18-controlled-vs-uncontrolled-components)
19. [Lifting State Up](#19-lifting-state-up)
20. [Single Source of Truth](#20-single-source-of-truth)
21. [Derived State](#21-derived-state)
22. [Preserving and Resetting State](#22-preserving-and-resetting-state)
23. [`useEffect`](#23-useeffect)
24. [When You Do Not Need an Effect](#24-when-you-do-not-need-an-effect)
25. [Effect Cleanup and Dependencies](#25-effect-cleanup-and-dependencies)
26. [`useEffectEvent`](#26-useeffectevent)
27. [`useRef`](#27-useref)
28. [DOM Refs](#28-dom-refs)
29. [`useImperativeHandle`, `useLayoutEffect`, `useInsertionEffect`](#29-useimperativehandle-uselayouteffect-useinsertioneffect)
30. [Custom Hooks](#30-custom-hooks)
31. [Context](#31-context)
32. [`useReducer`](#32-usereducer)
33. [Reducer + Context](#33-reducer--context)
34. [`useMemo`, `useCallback`, and `memo`](#34-usememo-usecallback-and-memo)
35. [React Compiler](#35-react-compiler)
36. [`useTransition`](#36-usetransition)
37. [`useDeferredValue`](#37-usedeferredvalue)
38. [`useId`](#38-useid)
39. [`useSyncExternalStore` and `useDebugValue`](#39-usesyncexternalstore-and-usedebugvalue)
40. [Actions: `useActionState`, `useOptimistic`, `useFormStatus`](#40-actions-useactionstate-useoptimistic-useformstatus)
41. [`use`](#41-use)
42. [Fragments and Strict Mode](#42-fragments-and-strict-mode)
43. [Suspense](#43-suspense)
44. [Lazy Loading and Code Splitting](#44-lazy-loading-and-code-splitting)
45. [`Activity`](#45-activity)
46. [Portals](#46-portals)
47. [Error Boundaries](#47-error-boundaries)
48. [Data Fetching](#48-data-fetching)
49. [Race Conditions and Cancellation](#49-race-conditions-and-cancellation)
50. [CRUD](#50-crud)
51. [Routing](#51-routing)
52. [Authentication and Authorization](#52-authentication-and-authorization)
53. [State Management Strategy](#53-state-management-strategy)
54. [Local vs Global vs Server State](#54-local-vs-global-vs-server-state)
55. [Styling](#55-styling)
56. [Accessibility](#56-accessibility)
57. [TypeScript with React](#57-typescript-with-react)
58. [Testing](#58-testing)
59. [Performance](#59-performance)
60. [Rendering, Reconciliation, and Virtual DOM](#60-rendering-reconciliation-and-virtual-dom)
61. [Immutability](#61-immutability)
62. [Reusable Component Design](#62-reusable-component-design)
63. [React Design Patterns](#63-react-design-patterns)
64. [API Layer Architecture](#64-api-layer-architecture)
65. [Environment Variables](#65-environment-variables)
66. [Error Handling](#66-error-handling)
67. [Security](#67-security)
68. [SSR, Hydration, and Streaming](#68-ssr-hydration-and-streaming)
69. [React Server Components](#69-react-server-components)
70. [SEO](#70-seo)
71. [Production Build and Deployment](#71-production-build-and-deployment)
72. [Common Mistakes](#72-common-mistakes)
73. [Debugging](#73-debugging)
74. [Legacy React](#74-legacy-react)
75. [Interview Questions](#75-interview-questions)
76. [Real-World Architecture Scenarios](#76-real-world-architecture-scenarios)
77. [Practice Projects](#77-practice-projects)
78. [Learning Roadmap](#78-learning-roadmap)
79. [Cheat Sheet](#79-cheat-sheet)
80. [Glossary](#80-glossary)
81. [Mastery Checklist](#81-mastery-checklist)
82. [Official References](#82-official-references)

---

# 1. How to Use This Handbook

Do not try to memorize every React API. Learn the mental model first.

```text
Data / State
     ↓
Component renders
     ↓
JSX describes UI
     ↓
React updates the screen
     ↑
User interaction
     ↓
State update
     ↓
Render again
```

For every topic:

1. Read the explanation.
2. Type the example yourself.
3. Change the example.
4. Break it intentionally.
5. Fix it.
6. Build a small feature using the idea.

React mastery comes from correctly answering questions such as:

```text
Who owns this state?
Can this value be derived?
Does this value affect rendering?
Is this logic caused by an event?
Is this an external-system synchronization problem?
Does this data belong on the client or server?
```

---

# 2. What React Is

React is a JavaScript library for building user interfaces from reusable **components**.

Example application tree:

```text
App
├── Header
│   ├── Logo
│   ├── SearchBar
│   └── UserMenu
├── InvoicePage
│   ├── InvoiceFilters
│   ├── InvoiceTable
│   └── InvoiceDetails
└── Footer
```

A component is normally a JavaScript function:

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

Use it like an element:

```jsx
function App() {
  return (
    <main>
      <Welcome />
    </main>
  );
}
```

React is especially useful for interactive products such as:

- Dashboards
- ERP/CRM frontends
- E-commerce
- Workflow applications
- Invoice systems
- Admin portals
- SaaS applications
- Forms
- Reporting tools
- Social applications

React mainly solves the UI problem. Routing, caching, authentication, server rendering, and server data can be provided by browser APIs, React APIs, frameworks, or additional libraries.

---

# 3. React Mental Model

The most useful equation is:

```text
UI = f(state)
```

If state says:

```js
const isLoggedIn = true;
```

the UI may be:

```jsx
<h1>Dashboard</h1>
```

If state changes:

```js
const isLoggedIn = false;
```

React can render:

```jsx
<h1>Please Login</h1>
```

## Declarative vs imperative programming

Imperative DOM code:

```js
const button = document.querySelector('#save');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'Saved';
});
```

React:

```jsx
function SaveExample() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <button onClick={() => setSaved(true)}>Save</button>
      {saved && <p>Saved</p>}
    </>
  );
}
```

You describe what the screen should look like for the current data. React coordinates the updates.

---

# 4. JavaScript Prerequisites

Before React, understand these JavaScript topics.

## Variables

```js
const name = 'Aisha';
let count = 0;
```

## Functions

```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
```

## Objects and arrays

```js
const user = {
  id: 1,
  name: 'Aisha',
  role: 'Admin',
};

const users = ['Aisha', 'Rahul'];
```

## Destructuring

```js
const { name, role } = user;
const [first, second] = users;
```

React Hooks often use array destructuring:

```js
const [count, setCount] = useState(0);
```

## Spread syntax

```js
const updatedUser = {
  ...user,
  role: 'Manager',
};

const updatedUsers = [...users, 'Fatima'];
```

## Important array methods

```js
users.map(user => user.name);
users.filter(user => user.active);
users.find(user => user.id === 10);
users.some(user => user.role === 'Admin');
items.reduce((sum, item) => sum + item.amount, 0);
```

## Modules

```js
export function Button() {
  return <button>Save</button>;
}
```

```js
import { Button } from './Button';
```

## Async JavaScript

```js
async function loadUsers() {
  const response = await fetch('/api/users');
  return response.json();
}
```

Know promises, `async/await`, `try/catch`, and basic browser APIs before attempting advanced React.

---

# 5. Creating a React Project

For learning a modern client-side React application, Vite is a common build tool.

```bash
npm create vite@latest
```

Choose React and JavaScript or TypeScript.

Then:

```bash
cd my-react-app
npm install
npm run dev
```

Common entry point:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Create React App

Older tutorials may use:

```bash
npx create-react-app my-app
```

Create React App is deprecated for new applications. Understand it for legacy maintenance, but use modern tooling/framework guidance for new work.

## Library vs framework

React is a library. Modern React frameworks can add:

- Routing
- Server rendering
- Data loading
- Server Components
- Server functions/actions
- Bundling
- Caching
- Deployment integration

For learning React fundamentals, a small Vite project is useful because it exposes React concepts with less framework abstraction.

---

# 6. Project Structure

Small project:

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

Larger feature-oriented application:

```text
src/
├── app/
│   ├── router/
│   ├── providers/
│   └── App.tsx
├── features/
│   ├── auth/
│   ├── invoices/
│   ├── users/
│   └── reports/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── utils/
└── main.tsx
```

Feature structure:

```text
features/invoices/
├── components/
├── pages/
├── hooks/
├── services/
├── types/
└── utils/
```

Rule: organize large products around **business features**, not one huge `components` directory containing hundreds of unrelated files.

---

# 7. JSX

JSX lets you describe UI using markup-like syntax inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;
```

JSX is not exactly HTML.

## JavaScript expressions

```jsx
const name = 'Aisha';

return <h1>Hello {name}</h1>;
```

Calculations:

```jsx
<p>Total: {price * quantity}</p>
```

Function call:

```jsx
<p>{formatCurrency(total)}</p>
```

Ternary:

```jsx
<span>{active ? 'Active' : 'Inactive'}</span>
```

## One parent

Wrong:

```jsx
return (
  <h1>Title</h1>
  <p>Description</p>
);
```

Correct:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

## `className`

```jsx
<div className="card">...</div>
```

## Dynamic attributes

```jsx
<button disabled={isSaving}>Save</button>
```

## Inline styles

```jsx
<div style={{ padding: 16, backgroundColor: 'white' }}>
  Content
</div>
```

## Self-closing tags

```jsx
<img src="/logo.png" alt="Company logo" />
<input />
<MyComponent />
```

---

# 8. Components

A component normally returns JSX.

```jsx
function EmployeeCard() {
  return (
    <article>
      <h2>Aisha Khan</h2>
      <p>Software Engineer</p>
    </article>
  );
}
```

Component names start with a capital letter.

Good:

```jsx
function InvoiceTable() {}
```

Bad:

```jsx
function invoiceTable() {}
```

## Component responsibility

Avoid a 2,000-line component handling:

```text
API calls
filters
forms
modals
tables
permissions
notifications
exports
business calculations
```

Break it into focused parts.

```text
InvoicePage
├── InvoiceToolbar
├── InvoiceSummary
├── InvoiceTable
└── InvoiceDetailsDrawer
```

---

# 9. Props

Props are inputs passed from parent to child.

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

```jsx
<Greeting name="Aisha" />
<Greeting name="Rahul" />
```

Multiple props:

```jsx
function EmployeeCard({ name, department, active }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{department}</p>
      <p>{active ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```

Props are read-only from the child's point of view.

If a child needs to request a change, pass a callback:

```jsx
function DeleteButton({ onDelete }) {
  return <button onClick={onDelete}>Delete</button>;
}
```

```jsx
<DeleteButton onDelete={() => deleteInvoice(invoice.id)} />
```

---

# 10. `children` and Composition

`children` is the content placed inside a component.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

```jsx
<Card>
  <h2>Invoice</h2>
  <p>INV-1001</p>
</Card>
```

Reusable modal:

```jsx
function Modal({ title, children, onClose }) {
  return (
    <div className="modal">
      <header>
        <h2>{title}</h2>
        <button onClick={onClose}>×</button>
      </header>
      <section>{children}</section>
    </div>
  );
}
```

React favors composition over inheritance.

---

# 11. Conditional Rendering

## `if`

```jsx
function Status({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please login</p>;
  }

  return <p>Welcome</p>;
}
```

## Ternary

```jsx
<p>{approved ? 'Approved' : 'Pending'}</p>
```

## `&&`

```jsx
{isAdmin && <AdminPanel />}
```

Use explicit boolean comparisons when numeric values may be zero:

```jsx
{items.length > 0 && <ItemList />}
```

---

# 12. Lists and Keys

```jsx
const users = [
  { id: 1, name: 'Aisha' },
  { id: 2, name: 'Rahul' },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Keys help React preserve identity across list renders.

Prefer:

```jsx
key={user.id}
```

Avoid unstable keys:

```jsx
key={Math.random()}
```

Array index keys can be unsafe when items are inserted, removed, reordered, or filtered.

---

# 13. Events

```jsx
function SaveButton() {
  function handleClick() {
    console.log('Saved');
  }

  return <button onClick={handleClick}>Save</button>;
}
```

Do not call it during rendering:

```jsx
// Wrong
<button onClick={handleClick()}>
```

Arguments:

```jsx
<button onClick={() => handleDelete(id)}>Delete</button>
```

Event object:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

Form submit:

```jsx
function handleSubmit(event) {
  event.preventDefault();
}
```

Common events:

```text
onClick
onChange
onSubmit
onBlur
onFocus
onKeyDown
onKeyUp
onMouseEnter
onMouseLeave
```

---

# 14. `useState`

State lets a component remember data between renders.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

Common state:

```js
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [users, setUsers] = useState([]);
const [selectedId, setSelectedId] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
```

State should contain values that affect rendering and can change over time.

---

# 15. State Snapshots and Batching

State behaves like a snapshot for a particular render.

```js
setCount(count + 1);
console.log(count);
```

The log still sees the value from the current render.

When next state depends on previous state, use an updater:

```js
setCount(c => c + 1);
```

Three increments:

```js
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
```

Toggle:

```js
setOpen(open => !open);
```

React can batch multiple state updates to avoid unnecessary work.

---

# 16. Objects and Arrays in State

Treat state as immutable.

Wrong:

```js
user.name = 'Aisha';
setUser(user);
```

Correct:

```js
setUser({
  ...user,
  name: 'Aisha',
});
```

Nested:

```js
setUser({
  ...user,
  address: {
    ...user.address,
    city: 'Mumbai',
  },
});
```

Add array item:

```js
setItems([...items, newItem]);
```

Remove:

```js
setItems(items.filter(item => item.id !== id));
```

Update:

```js
setItems(
  items.map(item =>
    item.id === updatedItem.id ? updatedItem : item
  )
);
```

Sort without mutating original:

```js
const sorted = [...items].sort(compareFunction);
```

---

# 17. Forms

Controlled form:

```jsx
function EmployeeForm() {
  const [form, setForm] = useState({
    name: '',
    department: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm(current => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <select
        name="department"
        value={form.department}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
}
```

Checkbox:

```jsx
<input
  type="checkbox"
  checked={form.active}
  onChange={e =>
    setForm({ ...form, active: e.target.checked })
  }
/>
```

File:

```jsx
<input
  type="file"
  onChange={e => {
    const file = e.target.files?.[0];
  }}
/>
```

Validation:

```js
const errors = {};

if (!form.name.trim()) {
  errors.name = 'Name is required';
}

if (!form.email.includes('@')) {
  errors.email = 'Enter a valid email';
}
```

Server-side validation is still required.

---

# 18. Controlled vs Uncontrolled Components

Controlled input:

```jsx
const [query, setQuery] = useState('');

<input
  value={query}
  onChange={e => setQuery(e.target.value)}
/>
```

React state is the source of truth.

Uncontrolled input:

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />
```

Read later:

```js
console.log(inputRef.current.value);
```

Controlled fields are useful for validation, conditional UI, filtering, and synchronization. Uncontrolled fields are useful when the browser can own the value and you only need it at specific moments.

---

# 19. Lifting State Up

If two siblings need the same state, move it to their nearest common parent.

```jsx
function SearchPage() {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchInput query={query} onQueryChange={setQuery} />
      <SearchResults query={query} />
    </>
  );
}
```

This avoids duplicated sources of truth.

---

# 20. Single Source of Truth

Bad:

```js
const [selectedUser, setSelectedUser] = useState(user);
const [selectedUserId, setSelectedUserId] = useState(user.id);
```

These can disagree.

Better:

```js
const [selectedUserId, setSelectedUserId] = useState(null);

const selectedUser = users.find(
  user => user.id === selectedUserId
);
```

Store the minimal source state. Derive what you can.

---

# 21. Derived State

Bad:

```jsx
const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(items.reduce((sum, item) => sum + item.amount, 0));
}, [items]);
```

Better:

```jsx
const total = items.reduce(
  (sum, item) => sum + item.amount,
  0
);
```

Ask:

> Can this value be calculated from current props/state during render?

If yes, it usually does not need separate state.

---

# 22. Preserving and Resetting State

React associates state with a component's position and identity in the UI tree.

You can force a reset with a new key:

```jsx
<ProfileForm
  key={selectedUserId}
  userId={selectedUserId}
/>
```

Scenario:

```text
Select Employee A
→ Form contains A draft state

Select Employee B
→ key changes
→ old form instance is discarded
→ new form state starts fresh
```

Keys are therefore about component identity, not only list warnings.

---

# 23. `useEffect`

`useEffect` is for synchronizing React with an external system.

Examples:

- Timers
- Browser event listeners
- Network connections
- Subscriptions
- Third-party widgets
- External browser APIs

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Subscription:

```jsx
useEffect(() => {
  const connection = connect(roomId);
  connection.start();

  return () => {
    connection.stop();
  };
}, [roomId]);
```

Think of Effects as **synchronization**, not as a general place to put all logic.

---

# 24. When You Do Not Need an Effect

Do not use an Effect for values that can be calculated during render.

Bad:

```jsx
const [fullName, setFullName] = useState('');

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Better:

```jsx
const fullName = `${firstName} ${lastName}`;
```

Bad:

```jsx
useEffect(() => {
  setFilteredProducts(products.filter(p => p.active));
}, [products]);
```

Better:

```jsx
const filteredProducts = products.filter(p => p.active);
```

Event-specific logic belongs in event handlers:

```jsx
function handleSubmit() {
  saveForm();
}
```

not indirectly through an Effect unless actual synchronization is required.

---

# 25. Effect Cleanup and Dependencies

Timer cleanup:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(id);
}, []);
```

Event listener:

```jsx
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

Dependency example:

```jsx
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

Do not remove dependencies just to silence the linter. Often the real problem is that:

- the Effect is unnecessary,
- an object/function is recreated every render,
- event logic was placed in an Effect,
- state design is overly complex.

---

# 26. `useEffectEvent`

`useEffectEvent` helps Effect logic access the latest values without forcing the Effect to reconnect/resubscribe for changes that are not part of the synchronization identity.

Conceptual example:

```jsx
function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected', theme);
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.on('connected', onConnected);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);
}
```

A theme change should update the notification style, but should not necessarily reconnect the chat room.

Do not use Effect Events as a trick to hide legitimate Effect dependencies.

---

# 27. `useRef`

A ref stores a mutable value across renders without itself causing rendering.

```jsx
const timerRef = useRef(null);
```

```js
timerRef.current = setInterval(...);
```

Use refs for:

- DOM nodes
- Timer IDs
- Previous values
- External library instances
- Mutable information not needed for rendering

If changing the value should change the screen, state is normally the correct tool.

---

# 28. DOM Refs

Focus an input:

```jsx
function SearchForm() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        Focus
      </button>
    </>
  );
}
```

Scroll:

```js
sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
```

Use DOM refs for imperative browser operations that cannot be expressed cleanly through normal props/state.

---

# 29. `useImperativeHandle`, `useLayoutEffect`, `useInsertionEffect`

## `useImperativeHandle`

Use it when a component deliberately exposes a small imperative API through a ref.

```jsx
function CustomInput({ ref }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} />;
}
```

Prefer declarative APIs unless imperative control is genuinely needed.

## `useLayoutEffect`

Runs after DOM changes but before browser paint. Useful for visual measurement/positioning.

```jsx
useLayoutEffect(() => {
  const rect = tooltipRef.current.getBoundingClientRect();
  setHeight(rect.height);
}, []);
```

Do not replace normal Effects with it without reason because it can block painting.

## `useInsertionEffect`

A specialized Hook mainly useful to style/CSS-in-JS library authors for inserting styles before layout Effects. Ordinary application code rarely needs it.

---

# 30. Custom Hooks

A custom Hook extracts reusable stateful logic.

```jsx
function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return online;
}
```

Usage:

```jsx
function NetworkStatus() {
  const online = useOnlineStatus();
  return <p>{online ? 'Online' : 'Offline'}</p>;
}
```

Custom Hooks share logic, not one shared state instance.

Naming convention: `useSomething`.

---

# 31. Context

Context lets descendants access shared values without manually forwarding the same prop through every layer.

```jsx
const ThemeContext = createContext('light');
```

Provide:

```jsx
<ThemeContext value="dark">
  <App />
</ThemeContext>
```

Read:

```jsx
const theme = useContext(ThemeContext);
```

Common uses:

- Theme
- Authenticated user
- Locale
- Feature flags
- App-level settings

Do not put every state variable in Context. Context is a distribution mechanism, not automatically a complete state-management architecture.

---

# 32. `useReducer`

Reducers centralize complex state updates.

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };

    case 'decrement':
      return { ...state, count: state.count - 1 };

    case 'reset':
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
```

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

```jsx
<button onClick={() => dispatch({ type: 'increment' })}>
  Increase
</button>
```

Use a reducer when:

- many related state fields change together,
- update rules are complex,
- many handlers update the same state,
- explicit actions improve reasoning,
- you want reducer logic separately testable.

---

# 33. Reducer + Context

For medium-sized shared client state:

```jsx
const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatch}>
        {children}
      </TaskDispatchContext>
    </TaskContext>
  );
}
```

Custom access Hooks:

```jsx
function useTasks() {
  return useContext(TaskContext);
}

function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}
```

This architecture can handle many applications without an external global store.

---

# 34. `useMemo`, `useCallback`, and `memo`

## `useMemo`

Caches a calculation result between renders when dependencies are unchanged.

```jsx
const visibleUsers = useMemo(() => {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
}, [users, query]);
```

## `useCallback`

Caches a function definition.

```jsx
const handleDelete = useCallback(id => {
  setItems(items => items.filter(item => item.id !== id));
}, []);
```

## `memo`

Can skip re-rendering a component when its props are equivalent.

```jsx
const UserRow = memo(function UserRow({ user }) {
  return <div>{user.name}</div>;
});
```

Do not use memoization everywhere. It adds complexity and also has a cost. Measure first.

---

# 35. React Compiler

React Compiler can automatically optimize compatible React components and Hooks, reducing the need for some manual memoization.

Historically developers often used:

```text
memo
useMemo
useCallback
```

for performance-sensitive render identity/caching.

The compiler can automate many cases, but you still need to understand:

- component purity,
- state ownership,
- render behavior,
- Effects,
- immutable updates,
- performance measurement.

A compiler cannot rescue poor application architecture.

---

# 36. `useTransition`

Transitions mark certain state updates as non-urgent.

Scenario:

```text
User types
→ input text should update immediately
→ expensive result panel can update with lower priority
```

```jsx
function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);

    startTransition(() => {
      setSearchQuery(value);
    });
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <span>Updating...</span>}
      <SearchResults query={searchQuery} />
    </>
  );
}
```

Do not use a transition to directly control a text input's own urgent value.

---

# 37. `useDeferredValue`

Defers consumption of a changing value by a lower-priority part of the UI.

```jsx
const deferredQuery = useDeferredValue(query);
```

```jsx
<input value={query} onChange={e => setQuery(e.target.value)} />
<SearchResults query={deferredQuery} />
```

Difference:

```text
useTransition
→ mark chosen state updates as non-urgent.

useDeferredValue
→ let consumers temporarily use an older value.
```

This is not the same as network debouncing.

---

# 38. `useId`

Generates stable IDs useful for accessibility relationships.

```jsx
function PasswordField() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Password</label>
      <input id={id} type="password" />
    </>
  );
}
```

Do not use `useId` to create list keys. Keys should come from data identity.

---

# 39. `useSyncExternalStore` and `useDebugValue`

## `useSyncExternalStore`

For safely subscribing React components to an external store/data source.

```jsx
const snapshot = useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot
);
```

Commonly used by library authors or indirectly through state libraries.

## `useDebugValue`

Adds a label for a custom Hook in React DevTools.

```jsx
useDebugValue(online ? 'Online' : 'Offline');
```

Useful especially for reusable Hook libraries.

---

# 40. Actions: `useActionState`, `useOptimistic`, `useFormStatus`

Modern React supports Action-oriented async workflows.

## `useActionState`

```jsx
const [state, formAction, isPending] =
  useActionState(saveUser, {});
```

Conceptual action:

```jsx
async function saveUser(previousState, formData) {
  const name = formData.get('name');

  if (!name) {
    return { error: 'Name is required' };
  }

  await apiSaveUser({ name });
  return { success: true };
}
```

```jsx
<form action={formAction}>
  <input name="name" />
  <button disabled={isPending}>Save</button>
  {state.error && <p>{state.error}</p>}
</form>
```

## `useOptimistic`

Optimistic UI assumes success temporarily for faster feedback.

```text
Click Add Comment
→ Show comment immediately
→ Send request
→ Keep/reconcile after server response
```

Useful for low-risk, likely-success interactions. Be careful with financial or irreversible operations.

## `useFormStatus`

Reads parent form submission status.

```jsx
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}
```

---

# 41. `use`

`use` can read supported resources such as Promises or Context.

Conceptual Promise use:

```jsx
function UserDetails({ userPromise }) {
  const user = use(userPromise);
  return <h2>{user.name}</h2>;
}
```

It can integrate with Suspense when reading Promises.

Treat `use` as an advanced API. Its usefulness often depends on framework/server architecture.

---

# 42. Fragments and Strict Mode

## Fragment

```jsx
<>
  <h1>Title</h1>
  <p>Body</p>
</>
```

Groups elements without adding an extra DOM wrapper.

## Strict Mode

```jsx
<StrictMode>
  <App />
</StrictMode>
```

In development, React may intentionally perform extra rendering/setup/cleanup work to expose bugs such as:

- impure rendering,
- missing cleanup,
- unsafe side effects,
- ref cleanup issues.

Do not disable Strict Mode simply because development logs appear twice. Fix the underlying impurity or cleanup issue.

---

# 43. Suspense

Suspense displays fallback UI while a supported child is not ready.

```jsx
<Suspense fallback={<Spinner />}>
  <Reports />
</Suspense>
```

Common integrations:

- lazy-loaded components,
- Suspense-enabled frameworks,
- supported Promise/resource reading,
- streaming server rendering.

Suspense is not automatically a replacement for every manually managed loading state.

---

# 44. Lazy Loading and Code Splitting

Load a heavy screen only when required.

```jsx
const AdminPage = lazy(() => import('./AdminPage'));
```

```jsx
<Suspense fallback={<p>Loading...</p>}>
  <AdminPage />
</Suspense>
```

Useful for:

- routes,
- report modules,
- admin areas,
- editors,
- rarely opened features.

---

# 45. `Activity`

React 19.2 includes the `Activity` component for managing UI that becomes hidden while React preserves/manages that subtree differently from simply deleting it.

Conceptual use:

```jsx
<Activity mode={visible ? 'visible' : 'hidden'}>
  <Sidebar />
</Activity>
```

It is a newer API. Check current official documentation before making it a core architectural dependency.

---

# 46. Portals

Portals render React content into a different DOM location.

```jsx
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.body
  );
}
```

Use cases:

- Modal
- Dialog
- Tooltip
- Dropdown overlay
- Toast

The React parent/child relationship still exists even though DOM placement changes.

---

# 47. Error Boundaries

Error boundaries catch rendering errors below them and show fallback UI.

Traditional implementation uses a class component:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
```

```jsx
<ErrorBoundary>
  <InvoicePage />
</ErrorBoundary>
```

Frameworks/libraries may provide more convenient error-boundary abstractions.

---

# 48. Data Fetching

Basic browser-side fetch:

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);

        const response = await fetch('/api/users', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to load users.</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return users.map(user => (
    <div key={user.id}>{user.name}</div>
  ));
}
```

Large applications often benefit from a framework or server-state library for:

- caching,
- retries,
- deduplication,
- pagination,
- stale data,
- invalidation,
- mutations,
- background refetch.

---

# 49. Race Conditions and Cancellation

Scenario:

```text
Select A → request A starts
Select B → request B starts
B returns first → show B
A returns later → stale A overwrites B
```

Use cancellation:

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function loadUser() {
    const response = await fetch(`/api/users/${userId}`, {
      signal: controller.signal,
    });

    const data = await response.json();
    setUser(data);
  }

  loadUser().catch(error => {
    if (error.name !== 'AbortError') {
      console.error(error);
    }
  });

  return () => controller.abort();
}, [userId]);
```

Race-condition handling is essential for fast-changing search, route parameters, and dependent dropdowns.

---

# 50. CRUD

CRUD means:

```text
Create
Read
Update
Delete
```

Read:

```js
await fetch('/api/invoices');
```

Create:

```js
await fetch('/api/invoices', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(invoice),
});
```

Update:

```js
await fetch(`/api/invoices/${invoice.id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(invoice),
});
```

Delete:

```js
await fetch(`/api/invoices/${id}`, {
  method: 'DELETE',
});
```

Keep networking details in a service/API layer rather than duplicating raw fetch configuration across many components.

---

# 51. Routing

Routing maps URLs to screens.

```text
/               → Home
/login          → Login
/users          → User list
/users/10       → User details
/invoices       → Invoice list
/invoices/1001  → Invoice details
```

React Router is a common routing solution. Exact APIs can change by major version, so always verify current documentation.

Core concepts:

```text
route
nested route
layout
route parameter
search/query parameter
navigation
redirect
loader
action
route error UI
```

Conceptual configuration:

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'users/:id', element: <UserDetailsPage /> },
    ],
  },
]);
```

Parameter:

```jsx
const { id } = useParams();
```

Navigation:

```jsx
const navigate = useNavigate();
navigate('/dashboard');
```

Link:

```jsx
<Link to="/users">Users</Link>
```

---

# 52. Authentication and Authorization

Simplified flow:

```text
Login form
↓
Server validates credentials
↓
Session/token established
↓
Client knows authenticated user
↓
Protected UI becomes available
```

Protected route concept:

```jsx
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
```

Permission UI:

```jsx
if (!user.permissions.includes('invoice.approve')) {
  return <AccessDenied />;
}
```

Critical rule:

> Hiding a React route or button is not security. The backend API must independently authenticate and authorize every protected operation.

---

# 53. State Management Strategy

Before installing a global state library, ask where each value belongs.

```text
Used by one component?
→ local state

Used by parent + children?
→ lift state

Used deeply in a subtree?
→ Context may help

Complex transitions?
→ reducer

Remote/server data?
→ server-state/cache solution

Truly global complex client state?
→ external store may help
```

State management is primarily a **state ownership problem**.

---

# 54. Local vs Global vs Server State

## Local UI state

```text
modal open
selected tab
input value
accordion expanded
```

Use `useState`/`useReducer`.

## Shared client state

```text
theme
auth user summary
locale
feature flags
cross-page workflow state
```

Possible tools:

```text
Context
Reducer + Context
External store
```

## Server state

```text
invoices
employees
products
reports
notifications
```

Server state has unique concerns:

```text
cache
staleness
retry
refetch
pagination
invalidations
mutations
```

Do not treat server data exactly like simple local component state.

---

# 55. Styling

React does not force one styling approach.

Options:

- Plain CSS
- CSS Modules
- Utility CSS
- CSS-in-JS
- Component libraries
- Design systems

Plain CSS:

```jsx
import './Button.css';

function Button() {
  return <button className="button">Save</button>;
}
```

CSS Module:

```css
/* Button.module.css */
.button {
  padding: 8px 16px;
  border-radius: 6px;
}
```

```jsx
import styles from './Button.module.css';

<button className={styles.button}>Save</button>
```

Production goals:

- consistency,
- maintainability,
- responsive design,
- design tokens,
- accessible contrast/focus states,
- predictable reusable components.

---

# 56. Accessibility

Use semantic HTML.

Good:

```jsx
<button onClick={save}>Save</button>
```

Avoid clickable generic elements when a native button exists.

Labels:

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

Icon-only button:

```jsx
<button aria-label="Delete invoice">
  <TrashIcon />
</button>
```

Field error:

```jsx
<input
  aria-invalid={Boolean(error)}
  aria-describedby="email-error"
/>

{error && <p id="email-error">{error}</p>}
```

Also consider:

- keyboard navigation,
- focus management,
- headings,
- meaningful alt text,
- color contrast,
- screen-reader labels,
- dialog semantics.

Accessibility should be built into components from the beginning.

---

# 57. TypeScript with React

Props:

```tsx
type UserCardProps = {
  id: number;
  name: string;
  active: boolean;
};

function UserCard({ id, name, active }: UserCardProps) {
  return <div>{id} - {name} - {String(active)}</div>;
}
```

Optional:

```tsx
type Props = {
  title: string;
  subtitle?: string;
};
```

Children:

```tsx
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};
```

State:

```tsx
const [user, setUser] = useState<User | null>(null);
```

Input event:

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  setName(event.target.value);
}
```

Submit:

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

Ref:

```tsx
const inputRef = useRef<HTMLInputElement | null>(null);
```

Status union:

```tsx
type Status = 'idle' | 'loading' | 'success' | 'error';
```

Unions are often better than several booleans that can create impossible combinations.

---

# 58. Testing

Testing layers:

```text
Unit
Component / Integration
End-to-End
```

Prefer testing behavior over implementation details.

Good question:

```text
When user clicks Increase, does 1 appear?
```

Less useful question:

```text
Did internal setter function get called exactly once?
```

Conceptual Testing Library example:

```jsx
render(<Counter />);

await user.click(
  screen.getByRole('button', { name: /increase/i })
);

expect(screen.getByText('1')).toBeInTheDocument();
```

High-value tests:

- business rules,
- form validation,
- permission checks,
- error states,
- major workflows,
- API integration behavior,
- regression-prone logic.

End-to-end scenario:

```text
Login
→ open invoice
→ update field
→ submit
→ approve
→ success message visible
```

---

# 59. Performance

First improve architecture.

## Keep state local

Do not place every small UI state at the app root.

## Avoid unnecessary Effects

Effects can create extra render cycles.

## Use stable keys

## Lazy-load large routes

## Virtualize huge lists

100,000 table rows should not usually all be rendered at once.

## Memoize only when justified

Use:

```text
React DevTools
Profiler
Browser Performance panel
React Performance Tracks
```

## Avoid heavy synchronous work

Possible strategies:

- server-side work,
- Web Workers,
- pagination,
- virtualization,
- memoization,
- transitions,
- deferred UI,
- code splitting.

Measure before optimizing.

---

# 60. Rendering, Reconciliation, and Virtual DOM

Simplified render process:

```text
State update
↓
React calls component
↓
New UI description is produced
↓
React compares/matches against previous tree
↓
Required DOM changes are committed
```

That matching/update process is commonly called **reconciliation**.

"Virtual DOM" is a common educational term for React's in-memory UI representation. Do not reduce performance to "Virtual DOM is fast".

Performance also depends on:

- component structure,
- state placement,
- JavaScript work,
- DOM complexity,
- network,
- layout and paint,
- bundle size,
- caching.

Important distinction:

> A React render does not automatically mean the browser DOM changed.

---

# 61. Immutability

Immutable object update:

```js
setUser({
  ...user,
  name: 'Aisha',
});
```

Immutable array update:

```js
setUsers(
  users.map(user =>
    user.id === id
      ? { ...user, active: true }
      : user
  )
);
```

Benefits:

- predictable reasoning,
- easier debugging,
- useful identity comparisons,
- less accidental shared mutation,
- cleaner memoization behavior.

---

# 62. Reusable Component Design

Bad API:

```jsx
<Button
  isInvoicePage
  isFinancePage
  makeBlue
  makeSmall
  specialMode
/>
```

Better:

```jsx
<Button variant="primary" size="sm">
  Save
</Button>
```

TypeScript example:

```tsx
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
};
```

Design reusable components around their capabilities, not around every page where they happen to appear.

---

# 63. React Design Patterns

## Composition

```jsx
<PageLayout
  header={<Header />}
  sidebar={<Sidebar />}
>
  <InvoicePage />
</PageLayout>
```

## Provider pattern

```jsx
<AuthProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</AuthProvider>
```

## Custom Hook pattern

```text
useInvoices()
usePermissions()
usePagination()
```

## Compound component

```jsx
<Tabs defaultValue="details">
  <Tabs.List>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
    <Tabs.Trigger value="history">History</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="details">...</Tabs.Content>
  <Tabs.Content value="history">...</Tabs.Content>
</Tabs>
```

Useful for Tabs, Accordion, Menu, Select, Modal, etc.

## Render props

```jsx
<DataLoader>
  {data => <UserList users={data} />}
</DataLoader>
```

Less common for app logic now because custom Hooks solve many of the same reuse problems, but still appears in libraries and legacy code.

## Higher-order component

```jsx
function withPermission(Component) {
  return function Protected(props) {
    const user = useAuthUser();

    if (!user.canView) return <AccessDenied />;
    return <Component {...props} />;
  };
}
```

Important for reading older codebases.

## Headless Hook

```jsx
function useDisclosure(initial = false) {
  const [open, setOpen] = useState(initial);

  return {
    open,
    show: () => setOpen(true),
    hide: () => setOpen(false),
    toggle: () => setOpen(value => !value),
  };
}
```

Separates behavior from styling.

---

# 64. API Layer Architecture

Avoid raw endpoints in dozens of components.

```text
features/invoices/
├── invoice.api.ts
├── invoice.types.ts
├── useInvoices.ts
└── components/
```

Example API function:

```js
export async function getInvoices() {
  const response = await fetch(`${API_BASE_URL}/invoices`);

  if (!response.ok) {
    throw new Error('Failed to load invoices');
  }

  return response.json();
}
```

A larger API client may centralize:

- base URL,
- authentication headers,
- JSON handling,
- timeouts,
- error normalization,
- correlation/request IDs,
- retry policy.

---

# 65. Environment Variables

Vite client variables commonly use the `VITE_` prefix.

```env
VITE_API_BASE_URL=https://api.example.com
```

```js
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

Critical rule:

> Browser environment variables are not secrets.

Never ship these in frontend bundles:

- database password,
- private API secret,
- signing key,
- server credential.

Users can inspect browser-delivered code and network traffic.

---

# 66. Error Handling

Think in layers.

Field-level:

```text
Email is required
```

Page request:

```text
Could not load invoices
[Retry]
```

Authorization:

```text
You do not have permission
```

Unexpected render error:

```text
Error boundary
```

Normalize API failures when possible:

```js
class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}
```

Do not expose raw server stack traces to users.

---

# 67. Security

React escapes normal text interpolation, but application security is much broader.

## Dangerous HTML

```jsx
<div
  dangerouslySetInnerHTML={{
    __html: htmlFromUser,
  }}
/>
```

Use only when required and sanitize untrusted HTML with an appropriate robust sanitizer.

## Authorization

This is not security:

```jsx
{isAdmin && <DeleteButton />}
```

It only controls UI. The backend must enforce permission.

## Client validation

Improves UX but never replaces server validation.

## Secrets

Never embed backend secrets in frontend code.

## Authentication risks

Understand architecture-specific risks such as:

- XSS,
- CSRF,
- token theft,
- session misuse.

## Dependencies

Keep React, server-rendering packages, frameworks, and dependencies patched. Server-capable React packages have had security advisories, so version maintenance is a real production responsibility.

---

# 68. SSR, Hydration, and Streaming

## CSR

```text
Browser downloads JS
↓
React runs
↓
UI appears
```

## SSR

```text
Request
↓
Server generates HTML
↓
Browser displays HTML
↓
React hydrates interactivity
```

Hydration:

```jsx
hydrateRoot(
  document.getElementById('root'),
  <App />
);
```

## Streaming

```text
Server starts sending HTML
↓
Ready sections arrive
↓
Other sections arrive later
```

Suspense boundaries can participate in streaming server-rendering systems.

---

# 69. React Server Components

Server Components run in a server/build environment instead of becoming ordinary client-side component JavaScript.

Potential benefits:

- server-side data access,
- reduced client JavaScript,
- server-only dependencies,
- server/client UI composition.

They require framework/bundler integration. A normal client Vite SPA does not automatically become a complete Server Components application.

RSC is different from traditional SSR.

Simplified:

```text
SSR
→ generate initial HTML on server
→ client components may hydrate afterward

Server Components
→ some components fundamentally execute server-side
→ their implementation is not shipped as ordinary interactive client component code
```

Frameworks supporting RSC may use boundaries such as:

```js
'use client';
```

Client components are required for browser interaction, state, event handlers, and browser APIs.

---

# 70. SEO

Public content websites often benefit from:

- server rendering,
- static generation,
- metadata support,
- fast initial HTML,
- crawlable content.

SEO also includes:

- semantic HTML,
- title,
- meta description,
- canonical URL,
- structured data,
- performance,
- accessible links,
- content quality.

Internal enterprise applications may not need SEO at all. Architecture should follow product requirements.

---

# 71. Production Build and Deployment

Vite build:

```bash
npm run build
```

Production concerns:

- correct environment configuration,
- HTTPS,
- caching,
- compression,
- security headers,
- route fallback,
- monitoring,
- error reporting,
- source-map strategy,
- CDN behavior.

## SPA route fallback

If the user directly opens:

```text
https://app.example.com/invoices/123
```

the web server usually needs to return your SPA entry HTML rather than a plain 404 so the client router can handle the URL.

Implementation differs for IIS, Apache, Nginx, cloud platforms, and frameworks.

---

# 72. Common Mistakes

## Mutating state

Wrong:

```js
items.push(item);
setItems(items);
```

Correct:

```js
setItems([...items, item]);
```

## Derived state in Effect

Wrong:

```jsx
useEffect(() => {
  setTotal(calculateTotal(items));
}, [items]);
```

Better:

```jsx
const total = calculateTotal(items);
```

## Missing key

```jsx
items.map(item => <Row key={item.id} item={item} />)
```

## Calling event handler during render

Wrong:

```jsx
<button onClick={save()}>
```

Correct:

```jsx
<button onClick={save}>
```

## Infinite Effect loop

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

## Too much state

If `fullName` comes from `firstName` + `lastName`, derive it.

## One giant component

Split by responsibility.

## Putting everything in Context

Context is useful, but not every local field belongs there.

## Premature memoization

Use profiler evidence.

## Missing async states

Think:

```text
loading
error
empty
success
permission denied
retrying
submitting
```

## Frontend-only authorization

Backend must enforce access.

---

# 73. Debugging

Use React DevTools for:

- component tree,
- props,
- state,
- Context,
- profiling.

Use browser DevTools for:

- Console,
- Network,
- Sources,
- Performance,
- Storage,
- Accessibility.

Debug wrong data in this order:

```text
1. Is API response correct?
2. Is data transformation correct?
3. Are props correct?
4. Is state correct?
5. Is conditional rendering correct?
6. Are keys correct?
7. Is an Effect overwriting state?
8. Is stale async logic involved?
```

Network checks:

```text
URL
method
status
payload
response
headers
CORS
authentication
timing
```

If behavior happens twice in development with Strict Mode, inspect impurity/cleanup before blaming React.

---

# 74. Legacy React

You may maintain class components.

```jsx
class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <button
        onClick={() =>
          this.setState({ count: this.state.count + 1 })
        }
      >
        {this.state.count}
      </button>
    );
  }
}
```

Important lifecycle methods:

```text
componentDidMount
componentDidUpdate
componentWillUnmount
shouldComponentUpdate
getDerivedStateFromProps
componentDidCatch
```

Old root API:

```js
ReactDOM.render(<App />, root);
```

Modern client root:

```js
createRoot(root).render(<App />);
```

Also expect legacy patterns such as:

- HOCs,
- render props,
- older Context APIs,
- Create React App,
- manually heavy memoization.

---

# 75. Interview Questions

## Props vs state

Props:

```text
inputs from parent
read-only to child
```

State:

```text
changing data owned by a component/reducer
state update can trigger rendering
```

## Why keys?

They provide stable identity for list items across renders.

## `useEffect`?

Synchronizes a component with an external system.

## `useRef`?

Stores a mutable value/DOM reference without causing a render when `.current` changes.

## `useMemo` vs `useCallback`

```text
useMemo → cache a computed value
useCallback → cache a function definition
```

## Context?

Makes shared values available deeper in a tree without manually passing every intermediate prop.

## `useReducer`?

Centralizes state transitions as `state + action → nextState`.

## Controlled input?

React state controls the input value.

## Reconciliation?

React matches the newly rendered tree against the previous one and determines what needs to be committed.

## Does render mean DOM changed?

No. Rendering calculates UI. Commit updates the host environment only where required.

## Lifting state?

Move state to the nearest common parent when multiple children need it.

## Derived state?

A value computed from existing props/state rather than stored independently.

## Why avoid index keys?

Changing list order can associate existing component state with the wrong logical item.

---

# 76. Real-World Architecture Scenarios

## Scenario A — Invoice management

```text
InvoicePage
├── InvoiceToolbar
│   ├── Search
│   ├── StatusFilter
│   └── DateFilter
├── InvoiceSummary
├── InvoiceTable
└── InvoiceDetailsDrawer
    ├── VendorInfo
    ├── Header
    ├── LineItems
    ├── TaxSummary
    ├── ApprovalHistory
    └── WorkflowActions
```

Suggested state ownership:

```text
URL:
  page, search, status, date range

Server-state layer:
  invoice list, details, approval history

Page:
  selected invoice ID

Drawer:
  active tab

Form:
  draft editable fields
```

Do not put every concern in one giant state object unless it genuinely represents one transactional state machine.

### Derived amount

```js
const total =
  Number(form.basicAmount || 0) +
  Number(form.taxAmount || 0);
```

Do not store `total` independently unless business rules require independent identity/editability.

---

## Scenario B — Search

Requirements:

```text
Input must feel instant
API must not fire too often
Old requests must not overwrite new results
Results rendering is expensive
```

Possible architecture:

```text
input state
↓
debounced query
↓
request with cancellation
↓
server cache
↓
deferred/transition rendering if needed
```

These solve different problems:

```text
Debounce
→ how often operation starts

AbortController
→ cancel obsolete request

Cache
→ reuse server result

useDeferredValue
→ defer lower-priority consumption/rendering

useTransition
→ mark selected state update as non-urgent
```

---

## Scenario C — Approval form

State:

```js
const [form, setForm] = useState({
  poNumber: '',
  vendorCode: '',
  invoiceNumber: '',
  invoiceDate: '',
  basicAmount: '',
  taxAmount: '',
  comments: '',
  action: '',
});
```

Validation:

```js
function validate(form) {
  const errors = {};

  if (!form.vendorCode.trim()) {
    errors.vendorCode = 'Vendor code is required';
  }

  if (!form.invoiceNumber.trim()) {
    errors.invoiceNumber = 'Invoice number is required';
  }

  if (Number(form.basicAmount) < 0) {
    errors.basicAmount = 'Amount cannot be negative';
  }

  return errors;
}
```

Submission status:

```js
const [status, setStatus] = useState('idle');
```

Prefer:

```text
idle
submitting
success
error
```

rather than many booleans that can become contradictory.

---

## Scenario D — Complex async status

Bad:

```js
const [isIdle, setIsIdle] = useState(true);
const [isLoading, setIsLoading] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);
```

Impossible state can occur:

```text
isLoading = true
isSuccess = true
isError = true
```

Better:

```js
const [status, setStatus] = useState('idle');
```

Or reducer:

```js
const [state, dispatch] = useReducer(reducer, {
  status: 'idle',
  data: null,
  error: null,
});
```

---

# 77. Practice Projects

## Beginner

### Counter

Learn:

```text
component
state
events
```

Features:

```text
increase
decrease
reset
```

### Todo application

Learn:

```text
arrays in state
forms
keys
map
filter
edit/delete
```

### Calculator

Learn:

```text
state modeling
events
derived values
```

## Intermediate

### Employee directory

```text
API fetch
search
filter
pagination
routing
details page
loading/error/empty
```

### Expense tracker

```text
forms
categories
totals
filters
persistence
charts
```

### Invoice frontend

```text
upload
invoice list
status filters
details
approval workflow
comments
permissions
JSON preview
API integration
```

## Advanced

### Enterprise workflow app

```text
authentication
role/permission checks
route protection
API layer
server-state cache
complex forms
file uploads
audit history
error boundaries
lazy routes
tests
monitoring
accessibility
```

### E-commerce

```text
catalog
search
filters
cart
checkout
optimistic UI
orders
code splitting
server rendering/framework
```

### Analytics dashboard

```text
filters
date ranges
charts
large tables
URL state
caching
export
permissions
performance
```

---

# 78. Learning Roadmap

## Phase 1 — JavaScript

```text
variables
functions
objects
arrays
destructuring
spread
map/filter/reduce
modules
promises
async/await
DOM basics
```

## Phase 2 — React fundamentals

```text
JSX
components
props
children
conditions
lists
events
useState
forms
```

Build a Todo app.

## Phase 3 — State thinking

```text
lifting state
single source of truth
derived state
immutability
state identity
keys
```

Build an expense tracker.

## Phase 4 — Effects and refs

```text
useEffect
cleanup
dependencies
avoiding unnecessary Effects
useEffectEvent
useRef
DOM refs
```

Build an API search dashboard.

## Phase 5 — Reusable logic

```text
custom Hooks
Context
useReducer
reducer + Context
```

Build an admin panel.

## Phase 6 — Routing and APIs

```text
routes
params
query params
protected routes
API layer
CRUD
race conditions
async states
```

Build employee management.

## Phase 7 — TypeScript

Convert a JavaScript project to TypeScript.

## Phase 8 — Testing

Learn component/integration and end-to-end testing.

## Phase 9 — Performance

```text
Profiler
state placement
memoization
lazy loading
Suspense
transitions
deferred values
virtualization
React Compiler
```

## Phase 10 — Production architecture

```text
feature organization
auth
permissions
security
observability
deployment
SSR
RSC
server/client boundaries
```

---

# 79. Cheat Sheet

Component:

```jsx
function UserCard() {
  return <div>User</div>;
}
```

Props:

```jsx
function UserCard({ name }) {
  return <div>{name}</div>;
}
```

State:

```jsx
const [count, setCount] = useState(0);
```

Updater:

```jsx
setCount(c => c + 1);
```

Conditional:

```jsx
{loading ? <Spinner /> : <Data />}
```

List:

```jsx
items.map(item => (
  <Row key={item.id} item={item} />
))
```

Effect:

```jsx
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);
```

Ref:

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
```

Memoized value:

```jsx
const total = useMemo(() => calculateTotal(items), [items]);
```

Callback:

```jsx
const handleSave = useCallback(() => save(data), [data]);
```

Context:

```jsx
const value = useContext(MyContext);
```

Reducer:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Transition:

```jsx
const [isPending, startTransition] = useTransition();
```

Deferred:

```jsx
const deferredQuery = useDeferredValue(query);
```

Lazy:

```jsx
const Page = lazy(() => import('./Page'));
```

Suspense:

```jsx
<Suspense fallback={<Spinner />}>
  <Page />
</Suspense>
```

---

# 80. Glossary

**Component** — reusable unit of React UI.

**JSX** — markup-like syntax used to describe UI.

**Props** — inputs passed to a component.

**State** — changing data remembered by a component.

**Hook** — React API used from components/custom Hooks for state, refs, context, effects, transitions, and other capabilities.

**Render** — React calls a component to calculate UI.

**Commit** — React applies required changes to the host environment such as DOM.

**Reconciliation** — React matches the next UI tree with the previous one.

**Effect** — synchronization with an external system.

**Ref** — mutable reference that persists between renders without itself triggering render.

**Context** — way to make shared values available deeper in the component tree.

**Reducer** — function that calculates next state from current state + action.

**Hydration** — attaching React behavior to server-rendered HTML.

**CSR** — Client-Side Rendering.

**SSR** — Server-Side Rendering.

**RSC** — React Server Components.

**Suspense** — fallback mechanism while supported UI is waiting.

**Transition** — non-urgent state update.

**Memoization** — reuse of prior calculation/function/component result when applicable.

**Controlled input** — React state owns current form value.

**Uncontrolled input** — DOM primarily owns current form value.

**Prop drilling** — forwarding props through intermediate components just to reach deeper descendants.

---

# 81. Mastery Checklist

## Fundamentals

- [ ] I can explain React's mental model.
- [ ] I understand JSX.
- [ ] I can design components.
- [ ] I understand props and `children`.
- [ ] I can render conditions and lists.
- [ ] I understand stable keys.
- [ ] I can handle events.
- [ ] I can manage state with `useState`.

## State

- [ ] I understand state snapshots.
- [ ] I use updater functions when next state depends on previous state.
- [ ] I update objects/arrays immutably.
- [ ] I understand derived state.
- [ ] I can lift state.
- [ ] I understand single source of truth.
- [ ] I understand state reset with identity/keys.

## Effects and refs

- [ ] I know when an Effect is needed.
- [ ] I know when an Effect is unnecessary.
- [ ] I understand dependencies and cleanup.
- [ ] I can prevent stale async results.
- [ ] I understand `useEffectEvent`.
- [ ] I understand refs and DOM refs.
- [ ] I know when `useLayoutEffect` is appropriate.

## Reusable logic

- [ ] I can write custom Hooks.
- [ ] I understand Context.
- [ ] I understand `useReducer`.
- [ ] I can combine Context + reducer.

## Advanced React

- [ ] I understand `memo`, `useMemo`, and `useCallback`.
- [ ] I understand React Compiler conceptually.
- [ ] I understand transitions and deferred values.
- [ ] I understand Suspense and lazy loading.
- [ ] I understand Action-related APIs.
- [ ] I understand portals and Error Boundaries.
- [ ] I understand the purpose of `Activity`.

## Production

- [ ] I can structure an application by feature.
- [ ] I can design an API layer.
- [ ] I understand routing.
- [ ] I understand authentication vs authorization.
- [ ] I distinguish client state from server state.
- [ ] I handle loading/error/empty/success states.
- [ ] I understand accessibility basics.
- [ ] I can use React with TypeScript.
- [ ] I test user-visible behavior.
- [ ] I profile before optimizing.
- [ ] I understand frontend security limitations.
- [ ] I understand CSR, SSR, hydration, and Server Components.
- [ ] I can build and deploy a production SPA.

---

# 82. Official References

React and its ecosystem evolve. For version-sensitive behavior, use official documentation as the source of truth.

## React

- React home: https://react.dev/
- Learn React: https://react.dev/learn
- React API reference: https://react.dev/reference/react
- Built-in Hooks: https://react.dev/reference/react/hooks
- Rules of Hooks: https://react.dev/reference/rules/rules-of-hooks
- React Blog: https://react.dev/blog
- React 19.2: https://react.dev/blog/2025/10/01/react-19-2
- React Compiler: https://react.dev/learn/react-compiler
- Server Components: https://react.dev/reference/rsc/server-components

## Vite

- https://vite.dev/
- https://vite.dev/guide/
- https://vite.dev/guide/build
- https://vite.dev/guide/static-deploy
- https://vite.dev/guide/ssr

## React Router

- https://reactrouter.com/

---

# Final Advice

A beginner often asks:

```text
Which Hook should I use?
```

A strong React developer asks:

```text
What is the source of truth?
Who should own this state?
Can this value be derived?
Is the operation caused by an event?
Am I synchronizing with an external system?
Does this value affect rendering?
Does the state need to be shared?
Is server state being treated correctly?
Is there an actual performance problem?
Should this concern live in React at all?
```

React stops feeling like a collection of Hooks when you can correctly decide:

```text
what should be a component
what should be state
what should be derived
what belongs in a ref
what belongs in an Effect
what belongs in an event handler
what belongs in Context
what belongs in a reducer
what belongs in a server-state/cache layer
what belongs on the server
```

That mental model is the real foundation of React mastery.

---

**End of React Master Learning Handbook**

---

# Appendix A — Rules of Hooks and Component Purity

These rules are fundamental and should be treated as core React concepts.

## Rule 1: Call Hooks at the top level

Good:

```jsx
function Profile() {
  const [name, setName] = useState('');
  const user = useContext(UserContext);

  return <div>{name}</div>;
}
```

Bad:

```jsx
function Profile({ loggedIn }) {
  if (loggedIn) {
    const [name, setName] = useState(''); // Wrong
  }

  return null;
}
```

Do not normally call Hooks inside:

```text
if statements
loops
nested functions
event handlers
try/catch blocks
ordinary JavaScript functions
```

React relies on predictable Hook call structure.

## Rule 2: Call Hooks only from React functions

Call Hooks from:

```text
React components
custom Hooks
```

Do not call them from arbitrary utility functions.

Wrong:

```js
function calculateTotal() {
  const [value] = useState(0);
}
```

## Component purity

A component should behave like a pure calculation during rendering.

Given the same props, state, and Context, rendering should not unexpectedly mutate external data.

Bad:

```jsx
let totalRenders = 0;

function BadComponent() {
  totalRenders++; // external mutation during render
  return <p>{totalRenders}</p>;
}
```

Bad:

```jsx
function ProductList({ products }) {
  products.sort(); // mutates prop data
  return ...;
}
```

Better:

```jsx
function ProductList({ products }) {
  const sorted = [...products].sort();
  return ...;
}
```

Rendering may happen more than once. Never make correctness depend on a component rendering exactly one time.

---

# Appendix B — Event Propagation

React events participate in propagation through the React tree.

Example:

```jsx
function Toolbar() {
  return (
    <div onClick={() => console.log('toolbar clicked')}>
      <button onClick={() => console.log('button clicked')}>
        Save
      </button>
    </div>
  );
}
```

Clicking the button may also propagate to the parent handler.

Stop propagation when intentionally required:

```jsx
function handleClick(event) {
  event.stopPropagation();
  save();
}
```

Prevent browser default separately:

```jsx
function handleSubmit(event) {
  event.preventDefault();
}
```

These solve different problems:

```text
stopPropagation()
→ stop event propagation

preventDefault()
→ prevent browser's default action
```

Avoid stopping propagation globally without a real reason. It can make component behavior difficult to understand.

---

# Appendix C — Special Props: `key` and `ref`

`key` and `ref` are special React concepts and should not be treated exactly like normal business props.

If a child needs the same ID used as a key, pass it separately:

```jsx
<UserRow
  key={user.id}
  userId={user.id}
  user={user}
/>
```

Do not assume the component receives `key` as a normal `props.key` value.

Similarly, refs participate in React's ref system rather than being ordinary application data.

---

# Appendix D — State Update Queue Mental Model

Consider:

```jsx
setNumber(number + 5);
setNumber(n => n + 1);
```

Think of React as queueing state updates for the next render.

A replacement-style update based on the current render's snapshot and an updater function can interact differently than two plain snapshot calculations.

The safest rule is:

> If the next value depends on the previous value, use the updater-function form.

Example:

```jsx
setItems(items => [...items, newItem]);
```

This is particularly useful when multiple updates may be batched.

---

# Appendix E — `startTransition` vs `useTransition`

`useTransition` gives both:

```text
startTransition function
pending state
```

```jsx
const [isPending, startTransition] = useTransition();
```

Standalone `startTransition` can be imported when you need to mark an update as a transition but do not need pending state from a Hook at that location.

Conceptually:

```jsx
import { startTransition } from 'react';

startTransition(() => {
  setTab(nextTab);
});
```

Use `useTransition` when the component also needs to render a pending indicator.

---

# Appendix F — Important React DOM APIs

## `createRoot`

Starts a client-rendered React root.

```jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## `hydrateRoot`

Hydrates HTML that was previously generated by a server.

```jsx
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(
  document.getElementById('root'),
  <App />
);
```

## `createPortal`

Renders React children in another DOM location while retaining their React-tree relationship.

## `flushSync`

`flushSync` can force React to flush updates synchronously for rare integration needs.

Conceptual example:

```jsx
flushSync(() => {
  setOpen(true);
});
```

Use sparingly. Forcing synchronous work can hurt performance and usually indicates integration with imperative browser/third-party behavior.

---

# Appendix G — Hydration Mismatches

A hydration mismatch occurs when server-rendered HTML does not match what the client expects during hydration.

Common causes:

```text
Using current time directly during render
Using Math.random() during render
Reading browser-only data on server render
Different locale/timezone formatting
Invalid HTML nesting
Data changed between server and client render
```

Risky example:

```jsx
function Clock() {
  return <p>{new Date().toISOString()}</p>;
}
```

Server and client may compute different values.

Good server-rendered React code must be deterministic for the initial hydrated output or intentionally use framework-supported client boundaries/strategies.

---

# Appendix H — Loading State Design

Do not think only in boolean `loading` terms.

A robust request state might be:

```ts
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

Why this is powerful:

Impossible combinations are removed.

Instead of:

```text
loading=true
error=true
data=old data
```

state is explicitly one supported mode.

This thinking is valuable for complex workflows even when you do not use TypeScript.

---

# Appendix I — Choosing Where State Lives

Use this decision guide.

## Input draft

```text
Does only this form need it?
→ form component
```

## Search/filter that should survive refresh/share

```text
Should URL represent it?
→ search params / route state in URL
```

Example:

```text
/invoices?status=pending&page=3&vendor=ABC
```

Benefits:

- shareable URL,
- browser back/forward works,
- refresh preserves view,
- easier deep linking.

## Logged-in user

```text
Usually auth/session provider or framework auth layer
```

## API invoice list

```text
Server-state/cache layer
```

## Modal open flag

```text
Usually local component state
```

## Theme

```text
Context/provider or UI preference system
```

Do not solve all of these with one global store simply because they are all called “state.”

---

# Appendix J — Component API Design Checklist

For reusable components, ask:

- Is the component name clear?
- Are required props actually required?
- Are boolean prop names positive and readable (`disabled`, `loading`, `open`)?
- Can variants be represented by one prop instead of many booleans?
- Does the component accept composition through `children` when useful?
- Is accessibility built in?
- Is state controlled externally when consumers need control?
- Is an uncontrolled/default mode useful?
- Are callbacks named as events (`onClose`, `onChange`, `onSelect`)?
- Does the component avoid leaking internal implementation details?

Example controlled reusable component:

```jsx
function Accordion({ open, onOpenChange, children }) {
  return ...;
}
```

Example uncontrolled/default mode concept:

```jsx
function Accordion({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return ...;
}
```

Reusable component libraries often support both patterns intentionally.

---

# Appendix K — React Code Review Checklist

- [ ] Components are reasonably focused.
- [ ] Hooks follow Rules of Hooks.
- [ ] Rendering is pure.
- [ ] State lives at the correct level.
- [ ] No duplicated derived state without reason.
- [ ] Objects/arrays are updated immutably.
- [ ] List keys are stable and meaningful.
- [ ] Effects synchronize external systems rather than replace ordinary calculations.
- [ ] Every subscription/timer/listener has correct cleanup.
- [ ] Effect dependencies are correct.
- [ ] Async requests handle stale results/cancellation where necessary.
- [ ] Forms have validation and accessible labels.
- [ ] Loading/error/empty/success states are handled.
- [ ] Permission UI is backed by server authorization.
- [ ] Secrets are not present in frontend code.
- [ ] Reusable components have clear APIs.
- [ ] Memoization has a reason.
- [ ] Heavy routes/components are split when useful.
- [ ] Important business flows are tested.
- [ ] Keyboard and focus behavior work.
- [ ] Production errors are observable/logged appropriately.

---

# Appendix L — What to Memorize vs Look Up

## Know from memory

```text
JSX
components
props
state
events
conditional rendering
list keys
immutability
lifting state
derived state
controlled inputs
useState purpose
useEffect purpose
cleanup
useRef purpose
Context
reducers
custom Hooks
loading/error states
```

## Understand conceptually, look up exact syntax when needed

```text
useTransition
useDeferredValue
useActionState
useOptimistic
useFormStatus
useSyncExternalStore
useImperativeHandle
SSR APIs
Server Components
router data APIs
framework directives
resource/preload APIs
new React minor-version APIs
```

Professional developers look things up. Mastery means knowing **what a tool solves, why it exists, when to use it, and when not to use it**.
