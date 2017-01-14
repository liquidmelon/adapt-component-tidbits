# adapt-component-tidbits
a text component with links that display more information in a popup



this component was derived from adaptlearning's text component which can be found here: https://github.com/adaptlearning/adapt-contrib-text

this component uses adaptlearning's built-in core module Notify to handle the popup notifications: https://github.com/adaptlearning/adapt_framework/wiki/Core-modules#notify



the text must have at least one link that opens a popup. you must open all popups for the component to be completed.



##Text Links

create the text links like this:

```<span class="tidbit-trigger tidbit-color" data-bitnum="0">your text here</span>```

tidbit-trigger: for the click event

tidbit-color: uses the theme's primary color

data-bitnum: the index of the tidbit to be opened



##Screenshots

![tidbits_ss1](https://cloud.githubusercontent.com/assets/24887794/21952878/9f1f8716-d9dc-11e6-9617-0711f5fc330c.png)
![tidbits_ss2](https://cloud.githubusercontent.com/assets/24887794/21952879/9f22e7d0-d9dc-11e6-891d-64bde177864e.png)
![tidbits_ss3](https://cloud.githubusercontent.com/assets/24887794/21952877/9f1eee50-d9dc-11e6-90f7-ba1981c07a04.png)



## Limitations

there are no known limitations at this time.
