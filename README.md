# react-multi-image-input

A react component library to ease the step of taking input of images in react.

## Screenshots

<div display="grid">
<img width="33%" src="https://user-images.githubusercontent.com/81609547/209852039-96f0d850-6b8d-4f82-8728-b8a32e329ed1.png"/>
<img width="33%" src="https://user-images.githubusercontent.com/81609547/209852129-580a0a78-f783-4332-b59c-d31a497f056d.png"/>
<img width="33%" src="https://user-images.githubusercontent.com/81609547/209852236-0141908c-3bd3-45a5-88c0-1ce1064e65ab.png"/>
<div>

## Installation

`npm install react-multi-image-input`

## Usage

```js
import { ImageInput } from "react-multi-image-input";
import { useState } from "react";

function App() => {
  const [images, setImages] = useState([]);
  return (
    <ImageInput
      width={700}
      height={400}
      images={images}
      setImages={setImage}
      columns={2}
      isCaption={true}
      maxImg={5}
    />
  );
}
export default App;
```

## Development

```
npm install
npm start
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>(required)</td>
          <td>Specifies the width of component in px</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Number</td>
          <td>(required)</td>
          <td>Specifies the height of component in px</td>
        </tr>
        <tr>
          <td>images</td>
          <td></td>
          <td>(required)</td>
          <td>Stores the input images in json format</td>
        </tr>
        <tr>
          <td>setImages</td>
          <td></td>
          <td>(required)</td>
          <td>Set function of useState hooks</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>Number</td>
          <td>1</td>
          <td>Specifies the number of images in single row</td>
        </tr>
        <tr>
          <td>isCaption</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Specifies weather the caption is required or not</td>
        </tr>
         <tr>
          <td>maxImg</td>
          <td>Number</td>
          <td>1</td>
          <td>Specifies the maximum number of images that the input can handle</td>
        </tr>
    </tbody>
</table>

## Output format

### - With caption:

```json
[
  { "file": "(file in blob format)", "caption": "..." },
  { "file": "(file in blob format)", "caption": "..." }
]
```

### - Without caption:

```json
[{ "file": "(file in blob format)" }, { "file": "(file in blob format)" }]
```

## Dependencies:

### peerDependencies

`
{
    "react": "^18.2.0"
 }`

## License

react-multi-image-input is released under the MIT license.
