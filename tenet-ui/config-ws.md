## Config WebStorm

## 配置WebStorm允许语句结尾不加分号
根据Vue推荐的标准，语句结尾不应该加分号，需要对IDE进行额外设置避免黄色警告,具体操作如下：<br/>
打开设置(File->Settings),在左上搜索框输入“Unterminated”,打开左侧菜单中的“Inspection”菜单，去掉“Unterminated statement”后面的复选框

## 配置prettier快捷键
打开设置(File->Settings),在左上角搜索框输入“prettier”。<br>
打开左侧菜单中的prettier,选择“prettier package”的路径为当前工程内的prettier安装路径(需要先安装依赖)<br>
打开左侧菜单中的Keymap,查看“reformat with prettier”的快捷键,我们可以使用这个组合键进行格式化。

## 文件依赖路径不识别时，需要配置webpack路径别名
https://stackoverflow.com/questions/34943631/path-aliases-for-imports-in-webstorm<br>
从@vue/cli@3版本开始，需要在Settings->Languages & Frameworks->JavaScript->Webpack->webpack configuration file中手动配置node_modules/@vue/cli-service/webpack.config.js的文件路径

## 配置字典
打开配置Settings->Editor->Proofreading->spelling，在dictionaries tab页的第一个list右侧，点+号，选择当前工程目录下的`ws-dict.dic`。<br>
该文件中每一行定义一个单词，目前收录了用到的单词。开发过程中遇到新的自定义单词，可以在该文件中另起一行添加该单词，并提交该文件到git。
