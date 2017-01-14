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

![tidbits_ss1](https://cloud.githubusercontent.com/assets/24887794/21952434/5c58c966-d9d1-11e6-82ae-6a75b74702d1.png)
![tidbits_ss2](https://cloud.githubusercontent.com/assets/24887794/21952435/5c5b70da-d9d1-11e6-9ad2-5419d354130d.png)
![tidbits_ss3](https://cloud.githubusercontent.com/assets/24887794/21952436/5c5ec262-d9d1-11e6-8852-d591038ec7ae.png)



## Limitations

there are no known limitations at this time.
