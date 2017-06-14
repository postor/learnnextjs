# Styles should go inside template strings

Styled jsx works as a babel plugin. It will parse all of the CSS and apply it in the build process. (With that our styles get applied without any overhead time)

It also supports having constraints inside styled-jsx. In the future, you will be able to use any dynamic variable inside styled-jsx. That is why CSS needs to go inside of a template string. (``{` `}``)