Monorepo imports are resolved when using `--outFile`:
```ts
declare module "index" {
    import { B } from "../../b/index"; // <--- should be "b" ?
    export default function (): B;
}
```

See https://github.com/mischnic/parcel-issue-3891/blob/master/a/dist/index.d.ts (generated by `yarn build`).