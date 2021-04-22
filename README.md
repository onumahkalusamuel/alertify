# svelte-alertify

An alert dialogue for svelte, to replace the traditional browser alert.

![alertify-for-svelte](https://user-images.githubusercontent.com/52772331/115642606-2e371500-a313-11eb-9dbf-c3a181600102.png)


This package was born out of the need to have something better for alerts. Traditionally, the browser's alert brings up a notice to `prevent further dialogues from this page` when at least two alerts come up on same page, which can be annoying (and distracting too) at times. So with this package, you get a smooth alert for svelte. There are things not yet implemented (such as changing the color for different types). Feel free to modify as needed, and contribute to the package.

## Installation

```bash
$ npm i svelte-alertify
```

or

```bash
$ yarn add svelte-alertify
```

## Usage

There are two exports: `alertify` and `Alertify`
In your root component (e.g. `App.svelte`) file, import `Alertify`. Then add it as markup, anywhere in the markup section.

```svelte
<script>
...
import { Alertify } from 'svelte-alertify'
...
</script>
...
<Alertify />
...
```

In any file you want to use it, simply import `alertify` and call it. 

```svelte
<script>
...
import { alertify } from 'svelte-alertify'
...
alertify('Hello world') // basic usage
alertify({ title: 'Error', message: 'An error occured while processing your request.' }) 
</script>
...
<Alertify />
```

### Parameters

You can pass in a string to be rendered with the default setup. Or you can pass in an object with the following keys: 

| Parameter | Description                                                                |
| :-------- | :------------------------------------------------------------------------- |
| `title`   | The title of the alert box. Default = `Alert`.                             |
| `message` | The alert body (required).                                                 |
| `type`    | The type of dialogue. Default=`Neutral`. (`neutral`,`positive`,`negative`) |

## Example

```svelte
<script>
import { alertify } from 'svelte-alertify';

alertify('Testing time');
alertify({ title: 'Test Mode', message: 'We are just testing this component', type: 'positive' })

alertify(
    screen.width < 992 ? 
    'Congratulations! You are on a mobile device' :
    'Sorry, images on a larger screen might be clearer than they appear'
)
// Note: alertify brings up a modal. So don't call more than one at a time.
</script>
```

## License

**[MIT](LICENSE)** Licensed

---

Got something interesting to share with me? Hit me up on [Twitter](https://twitter.com/@SKOnumah)
