# MetaCharacters

## match one character

- `/w` for _any numbers,letters,and underline_
- `/d` for any numbers
- `/s` for any blank characters

> Their upper case means **INVERSE**

> Blank Character includes:
> - /r
> - /n
> - /t
> - /f
> - /v
> - space

## Quantifier

### Certain

use `{m,n}`

- `{m,n}` m-n
- `{m,}` at least m
- `{m}` m times

### Uncertain

- `*` 0-n
- `+` 1-n
- `?` 0-1

## Range

### Alternative

use `|`, for example: `(http | ftp)`

### Include and Exclude

- Include: `[...]`,
  - letterRange `[a-z]`
- Exclude: `[^...]`

> eg: match vowels: `/[aeiou]/gm`
> exclude vowels: `/[^aeiou]/gm`


## Applications

### Match Url

There is an url that may use `http`,`https`, or `ftp`.

`/(https? | ftp):\/\//gm`