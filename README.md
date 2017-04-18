# adapt-component-tidbits

**Tidbits** is a *presentation component* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework) that displays text with links that provide more information in a popup.

**Tidbits** is based on [adaptlearning's text component](https://github.com/adaptlearning/adapt-contrib-text) and uses the built-in core module [Notify](https://github.com/adaptlearning/adapt_framework/wiki/Core-modules#notify) to handle the popup notifications.



## Screenshots

![tidbits_ss1](https://cloud.githubusercontent.com/assets/24887794/21952878/9f1f8716-d9dc-11e6-9617-0711f5fc330c.png)
![tidbits_ss2](https://cloud.githubusercontent.com/assets/24887794/21952879/9f22e7d0-d9dc-11e6-891d-64bde177864e.png)
![tidbits_ss3](https://cloud.githubusercontent.com/assets/24887794/21952877/9f1eee50-d9dc-11e6-90f7-ba1981c07a04.png)



## Text Links

create the text links like this:

```<span class="tidbit-trigger tidbit-color" data-bitnum="0">your text here</span>```

tidbit-trigger: for the click event

tidbit-color: uses the theme's primary color

data-bitnum: the index of the tidbit to be opened



## Notes

all required tidbits must be viewed in order to complete the component.



## Limitations

not known at this time



----------------------------
**Version number:** 0.0.2.0<br>
**Framework versions:** ^2.0.0
