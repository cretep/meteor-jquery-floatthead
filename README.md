jquery.floatThead v1.2.8
=================

Float the table header without special css. This plugin assumes nothing about your table markup and "just works" without losing your events or styles. Supports floating the header while scrolling within the window or while scrolling within a container with overflow. 

###[Demos and Docs](http://mkoryak.github.io/floatThead/)  

###[Source](https://github.com/mkoryak/floatThead/tree/v1.2.8)


Basic Meteor usage
==================

```
Template.hello.rendered = function() {
    $("table").floatThead()
    $("table").floatThead('reflow')
};
```

