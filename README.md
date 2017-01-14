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

![tidbits_ss1](https://cloud.githubusercontent.com/assets/24887794/21952826/56e89092-d9db-11e6-9848-5d1be7e83193.png)
![tidbits_ss2](https://cloud.githubusercontent.com/assets/24887794/21952827/571683e4-d9db-11e6-8800-a985880daca4.png)
![tidbits_ss3](https://cloud.githubusercontent.com/assets/24887794/21952828/5721374e-d9db-11e6-95b9-aa86d716e960.png)



## Limitations

there are no known limitations at this time.
