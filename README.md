# Imageflex.JS #

Dynamically scale images based on element width.

## What does Imageflex.JS do? ##

Imageflex allows you to create a website without having to worry about how images are going to scale for different screen sizes. Imageflex allows for greater control of image widths by allowing users to define maximum and minium screen width that your image/DIV container should scale for.

## Using Imageflex.JS ##

Include the following in your header:

```
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="flowtype.js"></script>
```

Place the call to Imageflex at the bottom of your Body tag:

```
<script>

$(function(){
    $('#CSS_ID_for_image').imageflex({
	minimum: 480,
	maximum: 1920,
	minSize: 10,
	maxSize: 60,
	});
});
</script>
```

Your image/content/DIV will need to have a CSS ID or Class (eg. #CSS_ID_for_image).

Maximum and minimum allow you to define what screen widths your images will scale within.
minSize and maxSize allow you to define the max and min size of the image, measured by percentage.

## Brought to you by... ##

This is a forked version of Flowtype, brought to you by [Simple Focus](http://simplefocus.com). Follow Simple Focus on Twitter: [@simplefocus](http://twitter.com/simplefocus).

Imageflex and FlowType.JS are licensed under the MIT License. See the LICENSE.txt file for copy permission.
