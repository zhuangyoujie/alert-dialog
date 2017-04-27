# alert-dialog
alert弹框组件

## install

```html
<link rel="stylesheet" href="alert.css">
<script src="jquery.min.js"></script>
<script src="alert.js"></script>
```

## Examples

### loading 

```js
 var Alert = new Alert();
 Alert.alert({
    loading:true
 })
```
### alert

```js
 var Alert = new Alert();
 Alert.alert({
     title:"自定义标题",
     content: '自定义内容',
     confirmHandler: function () {
               alert("点击按钮回调函数")
     }
 })
```
### confirm

```js
 var Alert = new Alert();
 Alert.confirm({
     title:"自定义标题",
     content: '自定义内容',
     confirmHandler: function () {
               alert("点击确定按钮回调函数")
     },
     confirmHandler: function () {
               alert("点击取消按钮回调函数")
     }
 })
```
