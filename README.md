https://github.com/PriyaDev04/DailyReact.git
npm create vite@latest my-react-app
npx create-react-app my-react-app
npm run dev
-React is a JavaScript library used to build user interfaces (UI) — especially for single-page applications.
Jordan Walke,2011 used internally in fb later in 2013 open source officially released.
-It was created by Facebook (now Meta).
React helps you:
-Build reusable components
-Update UI without reloading page
-Manage data easily
-Build fast & scalable apps
1. component
-Reusable building blocks.
-A component is just a JavaScript function that returns UI.
2.JSX
-JSX = JavaScript + HTML
-You can write HTML inside JavaScript.
Rules:
-Must return one parent element
-Use {} to write JS inside JSX
3.Props (Passing Data)
-Props = Data passed from parent to child.
4.State(Dynamic Data)
-State makes your UI interactive.
5.Virtual DOM
-imaginary DOM- a light weight copy of actual DOM
-React doesn’t update the full page.
-It updates only the changed part using Virtual DOM →whenever changes happens it creates a new V DOM and am 
-Reconciliation is the process where React compares the previous Virtual DOM with the new Virtual DOM and updates only the changed elements in the real DOM.
-The diffing algorithm is the process React uses to compare the previous Virtual DOM with the new Virtual DOM efficiently and determine what needs to be updated in the real DOM.
Reconciliation-->Full process of updating UI
Diffing Algorithm--->The comparison logic used inside reconciliation
![alt text](image.png)
6.How React Works (Simple Flow)
-Component renders
-State changes
-React re-renders only updated part
-UI updates automatically

Benefits

1.Fast Performance (Virtual DOM)
* React uses a Virtual DOM to compare changes and update only necessary parts of the real DOM.
-Faster UI updates
-Better performance

2.Declarative UI 
* React is declarative,Declarative UI means you describe what the UI should look like, and React handles how to update it.You don’t manually change the DOM.
-Cleaner code
-Less manual DOM manipulation
-Fewer bugs
-Easy to understand
Example mindset:
“If state is true → show this.
If false → show that.”
You don’t control the DOM manually.

3.Component-Based Architecture
* React apps are built using reusable components.
Example:
Navbar
Card
Button

Benefits:
Reusable code
Easy maintenance
Scalable applications

4.Reusability
* Same component can be reused with different props.

5.One-Way Data Flow
* Data flows from parent ➝ child.
Makes debugging easier
Predictable behavior

6. Strong Ecosystem & Community
* Maintained by Meta Platforms.
Huge community support:
Libraries
Jobs
Tools
Documentation

7.Cross-Platform Development
* Using React Native, you can build mobile apps using React concepts.
-Web + Mobile skills = High deman

8.SEO Friendly (With SSR)
* With frameworks like Next.js, React supports Server-Side Rendering.

Better SEO
Faster initial load

------------------------------------------------------------------------------------------------
React is fast due to Virtual DOM, declarative which makes UI predictable and easy to manage, component-based for reusability, and supported by a strong ecosystem.
------------------------------------------------------------------------------------------------
React itself is CSR by default.
But React can support SSR using frameworks like Next.js.