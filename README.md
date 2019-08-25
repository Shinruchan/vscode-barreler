# Barreler

One click generator for barrel (index export) files for JavaScript and TypeScript.

![Barreler in action](docs/barreler-promo.gif)

### Features

- Creates index files with all named exports from a file.
- Recursively creates index files for folder contents.

#### Generate index from single file

Structure:

```
|-- /services
|   |-- farm.service.ts
```

```ts
// farm.service.ts
export function feedAnimals() {}
export function cleanFarm() {}
```

It would generate:

```
|-- /services
|   |-- farm.service.ts
|   |-- index.ts
```

```ts
// index.ts
export { feedAnimals, cleanFarm } from "./farm.service";
```

#### Generate index from folder

Structure:

```
|-- /services
|   |-- farm.service.ts
```

```ts
// farm.service.ts
export function feedAnimals() {}
export function cleanFarm() {}
```

It would generate: 

```
|-- /services
|   |-- farm.service.ts
|   |-- index.ts
|-- index.ts
```

```ts
// ./services/index.ts
export { feedAnimals, cleanFarm } from "./farm.service";
```

```ts
// ./index.ts
export * from "./services";
```
