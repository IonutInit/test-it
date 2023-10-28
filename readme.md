Syntactic shortcut to basic jest tests. Made for personal use and for testing npm.

### Syntax

---

```typescript
const tests = [
    [
        [<input params>], <expected result>,
        {
            // overrides global function settings
            type?: string,
            description?: string,
        }
        ]
]
```

```typescript
testIt(
    <function>, tests
    {
        type?: string,
        description?: string,
    }
)
```

### Currently supported types

---

\*defaults to **equal\***

| Type        | Jest method                            |
| ----------- | -------------------------------------- |
| be          | toBe                                   |
| equal       | toEqual                                |
| error       | toThrowError                           |
| hasProperty | toHaveProperty                         |
| warn        | toHaveBeenCalledWith <console, "warn"> |
