## Running eslint

```
$ npm run eslint

> no-cycle@1.0.0 eslint
> eslint --ext .tsx .

/Users/geraintwhite/repos/oxc-no-cycle/js/Component.tsx
  1:1  error  Dependency cycle via ./isFeatureEnabled:1  import/no-cycle

/Users/geraintwhite/repos/oxc-no-cycle/js/LoadingSpinner.tsx
  1:1  error  Dependency cycle via ~/Component:1  import/no-cycle

✖ 2 problems (2 errors, 0 warnings)
```


## Running oxlint

```
$ npm run oxlint .

> no-cycle@1.0.0 oxlint
> oxlint --import-plugin -D no-cycle -c .eslintrc.json --tsconfig tsconfig.json .

Finished in 8ms on 3 files with 1 rules using 10 threads.
Found 0 warnings and 0 errors.
```


## Running oxlint inside the js folder

```
$ npm run oxlint js

> no-cycle@1.0.0 oxlint
> oxlint --import-plugin -D no-cycle -c .eslintrc.json --tsconfig tsconfig.json js


  ⚠ eslint-plugin-import(no-cycle): Dependency cycle detected
   ╭─[js/isFeatureEnabled.ts:1:27]
 1 │ import { Component } from '~/Component'
   ·                           ─────────────
 2 │
   ╰────
  help: These paths form a cycle:
        -> ~/Component - js/Component.tsx
        -> ~/LoadingSpinner - js/LoadingSpinner.tsx
        -> ./isFeatureEnabled - js/isFeatureEnabled.ts

  ⚠ eslint-plugin-import(no-cycle): Dependency cycle detected
   ╭─[js/LoadingSpinner.tsx:1:34]
 1 │ import { isFeatureEnabled } from './isFeatureEnabled'
   ·                                  ────────────────────
 2 │
   ╰────
  help: These paths form a cycle:
        -> ./isFeatureEnabled - js/isFeatureEnabled.ts
        -> ~/Component - js/Component.tsx
        -> ~/LoadingSpinner - js/LoadingSpinner.tsx

  ⚠ eslint-plugin-import(no-cycle): Dependency cycle detected
   ╭─[js/Component.tsx:1:32]
 1 │ import { LoadingSpinner } from '~/LoadingSpinner'
   ·                                ──────────────────
 2 │
   ╰────
  help: These paths form a cycle:
        -> ~/LoadingSpinner - js/LoadingSpinner.tsx
        -> ./isFeatureEnabled - js/isFeatureEnabled.ts
        -> ~/Component - js/Component.tsx

Finished in 4ms on 3 files with 1 rules using 10 threads.
Found 3 warnings and 0 errors.
```
