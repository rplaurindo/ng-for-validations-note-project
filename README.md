# enJn.js JavaScript Engine Help API

## Installing

    $ npm i enjn.js --save

## Using with TypeScript

Set follow keys in ```tsconfig.json``` nested to ```"compilerOptions"```:

>- ```"module": es2015```
>- ```"allowJs": true``` (maybe this is no more necessary)

So import in a ```.ts``` file:

    import { nJn } from 'enJn.js';

## Contributing

To use in development mode, download the project and inside its folder run

    $ npm link

So copy the symlink from global ```node_modules``` folder to local ```node_modules```.
