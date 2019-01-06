# topographic-zero (作業中)
日本の地形図記号をとりあえず手早く sprite にしてみる試みです。細かい考慮は後回しにし、とりあえず使える sprite を用意することを目指しています。

# 成果
![sprite.png](https://hfu.github.io/topographic-zero/sprite.png)

- [スプライト一覧](https://hfu.github.io/sprite-pop/?https://hfu.github.io/topographic-zero/sprite.json)
- [sprite.json](https://hfu.github.io/topographic-zero/sprite.json)

# 行っていること
1. Digital 北海道研究会がフリー素材として公開している地形図記号から選定した SVG データを名前をつけて保存
2. 上記地形図記号は 500px x 500px の領域でデザインされているようなので、resize.rb でサイズを強制的に小さくした上で、index.js で sprite に変換。

# 方針
1. 「ないよりはまし、とりあえず」のものを急いで作る。それにより、成果の品質をざっくりと上げると共に、本格的な作業を今後行うにあたってのノウハウを取得する。
2. 地図記号の中心をスプライトの center に合わせる、といった編集が今後必要となると思われるが、後回しにする。
3. 使い回しがしやすいように、ファイル名はあえて常識的に、しかも英語でつける。

# 例外
ただし、水田の記号だけはあまりに大きすぎたので、SVG-Edit を使って縮小をしている。

# See also
- [spritezero](https://github.com/mapbox/spritezero)
- [sprite-pop](https://github.com/hfu/sprite-pop)
- [地形図記号（Digital 北海道研究会）](https://dghok.com/download)
