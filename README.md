## Micro Frontend setup

<pre>

</pre>

Architectural Design

<br />
<br />

## MicroFrontend Architectures

<br />

### Implementation Details :-

Micro frontend architectures help us build maintainable and scalable Micro services of UI build, so each service can be independently written in the choice of technology the Team wants.
It also help use to have better separation of concern between these scalable components.
Each component will act like an independent App and can be developed and released independently.

<br />
<br />

#### 1. UI project structure

```
ui-container-app
```

This is the main project
There are four other microservices app

```
ui-workstation-module
ui-bloom-module
ui-vuejs-module
ui-timeline-module
```

There is also sample component library

```
ui-components
```

No need to build this, as it's already been published to public npm registry
https://www.npmjs.com/package/@pratapdd/microfe-ui-components

<br />
<br />

## Setup Requirement:

Latest stable node v14.15.3
